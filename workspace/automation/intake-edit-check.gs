function onEdit(e) {
// AI-assisted, directed by madlin
  const sheet = e.range.getSheet();

  if (sheet.getName() !== "INTAKE") return;

  const row = e.range.getRow();
  const column = e.range.getColumn();

  if (row === 1 || column > 2) return;

  const item = sheet.getRange(row, 1).getValue();
  const quantity = sheet.getRange(row, 2).getValue();

  if (item === "" || quantity === "") return;

  const isValid = typeof quantity === "number" && quantity > 0;

  const dateCell = sheet.getRange(row, 3);

  if (dateCell.getValue() === "") {
    dateCell.setValue(new Date());
    dateCell.setNumberFormat("dd/MM/yyyy");
  }

  const checkCell = sheet.getRange(row, 4);

  if (isValid) {
    checkCell.setValue("OK");
  } else {
    checkCell.setValue("INVALID ENTRY");
  }
}
