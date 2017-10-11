var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];
//alert(cards[4]);
//console.log(cards);
$(document).ready(function(){mixedArray(cards);});


$('#c0').click(function() {revealCard(0); });
$('#c1').click(function() {revealCard(1); });
$('#c2').click(function() {revealCard(2); });
$('#c3').click(function() {revealCard(3); });

$('#c4').click(function() {revealCard(4); });
$('#c5').click(function() {revealCard(5); });
$('#c6').click(function() {revealCard(6); });
$('#c7').click(function() {revealCard(7); });

$('#c8').click(function() {revealCard(8); });
$('#c9').click(function() {revealCard(9); });
$('#c10').click(function() {revealCard(10); });
$('#c11').click(function() {revealCard(11); });


var oneVisible=false;
var turnCounter=0;
var visible_nr;
var lock=false;
var pairsLeft=6;

function revealCard(nr){ 
	$('#c'+nr).attr("disabled", true)
	var opacityValue = $('#c'+nr).css('opacity');

	//alert('Opacity:' + opacityValue);
	if(opacityValue==1 && lock==false){
		lock=true;
		var obraz='url(img/' + cards[nr] + ')';
		$('#c'+nr).css('background-image', obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');

		if(oneVisible==false){
			oneVisible=true; //first card
			visible_nr=nr;
			lock=false;

		}else{
			if(cards[visible_nr] == cards[nr]){
				setTimeout(function(){hide2Cards(nr, visible_nr)},750);

				//alert("para");
			}else{
				//alert('pudło');
				setTimeout(function(){restore2Cards(nr, visible_nr)},750)
			}

			turnCounter++;
			$('.score').html('Turn counter:' +turnCounter);
			oneVisible=false;
		}
	}

}

function hide2Cards( nr1, nr2){
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	pairsLeft--;
	if(pairsLeft==0){
		$('.board').html('<h2> YOU WIN!!! <br> Done in ' + turnCounter + ' turns !</h2> <br> <button onclick="myFunction()">Try again!</button>');
	}
	lock=false;
}
function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');	

	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	lock=false;
}

function mixedArray(arr){
	for (i=0; i<arr.length; i++){
		var j = Math.floor(Math.random() * arr.length);
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
	return arr;
}
function myFunction() {
    location.reload();
}