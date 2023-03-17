## Features

This extension was primarily built out of a very specific, niche scenario in my latest co-op. It provides two tools:

- Formatter for SQL queries embedded within Python Files

- Syntax Highlighting for SQL queries embedded within Python Files

## How To Use

Within `Python` files, anything you close with three double quotes (`"""`) will be rendered as SQL syntax.

# This is mainly useful, because now SQL errors can be caught immediately:

o
`.execute("""` begins a SQL code block, and `"""` is what ends it - everything in between will be rendered as SQL instead of a raw Python string.

> NOTE: The formatter is specially designed to handle SQL queries with placeholder values ?, in addition to {}

To format these embedded SQL queries, you need to select the text within your editor, and then open the command palette (`CMD` + `shift` + `P`) and run the Format Embedded SQL command.

<!-- <i> Download VSIX <a href="https://github.com/jerryzhou196/sql-embed-in-python/releases/download/First/sql-in-python-highlighter-formatter-0.0.1.vsix"> here </a> and use Install from VSIX to install to add to VS Code</i> -->

## Requirements

Everything should work out of the box.

## Release Notes

1.0.0 - Intial Implementation
