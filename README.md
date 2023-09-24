# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Netflix GPT

- create React App
- configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setUp
- Deploy app to production
- Create SignUp user account
- Implement Sign In User Api
- Created Redux Store wieht userSlice
- Implemented Sign out
- Update profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to login and vice versa
- Unsubscribed to the onAuthStateChange callback
- Add hardcoded values to the constants file
- Register TMDB API and create an app and get access token
- Get Data from TMDB now playing movies
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for main contauiner & secondary cntainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build secondary component
- Build Movie List
- Build Movie card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind css
- usePopularMovies custom hook
- useTopRatedMovies custom hook
- useUpcomingMovies custom hook
- GPT Search Page
- GPT Search Bar
- Multi-language Feature in our App

# Features

- Login/Sigin Up

  - Sign In / Sigin up

- Browse (after authentification )
  - Header
  - Main Movie
    - Trailer in Background
    - Titile & Discription
    - MoviesSuggestions
      - movie list \* n
- NetflixGPT

  - Search Bar
  - Movie Suggestions

- formic

# Steps for Deployment:

0. Install firebase CLI - 'npm install -g firebase-tools'
1. Firebase Login - 'firebase login'
2. Initilize Firebase - 'firebase init', then select Hosting
3. Deploy command - 'firebase deploy'

- TMDB - login ==> edit profile ==> api

- UI structure of browser page

  - MainContainer
    - videoBackground
    - videoTitle
  - SecondaryContainer
    - MovieList \* n
      - cards \* n

- SecondaryContainer
  - MovieList - Popular
    - MovieCard \* n
  - MovieList - Trending
  - MovieList - Now Playing
  - MovieList - Horror
