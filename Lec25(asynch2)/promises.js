let myPromise = new Promise(function (resolve, reject) {
    const a = 7;
    const b = 2;

    if (a == b) resolve("Yes they are equal");
    else reject("No they are not equal");
});

// console.log(myPromise);


// then method when promise is resolved
// resolve function calls this function 
myPromise.then(function (value) {

    console.log(value);
})

// catch method when promise is rejected
myPromise.catch(function (err)
{
    console.log(err);
})