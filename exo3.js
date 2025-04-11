// Email Pattern
/*
Write a pattern that matches e-mail addresses.

The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

ex johndoe01@gmail.com
john.doe01@licode.infos
8johndoe01@gmail.dev
john-8doe01@hotmail.co
johndoe01@icloud.com
*/
function validEmailPattern(email) {
  const emailRegex = /^[a-zA-Z0-9]!#\$%&\'\*\+-\/=\?\^_\`\{\|\}~@[]$/;
}

/*

📌 Valid Email Examples
Example	Valid?	Why
john.doe@example.com	✅	Standard format
user+mailbox@sub.domain.org	✅	Plus sign allowed
admin@mail-server.co.uk	✅	Hyphen in domain is OK
first.last@iana.org	✅	Dot in local part is OK
name@123.456.789.123	✅	IP-style domain is valid
nice_email@localhost	❌	Domain needs a dot (.)
username@.com	❌	Domain cannot start with a dot
.username@yahoo.com	❌	Local part cannot start with .
user@@gmail.com	❌	Only one @ is allowed
email@-example.com	❌	Domain can't start with -
*/
