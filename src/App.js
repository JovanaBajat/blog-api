import React, {Component} from 'react';
import request from 'request';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Display from './components/Display';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    request("http://localhost:8080/home", (err, res, body) => {
      if (err) {
        console.log(err);
      }
      this.setState({articles: JSON.parse(body)});
      console.log(this.state.articles)
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="mainTitle">Welcome to my blog about React!</h1>
          <Display articles={this.state.articles} />
          <Form action={'http://localhost:8080/home/add'}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
