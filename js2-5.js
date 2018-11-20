/*
Task

You are given a variable marks. Your task is to print: 

- AA if marks is greater than . 
- AB if marks is greater than  and less than or equal to . 
- BB if marks is greater than  and less than or equal to . 
- BC if marks is greater than  and less than or equal to . 
- CC if marks is greater than  and less than or equal to . 
- CD if marks is greater than  and less than or equal to . 
- DD if marks is greater than  and less than or equal to . 
- FF if marks is less than or equal to .

Note

Do not declare the variable marks. It is declared inside our code checker. 
Use console.log for printing statements to the console.
*/

		function result(a, b) {
			if (a > b ) {
			var print1 = ('AA, AB, BB, BC, CC, CD, DD')
			return ("Printed Symbols: " + print1)
			}
			else if (a <= b) {
			var print2 = ('AB, BB, BC, CC, CD, DD, FF')
			return ("Printed Symbol: " + print2)
			}
		}
		console.log(result(5, 10))