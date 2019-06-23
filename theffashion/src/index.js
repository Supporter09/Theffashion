import {mxFirebase} from './mx'
import './mx.css';
import './index.css';
import riot from "riot";
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/signup.tag";
import "./tags/upload.tag"
import "./tags/itemdetails.tag";
import route from "riot-route";
import "./tags/homepage.tag"
import {checkAuth} from './mx'
import './mx.js'
import './tags/event.tag'
import "./tags/uploadevent.tag"
import './tags/eventdetails.tag'
import './tags/navbar.tag'
import './tags/footer.tag'

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
riot.mount('*',{})
const navbar = riot.mount("navbar",{})
const footer = riot.mount('footer',{})

checkAuth().then((user)=>{
  navbar[0].opts.email = user.email;
  navbar[0].update();
  console.log(user.email);
}).catch(()=>{  
})

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
route("/upload", () =>{
  const upload = riot.mount("div#root", "upload");
  document.getElementById("uploadform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value
    // const emotion = document.querySelector('input[name=emotion]:checked').value
    const price = document.getElementById("price").value
    const description = document.getElementById("description").value
    const type = document.getElementById('type').value
    const age = document.getElementById('age').value
    const files = []
    document.querySelectorAll("input[type=file]").forEach(element => {
      if (element.files[0]) {
        files.push(element.files[0])
      }
    });
    console.log(title);
    console.log(description);
    console.log(age)
    console.log(type)
    const fileUrls = await mxFirebase.putFiles(files);
    console.log(fileUrls);
    const r = await mxFirebase.collection('products').save({
    title,
    fileUrls,
    price,
    age,
    description,
    type
    });
    console.log(r);
    window.location.href ="/home"
  })

})
  
route('/home..', async () => {
  const query = route.query();
  console.log(query)
  const filter = {}
  query.type ? filter.type = query.type : '';
  query.age ? filter.age = query.age : '';
  console.log(filter);
  
  const products = (await mxFirebase.collection("products").paginate(1,100,filter, '')).data; // { data: [], total: 99 } 
  const opts = {
    currentType : query.type ? query.type: '',
    currentAge : query.age ? query.age : '',
    products: products, // dua tu JS den HTML
  }
 
  const homepage = riot.mount('div#root','homepage', opts) // de sau const opts

  if(query.age){
    document.getElementById('heading-filter-age').innerHTML = query.age
  } else{
    document.getElementById('heading-filter-age').innerHTML = '<a></a>'
  }
  if(query.type)
    document.getElementById('heading-filter-type').innerHTML = query.type
  else{
    document.getElementById('heading-filter-type').innerHTML = '<a></a>'
  }
  if(!query.age && !query.type){
    document.getElementById('heading-filter-age').innerHTML = 'Our Products'
  }
  var slideIndex = 1;
  showDivs(slideIndex);
  document.getElementById('aa').addEventListener('click',()=>{
    showDivs(slideIndex -= 1)
  })
  document.getElementById('bb').addEventListener('click',()=>{
    showDivs(slideIndex += 1)
  })
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
})
route('/itemdetail..', async()=>{
  const id = route.query()._id;
  const product = (await mxFirebase.collection("products").getOne(id)); // { data: [], total: 99 } 
  // console.log(query2);
  console.log("product",product)
  const opts = {
    product: product, // dua tu JS den HTML
  }
  const itemdetail = riot.mount('div#root','itemdetail', opts) // de sau const opts
})

route("/uploadevent", () =>{
  const upload = riot.mount("div#root", "uploadevent");
  document.getElementById("uploadeventform").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const date = document.getElementById('date').value
    const files = []
    document.querySelectorAll("input[type=file]").forEach(element => {
      if (element.files[0]) {
        files.push(element.files[0])
      }
    });

  console.log(title);
  console.log(description);
  console.log(date);
  const fileUrls = await mxFirebase.putFiles(files);
  console.log(fileUrls);
  await mxFirebase.collection('event').save({
    title,
    fileUrls,
    description,
    date
  });

})
})

route('/eventdetails..', async ()=>{
  const id = route.query()._id;
  const events = (await mxFirebase.collection("event").getOne(id)); // { data: [], total: 99 } 
  // console.log(query2);
  console.log("event",events)
  const opts = {
    events: events, // dua tu JS den HTML
  }
  const eventdetails = riot.mount('div#root','eventdetails', opts) // de sau const opts
});

route('/event..', async ()=>{
  const query = route.query();
  const events = (await mxFirebase.collection('event').paginate(1,100,query, '')).data // lay tat ca moi thu tu database
  const opts = {
      events: events, // dua tu JS den HTML
  }
  const eventpage = riot.mount('div#root','event', opts) // de sau const opts
})
route.start(true);


