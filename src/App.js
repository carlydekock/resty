import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      number: 1,
    }
    // this.number = 1;
  }


  log(num) {
    console.log('Hey from component');
    // in order for this to trigger a re-render we need to call a method passed down from React.Component
    // this makes a re-render is triggered
    this.setState({ number: num + 1 });
  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {/* Here is a header */}
        {/* in order for `this` to refer properly to a react component*/}
          {/* <button onClick={() => this.log(this.state.number)}>Log Something {this.state.number}</button> */}
        </div>
        <Form />
        {/* <article></article> */}
        <Footer />
      </div>
    )
  }
}

export default App;
