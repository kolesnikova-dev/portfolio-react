# Portfolio Website Documentation

## Introduction

Welcome to the documentation for my portfolio website. This application showcases my projects and skills as a software engineer. Built using modern technologies, this portfolio demonstrates my proficiency in **React**, **Vite**, and **TypeScript**. The purpose of this documentation is to provide an overview of the project structure, features, and guidelines for running and contributing to the application.

## Getting Started

### Prerequisites

To run this portfolio website locally, you will need:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable/)

### Installation

To install the application, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kweeuree/portfolio-react.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd portfolio-react
   ```

3.  **Install Dependencies:**
    ```bash
       npm install
    ```

## Running the Application

To start the application, execute the following command:
   ```bash
   yarn run dev
   ```
Once it is running, open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

The project follows a structured approach to ensure maintainability and scalability. Below is an overview of the key directories and files:

```plaintext
src/
├── components/      # Reusable React components used throughout the app
├── data/            # Static data files used across the application
├── pages/           # Page components
├── sections/        # Components that represent sections of the page
├── types/           # TypeScript type declarations 
├── utils/           # Utility functions, such as helpers for Cloudinary uploads, emailjs integrations, or other reusable logic

tests/                # Directory containing Vitest unit tests, located outside of src to keep test code separate from production code

```

## Features

### Current Features

- **Type Safety with TypeScript**: Ensures code reliability and prevents runtime errors by implementing strict type checking throughout the application.

- **Responsive Design with MUI and Custom Styling**: Utilizes Material-UI (MUI) Grid components and custom styling through the Layout component to create a consistent, responsive user interface across all devices.

- **Three.js Animations with React-Three-Fiber**: Integrates dynamic particle effects through Three.js, rendered on a canvas within the `Layout` component for an engaging visual experience. Future enhancements will include additional Three.js animations optimized for performance.

- **Optimized Media with Cloudinary**: Images and videos are hosted on Cloudinary to reduce load times and ensure efficient media delivery, providing an improved user experience.

- **Single-Page Navigation with React Router**: Implements React Router to manage seamless navigation, with a blog tab planned for future enhancement to expand website content.

- **Unit Testing with Vitest**: Utilizes Vitest for testing components, ensuring code quality and reliability through a suite of unit tests.

- **Progressive Web App (PWA) Setup**: Configured with `vite-plugin-pwa` for offline support and installable capabilities, offering users a better mobile experience.

- **Formatting and linting with Husky and Biome**: Configured with pre-commit and pre-push hooks for consistent code quality.


### Future Enhancements

- **Blog Tab**: A planned feature that will allow users to navigate to a dedicated blog section.

- **Advanced Three.js Animations**: uture optimization techniques will be researched and implemented to enhance Three.js animations further.

## Styling and Layout

The application employs the Layout component to maintain a consistent styling framework across all pages. This component integrates Three.js for particle animations, enriching the visual experience. Each section of the MainPage is organized using MUI Grid to facilitate responsive layouts.

## Testing

The application uses Vitest for testing. To run the test suite, run:
   ```bash
       yarn run test
   ```

## Deployment

The portfolio website is deployed using a reliable and efficient setup to ensure optimal performance:

- **Netlify for Hosting**: The application is hosted on Netlify, which provides fast and secure hosting, automatic deployments, and continuous integration. Netlify is integrated with GitHub to automatically deploy any upaddingates pushed to the repository, streamlining the deployment process and ensuring that changes are quickly reflected online.

- **Media Hosting on Cloudinary**: Images and videos are hosted on Cloudinary, a media management platform optimized for fast delivery. This helps reduce the app's load time and enhances user experience by offloading media assets from the main hosting platform.

This deployment strategy combines Netlify's simplicity with Cloudinary’s efficient media delivery, creating a performant and user-friendly application.

## Performance Optimization

To ensure the app is as lightweight and responsive as possible, several optimizations have been implemented:

- **SVG Icons for Optimization**: Originally, the app used icons from the React Icons and MUI Icons libraries, which increased the bundle size. To improve performance, I replaced these with custom SVG elements, which are significantly lighter and contribute to faster load times.

- **Native HTML Elements**: Where possible, I opted for native HTML elements instead of Material UI components. This decision helped reduce dependency on MUI to only essential cases, minimizing bundle size and enhancing overall loading performance.

This combination of optimized hosting, media delivery, and careful component selection ensures a smooth user experience and responsive application performance.

## Future Enhancements

Future upaddingates will include additional features such as a blog section and optimizations for Three.js animations. These enhancements aim to provide users with a richer experience while showcasing my ongoing learning and development.

## Dependencies

- **@emailjs/browser**: For email sending functionalities.
- **@emotion/react and @emotion/styled**: For styling components.
- **@mui/material**: For Material UI components.
- **@react-three/drei, @react-three/fiber, and @react-three/postprocessing**: For Three.js integration.
- **react-router-dom**: For client-side routing.
- **vite-plugin-pwa**: For Progressive Web App features.


## Conclusion
Thank you for reviewing the documentation for my portfolio website. This documentation will be upaddingated regularly as new features are added and improvements are made. If you have any questions or need further assistance, feel free to reach out.