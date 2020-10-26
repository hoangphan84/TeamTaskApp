# Team Task App
Using this app, members of a team can add a task, pick a task from the list, complete or delete tasks. Any update to the task list be broadcasted to all connected members

## Technologies:
- Backend: Nodejs, Express, Socket.io, MongoDB
- Frontend: React, Redux-Saga, Styled-Components, Storybook, React Flip Move
 ## Features:
 ### DONE:
 - A member can add, complete and delete tasks
 
 ### TODO:
 - Add socket.io to broadcast task list update
 - Members start using the app by entering their names and choose an avatar. When a member picks a task, his/her avatar will appear on the task.
 - When a member disconnects from the app, all tasks picked by this member will be dropped back to new.
 
 ### Development
 - Server: Add nodemon.json file with connection details to the MongoDB. Start the server by running
 ```bash
 yarn start
 ```
 - Client - React App:
 ```bash
 yarn start
 ```
 - Client - Storybook:
 ```bash
 yarn storybook
 ```
 
