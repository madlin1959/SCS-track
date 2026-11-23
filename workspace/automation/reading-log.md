# Reading log -- SCS3.5

Script: workspace/automation/intake-edit-check.gs
Label: AI-assisted, directed by madlin

| Line no. | The line, first words | In my own words | Which word |
|---|---|---|---|
| 1 | function onEdit(e) | Starts the function when a sheet edit happens. | trigger |
| 3 | const sheet | Gets the sheet where the edit happened. | variable |
| 5 | if (sheet.getName() | Stops if the edited sheet is not INTAKE. | condition |
| 7 | const row | Gets the edited row number. | variable |
| 8 | const column | Gets the edited column number. | variable |
| 10 | if (row === 1 | Stops for the header row or columns after B. | condition |
| 12 | const item | Gets the item name from column A. | variable |
| 13 | const quantity | Gets the quantity from column B. | variable |
| 15 | if (item === "" | Stops if the item or quantity is empty. | condition |
| 17 | const isValid | Checks that quantity is a positive number. | variable |
| 19 | const dateCell | Selects the date cell in column C. | variable |
| 21 | if (dateCell.getValue() | Checks whether the date cell is empty. | condition |
| 22 | dateCell.setValue | Enters today's date. | sequence |
| 23 | dateCell.setNumberFormat | Formats the date as day/month/year. | sequence |
| 26 | const checkCell | Selects the check cell in column D. | variable |
| 28 | if (isValid) | Checks whether the quantity is valid. | condition |
| 29 | checkCell.setValue("OK") | Writes OK for a valid quantity. | sequence |
| 30 | } else { | Chooses the alternative when the quantity is not valid. | condition |
| 31 | checkCell.setValue("INVALID ENTRY") | Writes INVALID ENTRY for an invalid quantity. | sequence |
| 33 | } | Ends the function. | sequence |
