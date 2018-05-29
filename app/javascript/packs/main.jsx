import React, { Component } from 'react'
import WebpackerReact from 'webpacker-react'
import axios from 'axios';
import AllFruits from './fruits/components/all_fruits';
import FruitApp from './fruits/components/fruit_app';
import NewFruit from './fruits/components/new_fruit';

class Main extends Component {
  state = {
    fruits: []
  };

  handleFormSubmit = (name, description) => {
    console.log(name, description);
    let body = JSON.stringify({fruit: {name: name, description:   description} });
    axios.post('http://localhost:3000/api/v1/fruits', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {return res.data})
    .then((fruit)=>{
      this.addNewFruit(fruit)
    })
  };
  addNewFruit = (fruit) => {
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  };
  componentDidMount(){
    axios.get('/api/v1/fruits.json')
         .then((response) => this.setState({ fruits: response.data }))
  };
  render(){
    return (
      <FruitApp>
        <NewFruit 
          handleFormSubmit={this.handleFormSubmit}
        />
        {/* <h1>soy la mas pro</h1> */}
        <AllFruits fruits={this.state.fruits}/>
      </FruitApp>
    )
  }
}
WebpackerReact.setup({Main})
