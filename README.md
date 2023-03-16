<i> Download VSIX <a href="https://github.com/jerryzhou196/sql-embed-in-python/releases/download/First/sql-in-python-highlighter-formatter-0.0.1.vsix"> here </a> and use Install from VSIX to install to add to VS Code</i> 
 
## Features

This extension was primarily built out of a very specific, niche scenario in my latest co-op. It provides two tools:

- Formatter for SQL queries embedded within Python Files

- Syntax Highlighting for SQL queries embedded within Python Files 

In addition, the config is set up in a very specific way according to my workplace. In the miraculous case that someone outside of my organization is in need of both of these features, they should config their specific SQL formats within the extension settings.

> NOTE: The formatter is specially designed to handle SQL queries with placeholder values (?), which typically cannot be formatted. 


## How To Use

Within `Python` files, anything you close with three quotes will be rendered as SQL syntax. 

To format these embedded SQL queries, you  need to select the text within your editor, and then open the command palette (`CMD` + `shift` + `P`) and run the Format Embedded SQL command. 


## Requirements

The SQL syntax highlighting should work right out of the box. 

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
