'use strict';

const checkForSpam = function(message) {
    const upperCaseMessage = message.toUpperCase();

    if (upperCaseMessage.includes('SPAM') || upperCaseMessage.includes('SALE')) {
        return(true);
    }
    return(false);
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true