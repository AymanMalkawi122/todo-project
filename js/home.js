"use strict";

let questions = {};
questions.name = "Please enter your name:";
questions.gender = "Please enter your gender(male/female):";
questions.age = "Please enter your Age:";
questions.yesNO = [];
questions.yesNO.push("Are you employed?");
questions.yesNO.push("Do you use our app?");
questions.yesNO.push("are you currently married?");

let answers = {};
answers.name = prompt(questions.name);
answers.gender = prompt(questions.gender);
answers.age = prompt(questions.age);
answers.yesNO = [];

let welcomingMessage = "Weolcome to Todoist, ";

if (answers.age <= 0)
  alert("Age cant be Zero or less!");

if (answers.gender == "male")
  welcomingMessage.concat("Mr.");
else if (answers.gender == "female")
  welcomingMessage.concat("Ms.");

welcomingMessage = welcomingMessage.concat(answers.name);
if (confirm("press OK to recive welcoming message")) {
  alert(welcomingMessage);
}

alert("Now we would like to ask you a couple of (yes/no) questions.");

for (let index = 0; index < questions.yesNO.length; index++) {
  answers.yesNO.push(prompt(questions.yesNO[index]));

  if (answers.yesNO[index] != "yes" && answers.yesNO[index] != "no")
    answers.yesNO[index] = "invalid";

  console.log(questions.yesNO[index] + "\nAnswer:" + answers.yesNO[index]);
}
