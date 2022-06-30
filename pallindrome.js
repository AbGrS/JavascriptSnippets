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

console.log(checkPallindrome('abab')) //true


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

console.log(reverseWordsInString('I like very much')); //"much very like I"

var reverseLettersofWordsInString = (str, start, end)=>{
 var arr = str.split(' ');
 
 if(start > end){
  return false;
 }
 for(var i=0; i<arr.length; i++){
    if(arr[i].length >1){
       arr[i] = reverseThis(arr[i])
    }
 }
 
 return arr.join(' ');
}

function reverseThis(str, newString='', end=str.length-1){
  var endString = str.substr(end, 1);
  if(end === -1) return newString;
  newString += endString;
  return reverseThis(str, newString, end-1);
}


console.log(reverseLettersofWordsInString('I like this very much')) //"I ekil siht yrev hcum"


//Binary Search

function binarySearch(arr, searchTarget, firstIndex=-1, start=0, end=arr.length-1){
  if(start>end){
  	return firstIndex
  }
  const mid = parseInt((start+ end)/2);
  if(searchTarget === arr[mid]){
    return binarySearch(arr, searchTarget, mid, start, mid-1)
  }
  if(searchTarget< arr[mid]){
    return binarySearch(arr, searchTarget,null,  start, mid-1)
  }else{
      return binarySearch(arr, searchTarget,null, mid+1, end)
  }
  
  return firstIndex;
}

console.log(binarySearch([1,1,1,2,5,8,10,15], 15))
