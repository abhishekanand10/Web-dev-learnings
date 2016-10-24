function show_pattern(){
var top_position = 25, left_position = 25;
var width = 300, height = 300;
var color_list = ["red","blue","green","yellow","black",
                  "indigo","violet"];
var the_body = document.getElementById("theBody");

while (width > 10) {
  var this_div = document.createElement("div");

  var random_color = Math.random() * 7;
  random_color = Math.floor(random_color);

  this_div.style.top = top_position +"px";
  this_div.style.left = left_position + "px";
  this_div.style.width = width + "px";
  this_div.style.height = height + "px";
  this_div.style.background = color_list[random_color];


  the_body.appendChild(this_div);

  top_position += 10;
  left_position += 10;
  width -= 20;
  height -= 20;
}
}
