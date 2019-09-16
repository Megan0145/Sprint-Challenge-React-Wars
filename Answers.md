# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library used to create interactive UIs. Using components and the useState hook, React only updates the relevant components when state attached to it changes. 

1. What does it mean to think in react?

Thinking in React is breaking your UI into a component hierarchy. This means each component can manage their own state.

1. Describe state.

State is anything within your UI that is subject to change. For example, if you had built a timer application and had the value of the current time within a paragraph element, the state of the text content is subject to change every second 

1. Describe props.

Props are used to pass down properties of a component to child elements within your component hierarchy. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that have an effect on something outside of the function being invoked. Manipulating the DOM is an example of a side effect (eg clicking a button that changes the background color of something within your UI)