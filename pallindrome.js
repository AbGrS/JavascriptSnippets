// Check pallindrome
var checkPallindrome = (str, start, end)=>{

 if(!start || !end){
 	start = 0;
  end = str.length -1;
 }
  
  if(start === end) return true;
  
  if(start === end -1 && str[start] === str[end-1]) return true;
  
  if(str[start] === str[end]){
    return  checkPallindrome(str, start+1, end-1)
  }
  
  return false
}

console.log(checkPallindrome('abab'))


// Reverse Words in String

var reverseWordsInString = (str, start, end)=>{
var arr = str.split(' ');
  
  if(!start || !end){
  	 var start = 0, end = arr.length-1;
  }
 
  if(arr.length === 1 || start > end){
    return arr.join(' ');
  }
  
  var temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  
 return reverseWordsInString(arr.join(' '), start+1, end-1);
  
}

console.log(reverseWordsInString('I like very much'));
