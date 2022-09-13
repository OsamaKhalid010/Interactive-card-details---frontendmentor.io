
//submit form and thamks note

function formHide() {

  var x = document.getElementById("form");
  var y = document.getElementById("submission");
  if(x !== undefined) {
    if(x.style.display == "block" && y.style.display == "none") {
    x.style.display = "none";
    y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }
}



// Form inputs validations 

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateName() {
  var cname = document.getElementById("cname").value;
  document.getElementById("txt2").innerHTML = cname;

  var nameErr = false;
  if(cname == "") {
    printError("nameErr", "Can't be blank");
    document.getElementById("cname").style.border = "1px solid red";
    document.getElementById("txt2").innerHTML = "Jane Appleseed"
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(cname)) {
      printError("nameErr", "Wrong format");
      document.getElementById("cname").style.border = "1px solid red";
  } else {
      printError("nameErr", "");
      document.getElementById("cname").style.border = "1px solid lightgray";
      nameErr = true;
  }
}


function validateNumber() {
  var cnumber = document.getElementById("cnumber").value;
  document.getElementById("txt1").innerHTML = cnumber;

  var numErr = false;

  if(cnumber == "") {
    printError("numErr", "Can't be blank");
    document.getElementById("cnumber").style.border = "1px solid red";
    document.getElementById("txt1").innerHTML = "0000 0000 0000 0000"
  } else if (!/^\(?([0-9]{4})\)?[ ]?([0-9]{4})[ ]?([0-9]{4})[ ]?([0-9]{4})$/.test(cnumber)) {
    printError("numErr", "wrong format, numbers only");
    document.getElementById("cnumber").style.border = "1px solid red";
  } else {
    printError("numErr", "");
    document.getElementById("cnumber").style.border = "1px solid lightgray";
    numErr = true;
  }
}


function validateMonth() {
  var month = document.getElementById('month').value;
  document.getElementById("txt3").innerHTML = month;

  var expErr = false;

  if(month == "") {
    printError("expErr", "Can't be blank");
    document.getElementById("month").style.border = "1px solid red";
    document.getElementById("txt3").innerHTML = "00";
  } else if (isNaN(month)) {
    printError("expErr", "wrong format, numbers only");
    document.getElementById("month").style.border = "1px solid red";
  } else {
    printError("expErr", "");
    document.getElementById("month").style.border = "1px solid lightgray";
    expErr = true;
  }
}


function validateYear() {
  var year = document.getElementById('year').value;
  document.getElementById("txt4").innerHTML = year;

  var expErr = false;

  if(year == "") {
    printError("expErr", "Can't be blank");
    document.getElementById("year").style.border = "1px solid red";
    document.getElementById("txt4").innerHTML = "00";
  } else if (isNaN(year)) {
    printError("expErr", "wrong format, numbers only");
    document.getElementById("year").style.border = "1px solid red";
  } else {
    printError("expErr", "");
    document.getElementById("year").style.border = "1px solid lightgray";
    expErr = true;
  }
}

function validatecvc() {
  var cvc = document.getElementById('cvc').value;
  document.getElementById("txt5").innerHTML = cvc;

  var expErr = false;

  if(cvc == "") {
    printError("expErr", "Can't be blank");
    document.getElementById("cvc").style.border = "1px solid red";
    document.getElementById("txt5").innerHTML = "000";
  } else if (isNaN(cvc)) {
    printError("expErr", "wrong format, numbers only");
    document.getElementById("cvc").style.border = "1px solid red";
  } else {
    printError("expErr", "");
    document.getElementById("cvc").style.border = "1px solid lightgray";
    expErr = true;
  }
}

