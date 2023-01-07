function validateForm(
  cardholderName,
  cardNumber,
  expireDate,
  cvcNumber,
  nameInput,
  cardNumberInput,
  expireDateInput,
  cvcNumberInput
) {
  const nameBlankError = document.getElementById("blank-error-name");
  const cardNumberBlankError = document.getElementById(
    "blank-error-card-number"
  );
  const cardNumberFormatError = document.getElementById(
    "format-error-card-number"
  );
  const expireDateBlankError = document.getElementById(
    "blank-error-expire-date"
  );
  const expireDateFormatError = document.getElementById(
    "format-error-expire-date"
  );
  const cvcBlankError = document.getElementById("blank-error-cvc");
  const cvcFormatError = document.getElementById("format-error-cvc");

  if (cardholderName.length === 0) {
    nameBlankError.classList.remove("error-invisible");
    nameBlankError.classList.add("error-visible");
    nameInput.classList.add("input-error");
  } else {
    nameBlankError.classList.remove("error-visible");
    nameBlankError.classList.add("error-invisible");
    nameInput.classList.remove("input-error");
  }

  if (cardNumber.length === 0) {
    cardNumberBlankError.classList.remove("error-invisible");
    cardNumberBlankError.classList.add("error-visible");
    cardNumberInput.classList.add("input-error");
  } else {
    if (!cardNumber.replace(/\s/g, "").match(/\b\d{16}\b/g)) {
      cardNumberFormatError.classList.remove("error-invisible");
      cardNumberFormatError.classList.add("error-visible");
      cardNumberInput.classList.add("input-error");
    } else {
      cardNumberFormatError.classList.remove("error-visible");
      cardNumberFormatError.classList.add("error-invisible");
      cardNumberInput.classList.remove("input-error");
    }
    cardNumberBlankError.classList.remove("error-visible");
    cardNumberBlankError.classList.add("error-invisible");
    cardNumberInput.classList.remove("input-error");
  }

  if (expireDate.length === 0) {
    expireDateBlankError.classList.remove("error-invisible");
    expireDateBlankError.classList.add("error-visible");
    expireDateInput.classList.add("input-error");
  } else {
    if (!expireDate.match("^(0[1-9]|1[0-2])/?([0-9]{2})$")) {
      expireDateFormatError.classList.remove("error-invisible");
      expireDateFormatError.classList.add("error-visible");
      expireDateInput.classList.add("input-error");
    } else {
      expireDateFormatError.classList.remove("error-visible");
      expireDateFormatError.classList.add("error-invisible");
      expireDateInput.classList.remove("input-error");
    }
    expireDateBlankError.classList.remove("error-visible");
    expireDateBlankError.classList.add("error-invisible");
    expireDateInput.classList.remove("input-error");
  }

  if (cvcNumber.length === 0) {
    cvcBlankError.classList.remove("error-invisible");
    cvcBlankError.classList.add("error-visible");
    cvcNumberInput.classList.add("input-error");
  } else {
    if (!cvcNumber.match(/^\d+$/)) {
      cvcFormatError.classList.remove("error-invisible");
      cvcFormatError.classList.add("error-visible");
      expireDateInput.classList.add("input-error");
    } else {
      cvcFormatError.classList.remove("error-visible");
      cvcFormatError.classList.add("error-invisible");
      expireDateInput.classList.remove("input-error");
    }
    cvcBlankError.classList.remove("error-visible");
    cvcBlankError.classList.add("error-invisible");
    cvcNumberInput.classList.remove("input-error");
  }
}

window.addEventListener("load", function () {
  const name = document.getElementById("cardholder-name");
  const cardNumber = document.getElementById("card-number");
  const expireDate = document.getElementById("expire-date");
  const cvcNumber = document.getElementById("cvc-number");

  const nameInput = document.getElementById("cardholder-name-input");
  const cardNumberInput = document.getElementById("card-number-input");
  const expireDateInput = document.getElementById("expire-date-input");
  const cvcNumberInput = document.getElementById("cvc-number-input");

  const confirmBtn = document.getElementById("confirm-btn");
  const continueBtn = document.getElementById("continue-btn");

  const formContainer = document.getElementById("form-container");
  const continueContainer = document.getElementById("continue-container");

  nameInput.addEventListener("keyup", function () {
    name.innerHTML = nameInput.value;
  });

  cardNumberInput.addEventListener("keyup", function (e) {
    if (expireDateInput.value.length < 16 && e.key !== "Backspace") {
      cardNumber.innerHTML = cardNumberInput.value
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ");

      cardNumberInput.value = cardNumberInput.value
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ");
    }
  });

  expireDateInput.addEventListener("keyup", function (e) {
    if (expireDateInput.value.length < 5 && e.key !== "Backspace") {
      expireDate.innerHTML = expireDateInput.value
        .replace(/\W/gi, "")
        .replace(/(.{2})/g, "$1/");

      expireDateInput.value = expireDateInput.value
        .replace(/\W/gi, "")
        .replace(/(.{2})/g, "$1/");
    }
  });

  cvcNumberInput.addEventListener("keyup", function () {
    cvcNumber.innerHTML = cvcNumberInput.value;
  });

  confirmBtn.addEventListener("click", function () {
    validateForm(
      nameInput.value,
      cardNumberInput.value,
      expireDateInput.value,
      cvcNumberInput.value,
      nameInput,
      cardNumberInput,
      expireDateInput,
      cvcNumberInput
    );
    const errorsActive = document.getElementsByClassName("error-visible");
    if (errorsActive.length === 0) {
      formContainer.classList.remove("container-visible");
      formContainer.classList.add("container-invisible");
      continueContainer.classList.remove("container-invisible");
      continueContainer.classList.add("container-visible");
    }
  });

  continueBtn.addEventListener("click", function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    location.reload();
  });
});
