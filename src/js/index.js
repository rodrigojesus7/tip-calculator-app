const tipButtons = document.querySelectorAll('.tip-section__buttons-container__buttons__button')
const percentageNumbers = document.querySelectorAll('.percentage-number')
const resetButton = document.querySelector('.result-section__button')
const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('#people-number-input')
const zeroBillErrorText = document.querySelector('#bill-zero-error')
const zeroPeopleErrorText = document.querySelector('#people-zero-error')
const billNegativeErrorText = document.querySelector('#bill-negative-error')
const peopleNegativeErrorText = document.querySelector('#people-negative-error')
const manyPeopleErrorText = document.querySelector('#not-that-many-people-error')

const totalTipPerPerson = document.querySelector('#total-tip-value')
const totalValuePerPerson = document.querySelector('#total-per-person')

let selectedPercentage = 0

billInput.addEventListener('input', function () {
    let bill = Number(billInput.value)

    if (bill === 0) {
        zeroBillErrorText.classList.remove('hidden')
    } else {
        zeroBillErrorText.classList.add('hidden')
    }

    if (bill < 0) {
        billNegativeErrorText.classList.remove('hidden')
    } else {
        billNegativeErrorText.classList.add('hidden')
    }

    if (selectedPercentage != 0) {
        calculation()
    }

})


peopleInput.addEventListener('input', function () {
    let people = Number(peopleInput.value)

    if (people === 0) {
        zeroPeopleErrorText.classList.remove('hidden')
    } else {
        zeroPeopleErrorText.classList.add('hidden')
    }

    if (people < 0) {
        peopleNegativeErrorText.classList.remove('hidden')
    } else {
        peopleNegativeErrorText.classList.add('hidden')
    }

    if(people >= 999){
        manyPeopleErrorText.classList.remove('hidden')
    } else{
        manyPeopleErrorText.classList.add('hidden')
    }

    if (selectedPercentage != 0) {
        calculation()
    }


})



function calculation() {

    let bill = Number(billInput.value)
    let people = Number(peopleInput.value)

    if (bill != 0 && bill > 0 && people != 0 && people > 0 && people < 999) {
        let totalTip = (bill * (selectedPercentage / 100))
        totalTipPerPerson.textContent = (totalTip / people).toFixed(2)

        let totalPerPerson = (bill + totalTip) / people
        totalValuePerPerson.textContent = totalPerPerson.toFixed(2)
    } else {
        return
    }


}


tipButtons.forEach(function (number) {

    number.addEventListener('click', function () {
        selectedPercentage = Number(number.textContent.replace('%', ''))

        tipButtons.forEach(function (button) {
            button.classList.remove('active-button')
        })

        number.classList.add('active-button')


        calculation()
    })

})


function reset() {

    tipButtons.forEach(function (button) {
        button.classList.remove('active-button')
    })

    billInput.value = ''
    peopleInput.value = ''

    totalTipPerPerson.textContent = '0.00'
    totalValuePerPerson.textContent = '0.00'

    zeroBillErrorText.classList.add('hidden')
    billNegativeErrorText.classList.add('hidden')
    zeroPeopleErrorText.classList.add('hidden')
    peopleNegativeErrorText.classList.add('hidden')
    manyPeopleErrorText.classList.add('hidden')

    selectedPercentage = 0

}

resetButton.addEventListener('click', function(){
    reset()
})