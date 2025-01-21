//Game of Numbers

    alert("***Game of Numbers***");

    //variables 
    let numSecret = 5;
    let numUser = 0;
    let attempts = 1;
    let word = 'attempt';

    // process
    while (numUser != numSecret) {
    numUser = prompt("Give me a number of 1 to 10, please!: ");
     

    console.log(numUser);

    if (numUser == numSecret)
    {
        // alert("The number is correct: " + numUser); 
        alert(`Correct!, The number is: ${numSecret}, Congratulations!, You do in: ${attempts}, ${word}`);
    } else {
        if (numUser > numSecret){
            alert('The secret number is minor');
        }  else {
            alert('The secret number is greater');
        }

        // increment attempts 
        attempts = attempts + 1;
        word  =  'attempt';
        
        //alert("Sorry!, Not's the number, try again");
    }
    }

/*
    prompt("***The number not's correct X***" + numUser);
 */
