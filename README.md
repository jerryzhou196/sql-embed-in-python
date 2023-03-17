## Features

This extension was primarily built out of a very specific, niche scenario in my latest co-op. It provides two tools:

- Formatter for SQL queries embedded within Python Files

- Syntax Highlighting for SQL queries embedded within Python Files

### Before
<img width="1140" alt="image" src="https://user-images.githubusercontent.com/46613983/225865088-ec3a9f2b-5097-424a-b947-fa5c565ba482.png">

### After
<img width="1140" alt="image" src="https://user-images.githubusercontent.com/46613983/225865146-2faab9d4-6840-437a-b57f-ac375ac85f3a.png">

### This is mainly useful, because now SQL errors can be caught immediately:

<img width="1123" alt="image" src="https://user-images.githubusercontent.com/46613983/225865999-467bcac5-f8e3-4622-b348-e0702d838cdd.png">

## How To Use

Within `Python` files, anything you close with three double quotes (`"""`) will be rendered as SQL syntax.

`.execute("""` begins a SQL code block, and `"""` is what ends it - everything in between will be rendered as SQL instead of a raw Python string.

> NOTE: The formatter is specially designed to handle SQL queries with placeholder values ?, in addition to {}

> NOTE: To format these embedded SQL queries, you need to select the text within your editor, and then open the command palette (`CMD` + `shift` + `P`) and run the Format Embedded SQL command.

<!-- <i> Download VSIX <a href="https://github.com/jerryzhou196/sql-embed-in-python/releases/download/First/sql-in-python-highlighter-formatter-0.0.1.vsix"> here </a> and use Install from VSIX to install to add to VS Code</i> -->

## Requirements

Everything should work out of the box.

## Release Notes

1.0.0 - Intial Implementation
