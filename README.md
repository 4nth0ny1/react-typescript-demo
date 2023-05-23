Link to Playlist
https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&pp=iAQB

Video 15 - useContext Future Value

    1. create 2 files in the /components/context folder: User.tsx and UserContext.tsx
    2.use the video. lots of steps. https://www.youtube.com/watch?v=9726Yq3Scjk&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=15

Video 14 - useContext

    1. create 3 files in /components/context/ directory: Box.tsx, theme.ts, ThemeContext.tsx
    2. this video just goes over how to setup a useContext situation and barely uses typescript. the next video will expand on this.

Video 12, 13 - useReducer & useReducer Strict Action Types

    useReducer
    1. create /component/state/Counter.tsx component
    2. add type for CounterState and CounterAction

    Strict Action Types
    1. currently we have CounterAction type set to string. Which means we can pass something other than 'increment,' like 'reset.'
    2. Use string literals to specify what CounterAction type is, like 'increment' | 'decrement'
    3. if you want to add a reset button ... add that to the type and create a button that will allow it.

    Discriminated Unions (recommened)
    4. split CounterAction into two types: UpdateAction & ResetAction
    5. Then create a CounterAction variable and set it to UpdateAction | ResetAction

Video 11 - useState Type Assertion

    1. we are assuming for this video that you can't logout
    2. removing logout code from User.tsx file
    3. specifiy just <AuthUser> and make the inital value ... useState<AuthUser>({} as AuthUser)
    4. this will allow us to access user.name and user.email without a question mark check.
    5. we are lying to typescript and saying we know better than the compiler

Video 9, 10 - useState Hook & useState Future Value

    9. useState
        1. create /components/state/LoggedIn.tsx
        2. when you add false into useState(false) it creates inference and typescript is smart enough to know that isLoggedIn must be a boolean.

    10. useState Future Value
        1. create /components/state/User.tsx
        2. if you don't know what the value of user will be and you set it to null initially, then you need to define the AuthProps and insert | null into the component paramter.
        3. it's the type of the future value and the initial value

Video 8 - Prop Types and Tips

    Destructuring Props
        1. Goto Input.tsx and destructure

    Exporting Types
        1. You can move the types into a separate file
        2. Person.tsx. we will move the type out into it's own file
        3. create /components/Person.types.tsx
        4. copy and paste the PersonProps
        5. Then export the props in the new file
        6. back to Person.tsx and import it.

    Reusing Types
        1. In Person.types.ts, reorganize the code to make the type reusable
        2. You can also export the type itself and resuse that too.
        3. Go to PersonList.tsx and do the same thing
        4. I also destructured the names prop and modified the component

Video 7 - Style Props

    Container Component
        1. Create the Container Component
        2. pass the styles in as props instead of hardcoded into the component
        3. must use the React.CSSProperties the in the type to restrict anything but valid CSS

Video 6 - Event Props

    Button Component
        1. Create Button File
        2. Add the type ButtonProps
        3. pass the event from App.tsx to Button.tsx

        When you need the event passed into your clickHandler
            1. add event into ButtonProps

        With id parameter
            1. add id: number to handleClick in ButtonProps
            2. add parameter to the return in the Button
            3. this did not work <deleted>

    Input Component
        1. Create Input.tsx component

        Adding handleInputChange
        1. You can also add in the handler inside the component itself instead of the type props

Video 5 - Advanced Props

    Union of String Literals

        1. Create components/Status.tsx
        2. In order to restrict what string props are passed down, you can set the type of status in Status.tsx to string literals that are allowed.
        a. 'loading' | 'success' | 'error'
        b. stops you from passing in any old string
        c. if I were to pass 'hello' .... I would get this error ... Type '"hello"' is not assignable to type '"loading" | "success" | "error"'.

    Children Props

        1. Created /components/Heading.tsx
        2. added ChildrenProps type to it.
        3. created /components/Oscar.tsx
        4. utilized the <Heading> component and passed children through <Heading> to Oscar. using React.ReactNode for the type of OscarProps

    Optional Type

        1. use the Greet component again in App.tsx
        2. if we didn't want to pass messageCount, because there aren't any, we couldn't do that because typescript is expecting a value.
        3. we can change to messageCount? type in Greet.tsx to make it optional.
        4. you can also destructure messageCount in Greet.tsx so that if it is not passed in it will default to 0.

Video 4 - Basic Props

    1. Convert number of unread messages to a prop
    2. Created isLoggedIn boolean type
    3. Typing an Object Prop
    a. Created /components/Person.tsx
    b. pass in PersonName object to Person.tsx
    4. Typing an Array Prop
    a. same process as above, but you must add the [] in the type to the end of the object
    b. also, must map the results like normal.

Video 3 - Typing Props

    1. Created /components/Greet.tsx and imported into App.tsx
    2. add name prop to Greet Component in App.tsx, then passed it down to Greet.tsx
    a. to fix the parameter type any, created type Greet props and set name to string
    b. after this, if you were to pass down a number 10 from App.tsx to Greet.tsx you would get an error saying "type 'number' is not assignable to type 'string'."
