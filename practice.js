for (let i = 1; i <= 10; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
  for (let i = 10; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }

var marks = 65;
// switch (marks) {
//     case 90:
//         console.log("Grade A")
//         break;
//     case 80:
//         console.log("Grade A")
//         break;
//     case 70:
//         console.log("Grade A")
//         break;
//     case 60:
//         console.log("Grade A")
//         break;
//     default:
//         console.log("You are Fail")
//         break;
// }
  

if (marks > 100) {
    console.log("Enter Valid Marks")
}
else if (marks > 90 && marks < 100){
    console.log("You Got Grade A")
}
else if (marks > 80 && marks < 90){
    console.log("You Got Grade B")
}
else if (marks > 70 && marks < 80){
    console.log("You Got Grade C")
}
else if (marks > 60 && marks < 70){
    console.log("You Got Grade D")
}
else {
    console.log("You Are Failed Please Try Again Next Year...!")
}
