/*

*
**
***
****
*****

*/
let row=5;
for(let i=1;i<=row;i++){
    let pattern ='';
    for(let j=1;j<=i;j++){
        pattern+='*';
    }
    console.log(pattern)
}

/*
*****
****
***
**
*
*/

let rows = 5;
for (let a = rows; a >= 1; a--) {
    let patt = '';

    for (let b = 1; b <= a; b++) {
        patt += '*'; 
    }
    console.log(patt);
}
