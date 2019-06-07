let random_result;
let lost = 0;
let win = 0;
let previous = 0;

let blue_crystal

// Fun math stuff

let resetAndStart = function () {

	$(".crystals").empty();

	let images = [
			'../images/blue_crystal.jpg', 
			'', 
			'', 
			''];
		
	random_result = Math.floor(Math.random() * 101 ) + 19; 


	$("#result").html('Goal: ' + random_result);

	for(let i = 0; i < 4; i++){

		let random = Math.floor(Math.random() * 11) + 1;

		let crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


// On click events

$(document).on('click', ".crystal", function () {
	let num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("Losses: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("Wins: " + win);

		previous = 0;

		resetAndStart();

	}

});

// Sound on-clicks









