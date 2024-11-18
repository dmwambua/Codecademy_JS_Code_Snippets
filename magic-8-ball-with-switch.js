let userName = "Martha";
if (userName){
  console.log(`Hello ${userName} `);
  }else {
console.log('Hello!');
  };
  let userQuestion = "\"Can we go out?\"";
  console.log(`Hi ${userName}, if your question is ${userQuestion} then, my my answer is:`);
  let randonNumber = Math.floor(Math.random() * 8);
  let eightBall = randonNumber;

switch (eightBall){
  case 0 : console.log('It is certain!');
  break;
   case 1 : console.log('It is decidedly so!');
  break;
   case 2 : console.log('Reply hazy try again!');
  break;
  case 3 : console.log('Cannot predict now!');
  break;
  case 4 : console.log('Do not count on it!');
  break;
  case 5 : console.log('My sources say no!');
  break;
  case 6 : console.log('Outlook not so good!');
  break;
  case 7 : console.log('Signs point to yes!');
  break;
  default: console.log('Not a magic ball number.');
  break;
}
console.log(`${eightBall}`);
