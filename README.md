## Features

This extension was primarily built out of a very specific, niche scenario in my latest co-op. It provides two tools:

- Formatter for SQL queries embedded within Python Files for SQL queries embedded within Python Files

- Syntax Highlighting 

### Formatter:
<p align = "center">
<img src="https://user-images.githubusercontent.com/46613983/226666835-c26b8937-3961-48de-9dee-70f8a779504b.gif"> 
</p>

### Syntax Highlighter Before:
<img width="1019" alt="image" src="https://user-images.githubusercontent.com/46613983/226464783-1c669915-5744-4f90-b54c-afaa3819bb6a.png">

### Syntax Highlighter After:
<img width="1019" alt="image" src="https://user-images.githubusercontent.com/46613983/226467742-4cc6bc52-6244-4b4d-bd94-8ff8a5dbe679.png">


#### The utilty of this comes with the fact that SQL errors can be caught immediately instead of run-time:
<br>
<img width="1123" alt="image" src="https://user-images.githubusercontent.com/46613983/225865999-467bcac5-f8e3-4622-b348-e0702d838cdd.png">

## How To Use

1. Within `Python` files, this extension uses a `TextMate` grammar selector that detects embedded SQL as follows:

   `.execute("""` begins a SQL code block, and `"""` is what ends it - everything in between will be rendered as SQL instead of a raw Python string.

2. There's also a built in selector-based formatter for Python embedded SQL, called `Format Embedded SQL in Python`

   > NOTE: The formatter is specially designed to handle SQL queries with placeholder values ?, in addition to {}

   > NOTE: To format these embedded SQL queries, you need to select the text within your editor, and then open the command palette (`CMD` + `shift` + `P`) and run the Format Embedded SQL command.

<!-- <i> Download VSIX <a href="https://github.com/jerryzhou196/sql-embed-in-python/releases/download/First/sql-in-python-highlighter-formatter-0.0.1.vsix"> here </a> and use Install from VSIX to install to add to VS Code</i> -->

## Requirements

Everything should work out of the box. Note that this extension will install the npm package `sql-formatter`

## Release Notes

1.0.0 - Intial Implementation
