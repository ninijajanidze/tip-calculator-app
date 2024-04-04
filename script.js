
document.addEventListener("DOMContentLoaded", () => {
    const billInput = document.querySelector(".bill-input");
    const tipButtons = document.querySelectorAll(".tip-button");
    const customTipInput = document.querySelector(".input-tip");
    const peopleInput = document.querySelector(".people-input");
    const totalSpan = document.querySelector(".total-span");
    const amountSpan = document.querySelector(".amount-span");
    const errorMessage = document.querySelector(".error");
    const resetButton = document.querySelector(".reset-button");

    peopleInput.addEventListener("input", () => {
        checkInputPeople();
    });

    tipButtons.forEach(button => {
        button.addEventListener("click", () => {
            tipButtons.forEach((elem) => {
                elem.classList.remove('change-color');
            });
            button.classList.add('change-color');
            calculateTip();
        });
    });

    customTipInput.addEventListener("input", () => {
        calculateTip();
    });

    function calculateTip() {
        const billAmount = parseInt(billInput.value);
        const numberOfPeople = parseInt(peopleInput.value);
        let tipPercentage = 0;

        if (customTipInput.value !== "") {
            tipPercentage = parseInt(customTipInput.value);
        } else {
            tipPercentage = parseInt(e.target.dataset.tip);
        }

            const tipAmountPerPerson = (billAmount * (tipPercentage / 100)) / numberOfPeople;
            const totalAmountPerPerson = (billAmount / numberOfPeople) + tipAmountPerPerson;

            amountSpan.textContent = tipAmountPerPerson.toFixed(2);
            totalSpan.textContent = totalAmountPerPerson.toFixed(2);
        };
    

    function checkInputPeople() {
        if (parseInt(peopleInput.value) === 0) {
            errorMessage.style.display = "block";
            peopleInput.style.border = "2px solid #E17457";
        } else {
            errorMessage.style.display = "none";
            peopleInput.style.border = "";
            calculateTip();
        }
    }
});

function resetButton() {
    location.reload();
};