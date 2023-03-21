import * as vscode from "vscode";
import { format } from "@sqltools/formatter";

export function activate(context: vscode.ExtensionContext) {
 
  // Register a new command for formatting SQL
  vscode.commands.registerCommand("sql-embed-in-python.format-SQL", () => {
    // Get the active editor
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      // Get the document and selection ranges
      const document = editor.document;
      const selection = editor.selection;

      // Get the selected text
      let text = document.getText(selection);

        // Format the SQL using sql-formatter
        try {
          text = format(text, {
            language: "sql",
            indent: "      ",
            reservedWordCase: "upper",
            params: ["?", "{", "}"],
          });

          const lines = text.split("\n");
          const newLines: string[] = [];

          // get general indentation by seeing how far the intial line is indented
          const currentLineNumber = selection.start.line;
          const currentLine = document.lineAt(currentLineNumber);
          const currentIndentation =
            currentLine.firstNonWhitespaceCharacterIndex;

          lines.forEach((line: string) => {
            const regex = /^\s*--/;
            const isFirst = regex.test(line);

            //if line has a comment at the beginning, then skip to push to newLines
            if (isFirst) {
              newLines.push(line);
            } else if (line && line.match(/\bON\b(.*)/)) {
              const leadingSpaces: RegExpMatchArray | null = line.match(/^\s*/);
              const afterON: RegExpMatchArray | null = line.match(/\bON\b(.*)/);
              let space: string = leadingSpaces ? leadingSpaces[0] : "";
              let after: string = afterON ? afterON[1] : "";
              newLines.push(line.replace(/\bON\b(.*)/, "").replace("ON", ""));
              newLines.push(space + "ON" + after);
            } else {
              newLines.push(line);
            }
          });
          text = newLines.join("\n");

          text = text
            .split("\n")
            .map((line) => " ".repeat(currentIndentation) + line)
            .join("\n");

          // Replace the selected text with the formatted SQL
          editor.edit((editBuilder) => {
            editBuilder.replace(selection, text);
          });
        } catch (error) {
          vscode.window.showErrorMessage(
            "SQL couldn't be formatted. This is most likely because your selection contains invalid SQL (eg. contains .. )" +
              error
          );
        }

        // text = text.replace(/PLACEHOLDER_COLUMN/g, () => {
        //   return "?";
        // });

        // text = text.replace(/PLACEHOLDER_RIGHT_BRACE/g, () => {
        //   return "}";
        // })       // Add the mmmmmmation to each line in the formatted SQL
        // text = text
        //   .split("\n")
        //   .map((line) => " ".repeat(currentIndentation) + line)
        //   .join("\n");
      }
    }
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
