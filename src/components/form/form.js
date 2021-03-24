import React from 'react';
import './form.scss';
// import Results from '../results/results.js'

// function Form() {
//   return(
//     <form className="App-form">
//       <label>URL:</label>
//       <input type="text"></input>
//       <input type="submit"></input>
//     </form>
//   );
// }



// //1) define componenent as a class 2) needs to extend React.Component
// class Form extends React.Component {

//   // 3) define a constructor, run the super() function to get React powers
//   constructor() {
//     super();
//     // create a state object if needed to manage data the component needs
//     this.state = {
//       // people: ['Jacob'],
//       urls: [],
//       methods: [],
//     }

//     // take the special React 'this' that we gained from React.Component and makes sure that is alwaus refers tp react.Component
//     // this.addUrl = this.addUrl.bind(this);
//   }

  // addUrl() {
  //   this.setState({
  //     urls: [...this.state.urls, ''],
  //     input: '',
  //   })
  // }

export default function Form(props) {



  //this goes to app.js
  // addUrlWithImplicitBinding = () => {
  //   this.setState({
  //     urls: [...this.state.urls, this.state.input],
  //     methods: [...this.state.methods, this.state.method],
  //   });
  // }
  //this stays
  // handleChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({ input: e.target.value });
  // }
  // //this stays
  // handleMethodChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({ method: e.target.value })
  // }

  //have a handle submit
  // pass data back up to app for what it needs to use
  async function handleSubmit (e) {
    e.preventDefault();
    // console.log(e.target.url.value);
    // console.log(e.target.method.value);

    const request = await fetch(e.target.url.value);
    const data = await request.json();
    const headers = request.headers;
    // console.log('this is data from api', data);

    // let fetchedData = data.results.map(dataObject => dataObject);
    props.updateResults(data, headers);
    
    // props.updateResults(e.target);
  }

  // render() {
    return (
      <section className="App-form">
        {/* <p>People</p> */}
        <form onSubmit={handleSubmit}>
          <label>URL:</label>
          {/* <input className="input-text" name="url" type='text' value={this.state.input} /> */}
          <input id="input-text" name="url" type='text' />
          <button type="submit">GO!</button>
          {/* <button type="radio" value="GET">GET</button> */}
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input  name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>
        {/* <Results /> */}
        {/* <article>
          <ul className="selected-methods">
            {this.state.methods.map((method) => <li>{method}</li>)}
          </ul>
          <ul className="selected-urls">
            {this.state.urls.map((url) => <li>{url}</li>)}
          </ul>
        </article> */}
      </section>
    )
  // }
// }
}
// export default Form;