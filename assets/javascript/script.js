let person = {firstName:"Mariam", surName: "Jvaridze", age: 24, email:"mariami.jvaridze.1@iliauni.edu.ge", city:"Tbilisi"};
let personFullName = person.firstName + " " + person.surName;
console.log(person);
console.log(personFullName);
console.log(personFullName + " is " + person.age + " years old and lives in " + person.city );
let inputWrapper = document.querySelector(".input-wrapper");
let contactBtn = document.querySelector(".contact-btn");
let messageSent = document.querySelector(".contact-sent")

contactBtn.addEventListener("click", function() {
    inputWrapper.style.display = "none";
    messageSent.style.display = "block"
  });