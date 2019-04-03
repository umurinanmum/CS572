var EventEmitter = require('events');

class Gym extends EventEmitter {

    constructor() {
        super();
    }

    start() {
        setInterval(() => {

            this.emit('boom', 'Athlette is working out');

        }, 1000)
    };

}

var gym = new Gym();
gym.on('boom',function (data) {
    console.log(data);
});

gym.start();
