//submit form and thamks note

function formDisplay() {

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


// To add text from input to the images of cards

function fnc1() {
  var cname = document.getElementById("cname").value;
  var cardname = document.getElementById("txt2");
  cardname.innerHTML = cname;
}
function fnc2() {
  var cnumber = document.getElementById("cnumber").value;
  var cardnumber = document.getElementById("txt1");
  cardnumber.innerHTML = cnumber;
}
function fnc3() {
  var expmonth = document.getElementById("month").value;
  var cardmonth = document.getElementById("txt3");
  cardmonth.innerHTML = expmonth;
}
function fnc4() {
  var expyear = document.getElementById("year").value;
  var cardyear = document.getElementById("txt4");
  cardyear.innerHTML = expyear;
}
function fnc5() {
  var cvc = document.getElementById("cvc").value;
  var cardcvc = document.getElementById("txt5");
  cardcvc.innerHTML = cvc;
}


