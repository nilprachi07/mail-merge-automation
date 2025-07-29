function sendMails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const name = data[i][0];
    const email = data[i][1];
    const role = data[i][2];
    const status = data[i][3];

    if (!email || !email.includes("@") || email.includes("/") || email.includes(" ")) {
      sheet.getRange(i + 1, 4).setValue("INVALID EMAIL");
      continue;
    }

    if (status === "SENT") continue;

    const subject = `Job Opportunity: ${role}`;
    const body = `Hi ${name},\n\nWe have an opening for the role of ${role}. Please find the attached details.\n\nRegards,\nHR Team`;

    MailApp.sendEmail(email, subject, body);
    sheet.getRange(i + 1, 4).setValue("SENT");
  }
}
