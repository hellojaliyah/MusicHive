import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import resources from './mock/resources';
import ResourceList from './components/ResourceList';
import View from './components/View'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


  class App extends Component {
    state = {
      resources: [...resources],
      selected: 1
    };
  
    handleSelect = (id) => {
      this.setState({
        ...this.state,
        selected: id
      });
    };

  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ResourceList resources={this.state.resources} onSelect={this.handleSelect} />
        </Route>
        <Route path="/view/:id" >
          <View
          course={this.state.resources[this.state.selected - 1]} />
        </Route>
      </Switch>
      <p>Footer</p>
    </div>
    </BrowserRouter>
    );
  };
};

export default App;
