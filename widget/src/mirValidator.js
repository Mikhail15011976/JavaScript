export function validateMirCardNumber(cardNumber) {
  
  cardNumber = cardNumber.replace(/\D/g, '');  
  
  if (cardNumber.length !== 16) {
    return false;  
  }  
  
  if (!/^2200/.test(cardNumber)) {
    return false;
  }
  
  return true;
}  

export function getMirCardType(cardNumber) {
  if (validateMirCardNumber(cardNumber)) {
    return 'Мир';
  }
  return 'Неизвестная карта';
}
  