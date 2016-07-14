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
