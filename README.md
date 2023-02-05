# 2023-02-05

## STEPS
show / hide
X 1. create the expanded state KONG
X 2. render the grades only if expanded is true; otherwise do not show KONGhttps://beta.reactjs.org/learn/sharing-state-between-components
X 3. toggle the expanded state when the user clicks the button KALILAH

button
X 4. use a ternary or conditional to set the text in the <button> KALILAH
X 5. the text you render should depend on the expanded state KALILAH
X 6. use react icons for the button text CHRISTINA

## QUESTIONS
X 1. Referring to your code, why a parenthesis, and not a curly brace, after mapping through grades on line 45?
X 2. How do we add padding and coloring to the buttons?
3. How can we build a toggle that makes all the cards’ state change?
4. What is VIM and how do we deal with it?
5. How do we undo unwanted git commits?
6. What git tag commands are commonly used in the workplace? `git log --oneline`, `git reset --soft`, `git diff --staged`, etc.

## NOTES


# STEPS 2023-01-29
1. X Add controlled input element with state ZANE
2. X Filter data based on input VICTOR & SAMANTHA
3. X Render “no results” KONG
4. “No results” styling
5. Input styling and other styling


# QUESTIONS
1. When you set the variable dataToDisplay to studentData is that a copy of the data so we don’t make any changes to our API?
2. Is reassigning datattodisplay in our if statement making that varialble only locally scoped?
3. The renderContent function, was it created so you can better read the code since its only handling one thing. Like how would it have been written otherwise?
4. Why is it tricky for data to go from child to parent? What are some ways we can do this?
5. If you type lots of characters into the search, it starts scrolling left and right - is it better to fix it by stopping the scrolling or limiting the number of characters you can search?
6. What are other use cases for the event class?
7. Do you have to wrap the input by a div for better organization or could you just wrap the JSX?
8. How do you decide when to use modifier classes?
9. Can you chain use inherent?
10. How to make search bar fixed while scrolling the student list?

# GOALS
1. X Filter list by input
2. X Handle no results situation
3. X Input styling and any other styling

# STEPS
1. X Create empty <Container /> component John
2. X Render <Container /> with children Samantha
3. X Move existing positioning css from <StudentList /> and <Loading /> into <Container /> JuHao
4. X Make sure <Loading /> and <Error /> are centered Antonio
5. X Styling for <Error /> Ziqian

# NOTES
/**
   * memory
   *                              myArr
   *                               |
   * __ __ __ __ "hello" __ "bye" ["hello"]
   *  
   * 
   * const myString = "hello"
   * myString = "bye"
   * 
   * const myArr = [];
   * myArr.push("hello") // OK
   * myArr = ["yo", "bye", "pizza"] // ERROR
   */

     /**
   * Block Element Modifer (BEM)
   * 
   * StudentCard__avatar--active
   * StudentCard__info
   * block__element--modifier
   * block--modifier
   * 
   * .Container {
   *    &--center {
   *    }
   * }
   * 
   * .Container {
   *  // attrs
   * }
   * 
   * .Container--center {
   *  //attrs
   * }
   */

# QUESTIONS 2023-01-22
X Why is the container component necessary can't we just uses a regular component to make these css changes?

X What’s the difference between the class names Container__center and Container–center? Is it related to scss?

X Why did you use `Boolean()` with the or statement when passing the `center` prop to `Layout`?

X What are the advantages and disadvantages of using an array of class names vs. appending to a string?

X Where do we find and configure the components dev tool?

X Can we pass arrays of class names to other components and modify them?

X How could we incorporate sass in our layout components? 

X How does the npm classnames library work? 

Why is typescript considered a stronger typing system vs javascript?
"TS is a superset of JS"
Other stuff in TS == defining the types of your variables, arguments, and return types, and component props
Typescript has to be compiled into Javascript

TS => JS => Js that browsers understand => bundle into a single JS file

































# TODOS 2023-01-15
X Style the student list
X Handle loading state
X Handle error state
NEXT TIME
Style error state
Refactor with a layout component



# QUESTIONS 2023-01-15
X Why do we need React components to re-render?
    if you want to see something different, the component must re-render.
X What are the three things that make a React component re-render?
    1. State changes
    2. Props changes
    3. Parent rerenders
    (4. Context changes) (don't worry)
X What are the benefits of scss over css?





# TODOs
X Create a frontend React repo for our project
X Connect the repo to our backend server
X Fetch a list of students... and display it
X Break the list of students into React components

# NEXT TIME
Style the list

# QUESTIONS
Backend
X What is middleware and when is it used?
X What exactly does cors do?

Frontend
X What tools will we use to build the frontend?
X When does useEffect fire or not fire? What does an empty dependency array do?
Can you further explain the difference or benefits of using scss instead of css?


# THINGS TO DISCUSS
What causes a React component to rerender?
1. The component's parent renders again
2. The component's props change
3. The component's state changes