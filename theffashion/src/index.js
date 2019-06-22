import {mxFirebase} from './mx'
import './mx.css';
import './index.css';
import riot from "riot";
import checkAuth from "./mx";
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/signup.tag";
import "./tags/upload.tag";
import route from "riot-route";
import "./tags/homepage.tag";
// import "./tags/uploadevent.tag";



var firebaseConfig = {
  apiKey: "AIzaSyCqTGbcKde1ez2rqCCw5ZzmMqZn5hblayY",
  authDomain: "nope11.firebaseapp.com",
  databaseURL: "https://nope11.firebaseio.com",
  projectId: "nope11",
  storageBucket: "nope11.appspot.com",
  messagingSenderId: "683310358968",
  appId: "1:683310358968:web:fbf8d85065452703"
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
      window.location.href ="/home";
      // const signinsuccess = document.getElementsByClassName("alert")
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
    const price = document.getElementById("price").value
    const whatsell = document.getElementById("whatsell").value
    const whysell= document.getElementById("whysell").value
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
   category,
   price,
   whatsell,
   whysell
 });
 console.log(r);
})
  })
  

// route("/uploadevent", () =>{
//   const upload = riot.mount("div#root", "uploadevent");
//   document.getElementById("uploadeventform").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const title = document.getElementById("title").value
//     const description = document.getElementById("description").value
//     const eventlike= document.getElementById("eventlike").value
//     const files = []
//     document.querySelectorAll("input[type=file]").forEach(element => {
//       if (element.files[0]) {
//         files.push(element.files[0])
//       }
//     });

//   console.log(title);
//   console.log(files);
// console.log(description);
// console.log(eventlike);
//  const fileUrls = await mxFirebase.putFiles(files);
//  console.log(fileUrls);
//  const r = await mxFirebase.collection('products').save({
//    title,
//    fileUrls,
//    description,
//    eventlike
   
//  });
//  console.log(r);
// })
// })



// checkAuth().then((user)=>{
//     navbar[0].opts.email=user.email;
//     navbar[0].update();
//     console.log(user.email);
// }).catch(()=>{
//   console.log("Noob")
// })
route('/home..', async () => {
  const query = route.query();
  console.log(query);
  
  const products =await mxFirebase.collection('products').getAll();
  console.log(products)
  const opts ={
    products: products
    
  }
  
 const homepage = riot.mount('#root','homepage', opts)
})

route.start(true);



