const tipButtons = document.querySelectorAll('.tip-section__buttons-container__buttons__button')
const resetButton = document.querySelector('.result-section__button')
const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('#people-number-input')
const zeroErrorText = document.querySelector('#zero-error')
const billNegativeErrorText = document.querySelector('#bill-negative-error')
const peopleNegativeErrorText = document.querySelector('#people-negative-error')

const totalTip = document.querySelector('.result-section__results__tip-section__value')
const totalValuePerPerson = document.querySelector('.result-section__results__tip-section__value')

peopleInput.addEventListener('input', function () {
    let valueAsNumber = Number(peopleInput.value)

    if (valueAsNumber === 0) {
        zeroErrorText.classList.remove('hidden')
    } else {
        zeroErrorText.classList.add('hidden')
    }

    if (valueAsNumber < 0) {
        peopleNegativeErrorText.classList.remove('hidden')
    } else {
        peopleNegativeErrorText.classList.add('hidden')
    }
})

billInput.addEventListener('input', function () {
    let valueAsNumber = Number(billInput.value)

    if (valueAsNumber < 0) {
        billNegativeErrorText.classList.remove('hidden')
    } else {
        billNegativeErrorText.classList.add('hidden')
    }
})