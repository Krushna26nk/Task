const Rx = require('rxjs');
const http = require('http');

/**
 * @description externally creating the Observables
 */

// let myObservables = new Rx.Subject();
// myObservables.subscribe(value =>{
//     console.log('value subscribe',value);
// })
// myObservables.next('foor');

/**
 * @description internally creating the observable
 */

// let myObservables = Rx.Observable.create( observer =>{
//     observer.next('foo');
//     setTimeout(()=>observer.next('bar'),1000);
// });

// myObservables.subscribe(data =>{
//     console.log('subscribe data',data);
    
// })

/**
 * @description Observables with http call
 */

//  let observable = Rx.Observable.ajax('/home/admin1/Desktop/task/lax/src/app/gitData.json')
//     .subscribe(res => console.log(res),
//     err =>console.log(err));


/**
 * @description observables example with next() error() and complete()
 */



const observable = new Rx.Observable( (subscriber)=>{
   subscriber.next(1);
   subscriber.next(2);
   subscriber.next(3);
   subscriber.next(4);
   subscriber.next(5);

   setTimeout(()=>{
      subscriber.next('final');
      subscriber.complete();
   },1000);
});

console.log('before subscribe');

observable.subscribe({
   next(data) {console.log(data)},
   error(err) {console.log(err)},
   complete(){console.log('done')}
})

console.log('after subscribe')
