# Redux Practice
Simple javascript file to explore state management concepts used in [React Redux](https://redux.js.org/introduction/getting-started). This was made in conjunction with the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) from Udacity. The related repository can be found [here](https://github.com/udacity/reactnd-redux-todos-goals).

## Style guidelines
### Action name variable groupings
When making new actions and the related variables to store the action names, group the variables according to which reducer they belong to.
### Example
```
//Todo reducer action variables
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

//Goal reducer action variables
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
```
