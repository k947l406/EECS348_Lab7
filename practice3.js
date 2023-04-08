function verify() {
  const p1 = document.getElementById("text1").value;
  const p2 = document.getElementById("text2").value;
  if (p1.length < 8) {
  	alert("The length of the first password is less than 8 letters")
  } else if (p2.length < 8) {
  	alert("The length of the second password is less than 8 letters")
  } else if (p1 != p2) {
  	alert("The two passwords do not match")
  } else if (p1 == p2) {
  	alert("Verified. The two passwords match")
  }
}
