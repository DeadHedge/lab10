
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

var $seats = $(".seat");
var $form = $("#form");

$form.hide();
$seats.click(function() {
  $($form).show();
  if($(this).attr("src") === "images/seat.jpg") {
    this.setAttribute("src", "images/green_selected.jpg");
  } else if ($(this).attr("src") === "images/green_selected.jpg"){
    this.setAttribute("src", "images/seat.jpg");
  };
});




$($seats).hover(function() {
  $(this).fadeTo("fast", 0.8);
},
  function() {
  $(this).fadeTo("fast",1);
}
);

var $header = $("#header");
$header.hover(function() {
  $(this).animate({
    fontSize: "80px"}, 1500)
})

var $pokemonChar = $(".pokemonChar");
$pokemonChar.click(function() {
  $(this).animate({
    width: "100%",
    height:"100%"
  });
});



// $($navigation).hover(function() {
//     $(this).fadeTo("fast", 0.25);
//       }, function() {
//     $(this).fadeTo("fast", 1);
//       }
//       );8


  // $("#form").hide();
  // var $seats = $(".seat");
  // $($seats).on("click", function() {
  //   $("#form").show();
  //   $(this).fadeTo("fast",0.2);


  //   $($seats).click( function(){   //Still some problem, only fadeIn and out ONCE
  //     $(this).fadeTo("fast",1);
  //   });
  //   });



});

//Seat constructor function
function Seat(id) {
  this.reserved = false;
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
  if(seatArray[id - 1].reserved === true) {
    console.log("That seat is reserved!");
    return;
  }
  //Checks if seat is selected. If not, select. If so, unselect.
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
  $('#seatList').text(seatListContent).css({'color':'black',"font-size":"19px"});

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
      //set reserved to true
      each.reserved = true;
      var elId = (each.id).toString();
      console.log(elId);
      console.log(typeof(elId));
      var el = document.getElementById(elId)
      el.setAttribute("src", "images/seatX.jpg");
    }
    console.log(each);
    })
  //find object based on seat number
  console.log(seatArray);
  var seatObject = seatArray[$seatNum.val() - 1];
  console.log(seatObject.reserved);
  //check if seat is reserved. If so, send message.
  // if (seatObject.reserved === true) {
  //   console.log("You too late!!");
  //   return;
  // }
  console.log($seatNum.val());
  console.log(seatObject);


  // set object properties to equal other form values

  console.log(seatObject.reserved);
  console.log(seatArray);
}
