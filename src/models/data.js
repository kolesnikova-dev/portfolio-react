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
    dsal: {
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
        details: "This a website that is meant to provide an overview of Earth's climate state as of 2024. It is a full MERN stack application where users can create an account and leave comments once logged in. Mongo provides persistence for user and comments data. The website includes animations, gifs and a video sourced mostly from NASA. Animations are achived through state management. 'History' section involves data fetching and will display historical climate data."
    }, 
    1: {
        title: "Weather App",
        githubLink: "https://github.com/firstnamenika/weather-app",
        video: weatherRecording,
        details: "The Vigenère cipher is a method of encrypting alphabetic text where each letter of the plaintext is encoded with a different Caesar cipher, whose increment is determined by the corresponding letter of another text, the key. This is a fun cryptography project with Python 3."
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

export const certificationsData = {
    async2024: {
        name: 'JavaScript: Asynchronous Programming',
        level: '2024 - Codecademy',
        image: 'https://github.com/firstnamenika/firstnamenika.github.io/blob/main/certifications/async-2024.png?raw=true',
        details: `Learnt about asynchronous programming and leverage promises 
        in JavaScript. This course was great and helped me to fill the blanks. 
        Built a movie finder application using Fetch API upon completion.`
    },
    buildingInteractive2024: {
        name: 'Building Interactive JavaScript Websites Course',
        level: '2024 - Codecademy',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/building-interactive-2024.png',
        details: `Learnt to create webpage interactivity by leveraging JavaScript 
        events in the browser.`
    },
    js2024: {
        name: 'JavaScript Course',
        level: '2024 - Codecademy',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/js-2024.png',
        details: `Grasped fundamentals of JavaScript, learnt how to work with 
        basic array methods and classes. I am currently upskilling by taking JavaScript Intermediate course.`
    },
    reactibm2023: {
        name: 'Developing Front End Apps with React',
        level: '2024 - IBM',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/front.png',
        details: ` Mastered the fundamentals of React.js, learning how to break 
        down code into reusable components and effectively manage 
        the state of elements within applications.
         Additionally, explored Redux.js, enhancing the ability 
         to manage complex application states.
         Applied knowledge by developing practical projects, 
         including the To Do List and the Shopping Cart applications. `
    },
    agile2023: {
        name: 'Introduction to Cloud Native, DevOps, Agile, and NoSQL',
        level: '2023 - IBM',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/agile.png',
        details: `This course provides a comprehensive foundation in DevOps basics
        and the principles of Agile development. 
        Gained valuable insights into DevOps methodologies, 
        including version control, continuous integration, 
        and deployment strategies.
        Learnt Agile framework, including how to effectively manage 
        projects by writing user stories and implementing Agile practices
        such as sprint planning, daily stand-ups, and retrospectives.`
    },
    dataibm23: {
        name: 'Python Basics for Data Science',
        level: '2023 - IBM',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/data-ibm-2023.png',
        details: ` Gained a solid foundation in Python programming tailored 
        specifically for data analysis and manipulation tasks.
        Discovered essential libraries such as NumPy and pandas, 
        indispensable tools for data manipulation and analysis in Python.`
    },
    python3: {
        name: 'Python 3 Course',
        level: '2023 - Codecademy',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/python-2023.png',
        details: ` Learnt the fundamental concepts of Python, including variables,
        data types, control flow structures, and functions. 
        Built Vigenere Cipher implementation upon completion. 
        This project not only reinforced my understanding of Python 
        fundamentals but also provided me with knowledge that helped me acquire programmatical style of thinking.`
    },
    typescript: {
        name: 'Introduction to Cloud Computing',
        level: '2023 - IBM',
        image: 'https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/certifications/cloud-ibm-2023.png',
        details: `Explored the fundamental principles and technologies that 
        underpin cloud computing. From the basics of HTTP protocols 
        to advanced security measures and encryption techniques. 
        Gained understanding of how data is transmitted, stored, 
        and secured in the cloud.`
    },
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