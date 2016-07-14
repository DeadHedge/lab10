
// var submit = function() {
// 	var firsName =document.getElementById("firstName");
// 	var lastName = document.getElementById("lastName");
// 	var date = document.getElementById("date");
// 	var email = document.getElementById("email");
// 	var seat = document.getElementById("selectedSeat");
// };



// function Seat(seatNum, firstName, lastName, date, email) {
// 	this.seatNum = seatNum;
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }
// console.log(submit);

// var seat1 = new Seat(John, beckius, 9, @hotmail) {
// 	seat1.firstName = John
// };
// var arr = [];
// arr[textAreaseatnum.value].firstName = 

//  textArea.value
// 	for(var i = 0; i < 24 ; i++) {
// 		var newSeat = new Seat(i);
// 		arr.push(newSeat);
// 	}


// seat1 = {
// 	firstName: John,
// 	lastName: beckius,
// 	date: 9,
// 	email: @hotmail
// }


//Create grid object to store grid info
function GridItem (userName, seatNum, dateRes) {
  this.userName = userName;
  this.seatNum = seatNum;
  this.dateRes = dateRes;
  this.arrPush =
}
//create a grid box
function makeGridEl() {
  var grid = document.createElement("div");

}

//make the grid out of grid box elements
function makeGrid(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {

    }
  }
}

function Seat() {
  this.taken = false;
}
seatArray = [];

for (var i = 0; i < 24 ; i++){
  var newSeat = new Seat();
  seatArray.push();
}



$(document).ready(function(){



  $("form").width(500);


});


function onSubmit() {
  //get seat number
  var seatNum = document.getElementById('seatNum');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');

  //find object based on seat number
  var seatObject = arr[seatNum.value - 1];

  // if seat taken = false, send error message

  // set object properties to equal other form values
  seatObject.firstName = firstName.value;
  seatObject.lastName = lastName.value;
  seatObject.email = email.value;
  //set taken to true
  seatObject.taken = true;
}

