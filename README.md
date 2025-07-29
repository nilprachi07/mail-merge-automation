# HR Mail Merge Automation Tool

This Google Apps Script automates sending personalized job emails from a Google Sheet, with built-in email validation and delivery tracking.

## 💡 Features
- Reads data from Google Sheets (Name, Email, Role)
- Validates email addresses
- Sends emails using Gmail API
- Tracks status with 'SENT' and 'INVALID EMAIL' tags

## 📄 Sample Google Sheet Columns

| Name   | Email              | Role       | Status        |
|--------|--------------------|------------|----------------|
| John   | john@example.com   | Developer  | SENT           |
| Sheetal| invalid_email.com  | Designer   | INVALID EMAIL  |

## 📌 How to Use
1. Open your Google Sheet and go to Extensions > Apps Script.
2. Paste the contents of `Code.gs` into the Script Editor.
3. Save and authorize the script.
4. Run the `sendMails` function to start emailing!

## 🔐 Note
Make sure to enable Gmail access when prompted. Do not exceed daily limits of Google Apps Script.

## 👩‍💻 Developer
Prachi Gaikwad
