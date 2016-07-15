
$(document).ready(function(){
  var $seats = $(".seat");
  $form.hide();
  //sets up opacity response on hover
  $($seats).hover(function() {
    $(this).fadeTo("fast", 0.8);
  },
    function() {
    $(this).fadeTo("fast",1);
  });
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
    console.log("That seat is reserved!");
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
  var seatListContent = "Selected Seats: ";
  seatArray.forEach(function(each) {
    //Builds list of selected seats on click based on object.selected attr
    if (each.selected === true) {
      seatListContent += (each.id.toString() + " ");
    }
  });
  // sets list of selected seats to the list paragraph.
  $('#seatList').text(seatListContent);
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
