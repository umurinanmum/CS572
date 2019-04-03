var dns = require('dns');


//basic
var basic = dns.lookup('www.mum.edu', function (err, addresses, family) {
    console.log(addresses);
});

//promise

var myPromise = function () {

    return new Promise((resolve,reject)=>{
        dns.lookup('www.mum.edu', function (err, addresses, family) {
            resolve(addresses);
        });
    })
};

myPromise().then((data)=>{
    console.log(data);
});


//async

async function write()
{
    await dns.lookup('www.mum.edu', function (err, addresses, family) {
        console.log(addresses);
    });
};

write();
