'use strict';

// async function test(){
//     await //send a request for a server
//     console.log(requestRes)
// }

// let a =1;
// let b = 2;
// let c = a +b;
// console.log(c);

// test();

// console.log("Hello");

//////////////////////////////////

function doneAfter5Sec(){ //this needs 5 sec
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Done after 5 sec");
        }, 5000);
    });
}


async function asyncCall() {
    console.log("Done directly");
    const result = await doneAfter5Sec();
    console.log(result);
}

asyncCall();
