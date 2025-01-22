//Game of Numbers

    alert("***Game of Numbers***");

    //variables 
    let numSecret = 5;
    let numUser = 0;
    let attempts = 1;
   // let word = 'attempt';
    let attemptMax = 3;

    // process
    while (numUser != numSecret) {
    numUser = prompt("Give me a number of 1 to 10, please!: ");
     

    console.log(numUser);

    if (numUser == numSecret)
    {
        // alert("The number is correct: " + numUser); 
        alert(`Congratulations!\nThe number correct is: ${numSecret} \nYou do in ${attempts}  ${attempts == 1 ? `* Attempt *` : ` AtEmPtS`} `);
    } else {
        if (numUser > numSecret){
            alert('The secret number is minor');
        }  else {
            alert('The secret number is greater');
        }

        // increment attempts 
        /* attempts = attempts + 1;
        word  =  'attempt'; */
        attempts ++;

        if (attempts > attemptMax) {
            alert(`****GAME OVER!*** \n*****Maxium of attempts!***** \n The Attempts was of: ${attemptMax}`);
            break;
        }
        
        //alert("Sorry!, Not's the number, try again");
    }
    }
