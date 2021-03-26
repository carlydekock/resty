import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js'
import Footer from './components/footer/footer.js';
import { If, Then, Else, When } from 'react-if';
// import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import History from './components/history/history.js';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home-page/home-page.js';
import HelpPage from './components/help-page/help-page.js';
import HistoryPage from './components/history-page/history-page.js';

// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      // number: 1,
      urls: [],
      methods: [],
      // api: [],
      body: [],
      headers: {},
      history: [],
      count: 0,
      isLoading: false,
      initialPage: true,
      isDataVisible: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isDataVisible: !this.state.isDataVisible });
  }

  updateResults = async (userInput) => {
    console.log('this is user input', userInput);
    this.setState({
      initialPage: false,
      isLoading: true,
      urls: [...this.state.urls, userInput.urls],
      methods: [this.state.methods, userInput.methods],
    })

    const request = await fetch(userInput.urls, { methods: userInput.methods });
    const data = await request.json();

    if (data) {
      this.toggleMenu();
    }
    // const headers = request.headers;

    let dataInstance = {
      url: userInput.urls,
      method: userInput.methods,
      body: data,
    }

    let updateHistory = [...this.state.history, dataInstance];
    localStorage.setItem('queryHistory', JSON.stringify(updateHistory));

    await this.setState({
      body: data,
      isLoading: false,
      history: updateHistory,
    })
    // console.log(req.body);
    // const data = await request.json();
    // const headers = request.headers;
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('queryHistory')) || [];
    this.setState({ history });
  }

  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/history" component={HistoryPage}>
            {/* <HistoryPage history={this.state.history} /> */}
            {/* <h1>History</h1>
            <History history={this.state.history} /> */}
          </Route>
          <Route exact path="/help" component={HelpPage}>
            {/* <h1>Help</h1> */}
          </Route>
          {/* <Route exact path="/"> */}
            {/* <h1>Home</h1> */}
            {/* <History history={this.state.history} /> */}
            {/* <Home data={this.state} /> */}
            {/* <Home /> */}
          {/* </Route> */}

        </BrowserRouter>
          <div>
          </div>
          <Form updateResults={this.updateResults} />
          <main>
          <History history={this.state.history} />
          <When condition={!this.state.initial}>
            <If condition={this.state.isLoading}>
              <Then>
                <p>Loading...</p>
              </Then>
              <Else>
                <Results show={this.state.isDataVisible} data={this.state} />
              </Else>
            </If>
          </When>
          </main>
          <Footer />
      </div>
    )
  }
}

export default App;

