import * as vscode from "vscode";
import { format } from "sql-formatter";

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
      const text = document.getText(selection);

      text.replace(/\?/g, () => {
        return "PLACEHOLDER_COLUMN";
      });

      // Check if the selected text is a Python string literal containing SQL
      // if (text.startsWith('\'\'\'') && text.endsWith('\'\'\'')) {
      // const sql = text.slice(3, -3); this is only used when the wrong thing is selected

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
          const formattedSql = format(
            text.replace(/^(\'\'\'|\"\"\")|(\'\'\'|\"\"\")$/gm, ""),
            { language: selectedOption }
          );
          formattedSql.replace(/PLACEHOLDER_COLUMN/g, () => {
            return "?";
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
