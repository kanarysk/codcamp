/*
If it's less than 50 degrees, wear a coat.
If it's less than 30 degrees, wear a coat and a hat.
If it's less than 0 degrees, stay inside.
Otherwise, wear whatever you want.
*/
var fahrenheit = 55;
if (fahrenheit < 50) {
  if (fahrenheit > 30) {
    console.log('wear coat');
  }else if (fahrenheit < 30) {
  if (fahrenheit > 0) {
  console.log('wear coat and hat');
  } else if (fahrenheit < 0) {
  console.log('stay inside');
} } } else if (fahrenheit > 50) {
  console.log('wear whatever you want');
}