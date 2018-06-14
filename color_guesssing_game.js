var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


//easy level operation
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}

	}   
	resetButton.textContent = "New colors!"; 
	messageDisplay.textContent = null;
 
});


//hard level operation
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";


	}
	resetButton.textContent = "New colors!";  
	messageDisplay.textContent = null;  

});


//reset button
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a random color form array
	pickedColor = pickColor();

	//change colorDisplay to matched picked color
	colorDisplay.textContent = pickedColor;

	//change color of all squares
	for(var i=0; i<squares.length; i++){

		squares[i].style.backgroundColor = colors[i];

	}
	resetButton.textContent = "New colors!";
	messageDisplay.textContent = null;
     h1.style.backgroundColor = "steelblue";
});




colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){

	// add initial colors to the square
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){

		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare color to the picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct wohoo";
			resetButton.textContent = "play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "black";
			messageDisplay.textContent = "Aww Try again :( ";
		}
	});
}





function changeColors(color){
	//loop through all squares

	for(var i=0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}




function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


//push random colors into array colors
function generateRandomColors(num){

	//make an array
	var arr = [];

	//repeat num times
	for (var i=0; i < num; i++){
		arr.push(randomColor()); 
		//add num random color & push to array



	}
	

	//return that array
	return arr;

}

//random color generator
function randomColor(){

	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);

	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";


}

