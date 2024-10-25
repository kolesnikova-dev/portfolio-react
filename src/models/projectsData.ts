import climateRecording from '../assets/videos/screen-recording.mp4';
import weatherRecording from '../assets/videos/weather-recording.mp4';
import vigenereRecording from '../assets/videos/vigenere-recording.mp4';
import shopGif from '../assets/videos/shop-video.gif';
import climate from '../assets/projectScreenshots/climate.png';
import shoppingList from '../assets/projectScreenshots/shopping-list.png';
import vigenere from '../assets/projectScreenshots/vigenere.png';
import weather from '../assets/projectScreenshots/weather.png';


export const projectsData = {
    0: {
        title: "Smart Shopping List",
        subheader: "React.js - Material UI - Firebase",
        githubLink: "https://github.com/the-collab-lab/tcl-75-smart-shopping-list",
        liveLink: 'https://tcl-75-smart-shopping-list.web.app/',
        video: shopGif,
        thumbnails: shoppingList,
        details: [`A smart shopping list that learns your purchase habits and makes suggestions, 
        so you don't forget to buy what's important.`,
        `List sorting: Pin important lists.`,
        `Item sorting: Every item is sorted by how soon the item needs to be purchased next`,
        `Responsive Interface: Material UI ensures that the app looks good on any screen`,
    ]
    }, 
    1: {
        title: "Climate View",
        subheader: "React.js - Mongo - Express - Node",
        githubLink: "https://github.com/kweeuhree/climate-view",
        liveLink: 'https://climate-view-1.onrender.com/',
        video: climateRecording,
        thumbnails: climate,
        details: [`An overview of Earth's climate state as of 2024`, 
        `It is a full MERN stack application where users can create an account and leave comments once logged in.`,
        `Mongo provides persistence for user and comments data.`,
        `The website includes animations, gifs and a video sourced mostly from NASA.`, 
        `Animations are achieved through state management, and custom useIntersectionObserver hook.`,
         `'History' section involves data fetching and will display historical climate data.`]
    }, 
    2: {
        title: "Weather App",
        subheader: "React.js - Weather API",
        githubLink: "https://github.com/firstnamenika/weather-app",
        video: weatherRecording,
        thumbnails: weather,
        details: [`A weather app that fetches data from a third party api and displays it on a screen`, 
        `The website will display user's location based on their browser's location navigator.`,
        `A user can add a location to favorites, favorite locations 
        are displayed on screen on the left side. Up to 5 favorite locations can 
        be added. Favorite locations can be removed by clicking on a heart next 
        to locations name and temperature.`, 
        `Fetched data includes hourly weather, sunrise and sunset information, 
        as well as humidity, wind, precipitation and UV index information.`]
    },
    3: {
        title: "Vigenere Cipher",
        subheader: "Python",
        githubLink: "https://github.com/kweeuhree/vigenere",
        video: vigenereRecording,
        thumbnails: vigenere,
        details: [`This Python script allows to encode or decode messages using a keyword-based cipher. 
        It provides a command-line interface for user interaction`,
        `Encoding and Decoding: Choose between encoding and decoding a message.`,
        `Keyword Input: Enter a keyword to modify the encoding pattern.`,
        `Interactive Interface: Continuously prompts the user for new messages until they choose to exit.`,
        `To run this program, users will need a Python-friendly environment.`]
    }, 
 };

//  const oldProjects = {
//     0: {
//         title: "Rock Paper Scissors React.js App",
//         githubLink: "https://github.com/firstnamenika/rock-paper-scissors",
//         details: `The task was to create an app entirely from scratch. 
//         I picked React to be able to manage states of styles of play cards and game result. 
//         I had some basic JavaScript code that I reworked into React and styled with vanilla CSS.`
//     },
//     1: {
//         title: "Towers Of Hanoi in Python",
//         githubLink: "https://github.com/firstnamenika/towers-of-hanoi",
//         details:[`Python implementation of Towers of Hanoi game`, 
//         `Goal of this project is to apply knowledge of stacks and linked list data structures.`, 
//         `Working on this project has been valuable, as I was able to practice my skills in building classes.` ]
//     }
//  }