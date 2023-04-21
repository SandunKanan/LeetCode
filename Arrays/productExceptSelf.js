// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.


// const productElements = (arr) => {
//     const res = arr.reduce((acc, val) => {
//        acc = acc * val;
//        return acc;
//     }, 1);
//     return res;
//  };

// var productExceptSelf = function(nums) {
//     prods = []
//     for (i=0; i<nums.length; i++) {
//         // create a new array containing num[0 to i] + nums[i+1 to n]
//         const newArr=[...nums.slice(0, i), ...nums.slice(i+1)]
//         prods.push(productElements(newArr))
//     }
//     return prods
// };

var productExceptSelf = function(nums) {
    results = []
    // go through each item, push the product of the first i elements
    let preProduct=1
    for(i=0; i<nums.length; i++) {
        results.push(preProduct)
        preProduct *= nums[i]
    }

    // multiply each element by the post product
    let postProduct=1
    for(i=nums.length-2; i>=0; i--) {
        postProduct *= nums[i+1]
        results[i] *= postProduct;
    }
    return results
}


console.log(productExceptSelf([2,3,4,5]))

// result = []
// result = [1, 2, 6, 24]
// postfix =1
// postfix=5
// result = [1, 2, 30 ,24]
// postfix = 20
// result =[1, 40, 30, 24]
// 
