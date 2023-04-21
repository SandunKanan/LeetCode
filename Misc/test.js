// const arr = [3, 1, 4, 1, 2, -2, -1];
// const produceElements = (arr = []) => {
//    const res = arr.reduce((acc, val) => {
//       acc = acc * val;
//       return acc;
//    }, 1);
//    return res;
// };
// console.log(produceElements(arr));
// emptyArr=[]
// a=[]
// a[0].push(0)
// console.log(a)

function create2dArray(n) {
   newArr=[]
   for(let i=0; i<n; i++) {
       newArr.push([])
   }
   return newArr
}

n = create2dArray(9)
n[1].push(2)
console.log(n)