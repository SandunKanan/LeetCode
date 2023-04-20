const arr = [3, 1, 4, 1, 2, -2, -1];
const produceElements = (arr = []) => {
   const res = arr.reduce((acc, val) => {
      acc = acc * val;
      return acc;
   }, 1);
   return res;
};
console.log(produceElements(arr));