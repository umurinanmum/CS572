var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.prototype.test = function(){
//  const a =  setTimeout(()=>{
//      console.log(this.filter(l => l % 2 == 0));
//  },0)
// }

Array.prototype.even = function () {
    var promise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(this.filter(l => l % 2 == 0));
        });
    });
    return promise;
}

Array.prototype.odd = function () {
    var self = this;
    var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(self.filter(l => l % 2 == 1));
        });
    });
    return promise;
}

console.log('start');

arr.even().then(function (data) {
    console.log(data);
});


arr.odd().then(function (data) {
    console.log(data);
});

// arr.test();

console.log('end');
