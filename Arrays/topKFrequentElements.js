// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

console.log(topKFreqElem([1], 1))

function topKFreqElem(nums, k) {
    // create an object that uses the number as the key and the frequency as value
    const numObj={}
    nums.forEach(num => {
        if (numObj[num]===undefined) {
            numObj[num]=1
        } else {
            numObj[num] += 1
        }
    })
    const freqObj = {}
    Object.keys(numObj).forEach(numKey => {
        const freq=numObj[numKey]
        if (freqObj[freq]===undefined) {
            freqObj[freq] = [numKey]
        } else {
            freqObj[freq].push(numKey)
        }
    })
    
    const sorted_freqs = Object.keys(freqObj).sort((a, b) => b-a)
    const topKFreqs = []
    sorted_freqs.forEach(freq => {
        if (topKFreqs.length < k) {
            topKFreqs.push(...freqObj[freq])
        }
        else return
    })
    return topKFreqs
}
    // for i in nums
        // if num exists in numObj, add 1 to value
        // else create new key with num as key and 1 as value
    // for each item in numObj
    // e.g. {1: 3, 2: 2, 3: 1, 4: 10, 5: 3}
    // we can create another object that contain frequency as keys and an array of nums as values
    // e.g. {3: [1, 5], 2: [2], 1: [3], 10: [4]}
    // get keys in order from highset to lowest
    // create new array output
    // while req max freqs are not populated
        // for each ordered_freqs
            // append value from freqObj to ordered_freqs
    


    

