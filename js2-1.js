/*
If it's less than 50 degrees, wear a coat.
If it's less than 30 degrees, wear a coat and a hat.
If it's less than 0 degrees, stay inside.
Otherwise, wear whatever you want.
*/

function temperature(F) {
	if (F > 0 && F < 30) { 
		return "wear coat and hat";
	} else if (F > 30 && F < 50) {
		return "wear coat"
	} else if (F < 0) {
		return "stay inside"
	} else {
		return "wear what ever you want"
	}
}
	console.log(temperature(0)) 
	
/* If you give exact temperature like: 0, 30 or 50, 
it will return to 'else' and will show "wear what ever you want", 
because we did not put equal operator. To solve it we can use <=,>=. 
But on question if not given clearly. */

