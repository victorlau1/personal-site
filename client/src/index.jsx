import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      init: "Victor\'s Site"
    }
  }

  render() {
    return <div>{this.state.init}</div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
module.exports.App = App