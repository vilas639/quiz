//javascript Document

$(document).ready(function()
{
"use strict";
//declare score varible and hide the element that displat it
var score=0;
$("#showScore").hide();

//if the clicked element contain the class"c" move to next question with +1

$(".c").click(function()
{
score++;
});

//when th last question is answerd show the score on the home
$(".last").click(function()
{
$("#showScore").show();
$("#score").html(score+"/6");
});

//when the quiz statr
$("#reset").click(function()
{
//score is hidden and reset to 0

score=0;
$("#showScore").hide();

//call function that will randmize the order of answerd$
$.each(allAnswers,function(index,elem)
{
randmize(index,elem);
});
});

//an array hold the clip
	var sounds=[new Audio("audio/apple.mp3"),new Audio("audio/peru.mp3"),new Audio("audio/banana.mp3"),new Audio("audio/facebook.mp3"),new Audio("audio/link.mp3"),new Audio("audio/twitter.mp3")];
//i seperate them two array sound and image have sanme index
var images=["images/apple.jpg","images/peru.jpg","images/banana.png","images/facebook.png","images/link.png","images/twitter.png"];	

//we will use to create DOM element of our sound and images
var btns=[$("<a>"),$("<a>"),$("<a>"),$("<a>"),$("<a>"),$("<a>")];
var imgs=[$("<img>"),$("<img>"),$("<img>"),$("<img>"),$("<img>"),$("<img>")];

//for each qusn there answer include 1 correct answer
var canswer1="apple";
var randAnswer1=["mango","apple","banana",canswer1];

var canswer2="peru";
var randAnswer2=["mango","peru","cockunut",canswer2];

var canswer3="banana";
var randAnswer3=["kela","banana","chiku",canswer3];
var canswer4="apple";
var randAnswer4=["chiku","peru","apple",canswer4];
var canswer5="orange";
var randAnswer5=["orange","banana","apple",canswer5];
var canswer6="coconut";
var randAnswer6=["apple","ccoconut","peru",canswer6];

//an arry that contains all the answervar 

var allAnswers=[randAnswer1,randAnswer2,randAnswer3,randAnswer4,randAnswer5,randAnswer6];

//all array holding all correct answet
var allCorrect=[canswer1,canswer2,canswer3,canswer4,canswer5,canswer6];
	
	//array shufling function
	function shuffle(array)
	{ 
	//the current index is equal to the last index of the afray
	var currentIndex=array.length;
	 //loop until tue index is less than 0
	 
	 while(currentIndex !==0)
	 {//get random index between 0 and the current index
 var randIndex=Math.floor(Math.random()*currentIndex);
 //substarract 1 from the current index
 currentIndex -=1;
 
 //swap the value at the current undex with one at the random index
 var temp=array[currentIndex];
 array[currentIndex]=array[randIndex];
 array[randIndex]=temp;
		 
	 }
	 //return the sorted array
	 return array;
		
	}
	
	
//random ize the order of the answer and wheteher andan image or sound display
function randmize(index,elem)
{
	//we will use this var in some casess since the numbering in our html started  at one
	var myIndex=index +1;
	//call the shuffle function on arry of answervar shuff=
	var shuffledAnswers=shuffle(elem);
	//get array of answer buttons from the html
	var answBtnArr =$(".answer"+myIndex);
	
	$.each(answBtnArr,function(i,el)
	{
		//for each button in the array set thr html value to the one our array answer
		$(el).html(shuffledAnswers[i]);
		//if the answer is correct then the correct popup should open the clicked
		
		if(shuffledAnswers[i]===allCorrect[index])
		{
			$(el).attr("href","#correct"+ myIndex);
		}
		else
		{
			$(el).attr("href","#incorrect"+ myIndex);
			
		}
	});
	
	//remove the prevoius buttons or images
	
	btns[index].remove();
	imgs[index].remove();
	//put the either an images or sound for each question
	if(Math.round(Math.random())===0)
	{
		imgs[index].attr ({
			"src": images[index],
			"alt": "larnimg"
		});
		
		$("#question"+myIndex).append(imgs[index]);
	}
	else{
		btns[index].attr({
			"data-role": "button",
			"data-icon": "audio-icon"
			
		});
		
		btns[index].html("play Sound");
		btns[index].click(function()
		{
			sounds[index].play();
		});
		
		$("#question"+myIndex).append(btns[index]).trigger("create");
		
	}
		
	}
});






