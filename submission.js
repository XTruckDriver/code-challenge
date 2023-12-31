const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    };
    return sum;
};  

const findFrequency = function(array) {
  // your code here - don't forget to return an object!

    array.sort();
    let length = array.length;
    const frequency = {
        most: array[0],
        least: array[0]
    };
    for (let i = 0, total = 1, most = 1, least = length; i <= length - 1; i++) {
        if (array[i] != array[i + 1]) {
            if (total <= least) {
                frequency["least"] = array[i];
                least = total;
            };
            if (total >= most) {
                frequency["most"] = array[i];
                most = total;
            };
            total = 1;

        }  else {
            total++;
            };

    };
    return frequency;
};

  

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
   let word = str.toLowerCase();
    let length = word.length;
    let end = length -1;

    for (let i = 0; i < length/2; i++) {
        if (word[i] != word[end]) return false;
        else end--;
    }
    return true;
};


  
const largestPair = function(array) {
  // your code here - don't forget to return a number!

    let length = array.length;
    let largestProduct = 0;
    
    for (let i = 0; i < length; i++) {
        if ((array[i] * array[i + 1]) >= largestProduct) largestProduct = array[i] * array[i + 1];
    };

    return largestProduct;
  
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!

    let length = str.length;
    let opening, closing = 0;
    
    for (let i = 0; i <= length; i++) {
        if (str.codePointAt(i) === 40) opening = i;
        if (str.codePointAt(i) === 41) closing = i;
    };
    
    let newWord = str.substr(0, opening) + str.substr(closing + 1, length - closing + 1);
    return newWord;
 
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!

    let word = str.toLowerCase();
    let score = 0;
    let length = word.length;

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
