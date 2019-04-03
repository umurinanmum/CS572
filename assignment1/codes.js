// Global

var bannedWords =['a','b','c'];
var testString = "a u b m";

// Basic

String.prototype.filterWords = function (bannedWords) {

    var result = "";

    var splittedInput = this.split(" ");
    for (let i = 0; i < splittedInput.length; i++) {
        if (bannedWords.includes(splittedInput[i])) {
            result = result + " *** ";
        } else {
            result = result + " " + splittedInput[i] + " ";
        }
    }
    return result;
};


console.log("Output for the basic solution");
console.log(testString.filterWords(bannedWords));

console.log("------------------------");

//async await

async function filterWords2(arr){
    const self=this;

    const helper = function (self) {
        arr.map(
            (item) => {
                self = self.replace(item, '***');
            }
        );
        return self;
    };

    try{
        let result = await helper(self);
        console.log("Output for the async await solution");
        console.log(result);
    }
    catch(error){
        console.log('Error occured: ',error);
    }
};

String.prototype.filterWords2 = filterWords2;
console.log(testString.filterWords2(bannedWords));

//es 6

(function() {
    String.prototype.filterWords3 = function(arr) {
        let text = this.toString();
        arr.map(word => (text = text.replace(word, "***")));
        return text;
    };
    console.log(testString.filterWords3(bannedWords));
})();

//observable

(function () {
    const rxjs = require('rxjs');
    const { of, from } = rxjs;
    const { map, filter, mergeMap } = require('rxjs/operators');
    String.prototype.filterWords4 = function (arr) {
        let text = this.toString();
        let new_text = [];
        const source = from(text.split(' '));
        const emits = source.pipe(
            map(
                (val) => {
                    if (arr.includes(val) === true) {
                        val = '***';
                    }
                    return val;

                }));
        const subscribtion = emits.subscribe(
            i => {
                new_text.push(i);
            },
            i => { console.log('error occured'); },
            i => {
                new_text.push(i);
            }
        );
        return new_text.join(' ').toString();
    };

    console.log(testString.filterWords4(bannedWords));
})();

//promise

(function () {

    async function filteredWords5(arr) {
        const self = this;
        const helper = function (self) {
            arr.map(
                (item) => {
                    self = self.replace(item, '***');
                }
            )
            return self;
        }
        const new_string = helper(self);
        const promise = function () {
            return new Promise(function (resolve, reject) {
                if (new_string === self.toString()) {
                    reject(self.toString());
                }
                else
                    resolve(new_string);
            });
        }
        promise()
            .then((n) => { console.log('some words are filtered: ', n); })
            .catch((i) => { console.log('no word is filtered: ', i); });
    };
    String.prototype.filterWords5 = filteredWords5;
    console.log(testString.filterWords5(bannedWords));
})();

//week day

(function() {
    let isWeekend = function() {
        const todayDate = new Date();
        const day = todayDate.getDay();
        console.log(day);
        const weekDay = {
            0: "weekend",
            1: "weekday",
            2: "weekday",
            3: "weekday",
            4: "weekday",
            5: "weekday",
            6: "weekend"
        };
        return weekDay[day];
    };

    console.log(isWeekend());
})();








