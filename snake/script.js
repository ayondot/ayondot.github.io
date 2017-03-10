$(document).ready(function(){
	//basic canvas stuff
	var canvas = $('#canvas')[0];
	var ctx = canvas.getContext("2d");
	var w = $('#canvas').width();
	var h = $('#canvas').height();

	//Saving the cell width in a variable for easy control
	var cw = 10;
	var d;
	var food;
	var score = 0;

	//creating the snake
	var snake_array;  //an array of cells to make up the snake
	
	function init(){
		d = "right"; //default direction
		create_snake();
		create_food();
		score = 0;
		//Moving the snake with a setInterval timer which will 
		//trigger the paint function every 60ms 
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint,150);
	}

	init();

	

	function create_snake(){
		var length = 5;	  //length of the snake
		snake_array = [] //starting with an empty array
		for (var i = length - 1; i >= 0; i--) {
			//this will create a horizontal snake starting from top left
			snake_array.push({x:i,y:0});
		}
	}

	//creating the food
	function create_food(){
		food = {
			x: Math.round(Math.random() * (w - cw)/cw),
			y: Math.round(Math.random() * (h - cw)/cw)
		}
		//this creates the food on cells 0 - 44 in within the canvas 
		//because there are 45(450/10) cells(rows and colums) in there
	}

	//painting the snake
	function paint(){
		
		//painting the canvas
		ctx.fillStyle = "white";
		ctx.fillRect(0,0,w,h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0,0,w,h); 

		var nx = snake_array[0].x;
		var ny = snake_array[0].y;
		if(d == "right") nx++;
		else if(d == "left") nx--;
		if(d == "up") ny--;
		if(d == "down") ny++;

		//adding the gameover clauses
		//this will restart the game if the snake hits the walls or bumps into its own body
		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx,ny,snake_array)){
			//restart the game
			init();
			return;
		}
		
		//making the snake eat the food
		if(nx == food.x && ny == food.y){
			var tail = {x:nx, y:ny} 
			score++;
			create_food();
		}else{
			var tail = snake_array.pop(); // pops out the last cell
			tail.x = nx;
			tail.y = ny;
		}

		
		snake_array.unshift(tail)
		
		for (var i = 0; i < snake_array.length; i++) {
			var c = snake_array[i];
			paint_cell(c.x,c.y);
		}

		paint_cell(food.x,food.y);  //painting the food

		//painting the score
		var score_text = "Score: " + score;
		ctx.fillText(score_text,5,h-5);
	}

	//creating a function to paint cells
	function paint_cell(x,y){
		ctx.fillStyle = "blue";
		ctx.fillRect(x*cw,y*cw,cw,cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw,y*cw,cw,cw);
	}

	function check_collision(x,y,array){
		//this function checks if provided (x,y) co-ordinates exist in an array of cells or not
		 for(var i = 0; i < array.length; i++){
		 	if(array[i].x == x && array[i].y == y) return true;
		 }
		 return false;
	}

	//adding the keyboard controls
	$(document).keydown(function(e){
		var key = e.which;
		if(key == "37" && d != "right") //second part of the logic prevents the snake going on reverse gear 
			d = "left";
		if(key == "38" && d != "down") d = "up";
		if(key == "39" && d != "left") d = "right";
		if(key == "40" && d != "up") d = "down";
	})

})