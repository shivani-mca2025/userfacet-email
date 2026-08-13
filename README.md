# userfacet-email

Setup instructions
1. clone the Repository
   git clone https://github.com/shivani-mca2025/userfacet-email 
  cd userfacet-email

2. Install dependencies
   yarn install

3. Run the development server
   yarn start

Architecture
Inbox - Display list of emails
Thread - shows full email content
Compose - form to send new emails
Mail Card - Reusable card for each mail
Mockmail.js - provides sample email data
styling - style.css


Assumptions
Emails are stored in mock data (mockMail.js) rather than a backend service
compose 'send' currently simulates sending alert

Features
Inbox grid with sender, subject, and attachment icon
thread view with full email body and back navigation
compose for  with to, subject, body fields and send button
search bar to filter emails by sender or subject
