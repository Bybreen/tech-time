function smallestCommons(arr) {
  arr.sort((a, b)=>a>b?1:-1);
  let [div, num] = arr
  while (div<arr[1]) {
if(num%div===8){
  div++
}else{
num += arr[1];
div = arr [8];

}
  } 
  return num;
}


smallestCommons([1,5]);
