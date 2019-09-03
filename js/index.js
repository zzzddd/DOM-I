const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

 let nav1=document.querySelectorAll('a')
// nav1.forEach(item =>{
//   nav1=siteContent[item]
// })
nav1[0].textContent=siteContent["nav"][ "nav-item-1"]
nav1[1].textContent=siteContent["nav"][ "nav-item-2"]
nav1[2].textContent=siteContent["nav"][ "nav-item-3"]
nav1[3].textContent=siteContent["nav"][ "nav-item-4"]
nav1[4].textContent=siteContent["nav"][ "nav-item-5"]
nav1[5].textContent=siteContent["nav"][ "nav-item-6"]
nav1.forEach(item => item.style.color='green')//change nav txt color

const newnavelemnt=document.createElement('a')//create new element h1
 newnavelemnt.textContent='New'
 newnavelemnt.style.color='red'
//  newnavelemnt.style.fontSize='20px'
 const header=document.querySelector('nav')
 const newnavelemnt1=document.createElement('a')//create new element h1
 newnavelemnt1.textContent='Old'
 newnavelemnt1.style.color='green'
// const nav=document.getElementByTagName('header')
header.appendChild(newnavelemnt)//add to end of nav elements
header.prepend(newnavelemnt1)//add to biggning of nav elements
let h1=document.querySelector('h1')
h1.textContent=siteContent.cta.h1
let button=document.querySelector('button')
button.textContent=siteContent.cta.button
let simg = document.getElementById("cta-img");
simg.src=siteContent[ "cta"][ "img-src"]

 let h4s=document.querySelectorAll("h4") 
 h4s[0].textContent=siteContent["main-content"]["features-h4"]
 h4s[1].textContent=siteContent["main-content"]["about-h4"]
 h4s[2].textContent=siteContent["main-content"]["services-h4"]
 h4s[3].textContent=siteContent["main-content"]["product-h4"]
 h4s[4].textContent=siteContent["main-content"]["vision-h4"]
 h4s[5].textContent=siteContent["main-content"]["features-h4"]

 let allPs=document.querySelectorAll("p") 
 //xx=Array.from(allPs)
 allPs[0].textContent=siteContent["main-content"]["features-content"]
 allPs[1].textContent=siteContent["main-content"]["about-content"]
 allPs[2].textContent=siteContent["main-content"]["services-content"]
 allPs[3].textContent=siteContent["main-content"]["product-content"]
 allPs[4].textContent=siteContent["main-content"]["vision-content"]
 allPs[5].textContent=siteContent["contact"]["address"]
 allPs[6].textContent=siteContent.contact.phone
 allPs[7].textContent=siteContent.contact.email
 allPs[8].textContent=siteContent.footer.copyright



// let mimg1 = document.getElementByClassName("middle-img");
// mimg1.setAttribute('src', siteContent["main-content"][ "middle-img-src"])

let mddlimg = document.getElementById("middle-img");
mddlimg.setAttribute('src', siteContent["main-content"][ "middle-img-src"])

 let sampleButton = document.querySelector('.cta  .cta-text  button');
 sampleButton.addEventListener('click', (event) => {
   //
   sampleButton.style.color='red'
   sampleButton.style.width='250px'
   sampleButton.style.height='50px'

  //alert("You Click Me.......");
 })