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

// Header


nav1 = document.querySelector('nav a:nth-child(1)').textContent = siteContent['nav']['nav-item-1'];
nav2 = document.querySelector('nav a:nth-child(2)').textContent = siteContent['nav']['nav-item-2'];
nav3 = document.querySelector('nav a:nth-child(3)').textContent = siteContent['nav']['nav-item-3']
nav4 = document.querySelector('nav a:nth-child(4)').textContent = siteContent['nav']['nav-item-4']
nav5 = document.querySelector('nav a:nth-child(5)').textContent = siteContent['nav']['nav-item-5']
nav6 = document.querySelector('nav a:nth-child(6)').textContent = siteContent['nav']['nav-item-6']


const shop = document.createElement('a')
shop.textContent = 'Shop';
const navBar = document.querySelector('nav');                                                                                                                                                                                                                                                                                                            
navBar.appendChild(shop);


const home = document.createElement('a')
home.textContent = 'Home'
navBar.prepend(home)

const navColor = document.querySelectorAll('a').forEach((element) => {
  element.style.color = 'green';
  element.style.cursor = 'pointer';
});


// Call To Action
ctaText = document.querySelector('.cta-text h1').textContent = siteContent['cta']['h1']
ctaButton = document.querySelector('.cta-text button').textContent = siteContent['cta']['button']
ctaImg = document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src'])

// Main Content
featuresTitle = document.querySelector('.top-content .text-content h4').textContent = siteContent['main-content']['features-h4']
featuresText = document.querySelector('.top-content .text-content p').textContent = siteContent['main-content']['features-content']

aboutTitle = document.querySelector('.top-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4']
aboutTitle = document.querySelector('.top-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content']

mainImg = document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src']

servicesTitle = document.querySelector('.bottom-content .text-content h4').textContent = siteContent['main-content']['services-h4']
servicesText = document.querySelector('.bottom-content .text-content p').textContent = siteContent['main-content']['services-content']

productTitle = document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['product-h4']
productText = document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['product-content']

visionTitle = document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4']
visionText = document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent['main-content']['vision-content']

const topContentColor = document.querySelectorAll('h4').forEach((element) => {
    element.style.color = '#004890';
    element.style.fontSize = '1.3rem';
})
// Contact
contactTitle = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4']
contactAddress = document.querySelector('.contact p:nth-child(2)').textContent = siteContent['contact']['address']
contactNumber = document.querySelector('.contact p:nth-child(3)').textContent = siteContent['contact']['phone']
contactEmail = document.querySelector('.contact p:nth-child(4)').textContent = siteContent['contact']['email']

// footer
footerText = document.querySelector('footer p').textContent = siteContent['footer']['copyright']