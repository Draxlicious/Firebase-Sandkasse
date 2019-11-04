// db.collection("bolcher")
//     .get()
//     .then(function (snapshot) {
//         console.log(snapshot);
//     });

(async function() {
    let bolcherRef = db.collection("bolcher")
    // øvelse 1
    let snapshot1 = await bolcherRef.get();
    bolcher.innerHTML += '<li><h3>1. Udskriv alle informatinoner om bolcher.</h3></li>'
    snapshot1.forEach(bolche =>{
        let doc = bolche.data();
        bolcher.innerHTML += `<li>1. ${doc.navn}, ${doc.farve}, ${doc.vægt}, ${doc.smagsSurhed}, ${doc.smagsStyrke}, ${doc.smagsType}, ${doc.råvarepris}</li>`
    })
    bolcher.innerHTML += '<li><hr></li>';
    console.log(snapshot1);
  })();

// var bolcher = document.querySelector("#bolcher")
// console.log(bolcher);

// db.collection("bolcher").add({


// })









