
let Name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender(male/female):");
let age = prompt("Please enter your Age:");
let welcomingMessage ="Weolcome to Todoist, ";
if(age <= 0)
alert("Age cant be Zero or less!");

if(gender=="male")
  welcomingMessage+="Mr.";
 else if(gender=="female")
welcomingMessage+="Ms.";
welcomingMessage=welcomingMessage.concat(Name);
if (confirm("press OK to recive welcoming message")) {
  alert(welcomingMessage);
}
