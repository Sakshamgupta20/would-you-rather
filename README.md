# Would You Rather Project

This project lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

Example Users:

username      | passowrd
------------- | -------------
tylermcginnis | 123456
johndoe       | 123456
sarahedo      | 123456
shoyo         | 123456

You can also create new users via sign up page.

# To get started developing right away

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

 Apis will talk to the fake database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`
* `_addUser()`
* `_authenticateUser`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

5) `_addUser` Method

*Description*: Add new user in database.
*Parameters*: Object that contains the following properties: `username`, `name`, `password`, and `avatarURL`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| username | String | The id of the user |
| name | String | The name of the user|
| passoword| String | Password of the user, currentry no encryption is there |
| avatarURL| String | User profile picture |

5) `_authenticateUser` Method

*Description*: Add authenticate user from database.
*Parameters*: Object that contains the following properties: `username`, `password`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| username | String | The id of the user |
| passoword | String | Password of the user, currentry no encryption is there |

## Authors
- [Saksham Gupta](https://github.com/Sakshamgupta20)