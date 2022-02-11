
PRINT greeting 
    "Welcome to a Guessing Game, please choose a level of difficulty from 1 to 5"
PRINT different types of level:
        1 EQUAL very easy offer Unlimited trials from 1 to 10
        2 EQUAL easy offer 5 tries from 1 to 10
        3 EQUAL medium offer 5 tries from 1 to 100
        4 EQUAL difficult offer 8 tries from 1 to 500
        5 EQUAL very difficult offer 9 tries from 1 to 1000

SET randomNumberA TO CALCULATE RANDOM NUMBER BETWEEN 1 AND 10
SET numberOfLifesA TO 9999999
SET randomNumberAA TO the choice of gamer

   var numbLifes = numberOfLifesA
    IF choose 1 THEN 
        PRINT number 1 to 10
        IF randomNumberAA > randomNumberA THEN 
            PRINT "My number is lower than randomNumberA Guess lower"
            numbLifes - 1
        ELSE IF randomNumberAA > randomNumberA THEN 
            PRINT "My number is higher than randomNumberA. Guess higher"
            numbLifes - 1
        ELSE
            PRINT "Yes! That's my number!"
        ENDIF
    ENDIF
            

SET randomNumberB TO CALCULATE RANDOM NUMBER BETWEEN 1 AND 10
SET numberOfLifesB TO 5
SET randomNumberBB TO the choice of gamer

   var numbLifes = numberOfLifesC
    IF choose 2 THEN 
        PRINT number 1 to 10
        IF randomNumberBB > randomNumberB THEN 
            PRINT "My number is lower than randomNumberBb Guess lower"
            numbLifes - 1
        ELSE IF randomNumberBB > randomNumberB THEN 
            PRINT "My number is higher than randomNumberB. Guess higher"
            numbLifes - 1
        ELSE
            PRINT "Yes! That's my number!"
        ENDIF
    ENDIF

SET randomNumberC TO CALCULATE RANDOM NUMBER BETWEEN 1 AND 100
SET numberOfLifesC TO 5
SET randomNumberCC TO the choice of gamer
 
    var numbLifes = numberOfLifesC
    IF choose 3 THEN 
        PRINT number 1 to 100
        IF randomNumberCC > randomNumberC THEN 
            PRINT "My number is lower than randomNumberC Guess lower"
            numbLifes - 1
        ELSE IF randomNumberCC > randomNumberC THEN 
            PRINT "My number is higher than randomNumberC. Guess higher"
            numbLifes - 1
        ELSE
            PRINT "Yes! That's my number!"
        ENDIF
    ENDIF


SET randomNumberD TO CALCULATE RANDOM NUMBER BETWEEN 1 AND 500
SET numberOfLifesD TO 8
SET randomNumberDD TO the choice of gamer

   var numbLifes = numberOfLifesC
    IF choose 4 THEN 
        PRINT number 1 to 500
        IF randomNumberDD > randomNumberD THEN 
            PRINT "My number is lower than randomNumberD Guess lower"
            numbLifes - 1
        ELSE IF randomNumberDD > randomNumberD THEN 
            PRINT "My number is higher than randomNumberD. Guess higher"
            numbLifes - 1
        ELSE
            PRINT "Yes! That's my number!"
        ENDIF
    ENDIF


SET randomNumberE TO CALCULATE RANDOM NUMBER BETWEEN 1 AND 1000
SET numberOfLifesE TO 9
SET randomNumberEE TO the choice of gamer

   var numbLifes = numberOfLifesC
    IF choose 5 THEN 
        PRINT number 1 to 1000
        IF randomNumberEE > randomNumberE THEN 
            PRINT "My number is lower than randomNumberE Guess lower"
            numbLifes - 1
        ELSE IF randomNumberEE > randomNumberE THEN 
            PRINT "My number is higher than randomNumberE. Guess higher"
            numbLifes - 1
        ELSE
            PRINT "Yes! That's my number!"
        ENDIF
    ENDIF




