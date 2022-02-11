var randomNumber;
var level = [];
for (var i = 1; i <= 5; i++) {
    level.push(i);
}

var choiceB = [];
for (var i = 1; i <= 10; i++) {
    choiceB.push(i);
}

var choiceC = [];
for (var i = 1; i <= 100; i++) {
    choiceC.push(i);
}

var choiceD = [];
for (var i = 1; i <= 500; i++) {
    choiceD.push(i);
}

var choiceE = [];
for (var i = 1; i <= 1000; i++) {
    choiceE.push(i);
}
var numbLifes;

// ["very easy", "easy", "medium", "difficult", "very difficult"];

function myFunction() {
    var choix = "";
    //   var choiceA = window.prompt("choose a number from 1 to 10");
    alert("Welcome to a Guessing Game ");
    alert(
        "Please choose a level of difficulty from 1 to 5\n\n1-very easy : Unlimited trials from 1 to 10\n\n2-easy : 5 tries from 1 to 10\n\n3-medium : 5 tries from 1 to 100\n\n4-difficult : 8 tries from 1 to 500\n\n5-very difficult : 9 tries from 1 to 1000"
    );
    level = window.prompt("Please enter your level's choice from 1 to 5");

    if (level == 1) {
        numbLifes = 5;
        randomNumber = Math.floor(Math.random() * 10) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            // if (numbLifes == 0) {
            // console.log("No more lifes!");
            // choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
            // return "Game Over";
            // }
            // numbLifes--;
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");
                // console.log("My number is lower than" + choice + ", Guess lower");
                // numbLifes - 1;
                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");
                // console.log("My number is higher than" + choice + ", Guess higher");
                // numbLifes - 1;
                // console.log(numbLifes);
                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");
                // console.log("Yes! That's my number!");
                alert("Yes! That's my number!");
                return;
                // flag = false;
            }
        }

        // if (numbLifes == 0) {
        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
        return;
        // } else {
        //     console.log("numblife is not 0");
        // }

        console.log("randomNumber is :", randomNumber);
    } else if (level == 2) {
    } else if (level == 3) {
    } else if (level == 4) {
    } else if (level == 5) {
    } else {
        console.log("something went wrong!");
    }

    // while (flag) {
    //     //   let level = window.prompt(
    //     console.log("chosen level is :", level);
    //     if (level == 1) {
    //         numbLifes = 9999;
    //         randomNumber = Math.floor(Math.random() * 10) + 1;

    //         console.log("randomNumber is :", randomNumber);

    //         var choiceA = window.prompt("choose a number from 1 to 10");
    //         if (numbLifes == 0) {
    //             console.log("No more lifes!");
    //             choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
    //             return "Game Over";
    //         }

    //         if (choiceA > randomNumber) {
    //             console.log("Number is greater than randomNumber :", choiceA, " > ", randomNumber);
    //             document.getElementById("My number is lower than" + choiceA + ", Guess lower");
    //             // console.log("My number is lower than" + choiceA + ", Guess lower");
    //             numbLifes - 1;
    //             console.log("numbLifes is: ", numbLifes);
    //         }
    //         if (choiceA < randomNumber) {
    //             console.log("Number is greater than randomNumber :", choiceA, " < ", randomNumber);

    //             document.getElementById("My number is higher than" + choiceA + ", Guess higher");
    //             // console.log("My number is higher than" + choiceA + ", Guess higher");
    //             numbLifes - 1;
    //             // console.log(numbLifes);
    //             console.log("numbLifes is: ", numbLifes);
    //         } else if (choiceA == randomNumber) {
    //             console.log("Number is equal to randomNumber :", choiceA, " == ", randomNumber);
    //             document.getElementById("Yes! That's my number!");
    //             // console.log("Yes! That's my number!");
    //             alert("Yes! That's my number!");
    //             flag = false;
    //         }
    //         //alert("Yes! That's my number!");
    //         // choix = window.prompt("Play again 1 for Yes or 2 for No ");
    //         //   if (choix == 2) {
    //         //     flag = false;
    //         //   }
    //     }

    //     if (level == 2) {
    //         numbLifes = 5;
    //         random();
    //         console.log("This is level 2 :", choiceB, randomNumber, numbLifes);
    //         if (numbLifes == 0) {
    //             console.log("No more lifes!");
    //             return;
    //         }
    //         if (choiceB > randomNumber) {
    //             document.getElementById(choiceB).innerHTML = "My number is lower than" + choiceB + "Guess lower";
    //             numbLifes - 1;
    //         } else if (choiceB < randomNumber) {
    //             document.getElementById(choiceB).innerHTML = "My number is higher than" + randomNumber + "Guess higher";
    //             numbLifes - 1;
    //         } else {
    //             document.getElementById(choiceB).innerHTML = "Yes! That's my number!";
    //         }
    //     }
    //     if (level == 3) {
    //         numbLifes = 5;
    //         console.log("This is level 3");
    //         random100();
    //         if (numbLifes == 0) {
    //             console.log("No more lifes!");
    //             return;
    //         }
    //         if (choiceC > randomNumber100) {
    //             document.getElementById(choiceC).innerHTML = "My number is lower than" + choiceC + "Guess lower";
    //         } else if (choiceC < randomNumber100) {
    //             document.getElementById(choiceC).innerHTML = "My number is higher than" + randomNumber100 + "Guess higher";
    //         } else document.getElementById(choiceC).innerHTML = "Yes! That's my number!";
    //     }
    //     if (level == 4) {
    //         numbLifes = 8;
    //         console.log("This is level 4");
    //         random500();
    //         if (numbLifes == 0) {
    //             console.log("No more lifes!");
    //             return;
    //         }
    //         if (choiceD > randomNumber500) {
    //             document.getElementById(choiceD).innerHTML = "My number is lower than" + choiceD + "Guess lower";
    //         } else if (choiceD < randomNumber100) {
    //             document.getElementById(choiceD).innerHTML = "My number is higher than" + randomNumber100 + "Guess higher";
    //         } else document.getElementById(choiceD).innerHTML = "Yes! That's my number!";
    //     }
    //     if (level == 5) {
    //         numbLifes = 9;
    //         console.log("This is level 5");
    //         random1000();
    //         if (numbLifes == 0) {
    //             console.log("No more lifes!");
    //             return;
    //         }
    //         if (choiceE > randomNumber1000) {
    //             document.getElementById(choiceE).innerHTML = "My number is lower than" + choiceE + "Guess lower";
    //         } else if (choiceE < randomNumber1000) {
    //             document.getElementById(choiceE).innerHTML = "My number is higher than" + randomNumber1000 + "Guess higher";
    //         } else document.getElementById(choiceE).innerHTML = "Yes! That's my number!";
    //     }
    // }
    //   else return "Game over";
}

//   document.getElementById("choice").innerHTML =
//     "You choose level" + " " + choice;
//   for (let i = 0; i < level.length; i++) {
//     $("select").append(`<option value="'+level[i]+'"></option>`);
//     console.log(level);
//   }

//a supprimer si pas necessaire//

// function random() {
//   randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// }
function random100() {
    randomNumber100 = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber100);
}
function random500() {
    randomNumber500 = Math.floor(Math.random() * 500) + 1;
    console.log(randomNumber500);
}
function random1000() {
    randomNumber500 = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNumber1000);
}
// for (let i = 0; i < level.length; i++) {
//   $("select").append(`<option value="${level[i]}"></option>`);
//   console.log(level);
// }

// // function getRndInteger(min, max) {
// //   function random_choice() {

// randomnumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomnumber);

// random_choice();

// if (confirm("Press a button!")) {
//   txt = "You choose a level!";
// } else {
//   txt = "You pressed Cancel!";
//   console.log(txt);
// }
/* <button onclick="document.getElementById('demo').innerHTML = getRndInteger(1,5)">
  Click Me
</button>;
console.log(getRndInteger);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + min)) + min;
} */
