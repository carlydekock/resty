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

//     // create a state object if needed to manage data the component needs

export default function Form(props) {

  // addUrlWithImplicitBinding = () => {
  //   this.setState({
  //     urls: [...this.state.urls, this.state.input],
  //     methods: [...this.state.methods, this.state.method],
  //   });
  // }
  // handleChange = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({ input: e.target.value });
  // }
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
        <form onSubmit={handleSubmit}>
          <label>URL:</label>
          {/* <input className="input-text" name="url" type='text' value={this.state.input} /> */}
          <input id="input-text" name="url" type='text' />
          <button type="submit">GO!</button>
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
      </section>
    )
}