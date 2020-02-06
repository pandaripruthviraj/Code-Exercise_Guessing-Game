let numberOfTries = 1;
function guess(){
var userGuess = Number($("#guessField").val());
$(".result").show();
console.log(userGuess >=1 && userGuess <=10);
if(numberOfTries <= 3 && (userGuess >=1 && userGuess <=10) ){
	$.get( "http://localhost:8080/guessTheNumber?userGuess="+userGuess+"&numberOfTries="+numberOfTries, function( output ) {
		  $(".result p").remove();
		  if(output!=null && output!=undefined && output!="")
		  {
		  var result = JSON.parse(output);
		  if(result.retry){
			$(".result").append("<p>"+result.data+"</p>");
			$("#guessField").val("");
			numberOfTries = 1;
			}
		  else if(!result.retry){
			  $(".result").append("<p>"+result.data+"</p>");
			  $("#guessField").val("");
			  numberOfTries++;
			}
			
		}
	});
	}else if(numberOfTries > 3){
		  $(".result").append("<p>Sorry! You've exhausted your tries.</p>");
		  $("#guessField").val("");
		  numberOfTries = 1;
	}
}