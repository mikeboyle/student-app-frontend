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