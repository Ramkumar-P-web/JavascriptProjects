// Assignment 10: Given an array of numbers, we have to find the number with the most frequency and return it. If there are two or more numbers with the same most frequency then return the biggest number.

const arrayOfNum = [1,2,3,4,5,6,5,4,3,4,56,4,3,2,1,2,3,4,5,3,4,566,7,442,3,4,74,2,3,4,4,5,653,3,5,67,8,894];


function frequency(){
    const frequency= {};
    let maxFreq=0;
    let maxNum= 0;

for(let num of arrayOfNum){

    frequency[num]= (frequency[num] || 0)+1;

    if(frequency[num]>maxFreq){
        maxFreq= frequency[num];
        maxNum= num;
    }else if(frequency[num]===maxFreq){
        maxNum= Math.max(maxNum,num);
    }
}
console.log(maxNum,frequency,maxFreq);
}

frequency();

/* function mostFrequentLargestNumber(arr) {
    let frequency = {};
    let maxFreq = 0;
    let maxNum = -Infinity;

    // Count the frequency of each number
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;

        // Update maxFreq and maxNum
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            maxNum = num;
        } else if (frequency[num] === maxFreq) {
            maxNum = Math.max(maxNum, num); // Pick the larger number in case of tie
        }
    }

    return frequency;
} */

// console.log(mostFrequentLargestNumber([1,2,3,4,5,6,5,4,3,4,56,4,3,2,1,2,3,4,5,3,4,566,7,442,3,4,74,2,3,4,4,5,653,3,5,67,8,894]))