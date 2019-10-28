console.log('hej');

// hent data
db.collection("todos")
    .get()
    .then(function (snapshot) {
        snapshot.docs.forEach(function (doc) {
            console.log(doc.data());
        });
    });