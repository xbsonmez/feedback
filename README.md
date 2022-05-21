# Environment
  - Node version v14.16.1
  - Npm version 6.14.12
  - React version 18.*.*
  - Express 4.*.*
  - Mongoose 6.*.*
  

# FeedBack Application 

- It allows users to add new feedbacks. It uses my feedbackBE backend application [feedbackBE](https://github.com/xbsonmez/feedbackyBE).
- There was an icon on the bottom-right side, when click it, it opens feedback modal.
- When the response was succesful you can see the succes modal and the response was fail, you can see failure modal.
- it send POST request for create feedback.
- You can see the list of feedbacks [feedback list](https://feedbackybe.herokuapp.com/).  
- That application was deployed in [feedback](https://xbsonmez.github.io/feedback/).   


- Components (Modal and Message),
- Props (proptypes, defaultprops, etc)
- State (Component & App Level)
- CSS Modules
- Lists & Keys
- Redux -thunk
- HTTP Requests with axios 
- jest and react-testing-library
- ReactModal


# Easily Integrable

 - When you run "yarn build"  it created chunks under of build/static/js and build/static/css.
 - you can import a html these chunks and css you can use this project on your application.
 - for example you can use like this. [feedbackApp](https://github.com/xbsonmez/feedback/tree/master/dist).

# Feedback BE  REST API 

You see this application when click [rest-api](https://github.com/xbsonmez/feedbackyBE). 

- I used node.js and express js for the create rest api.
- I used Mongo DB. 
- I deployed on Heroku.


- You can run npm run start.
- GET  http://localhost:5000/feedbacks 
- POST http://localhost:5000/feedbacks 
- DELETE http://localhost:5000/feedbacks/62855d8936d0ff682cbad826

You can try api :

POST => https://feedbackybe.herokuapp.com/feedbacks 

Body => 
{
    "feedbacks":"test"
}


  


