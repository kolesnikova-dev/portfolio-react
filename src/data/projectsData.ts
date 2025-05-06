import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "Prompto",
    subheader: "Express - OAuth - PostgreSQL - Docker",
    githubLink: "https://github.com/kolesnikova-dev/prompto",
    liveLink: "https://prompto37.com/",
    video: ["promptoRecording", "video"],
    thumbnails: ["promptoThumbnails", "image"],
    details: {
      Problem: "Users are not familiar with structured prompt engineering.",
      Solution: `Prompto is a backend service of a full-stack application 
      that improves communication with LLMs by guiding users 
      through structured prompt creation using Pentagram format.`,
      "Technical Implementation": `The backend is built with Node.js and Express, using PostgreSQL and Prisma for database interactions. 
      OAuth is implemented using official Google and GitHub libraries. 
      The application runs in a Docker container for consistent environments and is deployed to Render. 
      It uses JWT for secure sessions and integrates Gemini Flash API for enhanced prompt engineering. 
      Jest is used for testing. CI workflows include Husky and Eslint ensuring code quality, then running tests automatically on GitHub.`,
      "Core Features": [
        "OAuth authentication via Google and GitHub",
        "Prompt enhancement using Gemini API",
        "Dockerized environment for local development and deployment",
        "Prisma ORM for database modeling",
        "JWT-based session handling",
        "Swagger for API documentation",
        "Prompt saving, editing, rating, and history features available through the frontend",
      ],
    },
  },
  {
    title: "Distributed Rate Limiter",
    subheader: "Go - Redis - Docker",
    githubLink: "https://github.com/kolesnikova-dev/distributed-rate-limiter",
    video: ["limiterRecording", "video"],
    thumbnails: ["limiterThumbnails", "image"],
    details: {
      Problem: "Rate limiting in distributed systems.",
      Solution: `A distributed rate limiter implemented in Go using the Token Bucket algorithm 
      and Redis for storing tokens. This program is designed to handle bursts of requests 
      efficiently while ensuring atomicity and scalability.`,
      "Technical Implementation": `Runs in a Docker container, to ensure consistent environment.
      Lua scripting for Redis allows for concurrent-safe and atomic operations. 
      The Lua script is loaded and cached on Redis' server, ensuring fast execution.`,
      "Core Features": [
        "Handles bursts of requests by allowing a fixed number of tokens to be consumed within a time window",
        "Uses Redis as a centralized store for tokens, making it suitable for distributed systems",
      ],
    },
  },
  {
    title: "Smart Shopping List",
    subheader: "React - Material UI - Firebase",
    githubLink: "https://github.com/the-collab-lab/tcl-75-smart-shopping-list",
    liveLink: "https://tcl-75-smart-shopping-list.web.app/",
    video: ["smartShopRecording", "video"],
    thumbnails: ["smartShopThumbnails", "image"],
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
      "Core Features": [
        "The application uses a time-based algorithm to analyze users' purchasing patterns",
        "Items are categorized based on repurchase urgency: overdue, soon, kind of soon, and not soon",
        "Lists can be pinned for quick access",
        "Items are intelligently sorted by purchase urgency",
      ],
    },
  },
  {
    title: "Personal Budgeting App",
    subheader: "React - Go - MySQL",
    githubLink:
      "https://github.com/kolesnikova-dev/personal-budgeting-frontend",
    liveLink: "https://personal-budgeting.onrender.com/",
    video: ["budgetingRecording", "video"],
    thumbnails: ["budgetingThumbnails", "image"],
    details: {
      Problem: `Managing personal finances efficiently requires a fast, secure, 
      and intuitive solution for tracking expenses.`,
      Solution: `Personal Budgeting App is a full-stack application offering an easy way to create a budget and add expenses to it.
      Expenses are categorized according to users specific needs.`,
      "Technical Implementation": `Type-safety is considered across both frontend and backend of the application.  
      The frontend is built with modular React components and TypeScript, ensuring maintainability and scalability. 
      TailwindCSS streamlines the development of a responsive interface.
      Developed in Go, providing a secure, efficient, and scalable API. Integrated with a MySQL database hosted on Aiven Cloud for reliability and performance.`,
      "Core Features": [
        "Users can create a budget and manage both checking and savings accounts",
        "Expenses are categorized upon creation",
        "Users receive warnings when expenses exceed available budget",
        "Users can delete expenses and categories, with funds automatically restored upon deletion",
        "Security includes strict CORS policies, CSRF protection, and hashed passwords to protect user data",
      ],
    },
  },
  {
    title: "Weather App",
    subheader: "React - Weather API",
    githubLink: "https://github.com/kolesnikova-dev/weather-app",
    liveLink: "https://local-weather-watch.netlify.app/",
    video: ["weatherRecording", "video"],
    thumbnails: ["weatherThumbnails", "image"],
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
      "Core Features": [
        "Favorites management allows users to easily add and remove locations",
        "Provides quick access to weather data for the places they care about",
        "The interface is intuitive, making navigation and interaction seamless across devices",
      ],
    },
  },
];
