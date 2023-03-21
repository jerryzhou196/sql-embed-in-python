import * as vscode from "vscode";
import { format } from "sql-formatter";

export function activate(context: vscode.ExtensionContext) {
  // Define formatting options
  const formatOptions = {
    keywordCasing: "upper",
    linesBetweenQueries: 2,
    whereOnNewLine: true,
    groupByOnNewLine: true,
    orderByOnNewLine: true,
    selectItemOnNewLine: true,
    joinTableOnNewLine: true,
  };
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

      text = text.replace(/\?/g, () => {
        return "PLACEHOLDER_COLUMN";
      });
      /\{/;

      text = text.replace(/\}/g, () => {
        return "PLACEHOLDER_RIGHT_BRACE";
      });

      text = text.replace(/\{/g, () => {
        return "PLACEHOLDER_LEFT_BRACE";
      });

      console.log(text);
      // Format the SQL using sql-formatter
      vscode.window
        .showQuickPick(
          [
            "mysql",
            "sql",
            "bigquery",
            "db2",
            "hive",
            "mariadb",
            "n1ql",
            "plsql",
            "postgresql",
            "redshift",
            "singlestoredb",
            "snowflake",
            "spark",
            "sqlite",
            "transactsql",
            "trino",
          ],
          {
            placeHolder: "Select SQL dialect",
          }
        )
        .then((selectedOption) => {
          let formattedSql = format(
            text.replace(/^(\'\'\'|\"\"\")|(\'\'\'|\"\"\")$/gm, ""),
            { language: selectedOption, ...formatOptions }
          );
          formattedSql = formattedSql.replace(/PLACEHOLDER_COLUMN/g, () => {
            return "?";
          });
          formattedSql = formattedSql.replace(
            /PLACEHOLDER_RIGHT_BRACE/g,
            () => {
              return "{";
            }
          );
          formattedSql = formattedSql.replace(/PLACEHOLDER_LEFT_BRACE/g, () => {
            return "}";
          });
          console.log(formattedSql);
          // Replace the selected text with the formatted SQL
          editor.edit((editBuilder) => {
            editBuilder.replace(selection, formattedSql);
          });

          // Show a message indicating that the SQL has been formatted
          vscode.window.showInformationMessage(
            "Formatted SQL in Python string literal"
          );
          // } else {
          // Show an error message if the selected text is not a Python string literal containing SQL
          //   vscode.window.showErrorMessage('Selected text is not a Python string literal containing SQL');
          // }
        });
    } else {
      // Show an error message if no editor is active
      vscode.window.showErrorMessage("No active editor");
    }
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
