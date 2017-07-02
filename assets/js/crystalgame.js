
//global variables

var win = 0;
var loss = 0;
var targetScore = Math.floor((Math.random()* 100) + 19)
var crystal1=Math.floor(Math.random() * (12-1)+1);
var crystal2=Math.floor(Math.random() * (12-1)+1);
var crystal3=Math.floor(Math.random() * (12-1)+1);
var crystal4=Math.floor(Math.random() * (12-1)+1);
start();
var yourScore=0;
var targetScore=0;
var calculation=0;
var addition=0;


var updateScores = function (){
  $('.yourScore').empty();
  $('.yourscore').append(yourScore);
  $('.win').empty();
  $('.win').append(win);
  $('.loss').empty();
  $('.loss').append(loss);


}

function start ()
{ 
	 var ßtargetScore = Math.floor(Math.random() * (120-19) +19);
	 $('#targetScore').empty();
	 $('#targetScore').append('Target Sore :' + targetScore);

	 var crystal1 =Math.floor(Math.random() * (12-1)+1);
	 var crystal2 =Math.floor(Math.random() * (12-1)+1);
	 var crystal3 =Math.floor(Math.random() * (12-1)+1);
	 var crystal4 =Math.floor(Math.random() * (12-1)+1);
	 
	//updateScores();

}
	 
  var calculation = function(calculation)
	{
		  if(yourScore === targetScore){
		  		win = win + 1;}
			
		   
		  else if (yourScore > targetScore){
		  	   loss= loss +1;} 
		 

		  else { updateScores();}
  	}
  
	$('#yourScore').append(yourScore);
	

	$(document).ready(function(){

	 var crystal1 = Math.floor((Math.random() * 12)+1);
	 var crystal2 = Math.floor((Math.random() * 12)+1);
	 var crystal3 = Math.floor((Math.random() * 12)+1);
	 var crystal4 = Math.floor((Math.random() * 12)+1);
		
		$('.crystal1').click(function(){
			yourScore = yourScore + clickcrystal1;
			calculation();
		})
		$('.crystal2').click(function(){
			yourScore= yourScore + crystal2;
			calculation();
		})
		$('.crystal3').click(function(){
			yourScore = yourScore + crystal3;
			calculation();
		})
		$('.crystal4').click(function(){
			yourScore = yourScore + crystal4;
			calculation();
		})
	});




    