### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 > React is is a front-end framework. 
> 
>  Its uses and when to use it 
is when you want to make resuable view components and 
its easier to build modular applications 


- What is JSX?
>jsx is syntax extension for js, typically used with reacact 
to write html elements and componnts in js code 
>

- What is Babel
>in more detail: a compiler for js that allows 
developers to use next-gen. hs features(ES6, ES7)
that wouldnt be supported by all browser
>compiles jsx to js

- How is a Component created in React?
  
  1. creating a js class or function
  2. Make logic if needed in class/function
  3. return some html to render


- What are some difference between state and props?
  ### State
  > state is Dynamic and you use state for when something needs to change or will change 
  >
  > local to component 
   ### Props
   > passed from parent component to child and is read only for child
   only for component 
   >
  > props are typically static 


- What does "downward data flow" refer to in React?
> downward data flow refers to working in one place, then 
> breaking the code down into smaller resuable peices and 
> putting those reusable peices in different files 

- What is a controlled component?
> form data is is handled by state of component & reflected in UI
- What is an uncontrolled component?
>if react is not in control of form State, Form is mananged by Dom itsself

- What is the purpose of the `key` prop when rendering a list of components?
> The purpose of a key is Making sure each element in the list can be identified if needed 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
> An array index is a poor choice for a key because its not unique. if something is deleted, added or moved in array it changes the indecy numbers in array for keys. you could end up with duplicates 


- Describe useEffect.  What use cases is it used for in React components?
> useEffect is like a side effect for react. the function triggers post the dependcies are changed or used., if no dependencies it only triggers once after first render. 
>
> The use cases for useEffect is if you want something to only happen once, or if you are using set interval and you want to stop the interval 


- What does useRef do?  Does a change to a ref value cause a rerender of a component?
> Returns a mutable object with a key of current 
>
> It does not cause a rerender 

- When would you use a ref? When wouldn't you use one?
  > useRef is useful when you need a global varible or a varible that needs to be resused throughout rerenders without changing (clearing timers setting up, accessing underlying Dom Element)
  > 
  >You dont need useref if you have everChanging varibles that need rerendering upon call

- What is a custom hook in React? When would you want to write one?
  > Llets programmer uses exsisting react hooks and make it into its own function to handle repeated tasks
  > 
   > you would write one when you are repeating repititious 
   side effects, data fetching and  stateful logic
