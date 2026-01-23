const btnEl = document.getElementById("btn");
const userInput = document.getElementById("birthday");
const message = document.getElementById("result");

function calculateAge() {
    const birthday = userInput.value;
    if (birthday === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthday);
        message.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old!`
    }
}

function getAge(birthday) {
    const currentDate = new Date();
    const birthdayDetails = new Date(birthday);

    let age = currentDate.getFullYear() - birthdayDetails.getFullYear();

    const month = currentDate.getMonth() - birthdayDetails.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDetails.getDate())) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);