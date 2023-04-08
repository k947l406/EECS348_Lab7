function update() {
  const pborder = document.getElementsByClassName("one");
  pborder[0].style.backgroundColor = document.getElementById("background_color").value;
  pborder[0].style.borderColor = document.getElementById("border_color").value;
  pborder[0].style.borderWidth = document.getElementById("border_width").value+"px";
  
}
