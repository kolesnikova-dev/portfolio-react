import githubLogo from '../assets/images/GitHub_Logo_White.png';
import climateRecording from '../assets/videos/screen-recording.mp4';
import weatherRecording from '../assets/videos/weather-recording.mp4';

export const navBarData = ['home', 'skills', 'projects', 'certifications', 'contact'];

export const introductionData = {
    greeting: "Hi, I'm Nika!",
    introduction: `I am a software engineer. 
     My interest lies in finding ways to make living more sustainable and less intrusive. 
     I am having fun in React and RESTing in between.`
 };

export const skillsData = {
    javascript: {
        name: 'JavaScript',
        level: 'Intermediate',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png'
    },
    git: {
        name: 'Git',
        level: 'Intermediate',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png'
    },
    react: {
        name: 'React',
        level: 'Early Intermediate',
        image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg'
    },
    express: {
        name: 'Express',
        level: 'Early Intermediate',
        image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png'
    },
    css: {
        name: 'CSS',
        level: 'Early Intermediate',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
    },
    mongoose: {
        name: 'Mongoose',
        level: 'Early Intermediate',
        image: 'https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png'
    },
    python: {
        name: 'Python',
        level: 'Early Intermediate',
        image: 'https://docs.python.org/3/_static/py.svg'
    },
    typescript: {
        name: 'TypeScript',
        level: 'Beginner',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png'
    },

 };

export const projectsData = {
    0: {
        title: "Climate View",
        githubLink: "https://github.com/kweeuhree/climate-view",
        video: climateRecording,
        details: "This a website that is meant to provide an overview of Earth's climate state as of 2024. It is a full MERN stack application where users can create an account and leave comments once logged in. Mongo provides persistence for user and comments data. The website includes animations, gifs and a video sourced mostly from NASA. Animations are achieved through state management. 'History' section involves data fetching and will display historical climate data."
    }, 
    1: {
        title: "Weather App",
        githubLink: "https://github.com/firstnamenika/weather-app",
        video: weatherRecording,
        details: `This is a weather app that fetches data from a third party api 
        and displays it on a screen. The code defaults to looking up user location 
        via navigator. A user can add a location to favorites, favorite location 
        are displayed on a screen on the left side. Up to 5 favorite locations can 
        be added. Favorite locations can be removed by clicking on a heart next 
        to locations name and temperature. 
        Fetched data includes hourly weather, sunrise and sunset information, 
        as well as humidity, wind, precipitation and UV index information.

.`
    },
    2: {
        title: "Vigenere Cipher in Python",
        githubLink: "https://github.com/firstnamenika/Vigenere-Cipher",
        image: "https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/images/vigenere.png",
        details: "The Vigenère cipher is a method of encrypting alphabetic text where each letter of the plaintext is encoded with a different Caesar cipher, whose increment is determined by the corresponding letter of another text, the key. This is a fun cryptography project with Python 3."
    }, 
    3: {
        title: "Towers Of Hanoi in Python",
        githubLink: "https://github.com/firstnamenika/towers-of-hanoi",
        image: "https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/images/towers-of-hanoi-python.png",
        details: "This is a Python implementation of Towers of Hanoi game, demonstrating my understanding of stacks and linked list data structures. Working on this project has been valuable, as I was able to practice my skills in building classes." 
    },
    4: {
        title: "Rock Paper Scissors React.js App",
        githubLink: "https://github.com/firstnamenika/rock-paper-scissors",
        image: "https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/images/rock-paper-scissors.png",
        details: "The task was to create an app entirely from scratch. I picked React to be able to manage states of styles of play cards and game result. I had some basic JavaScript code that I reworked into React and styled with vanilla CSS."
    }
 };

export const symbols = {
    forward:`❯`,
    backward: '❮',
    northEast: '⇗',
    copyright: '©',
    closeButton: '⛒'
}; 

export const contactsData = {
    email: 'firstnamenika@gmail.com',
    currentGithub: {
        logo: githubLogo, 
        url:"https://github.com/kweeuhree"
    },
    github: {
        logo: githubLogo,
        url:"https://github.com/firstnamenika"

    },
    linkedIn: {
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
        url: 'https://www.linkedin.com/in/vekolesnikova/'
    }
};

