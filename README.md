# Environment
  - Node version v14.16.1
  - Npm version v6.14.12
  - React version v18.*.*
  - Express v4.*.*
  - Mongoose v6.*.*

# Online Demo

- FE URL => https://xbsonmez.github.io/feedback/
- BE URL => https://feedbackybe.herokuapp.com/

<img width="333" alt="image" src="https://user-images.githubusercontent.com/42543196/169666324-7c19b3d2-9b53-4616-902c-aa1a2046496c.png">


# How to run 

  - 'npm install'
  - 'yarn start' or 'npm run start'
  - 'yarn test' : to show test coverage
  

# Feedback Application 

- It allows users to add new feedbacks. It uses my feedbackBE backend application [feedbackBE](https://github.com/xbsonmez/feedbackyBE).
- There was an icon on the bottom-right side, when click it, it opens feedback modal.
- You can see the success modal and failure modal, according to response situation.
- It send POST request to create feedback.
- You can see the list of feedbacks [feedback list](https://feedbackybe.herokuapp.com/).  
- That application was deployed on [feedback](https://xbsonmez.github.io/feedback/).   
  


- Components (Modal and Message),
- Props (proptypes, defaultprops, etc)
- State (Component & App Level)
- CSS Modules
- Lists & Keys
- Redux -thunk
- HTTP Requests with axios 
- Jest and react-testing-library
- ReactModal
- Antd icons
- Responsive Design


# Easily Integrable

 - You should run 'yarn build'  it created chunks under of build/static/js and build/static/css.
 - You can import these chunks and css your own projext and started to use this project on your application.
 - For example you can use like this. [feedbackApp](https://github.com/xbsonmez/feedback/tree/master/dist).

# Feedback BE  REST API 

You can see this application when click [rest-api](https://github.com/xbsonmez/feedbackyBE). 

- I used node.js and express js for the create rest api.
- I used Mongo DB. 
- I deployed on Heroku.


- You can run with npm run start.
- GET  http://localhost:5000/feedbacks  or https://feedbackybe.herokuapp.com/feedbacks 
- POST http://localhost:5000/feedbacks  or https://feedbackybe.herokuapp.com/feedbacks 
- DELETE http://localhost:5000/feedbacks/:id or https://feedbackybe.herokuapp.com/feedbacks/:id

You can try api:

POST => https://feedbackybe.herokuapp.com/feedbacks 

Body => 
{
    "feedbacks":"test"
}


  


