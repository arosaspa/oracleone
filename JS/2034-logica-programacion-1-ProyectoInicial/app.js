alert("Game of Numbers");

let numSecret = 4;
let numUser = prompt("Give me a number please!: ");

// alert("Play of Numbers from JS ");

console.log(numUser);

if (numUser == numSecret)
{
    alert("The number is correct: " + numUser); 
} else {
    alert("Sorry!, Not's the number");
}


/*
    prompt("***The number not's correct X***" + numUser);
} */
