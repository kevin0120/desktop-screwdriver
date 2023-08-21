const myPromise = new Promise((resolve, reject) => {
    console.log("!!!!!!!!!!!!!!!!!!")
    setTimeout(() => {
        const randomNumber = Math.random();
        console.log("@@@@@@@@@@@@@@@@@@@@@")
        if (randomNumber < 0.5) {
            console.log("#######################")
            resolve('Success');
        } else {
            console.log("$$$$$$$$$$$$$$$$$")
            reject('Error');
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log('Promise resolved:', result);
    })
    .catch((error) => {
        console.log('Promise rejected:', error);
    });

console.log("%%%%%%%%%%%%%%%%%%%%%")