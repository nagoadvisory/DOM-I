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

// Add Circular Image
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src',siteContent["cta"]["img-src"])

//Selecting the Nav Bar
const navBar = document.querySelectorAll('nav a');
let navArray = Array.from(navBar)
navBar[0].textContent=siteContent['nav']['nav-item-1'];
navBar[1].textContent=siteContent['nav']['nav-item-2'];
navBar[2].textContent=siteContent['nav']['nav-item-3'];
navBar[3].textContent=siteContent['nav']['nav-item-4'];
navBar[4].textContent=siteContent['nav']['nav-item-5'];
navBar[5].textContent=siteContent['nav']['nav-item-6'];


// Creating DOM is Awesome
let h1Header = document.querySelector('h1');
h1Header.textContent = siteContent["cta"]["h1"];

//Creating Get started button
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];

// Add coding snippet image on screen
let codingSnippet = document.getElementById("middle-img");
codingSnippet.setAttribute('src',siteContent['main-content']['middle-img-src']);


// 2 items above snippet
let featuresHeader = document.querySelector(".top-content div:nth-child(1) h4")
let featuresInfo = document.querySelector(".top-content div:nth-child(1) p")
featuresHeader.textContent = siteContent["main-content"]["features-h4"];
featuresInfo.textContent = siteContent["main-content"]["features-content"];

let aboutHeader = document.querySelector(".top-content div:nth-child(2) h4")
let aboutInfo = document.querySelector(".top-content div:nth-child(2) p")
aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutInfo.textContent = siteContent["main-content"]["about-content"];


// 3 sections below snippet; services, product, vision
let servicesHeader = document.querySelector(".bottom-content div:nth-child(1) h4")
let productHeader = document.querySelector(".bottom-content div:nth-child(2) h4")
let visionHeader = document.querySelector(".bottom-content div:nth-child(3) h4")

let servicesInfo = document.querySelector(".bottom-content div:nth-child(1) p")
let productInfo = document.querySelector(".bottom-content div:nth-child(2) p")
let visionInfo = document.querySelector(".bottom-content div:nth-child(3) p")

servicesHeader.textContent = siteContent["main-content"]["services-h4"];
productHeader.textContent = siteContent["main-content"]["product-h4"];
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

servicesInfo.textContent = siteContent["main-content"]["services-content"];
productInfo.textContent = siteContent["main-content"]["product-content"];
visionInfo.textContent = siteContent["main-content"]["vision-content"];



// creating the Contact section
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactAddressinfo = document.querySelectorAll('.contact p');
let AddressArray = Array.from(contactAddressinfo)
AddressArray[0].textContent = siteContent["contact"]["address"];
AddressArray[1].textContent = siteContent["contact"]["phone"];
AddressArray[2].textContent = siteContent["contact"]["email"];

// creating the Footer
let Foooter = document.querySelector('footer');
Foooter.textContent = siteContent["footer"]["copyright"];
