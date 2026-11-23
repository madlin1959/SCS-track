// AI-assisted, directed by madlin
function checkstock() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetByName("DASHBOARD");

  // 1. Use getValues() (plural) to get a 2D array of the range
  const stockData = dashboard.getRange("A12:C15").getValues();

  // 2. Added the missing .filter() method
  const lowstockItems = stockData.filter(row => row[2] === "REORDER");

  // 3. Fixed capitalization: getSheetByName
  let reminders = ss.getSheetByName("REMINDERS");
  if (!reminders) {
    reminders = ss.insertSheet("REMINDERS");
  }

  // 4. Fixed capitalization: clearContents
  reminders.clearContents();

  // 5. Fixed capitalization (getRange, setValues), wrapped in a 2D array [[]],
  // and combined "CURRENT" & "STOCK" into 3 headers to match A1:C1
  reminders.getRange("A1:C1").setValues([
    ["ITEMS", "CURRENT STOCK", "STATUS"]
  ]);

  if (lowstockItems.length > 0) {
    // 6. Fixed capitalization: getRange and setValues
    reminders.getRange(2, 1, lowstockItems.length, 3).setValues(lowstockItems);
  }
}
