var randomNumber;
var level = [];
for (var i = 1; i <= 5; i++) {
    level.push(i);
}

var numbLifes;

function myFunction() {
    var choix = "";
    alert("Welcome to a Guessing Game ");
    alert(
        "Please choose a level of difficulty from 1 to 5\n\n1-very easy : Unlimited trials from 1 to 10\n\n2-easy : 5 tries from 1 to 10\n\n3-medium : 5 tries from 1 to 100\n\n4-difficult : 8 tries from 1 to 500\n\n5-very difficult : 9 tries from 1 to 1000"
    );
    level = window.prompt("Please enter your level's choice from 1 to 5");

    if (level == 1) {
        numbLifes = 99999;
        randomNumber = Math.floor(Math.random() * 10) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");

                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");

                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");

                alert("Yes! That's my number!");
                return;
            }
        }

        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
        return;
    } else if (level == 2) {
        numbLifes = 5;
        randomNumber = Math.floor(Math.random() * 10) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");

                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");

                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");

                alert("Yes! That's my number!");
                return;
            }
        }

        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
        return;
    } else if (level == 3) {
        numbLifes = 5;
        randomNumber = Math.floor(Math.random() * 100) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");

                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");

                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");

                alert("Yes! That's my number!");
                return;
            }
        }

        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
        return;
    } else if (level == 4) {
        numbLifes = 8;
        randomNumber = Math.floor(Math.random() * 500) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");

                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");

                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");

                alert("Yes! That's my number!");
                return;
            }
        }

        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");
        return;
    } else if (level == 5) {
        numbLifes = 9;
        randomNumber = Math.floor(Math.random() * 1000) + 1;

        for (numbLifes != 0; numbLifes--; ) {
            console.log("randomNumber is :", randomNumber);
            var choice = window.prompt("choose a number from 1 to 10");

            if (choice > randomNumber) {
                console.log("Number is greater than randomNumber :", choice, " > ", randomNumber);
                document.getElementById("My number is lower than" + choice + ", Guess lower");

                console.log("numbLifes is: ", numbLifes);
            }
            if (choice < randomNumber) {
                console.log("Number is smaller than randomNumber :", choice, " < ", randomNumber);

                document.getElementById("My number is higher than" + choice + ", Guess higher");

                console.log("numbLifes is: ", numbLifes);
            } else if (choice == randomNumber) {
                console.log("Number is equal to randomNumber :", choice, " == ", randomNumber);
                document.getElementById("Yes! That's my number!");

                alert("Yes! That's my number!");
                return;
            }
        }

        console.log("No more lifes!", numbLifes);
        choix = window.prompt("Game Over! Play again 1 for Yes or 2 for No ");

        return;
    } else {
        console.log("something went wrong!");
    }
}
