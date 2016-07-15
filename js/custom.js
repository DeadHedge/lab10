
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
function Seat(id) {
  this.taken = false;
  this.id = id;
  this.selected = false;
}

seatArray = [];
seatsSelected = [];

for (var i = 0; i < 24 ; i++){
  var newSeat = new Seat(i + 1);
  seatArray.push(newSeat);
}

// add event listener for all grid elements
$('.seat').on("click", function() {
  var $id = $(this).siblings('p').text();
  var id = parseInt($id);
  if(seatArray[id - 1].taken === true) {
    console.log("That seat is taken!");
    return;
  }
  if(seatArray[id - 1].selected === true) {
    seatArray[id - 1].selected = false
  } else {seatArray[id - 1].selected = true}
  var seatListContent = "";
  seatArray.forEach(function(each) {
    if (each.selected === true) {
      console.log("seat list" + each.id.toString());
      seatListContent += (each.id.toString() + " ");
      console.log(seatListContent);
    }
  })
  $('#seatList').text(seatListContent)

  console.log(seatArray[id - 1].selected);

  console.log(typeof(id));
  console.log(id);


});



//take a string of comma-seperated integers

//return an array of integers

function onSubmit() {
  // console.log("checking event listener");

  // on submit
  // check each object for selected === true

  // if selected === true, set seat as reserved and save user info



  //get seat number
  var $seatNum = $('#selectedSeat');
  console.log($seatNum);
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('#email');

  seatArray.forEach(function (each) {
    if(each.selected === true) {
      console.log(each.id + " is selected.");
      each.firstName = $firstName.val();
      each.lastName = $lastName.val();
      each.email = $email.val();
      //set taken to true
      each.taken = true;
    }
    console.log(each);
    })
  //find object based on seat number
  console.log(seatArray);
  var seatObject = seatArray[$seatNum.val() - 1];
  console.log(seatObject.taken);
  //check if seat is taken. If so, send message.
  // if (seatObject.taken === true) {
  //   console.log("You too late!!");
  //   return;
  // }
  console.log($seatNum.val());
  console.log(seatObject);


  // set object properties to equal other form values

  console.log(seatObject.taken);
  console.log(seatArray);
}
