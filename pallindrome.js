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
