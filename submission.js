const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;

  

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

  

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
   let word = str.toLowerCase();
    let length = str.length;
    let end = length -1;

    for (let i = 0; i < length/2; i++) {
        if (word[i] != word[end]) return false;
        else end--
    }
    return true;
};


  
const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!

    let word = str.toLowerCase();
    let score = 0;
    let length = str.length;

    for (let i = 0; i < length; i++) {
        switch (word[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'l':
            case 'n':
            case 'r':
            case 's':
            case 't':
                score += 1;
                break;
            
            case 'd':
            case 'g':
                score += 2;
                break;

            case 'b':
            case 'c':
            case 'm':
            case 'p':
                score += 3;
                break;

            case 'f':
            case 'h':
            case 'v':
            case 'w':
            case 'y':
                score += 4;
                break;
            
            case 'k':
                score += 5;
                break;

            case 'j':
            case 'x':
                score += 8;
                break;

            case 'q':
            case 'z':
                score += 10;
                break;
                   
        }
    }
    return score;

};
