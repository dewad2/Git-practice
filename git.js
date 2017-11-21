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