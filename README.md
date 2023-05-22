Link to Playlist
https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&pp=iAQB

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
