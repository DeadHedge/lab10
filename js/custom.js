
$(document).ready(function(){
<<<<<<< HEAD
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



=======
  var $seats = $(".seat");
  $form.hide();
  //sets up opacity response on hover
  $($seats).hover(function() {
    $(this).fadeTo("fast", 0.8);
  },
    function() {
    $(this).fadeTo("fast",1);
  });
>>>>>>> e85d806a21f466933064c741dfbcd1e086f922e5
});

//Seat constructor function
function Seat(id) {
  this.reserved = false;
  this.id = id;
  this.selected = false;
}

//initializes seatArray var and sets it to an empty array
seatArray = [];

//Creates 24 Seat objects using the Seat constructor
//Pushes those objects to seatArray
for (var i = 0; i < 24 ; i++){
  var newSeat = new Seat(i + 1);
  seatArray.push(newSeat);
}

// add event listener for all grid elements
$('.seat').on("click", function() {
  var $form = $("#form");
  $($form).show();
  var $id = $(this).siblings('p').text();
  var id = parseInt($(this).attr('id'));
  var arrPos = id -1;
  //Checks if seat is reserved before making changes
  if(seatArray[arrPos].reserved === true) {
    return;
  }
  //Checks if seat selected is true. If not, sets true.
  //If already true, sets false. Changes img to indicate selection.
  if(seatArray[arrPos].selected === true) {
    seatArray[arrPos].selected = false
    this.setAttribute("src", "images/seat.jpg");
  } else {
    seatArray[arrPos].selected = true;
    this.setAttribute("src", "images/green_selected.jpg");
  }
  seatArray.forEach(function(each) {
    //Builds list of selected seats on click based on object.selected attr
    if (each.selected === true) {
      seatListContent += (each.id.toString() + " ");
    }
<<<<<<< HEAD
  })
  $('#seatList').text(seatListContent).css({'color':'black',"font-size":"19px"});

  console.log(seatArray[id - 1].selected);

  console.log(typeof(id));
  console.log(id);


=======
  });
  $('#seatList').text("Seats selected: " + seatListContent).css({'color':'black',"font-size":"27px"});
>>>>>>> e85d806a21f466933064c741dfbcd1e086f922e5
});



//take a string of comma-seperated integers

//return an array of integers

function onSubmit() {
  // on submit

  // if selected === true, set seat as reserved and save user info
  var $seatNum = $('#selectedSeat');
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('#email');

  seatArray.forEach(function (each) {
    //Store the purchaser's information in the objects
    //attached to the selected seats
    if(each.selected === true) {
      each.firstName = $firstName.val();
      each.lastName = $lastName.val();
      each.email = $email.val();
      //Reserves seat to prevent future purchase
      each.reserved = true;
      var elId = (each.id).toString();
      var el = document.getElementById(elId)
      el.setAttribute("src", "images/seatX.jpg");
    }
  });
}
