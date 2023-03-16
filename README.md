## Features

This extension was primarily built out of a very specific, niche scenario in my latest co-op. It provides two tools:

- Formatter for SQL queries embedded within Python Files

- Syntax Highlighting for SQL queries embedded within Python Files

The formatter is specially designed to handle SQL queries with placeholder values (?), which typically cannot be formatted. In addition, the config is set up in a very specific way according to my workplace. As a result, one can and should config their specific SQL formats within the extension settings.

## Requirements

To be able to use the embedded SQL formatter feature, you will need to run the following command:

`npm install sql-formatter`

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

## Release Notes

### 1.0.0

1.0.0 - Intial Implementation
