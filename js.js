/*
До 59 стр.

document.write("<p>&nbsp;</p>")
var uasya = 5;
while (uasya > 0) {
	document.write("Цикл, Уася! <br>");
	uasya = uasya-1;
}
document.write("<p>Цикл кончился, Уася!</p>");

if (uasya>=1) {
	alert("Если Уася >=5, то «Алерт»!");
}

else if (uasya==3){
	alert("Если Уася ==3, то «Алерт»!");
}

else {
	alert("Элс");
}*/

 /*
	Стр. 60 

var i = 0;
while(i < 2) {
	document.write("Happy Birthday to you. <br>");
	i = i + 1;
}
var name="Vitalik";
document.write("Happy Birthday dear "+name+",<br>");
document.write("Happy Birthday to you. <br>");

console.log(name+" is the best!");
*/

/*
	Стр. 65

var word = "bottles";
var count = 99;

 while (count > 0) {
	 console.log(count + " " + word + " " + "of beer on the wall");
	 console.log(count + " " + word + " " + "of beer,");
	 console.log ("take one down, pass it around");
	 count = count - 1;
	 
	 if(count > 0) {
		 console.log (count + " " + word + " " + "of beer on the wall");
	 }
	 else {
		 console.log ("No more "+ word + " of the bear of the wall.");
	 }
 }
 */
 
/*
	Стр. 85 
*/

/*
// Позиция корабля
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;


// Данные пользователя
var guess;
var hits = 0;
var guesses = 0;

// Статус
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Готовься, целься, пли! (Значение от 0 до 6):");
	if (guess < 0 || guess > 6) {
		alert("Введите корректный номер ячейки");
	} else {
		guesses = guesses + 1;
	
		if (guess == location1 || guess == location2 || guess == location3 ) {
			alert("Кросавчег!");
			hits = hits + 1;			
		
			if (hits == 3) {
				isSunk = true;
				alert("Ты потопил мой корабль!");
			}
		
		} else{
				alert("Лошара!");
				}
	}
}

var stats = "Ты выстрелил "+ guesses + " раз по кораблю, а это значит, что твоя точность стрельбы равна " + 3/guesses*100+"%!";
alert(stats);
*/

/*
// Стр. 117

function bark (name, weight) {
	if (weight > 20) {
		console.log(name + " says WOOF WOOF");
	} else {
		console.log(name + " says woof woof");
	}
}

bark ("rover", 23);
bark ("spot", 13);
bark ("spike", 53);
bark ("lady", 17);
*/

// Стр. 124
function doIt(param){
	param = 2;
}
var test = 1;

doIt(test);
console.log(test);
