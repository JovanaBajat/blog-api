import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <h2>Write your story</h2>

        <form method='POST' action='http://localhost:8080/home/add'>
        <div className="myInput">
          <div>
            <input className="inputTitle" type="text" name="title" placeholder="title" required autoFocus/>
          </div>
          <div>
            <input type="text" name="text" placeholder="your story"/>
          </div>
          <div>
            <input type="text" name="author" placeholder="author"/>
          </div>
        </div>
        <button type="submit" className="submit">SUBMIT</button>
        </form>
      </div>
    );
  }

}

export default Form;
