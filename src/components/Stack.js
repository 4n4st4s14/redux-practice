import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Stack extends Component {
  render(){
    return(
      <div>
      <Link to="/">home</Link>
        <h3>Title</h3>
      </div>
    )
  }
}

export default Stack;