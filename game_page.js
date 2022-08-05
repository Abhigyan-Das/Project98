
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	player1 = localStorage.getItem(player1_name);
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name
	player2 = localStorage.getItem(player2_name);

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name_input").innerHTML = player1 + " : ";
document.getElementById("player2_name_input").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2 ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";