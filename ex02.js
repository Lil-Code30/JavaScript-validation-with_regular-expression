//Validate Credit Card
// Write a JavaScript program to check a credit card number.
// xxxx xxxx xxxx xxxx OR xxxxxxxxxxxxxxxx 16 digits OR xxxxx-xxxxx-xxxxx-xxxxx

function isValidCreditCard(str) {
  const regex = /^[0-9]{16}$/; // ex: 1245582365479256

  const test = regex.test(str);

  if (test) {
    const firstLetter = String(str).slice(0, 1);
    if (firstLetter === "4") {
      console.log("This is a valid Visa Card");
    } else {
      console.log(firstLetter);
      console.log("Please enter a valide visa credit card 1.");
    }
  } else {
    console.log("Please enter a valide visa credit card 2.");
  }
}

// isValidCreditCard(4125452178966);

/*
Here are some format of some well-known credit cards.

- American Express :- Starting with 34 or 37, length 15 digits.
- Visa :- Starting with 4, length 13 or 16 digits.
- MasterCard :- Starting with 51 through 55, length 16 digits.
- Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
- Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
- JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
*/

function creditCardValidation(cardNumber) {
  const AmericanExpressRegex = /^(34|37)[0-9]{13}$/;
  const visaRegex = /^(4[0-9]{12}(?:[0-9]{3})$)/;

  const mastarCardRegex = /^5[1-5][0-9]{14}$/; // 51, 52, 53, 54, 55

  // (6(?:011|5[0-9]{2})[0-9]{12})
  const discoverRegex1 = /^6011[0-9]{12}$/;
  const discoverRegex2 = /^5[0-9]{14}$/;

  const dinerClubRegex = /^((30[1-5]|36|38)([0-9]{11}?|[0-9]{12}?)){14}?$/;

  // ((?:2131|1800|35[0-9]{3})[0-9]{11}))
  const JCBregex1 = /^(2131||1800)[0-9]{11}$/;
  const JCBregex2 = /^35[0-9]{14}$/;

  const listOfCardRegex = [
    AmericanExpressRegex,
    mastarCardRegex,
    discoverRegex1,
    discoverRegex2,
    JCBregex1,
    JCBregex2,
  ];

  const isValid = listOfCardRegex.some(
    (regex) => regex.test(cardNumber) === true
  );

  if (isValid) {
    console.log("Your card is a valid credit card.");
  } else {
    console.log("Your card is not a valid credit card.");
  }
}

const card = 180012345678901;
creditCardValidation(card);

/* 

Sure! Here are **valid-format examples** (not real or usable credit cards) for each type, based on the starting digits and lengths you provided:

---

### 💳 **American Express**
- Starts with: 34 or 37  
- Length: 15 digits  
**Examples**:  
- `341234567890123`  
- `371234567890456`  

---

### 💳 **Visa**
- Starts with: 4  
- Length: 13 or 16 digits  
**Examples**:  
- `4123456789012` *(13 digits)*  
- `4123456789012345` *(16 digits)*  

---

### 💳 **MasterCard**
- Starts with: 51 through 55  
- Length: 16 digits  
**Examples**:  
- `5112345678901234`  
- `5212345678901234`  
- `5512345678901234`  

---

### 💳 **Discover**
- Starts with: 6011 (length 16) or 5 (length 15)  
**Examples**:  
- `6011123456789012` *(16 digits)*  
- `512345678901234` *(15 digits, starting with 5)*  

---

### 💳 **Diners Club**
- Starts with: 300–305, 36, or 38  
- Length: 14 digits  
**Examples**:  
- `30012345678901`  
- `30598765432109`  
- `36123456789012`  
- `38123456789012`  

---

### 💳 **JCB**
- Starts with:  
  - `2131` or `1800`, length 15  
  - `35`, length 16  
**Examples**:  
- `213112345678901`  
- `180012345678901`  
- `3512345678901234`  

---

Let me know if you'd like a script to generate random valid-looking cards for testing or dummy data (non-functional and not tied to real accounts).



(?:(4[0-9]{12}(?:[0-9]{3})?)
445123565996456451
*/
