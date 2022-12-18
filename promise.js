let x = Math.random();
setTimeout(function(){
  console.log(x)},
1000
);


let myPromise = new Promise(function(resolve, reject) {
    if (x>0.5){
       resolve('success')
    }else{
       reject('fail')
  }
});


myPromise.then((message) => {
  console.log(message)
  console.log('complete')
}).catch((message) => {
  console.log(message)
  console.log('complete')
});





// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });



//   //class exercise

//   let movieTimesPromise= new Promise((resolve, reject)=> {
//     setTimeout(function(){
//       const movieTime ={
//         name:'Captain Marvel',
//         time: '19:20',
//         location: 'Meridian 16'
//       };

//       if ('request successful'){
//         resolve(movieTime) // -> sends to .then()
//       }else{
//         reject('errorMessage')  // --> sends to .catch(`errorMessage`)
//       }
//     },1500);
//   })

//   movieTimesPromise.then(function(movieTime){
//     movieDiv.innerHTML =`
//      <h1>${movieTime.name}</h1>
//      <p>
//       ${movieTime.location}:
//       <b>${movieTime.time}</b>
//      </p>
//      `
//   })
// movieTimesPromise.catch(function(e){
//   movieDiv.innerHTML='Unable to get movie times'
// })









