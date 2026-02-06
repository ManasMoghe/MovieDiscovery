# MovieDiscovery

A responsive movie discovery web application built with React that
enables real-time movie search using external REST APIs. The application
features debounced input handling, optimized state management, and
conditional rendering to deliver a smooth user experience.

------------------------------------------------------------------------

## Features

-   Real-time movie search
-   Debounced API calls to reduce unnecessary requests
-   Dynamic rendering using React Hooks
-   Loading state indicators
-   Fallback handling for missing posters
-   Responsive grid layout
-   Clean and minimal UI

------------------------------------------------------------------------

## Tech Stack

**Frontend:**\
React, JavaScript, HTML, CSS

**API:**\
OMDb API

**Build Tool:**\
Vite

------------------------------------------------------------------------

## Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/MovieDiscovery.git

Navigate into the project:

cd MovieDiscovery

Install dependencies:

npm install

Run the development server:

npm run dev

Open the local URL shown in the terminal.

------------------------------------------------------------------------

## Build for Production

npm run build

------------------------------------------------------------------------

## Project Structure

MovieDiscovery │ ├── src │ ├── App.jsx │ ├── main.jsx │ ├── public ├──
package.json └── vite.config.js

------------------------------------------------------------------------

## Key Engineering Decisions

**Debouncing Search Input**\
Implemented a debounce mechanism to prevent excessive API calls while
users type, improving performance and API efficiency.

**State Management with Hooks**\
Used useState and useEffect to control asynchronous data flow and UI
updates.

**Defensive UI Rendering**\
Handled empty results, loading states, and missing images to ensure
consistent user experience.

------------------------------------------------------------------------

## Future Improvements

-   Add movie detail view
-   Implement genre filtering
-   Improve mobile responsiveness

------------------------------------------------------------------------

## Author

**Manas Moghe**\
LinkedIn: linkedin.com/in/manasmoghe
