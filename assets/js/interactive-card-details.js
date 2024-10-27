const confirmBtn = document.querySelector('.btnConfirm');
confirmBtn.addEventListener('click', handleConfirmBtn);

function handleConfirmBtn() {
  let userName = document.querySelector('.nameText');
  let cardNumber = document.querySelector('.numberText');
  let cardMonth = document.querySelector('.monthText');
  let cardYear = document.querySelector('.yearText');
  let securityNumber = document.querySelector('.securityNumberText');

  if (
    userName.value !== '' &&
    cardNumber.value.length === 16 &&
    cardMonth.value.length === 2 &&
    cardYear.value.length === 2 &&
    securityNumber.value.length === 3
  ) {
    document.querySelector('.person-name').innerHTML = userName.value;
    document.querySelector('.purple-card-number').innerHTML = cardNumber.value;
    document.querySelector('.exp-date').innerHTML = `${cardMonth.value}/${cardYear.value}`;
    document.querySelector('.cvc-number').innerHTML = securityNumber.value;
    input.classList.add('b-none');

  } else {
    const inputs = [
      document.querySelector('.nameText'),
      document.querySelector('.numberText'),
      document.querySelector('.monthText'),
      document.querySelector('.yearText'),
      document.querySelector('.securityNumberText')
    ];
    inputs.forEach(input => {
      if (input.value === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input'); 
      }
    });
  }











}

