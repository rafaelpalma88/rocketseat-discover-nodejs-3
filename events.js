// const events = require('events');
// console.log(events);

const { EventEmitter } = require('events');

const ev = new EventEmitter();

// escuta apenas uma vez
ev.once('saySomethingOnce', message => {
    console.log('Eu ouvi você: ', message);
})

// escuta quantas vezes for
ev.on('saySomething', message => {
    console.log('Eu ouvi você: ', message);
})

ev.emit('saySomething', 'Mayk');
ev.emit('saySomething', 'José');

ev.emit('saySomethingOnce', 'Mayk');
ev.emit('saySomethingOnce', 'José');
