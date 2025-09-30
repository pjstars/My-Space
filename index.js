// Firebase 

const firebaseConfig = {
    apiKey: "AIzaSyBTL8fud_RcqVC2scI_dPMAKFtp9mLTDig",
    authDomain: "my-space-349d2.firebaseapp.com",
    projectId: "my-space-349d2",
    storageBucket: "my-space-349d2.firebasestorage.app",
    messagingSenderId: "971022776479",
    appId: "1:971022776479:web:4fdd025597a5ef77d78aaa",
    measurementId: "G-9R08HBFH41"
};

firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("loginEmailInput").value;
    const password = document.getElementById("loginPasswordInput").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "myspace.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

function signup() {
    const firstName = document.getElementById("signupFirstNameInput").value.trim();
    const lastName = document.getElementById("signupLastNameInput").value.trim();
    const email = document.getElementById("signupEmailInput").value.trim();
    const password = document.getElementById("signupPasswordInput").value;
    const confirmPassword = document.getElementById("signupConfirmPasswordInput").value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert(`Sign up successful! Welcome ${firstName}.`);
            document.getElementById("signupPopup").classList.add("hidden");
            // Optional: clear signup form here if you want
        })
        .catch((error) => {
            alert(error.message);
        });
}
// Show login popup and hide signup if visible
document.getElementById("loginBtn").onclick = function () {
    document.getElementById("signupPopup").classList.add("hidden"); // hide signup
    document.getElementById("loginPopup").classList.remove("hidden"); // show login
};

// Show signup popup and hide login if visible
document.getElementById("signupBtn").onclick = function () {
    document.getElementById("loginPopup").classList.add("hidden"); // hide login
    document.getElementById("signupPopup").classList.remove("hidden"); // show signup
};

// Close login popup
document.getElementById("closePopup").onclick = function () {
    document.getElementById("loginPopup").classList.add("hidden");
};

// Close signup popup (called from inline `onclick`)
function closeSignupPopup() {
    document.getElementById("signupPopup").classList.add("hidden");
}

// Optional: When clicking outside popups, close them
window.onclick = function (event) {
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");

    if (event.target === loginPopup) {
        loginPopup.classList.add("hidden");
    }
    if (event.target === signupPopup) {
        signupPopup.classList.add("hidden");
    }
}

// Optional: Switch from signup to login inside the signup form
function switchToLogin() {
    document.getElementById("signupPopup").classList.add("hidden");
    document.getElementById("loginPopup").classList.remove("hidden");
}

function switchToSignUp() {
    document.getElementById("loginPopup").classList.add("hidden");
    document.getElementById("signupPopup").classList.remove("hidden");
}

function closeSignupPopup() {
  document.getElementById("signupPopup").classList.add("hidden");
}

// Listen for auth state changes on page load
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    // If on login/signup page (e.g., myspace.html), redirect to logged-in page
    if (window.location.pathname.endsWith('myspace.html')) {
      window.location.href = 'space.html'; // or your logged-in landing page
    }
  } else {
    // User is NOT signed in
    // If on logged-in page, redirect to login page
    if (window.location.pathname.endsWith('space.html')) {
      window.location.href = 'myspace.html'; // or your login page
    }
  }
});
