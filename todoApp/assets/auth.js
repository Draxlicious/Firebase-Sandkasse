const loginform = document.querySelector('#loginform');

// login på bruger
loginform.addEventListener('submit', function (event) {
  event.preventDefault();

  document.querySelector('#loginform_error').textContent = '';

  const email = loginform.username.value;
  const password = loginform.password.value;

  // HUSK VALIDERING !!!

  auth.signInWithEmailAndPassword(email, password)
    .then(function (cred) {
      console.log(cred.user);
      loginform.reset(); // ryd loginformen
    })
    .catch(function (error) {
      document.querySelector('#loginform_error').textContent = error.message
    })
});

// log ud af bruger
const logout_button = document.querySelector("#logout_button");
logout_button.addEventListener("click", function () {
  auth.signOut().then(function () {
    console.log("brugeren er logget af");
  });
});

// firebase.auth().signOut()

// opret bruger
const signupform = document.querySelector('#signupform')
signupform.addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelector("#signinform_error").textContent = "";

  const email = signupform.username.value;
  const password = signupform.password.value;

  // if (repassword !== password) {
  //     password.style.backgroundColor = "orange"
  // }

  // HUSK VALIDERING, og der burde nok være et "GENTAG PASSWORD" felt!

  auth.createUserWithEmailAndPassword(email, password)
    .then(function (cred) {
      console.log(cred);
      // tilføj en return handling, som giver os muligheden for at "chaine" .then()
      return db.collection('users').doc(cred.user.uid).set({
        fullname: signupform.fullname.value
      })
    })
    .then(function () {
      signupform.reset();
    })
    .catch(function (error) {
      document.querySelector('#signinform_error').textContent = error.message;
    });

});


auth.onAuthStateChanged(function (user) {
  if (user != null) {
    db.collection("todos").onSnapshot(
      function (snapshot) {
        let changes = snapshot.docChanges();
        changes.forEach(function (change) {
          if (change.type == "added") {
            renderTodo(change.doc);
          } else if (change.type == "removed") {
            let li = todos.querySelector(`li[data-id="${change.doc.id}"]`);
            todos.removeChild(li);
          }
        });
        db.collection('users').doc(user.uid).get().then(function (doc) {
          // hvis der er et dokument, udskrives det, indsæt det i et html element
          if (doc) {
            console.log(doc.data().fullname);
          }
        });
      },
      function (error) {
        console.log(error.message);
        //   Missing or insufficient permissions.
      }
    );

    // vis alle elementer der skal være tilgængelige efter login
    // skjul alle elementer der ikke er relevante for en bruger
  } else {
    // fjern alle elementer i TODO listen
    // skjul elementer der kræver man er logget på
  }

});


