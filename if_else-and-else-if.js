console.log('IF ELSE\n\n');

let hungerLevel = 7;

if 
  (hungerLevel > 7) {
  console.log ('Time to eat!');
}
else{
  console.log('We can eat later!');
}

//&& operator
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood =`sleepy` && tirednessLevel >8) {
  console.log('time to sleep');
  }
  else{
    console.log('not bed time yet');
  }

  //or operator
  //&& operator
let feeling = 'sleepy';
let tiredLevel = 6;
if (feeling = 'sleepy' || tiredLevel >8) {
  console.log('time to sleep');
  }
  else{
    console.log('not bed time yet');
  }

/*
**Else If Statements**

The `else if` statement always comes after the `if` statement and before the `else` statement. 

code/
*/
console.log('\n\nELSE IF\n\n');
// the \n adds space between outputs
  let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
  else if (season === "winter"){
    console.log ('It\'s winter! Everything is covered in snow.')
  }
  else if (season ==='fall') {
    console.log('It\'s fall! Leaves are falling!');
  }
  else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
  }
 else {
  console.log('Invalid season.');
}



//The switch keyword
console.log('\n\nSWITCH KEYWORD\n\nThe switch keyword provides an alternative syntax that is easier to read and write.\n\n')

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place' : console.log('You get the gold medal!');
  break;
   case 'second place' : console.log('You get the silver medal!');
  break;
   case 'third place' : console.log('You get the bronze medal!');
  break;
  default: console.log('No medal awarded.');
  break;
}


