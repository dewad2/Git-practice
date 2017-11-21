function mindPsAndQs(str) {
   var current = 0;
   var longest = 0;
   for (var i = 0; i < str.length; i++) {
   	var letter = str[i];
   	if (letter === 'P' || letter === 'Q') {
   		current += 1;
   	} else {
   		current = 0;
   	}
   	

     if (current > longest) {
   		longest = current;
     }
   }
   
   return longest;
}

console.log(mindPsAndQs('PPPXQPPPQ'));

// Write a function commonFactors(num1, num2) that returns an array that contains
// the common factors between both numbers. A factor is a number that divides
// another number with no remainder.
//
// Examples:
//
// commonFactors(12, 50); // => [ 1, 2 ]
// commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22); // => [ 1, 11 ]
// commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
// assertEqualArray([1,2,3,6], commonFactors(6, 24), 'returns common factors');


function commonFactors(num1, num2) {
   var common = [];
   var factors1 = findFactors(num1);
   var factors2 = findFactors(num2);

   for (var i = 0; i < factors1.length; i++) {
      var num = factors1[i];
      if (factors2.indexOf(num) > -1) {
         common.push(num);
      }
   }
   return common;
}

function findFactors(num) {
   var factors = [];
   for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
         factors.push(i);
      }
   }
   return factors;
}

console.log(findFactors(25));
console.log(commonFactors(6, 24));

// Write a function `commonPrimeFactors` that takes in two numbers as arguments
// and returns an array of all prime factors that are common between the
// two numbers. A factor is a number that divides another number without
// resulting in a remainder.
//
// Examples:
//
// commonPrimeFactors(12, 50); // => [ 2 ]
// commonPrimeFactors(6, 24); // => [ 2, 3 ]
// commonPrimeFactors(11,22); // => [ 11 ]
// commonPrimeFactors(45, 60); // => [ 3, 5 ]


