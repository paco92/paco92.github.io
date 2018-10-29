function greet() {
	window.alert("Hello everyone!");
	}
function init(){
	//Task 2
	let images =
document.getElementById("container").getElementsByTagName("img");
	images[1].src = "flower2.png";
	images[3].src = "flower2.png";
	//Task 3
	document.getElementById("task3").innerHTML = "You are doing great";
	//Task 4
	let image = document.createElement("img");
	image.src = "flower2.png";
	let flower= document.getElementById("new_element");
	flower.appendChild(image);
	//Task 5
	let spans =document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
	}

	//Task 6
	var changeSrc = function(event) {
		let filename=event.target.src.search(/flower\d\.png$/);
  if (event.target.src.slice(filename)=="flower1.png" ) {
    event.target.src = event.target.src.replace("1.png","2.png");
  }else if(event.target.src.slice(filename)=="flower2.png"){
  	 event.target.src = event.target.src.replace("2.png","1.png");
  }
};

document.getElementById("event").addEventListener("mouseover", changeSrc);
	}