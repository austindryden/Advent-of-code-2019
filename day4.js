// --- Day 4: Secure Container ---
// You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

// However, they do remember a few key facts about the password:

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).
// How many different passwords within the range given in your puzzle input meet these criteria?

// Your puzzle input is 278384-824795.

// --- Part Two ---
// An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

// Given this additional criterion, but still ignoring the range rule, the following are now true:

// 112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
// 123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
// 111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
// How many different passwords within the range given in your puzzle input meet all of the criteria?


function passCrack(start, end){
    let newArr = [];
    for( let i = start; i < end;i++){
        if(isAllIncreasing(i) && isTwoDigits(i)){
            newArr.push(i);
        }
    }
    return newArr;
}

function isTwoDigits(num){
    let histo ={};
    num = num.toString();
    for(let i=0 ; i<num ; i++){
        if (histo.keys.includes(num[i])){
            histo[num[i]] += 1;
        } else{
            histo[i] = 1; 
        }
    }
    console.log(histo);
    console.log(histo.values());
    if((histo.values()).includes(2)){
        return true;
    }
    return false;
}

function isAllIncreasing(num){
    num = num.toString();
    for (let i = 1; i <= num.length ; i++){
        if (num[i] < num[i-1]){
            return false;
        }
    }
    return true;
}

console.log(passCrack(278384, 824795));
console.log(passCrack(278384, 824795).length);