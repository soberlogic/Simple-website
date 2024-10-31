{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17440\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // script.js\
\
// Get references to navigation links and content container\
const homeLink = document.getElementById('home');\
const aboutLink = document.getElementById('about');\
const contactLink = document.getElementById('contact');\
const content = document.getElementById('content');\
\
// Set up event listeners for each link\
homeLink.addEventListener('click', () => \{\
    content.innerHTML = `\
        <h2>Home</h2>\
        <p>Welcome to the Home page! This is the starting point of our simple multi-file project.</p>\
    `;\
\});\
\
aboutLink.addEventListener('click', () => \{\
    content.innerHTML = `\
        <h2>About</h2>\
        <p>This is the About page. Here you can find more information about this simple project and its creator.</p>\
    `;\
\});\
\
contactLink.addEventListener('click', () => \{\
    content.innerHTML = `\
        <h2>Contact</h2>\
        <p>If you have any questions or want to reach out, you can contact me at <a href="mailto:example@example.com">example@example.com</a>.</p>\
    `;\
\});\
}