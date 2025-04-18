import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "Distributed Rate Limiter",
    subheader: "Go - Redis - Docker",
    githubLink: "https://github.com/kweeuhree/distributed-rate-limiter",
    video: ["limiterRecording", "video"],
    thumbnails: ["limiterThumbnails", "image"],
    details: {
      Problem: "Rate limiting in distributed systems.",
      Solution: `A distributed rate limiter implemented in Go using the Token Bucket algorithm 
      and Redis for storing tokens. This program is designed to handle bursts of requests 
      efficiently while ensuring atomicity and scalability.`,
      "Technical Implementation": `Runs in a Docker container, to ensure consistent environment.
      Lua scripting for Redis allows for concurrent-safe and atomic operations. 
      The Lua script is loaded and cached on Redis' server, ensuring fast execution`,
      "Core Features": `Handles bursts of requests by allowing a fixed number of tokens to be consumed within a time window.
      Uses Redis as a centralized store for tokens, making it suitable for distributed systems.`,
    },
  },
  {
    title: "Smart Shopping List",
    subheader: "React.js - Material UI - Firebase",
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
      "Core Features": `The application uses a time-based algorithm to analyze users' 
      purchasing patterns and categorize items based on how soon they need to be repurchased. 
      Items are grouped into urgency categories such as "overdue," "soon," "kind of soon," 
      and "not soon," depending on their expected repurchase date. Lists can be pinned 
      for quick access, and items are intelligently sorted based on purchase urgency.`,
    },
  },
  {
    title: "Personal Budgeting App",
    subheader: "React.js - Go - MySQL",
    githubLink: "https://github.com/kweeuhree/personal-budgeting-frontend",
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
      "Core Features": `Users can create a budget and manage both checking and savings accounts. The expenses added are categorized. If the expense is more than what
      is available in the budget, the user will be warned of insufficient funds. Users can delete expenses and categories, with deleted expenses automatically restoring the corresponding funds.
      The security is handled with strict CORS policies, CSRF protection, and hashed passwords to protect user data.`,
    },
  },
  {
    title: "Weather App",
    subheader: "React.js - Weather API",
    githubLink: "https://github.com/kweeuhree/weather-app",
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
      "Core Features": `Favorites management allows users to easily add and remove locations, 
      providing quick access to weather data for the places they care about. 
      The interface is intuitive, making navigation and interaction seamless across devices.`,
    },
  },
];
