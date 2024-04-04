let greeting = React.createElement('h1', {
    id: "greeting",
    className: "greet"
}, 'Hello Bitan Guha Roy');
// it creates an object
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greeting);
// converts the object into one element 


// How to add elements in nested place 

    /* <div id="'parent">

    <div id="child">
        <h1>Hello Bitan</h1>
         <h2>Hello BitanG</h2>

    </div>

    </div> */


let helloBitan = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [React.createElement('h1', {}, 'Hello Bitan'),React.createElement('h2', {}, 'Hello BitanG')]));

// put two elements in the array in a comma separeted manner.

root.render(helloBitan);

// writing code like this hectic 
// so we can use JSX to solve this issue 