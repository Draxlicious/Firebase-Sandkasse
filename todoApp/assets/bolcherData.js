// db.collection("bolcher")
//     .get()
//     .then(function (snapshot) {
//         console.log(snapshot);
//     });

(async function () {
  let bolcherRef = db.collection("bolcher")
  // øvelse 1
  let snapshot1 = await bolcherRef.get();
  bolcher.innerHTML += '<li><h3>1. Udskriv alle informatinoner om bolcher.</h3></li>'
  snapshot1.forEach(bolche => {
    let doc = bolche.data();
    bolcher.innerHTML += `<li>1. ${doc.navn}, ${doc.farve}, ${doc.vægt}, ${doc.smagsSurhed}, ${doc.smagsStyrke}, ${doc.smagsType}, ${doc.råvarepris}</li>`
  })
  bolcher.innerHTML += '<li><hr></li>';
  // console.log(snapshot1);

  // øvelse 2

  // let rødeBolcher = await db.collection("bolcher").where('farve', '==', 'Rød').get();
  // console.log(rødeBolcher);
  // bolcher.innerHTML += '<li><h3>1. Udskriv alle navnene på de røde bolcher.</h3></li>'
  // rødeBolcher.forEach(bolche => {
  //   let doc = bolche.data();
  //   bolcher.innerHTML += `<li>1. ${doc.navn}, ${doc.farve}, ${doc.vægt}, ${doc.smagsSurhed}, ${doc.smagsStyrke}, ${doc.smagsType}, ${doc.råvarepris}</li>`
  // })

  // øvelse 3

  //   let array = [];
  //   let rødeBolcher = await db.collection('bolcher').where('farve', '==', 'Rød').get();
  //   rødeBolcher.forEach((bolche)=>{
  //     // console.log(bolche.data());
  //     array.push(bolche.data());
  //   })
  //   let blåBolcher = await db.collection('bolcher').where('farve', '==', 'Blå').get();
  //   blåBolcher.forEach((bolche)=>{
  //     array.push(bolche.data())
  //   })
  //   console.log(array);

  //   bolcher.innerHTML += '<li><h3>1. Udskriv alle navnene på røde og blå bolcher.</h3></li>'
  //   array.forEach(bolche => {
  //     bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`

  // })


  // øvelse 4

  // let array = [];
  // let alphabeticOrder = await db.collection('bolcher').orderBy('navn').get();
  // console.log(alphabeticOrder);
  // alphabeticOrder.forEach((bolche) => {
  //   if(bolche.data().farve != 'Rød'){
  //     array.push(bolche.data())
  //   }
  // })
  // console.log(array);

  // bolcher.innerHTML += '<li><h3>1. Udskriv alle navnene på bolcher der ikke er røde.</h3></li>'
  // array.forEach((bolche) => {
  //   bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`

  // });


  // øvelse 5

  // let array = [];
  // let b = await db.collection('bolcher').orderBy('navn').startAt('B').endAt('B\uf8ff').get();
  // console.log(b);
  // b.forEach((bolche)=>{
  //   console.log(bolche.data());
  //   array.push(bolche.data())

  // })

  //   bolcher.innerHTML += '<li><h3>1. Udskriv alle navnene på de bolcher der starter med b.</h3></li>'
  //   array.forEach((bolche) => {
  //     bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`

  //   });


  // øvelse 6

  // let array = [];
  // let mindstetE = await db.collection('bolcher').orderBy('navn').get();

  // mindstetE.forEach((bolche) => {
  //   if (bolche.data().navn.indexOf('e') > -1) {
  //     array.push(bolche.data())
  //     console.log(bolche.data());
  //   }
  // })

  // bolcher.innerHTML += '<li><h3>1. Udskriv alle navnene på de bolcher der indeholder mere end et e.</h3></li>'
  // array.forEach((bolche) => {
  //   // console.log(bolche);
  //   bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`

  // });


  // øvelse 7

  // let array = [];
  // let vægt = await db.collection('bolcher').orderBy('vægt').where('vægt', '<', 10).get();
  
  
  // vægt.forEach((bolche) => {
  //   console.log(bolche.data());
  //   array.push(bolche.data())
  // })

  //  bolcher.innerHTML += '<li><h3>1. Find og udskriv navn og vægt på alle bolcher der vejer mindre end 10 gram, sorter stigende efter vægt..</h3></li>'
  // array.forEach((bolche)=>{
  //   bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`
  // })
  // console.log(array);


// øvelse 8

// let array = [];
// let alphabeticOrder = await db.collection('bolcher').orderBy('vægt').where('vægt', '>=', 10).where('vægt', '<=', 12).get();

// alphabeticOrder.forEach((bolche)=>{
//   console.log(bolche.data());
//   array.push(bolche.data())
// })
// bolcher.innerHTML += '<li><h3>1. Find og udskriv navne på alle bolcher, der vejer mellem 10 og 12 gram (begge tal inklusiv), sorteret alfabetisk og derefter vægt.</h3></li>'
// array.forEach(bolche => {
//       bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`
// });

// øvelse 9

// let array = [];
// let tungesteBolcher = await db.collection('bolcher').orderBy('vægt').where('vægt', '>=', 11).get(); 

// tungesteBolcher.forEach((bolche)=>{
//   console.log(bolche.data());
//   array.push(bolche.data());
// })
// bolcher.innerHTML += '<li><h3>Find og udskriv de tre største (tungeste) bolcher.</h3></li>'
// array.forEach((bolche)=>{
//   bolcher.innerHTML += `<li>1. ${bolche.navn}, ${bolche.farve}, ${bolche.vægt}, ${bolche.smagsSurhed}, ${bolche.smagsStyrke}, ${bolche.smagsType}, ${bolche.råvarepris}</li>`
// })


// øvelse 10
// let array = [];
// let randomBolche = await db.collection('bolcher').get();
// randomBolche.forEach(bolche => {
//   array.push(bolche.data());
// });

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// let nyVariabel = getRandomArbitrary(0, array.length-1).toFixed() // sæt nummer melelm 0-7 to helt decimaltal
// console.log(nyVariabel); // random nummer og ligger i en variabel
// console.log(array[nyVariabel]); // Ny variabel med index
// console.log(array[1]); // Ny variabel med index

// // ny varabel er indexet der bliver brugt fra arrayet og sætter navnet fra databasen
// bolcher.innerHTML += `<li>1. ${array[nyVariabel].navn}, ${array[nyVariabel].farve}, ${array[nyVariabel].vægt}, ${array[nyVariabel].smagsSurhed}, ${array[nyVariabel].smagsStyrke}, ${array[nyVariabel].smagsType}, ${array[nyVariabel].råvarepris}</li>`

})();










