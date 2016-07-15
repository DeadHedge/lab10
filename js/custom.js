
$(document).ready(function(){
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
// function GridItem (userName, seatNum, dateRes) {
//   this.userName = userName;
//   this.seatNum = seatNum;
//   this.dateRes = dateRes;
// }
// //create a grid box
// function makeGridEl() {
//   var grid = document.createElement("div");
//
// }
//
// //make the grid out of grid box elements
// function makeGrid(x, y) {
//   for (var i = 0; i < x; i++) {
//     for (var j = 0; j < y; j++) {
//
//     }
//   }
// }









  $("#form").hide();
  var $seats = $(".seat");
  $($seats).on("click", function() {
    $("#form").show();
    $(this).fadeTo("fast",0.2);

    $($seats).click( function(){   //Still some problem, only fadeIn and out ONCE
      $(this).fadeTo("fast",1);
    });
    });



});

//Seat constructor function
function Seat() {
  this.taken = false;
}




seatArray = [];

for (var i = 0; i < 24 ; i++){
  var newSeat = new Seat();
  seatArray.push(newSeat);
}

function onSubmit() {
  // console.log("checking event listener");
  //get seat number
  var $seatNum = $('#selectedSeat');
  console.log($seatNum);
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('#email');

  //find object based on seat number
  console.log(seatArray);
  var seatObject = seatArray[$seatNum.val() - 1];
  console.log(seatObject.taken);
  //check if seat is taken
  if (seatObject.taken === true) {
    console.log("You too late!!");
    return;
  }
  console.log($seatNum.val());
  console.log(seatObject);

  // if seat taken = false, send error message

  // set object properties to equal other form values
  seatObject.firstName = $firstName.val();
  seatObject.lastName = $lastName.val();
  seatObject.email = $email.val();
  //set taken to true
  seatObject.taken = true;
  console.log(seatObject.taken);
  console.log(seatArray);
}
