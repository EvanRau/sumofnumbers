const testNums = [1, 2, 3 ,4];

function sumFor(list){
  let total = 0;
  for(const num of list) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));
function sumWhile(list){
  let total = 0;
  let i = 0;
  while(i <list.length){
    total+=list[i];
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(list){

}

function sumUnderscore(list){

}