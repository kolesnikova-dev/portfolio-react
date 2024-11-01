// import { climate, shoppingList, vigenere, weather } from '../assets/projectScreenshots';
import { getUrl } from '../utils/cloudinaryUtils';
import type { Projects } from '../types';

export const projectsData: Projects = {
  0: {
    title: 'Smart Shopping List',
    subheader: 'React.js - Material UI - Firebase',
    githubLink: 'https://github.com/the-collab-lab/tcl-75-smart-shopping-list',
    liveLink: 'https://tcl-75-smart-shopping-list.web.app/',
    video: ['smartShopRecording', 'video'],
    thumbnails: ['smartShopThumbnails', 'image'],
    details: {
      Problem: `Traditional shopping lists are static and don't adapt to users' 
      purchasing patterns, leading to forgotten items and unnecessary store trips.`,
      Solution: `An intelligent shopping list application built with React and Firebase
      that learns from users' purchase history to predict when items need to be restocked.`,
      "Technical Implementation": `Leverages Firestore to track purchase intervals by 
      updating the last purchase date, calculating the next predicted purchase date, 
      and keeping a record of total purchases. React's state management is used to 
      dynamically sort items based on predicted purchase dates. 
      Material UI ensures a responsive, accessible interface across all devices.`,
      "Core Features": `The application uses a time-based algorithm to analyze users' 
      purchasing patterns and categorize items based on how soon they need to be repurchased. 
      Items are grouped into urgency categories such as "overdue," "soon," "kind of soon," 
      and "not soon," depending on their expected repurchase date. Lists can be pinned 
      for quick access, and items are intelligently sorted based on purchase urgency.`,
      Impact: `Users report fewer forgotten items and reduced emergency store visits. 
      The application demonstrates clean, maintainable code architecture while solving 
      a real-world problem through smart data analysis.`
    }
  },
  1: {
    title: 'Climate View',
    subheader: 'React.js - Mongo - Express - Node',
    githubLink: 'https://github.com/kweeuhree/climate-view',
    liveLink: 'https://climate-view-1.onrender.com/',
    video: ['climateRecording', 'video'],
    thumbnails:  ['climateThumbnails', 'image'],
    details: {
      Problem: `As climate data becomes more critical, many platforms fail to present 
      the information in an engaging and informative way.`,
      Solution: `Climate View is a full MERN stack application offering a comprehensive 
      overview of Earth’s climate state as of 2024, allowing users to create accounts, 
      post comments, and engage with the data in an interactive way.`,
      "Technical Implementation": `MongoDB handles data persistence for users and comments. 
      The frontend utilizes React’s state management and a custom useIntersectionObserver 
      hook to control animations, delivering an engaging user experience. 
      NASA-sourced media such as animations, gifs, and videos are seamlessly integrated 
      to illustrate key climate trends. The platform leverages Express and Node for 
      a scalable, reliable backend, ensuring smooth data flow across the app.`,
      "Core Features": `Users can explore a 'History' section that fetches and displays 
      historical climate data.`,
      Impact: `The app enhances public engagement with climate information, fostering 
      a community around climate awareness while using a modern tech stack to showcase 
      responsive and interactive web design.`
    }
  },
  2: {
    title: 'Weather App',
    subheader: 'React.js - Weather API',
    githubLink: 'https://github.com/firstnamenika/weather-app',
    video: ['weatherRecording', 'video'],
    thumbnails: ['weatherThumbnails', 'image'],
    details: {
      Problem: `Most weather apps lack personalization, providing generic data without 
      adapting to the user's specific needs.`,
      Solution: `A weather application that integrates data from a third-party API, 
      providing users with accurate weather data based on their current location 
      or selected favorites.`,
      "Technical Implementation": `The application uses the browser's geolocation API
      to display local weather data and leverages React for an interactive, responsive 
      experience. Users can add up to five favorite locations, which are displayed 
      alongside detailed weather information including hourly forecasts, UV index, 
      and wind conditions.`,
      "Core Features": `Favorites management allows users to easily add and remove locations, 
      providing quick access to weather data for the places they care about. 
      The interface is intuitive, making navigation and interaction seamless across devices.`,
      Impact: `The app improves the user experience by offering a personalized and 
      visually appealing way to access detailed weather data, making it easy to plan 
      daily activities around weather conditions.`
    }
  },
  3: {
    title: 'Vigenere Cipher',
    subheader: 'Python',
    githubLink: 'https://github.com/kweeuhree/vigenere',
    video: ['vigenereRecording', 'video'],
    thumbnails:  ['vigenereThumbnails', 'image'],
    details: {
      Problem: `Basic encryption methods are often too easy to break, 
      limiting their use for secure communication.`,
      Solution: `A Python-based Vigenère cipher tool that allows users to encode and
       decode messages using a keyword for enhanced security.`,
      "Technical Implementation": `This command-line tool provides a user-friendly
      interface for encoding and decoding messages. The user supplies a keyword, 
      which alters the cipher’s encoding pattern, providing a level of security 
      above basic ciphers.`,
      "Core Features": `The interactive command-line interface allows users to enter 
      new messages for encoding or decoding continuously, until they choose to exit. 
      The program requires minimal setup and runs efficiently in any Python environment.`,
      Impact: `This project offers a practical way to explore encryption, 
      with a clear Python implementation of the Vigenère cipher.`
    }
  }
};

