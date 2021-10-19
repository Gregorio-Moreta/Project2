function handleForm(event) {
    event.preventDefault();
    let date1 = new Date(Form1.value);
    let date2 = new Date(Form2.value);
    console.log(`Date 1: ${date1}, Date 2: ${date2}`);
    let diffDays = Math.round((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
    console.log(diffDays);
    document.getElementById('count-down').innerHTML= diffDays;

}

const inputs = document.querySelectorAll('form');
const Form1 = document.querySelector('#start_date');
const Form2 = document.querySelector('#end_date');
console.log(Form1);
console.log(Form2);

console.log(inputs);
inputs.forEach((input) => {
    input.addEventListener("submit", handleForm);
});
