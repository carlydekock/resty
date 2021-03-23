import React from 'react';
import './form.scss';

// function Form() {
//   return(
//     <form className="App-form">
//       <label>URL:</label>
//       <input type="text"></input>
//       <input type="submit"></input>
//     </form>
//   );
// }



//1) define componenent as a class 2) needs to extend React.Component
class Form extends React.Component {

  // 3) define a constructor, run the super() function to get React powers
  constructor() {
    super();
    // create a state object if needed to manage data the component needs
    this.state = {
      // people: ['Jacob'],
      urls: [],
      methods: [],
    }

    // take the special React 'this' that we gained from React.Component and makes sure that is alwaus refers tp react.Component
    // this.addUrl = this.addUrl.bind(this);
  }

  // addUrl() {
  //   this.setState({
  //     urls: [...this.state.urls, ''],
  //     input: '',
  //   })
  // }

  addUrlWithImplicitBinding = () => {
    this.setState({
      urls: [...this.state.urls, this.state.input],
      methods: [...this.state.methods, this.state.method],
    });
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ input: e.target.value });
  }

  handleMethodChange = (e) => {
    // console.log(e.target.value);
    this.setState({ method: e.target.value })
  }

  render() {
    return (
      <section className="App-form">
        {/* <p>People</p> */}
        <form>
          <label>URL:</label>
          <input onChange={this.handleChange} type='text' value={this.state.input} />
          <button type="button" onClick={this.addUrlWithImplicitBinding}>GO!</button>
          {/* <button type="radio" value="GET">GET</button> */}
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="method-buttons">
              <label>
                <input onChange={this.handleMethodChange}  name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>
        <article>
          <ul className="selected-methods">
            {this.state.methods.map((method) => <li>{method}</li>)}
          </ul>
          <ul className="selected-urls">
            {this.state.urls.map((url) => <li>{url}</li>)}
          </ul>
        </article>
      </section>
    )
  }
}

export default Form;