
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number between 19 - 120
  
  $('#randomNumber').text(Random);
  // Appending random number 

  var crystal1= Math.floor(Math.random()*11+1)
  var crystal2= Math.floor(Math.random()*11+1)
  var crystal3= Math.floor(Math.random()*11+1)
  var crystal4= Math.floor(Math.random()*11+1)
  // Setting up random numbers between 1 - 12 for each jewel
  
 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      crystal1= Math.floor(Math.random()*11+1)
      crystal2= Math.floor(Math.random()*11+1)
      crystal3= Math.floor(Math.random()*11+1)
      crystal4= Math.floor(Math.random()*11+1)
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function winner(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//sets up click for jewels
  $('#crystal1').on ('click', function(){
    userTotal = userTotal + crystal1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#crystal2').on ('click', function(){
    userTotal = userTotal + crystal2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#crystal3').on ('click', function(){
    userTotal = userTotal + crystal3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#crystal4').on ('click', function(){
    userTotal = userTotal + crystal4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 








    