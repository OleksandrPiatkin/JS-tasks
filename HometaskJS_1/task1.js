let userNumber = prompt("give me number");

function arrayTable( num ) {
    const row = Math.ceil(Math.sqrt(num));
    const col = row;
    let newArray = new Array(row);
    let start = 1;

    //creating an array 

    for(var i = 0; i < row; i++) {
        newArray[i] = new Array(col);

        for(var j = 0; j < col; j++) {
            newArray[i][j] = "";
        }
    } 
    
    
        let k, z, y;
        for (k = 0, z = 1, y = 2; k < Math.ceil(row/2), start <= num; k++, z++, y++) {

            //top loop 
                for (let i = k; i < z; i++) {

                    for (let j = k; j < col - k && start <= num; j++) {
                        newArray[i][j] = start++;
                    }
                }
            
            //right loop
            if (start <= num) {
                for (let j = col - z; j < col -k; j++) {

                    for (let i = z; i < col -k && start <= num; i++) {
                    newArray[i][j] = start++;
                    }
                }
            }

            //bottom loop
            if (start <= num) {
                for (let i = col - z; i > col - y; i--) {

                    for (let j = col - y; j >= k && start <= num;j--) {
                        newArray[i][j] = start++;
                    }
                }
            }

            //left loop
            if (start <= num) {
                for (let j = k; j < z; j++) {

                    for (let i = col - y; i > k && start <= num; i--) {
                    newArray[i][j] = start++;
                    }
                } 
            }
  } 

  return newArray;

}


var x = arrayTable(userNumber);
console.log(x);