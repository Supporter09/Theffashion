import {mxFirebase} from './mx'
import './mx.css';
import './index.css';
import riot from "riot";
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/signup.tag";
import "./tags/upload.tag";
import route from "riot-route";


var firebaseConfig = {
  apiKey: "AIzaSyAMGoT9pCjix2AEQGzIWirh6ajGvT1lCNM",
  authDomain: "the-f-fashion.firebaseapp.com",
  databaseURL: "https://the-f-fashion.firebaseio.com",
  projectId: "the-f-fashion",
  storageBucket: "the-f-fashion.appspot.com",
  messagingSenderId: "291882028834",
  appId: "1:291882028834:web:548de3f6dd27503a"
};

mxFirebase.init(firebaseConfig);
// firebase.initializeApp(firebaseConfig)

route.base("/")

//SIGN IN//
route("/signin", () => {
  const signin = riot.mount("div#root", "signin");
  document.getElementById("signinform").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value
  try {
       await mxFirebase.signIn(email,password);
       // await firebase.auth().signInWithEmailAndPassword(email,password)
      window.location.href ="/home"
   }   
   catch(err){
     document.getElementById("errormessage").innerText= err.message
   }
}) ;

})
// SIGN UP//
route("/signup", () => {
  const signup = riot.mount("div#root", "signup");
  document.getElementById("signupform").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value
    const repassword = document.getElementById("repassword").value
    if (password==repassword) {
      try {
        await mxFirebase.signUp(email,password);
       // await firebase.auth().signInWithEmailAndPassword(email,password)
      window.location.href ="/home"
      }catch(err){
        document.getElementById("errormessage").innerText= err.message
      }
    }

}) ;

})
 
  // document.getElementById("signupform").addEventListener("submit", async (e)=>{
  //   e.preventDefault();
  //   const email= document.getElementById("email").value
  //   const password = document.getElementById("password").value
  //   const repassword = document.getElementById("repassword").value
  //   if(password==repassword){
  //     try {
  //       await mxFirebase.signUp(email,password);
  //       // await firebase.auth().signInWithEmailAndPassword(email,password)
  //      window.location.href ="/home"
  //   }   
  //   catch(err){
  //     document.getElementById("errormessage").innerText= err.message
  //   }
  //   }else{
  //     document.getElementById("errotmessage").innerText="Oops! Something went wrong! Try again!"
  //   };
    
  
route("/home", () =>{
    const homepage = riot.mount("div#root", "homepage")
})
route("/upload", () =>{
  const upload = riot.mount("div#root", "upload");
  document.getElementById("uploadform").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const emotion = document.querySelector('input[name=emotion]:checked').value
    const title = document.getElementById("title").value
    const files = []
    document.querySelectorAll("input[type=file]").forEach(element => {
      if (element.files[0]) {
        files.push(element.files[0])
      }
    });
    const category = document.getElementById("category").value
  console.log(emotion);
  console.log(title);
  console.log(files);
  console.log(category);
 const fileUrls = await mxFirebase.putFiles(files);
 console.log(fileUrls);
 const r = await mxFirebase.collection('products').save({
   emotion,
   title,
   fileUrls,
   category
 });
 console.log(r);
})
  })
  
route.start(true);
