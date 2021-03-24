import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js'
import Footer from './components/footer/footer.js';


// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      // number: 1,
      // urls: [],
      // methods: [],
      // api: [],
      body: [],
      headers: {},
      count: 0,

    }
    // this.number = 1;
  }

  updateResults = (data, headers) => {

    this.setState({

      // urls: [...this.state.urls, data.url.value],
      // methods: [...this.state.methods, data.method.value],
      // api: [...this.state.api, ...data],
      body: data.results,
      count: data.count,
      headers: headers,
    })

  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <div>
        </div>
        <Form updateResults={this.updateResults}/>
        {/* <article></article> */}
        <Results data={this.state}/>
        <Footer />
      </div>
    )
  }
}

export default App;

