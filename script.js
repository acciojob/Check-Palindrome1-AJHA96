// complete the given function

function palindrome(str){
	//var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace('');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
module.exports = palindrome
