export function validateCardNumber(cardNumber) {
  
  cardNumber = cardNumber.replace(/\D/g, '');  
  
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }
  
  const digits = cardNumber.split('').reverse().map(Number);
  const sum = digits.reduce((acc, digit, index) => {
    if (index % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
}  

export function getCardType(cardNumber) {
  const cardPatterns = {
    'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
    'MasterCard': /^5[1-5][0-9]{14}$/,
    'American Express': /^3[47][0-9]{13}$/,
    'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,    
  };
  
  for (const [type, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(cardNumber)) {
      return type;
    }
  }
  return 'Неизвестная карта';
}