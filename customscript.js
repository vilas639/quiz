$(document).ready(function()
{
	"use strict";
	//an array hold the clip
	var mysound=[new Audio("audio/tuto.mp3"),new Audio("audio/Pakka.mp3"),new Audio("audio/Pyaar.mp3")];
	//aclick function for every elemet with that start witj=h "playclip"
   $("[id^='playClip']").click(function(e)
   {
	   //get the full id of th element cliked
	   var clickID=e.target.id;
	   //get the number at the end of the id
	   var clickNum=clickID.substr(clickID.length-2);
	 //substract 1 from the id to get proper array indexvar arrayIndex=c  
  var arrayIndex=clickNum-1;
  //pay the sound from arry
  mysound[arrayIndex].play();

  });
	
	
	});
