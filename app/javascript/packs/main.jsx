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
    }).catch(error => {
      console.log(error);
    });
  };
  addNewFruit = (fruit) => {
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  };
  deleteFruit = (id) => {
    // console.log(this.state.fruits.filter((fruit) => fruit.id != id))
    var frutas = this.state.fruits.filter(fruit => fruit.id != id)
    // console.log(frutas)
    this.setState({
      fruits: frutas
    })
  };
  handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/v1/fruits/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      console.log('Item was deleted!')
      this.deleteFruit(id)
    })
  };
  handleUpdate = (fruit) => {
    // fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, 
    // {
    //   method: 'PUT',
    //   body: JSON.stringify({fruit: fruit}),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    axios.put(`http://localhost:3000/api/v1/fruits/${fruit.id}`, JSON.stringify({fruit: fruit}),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      this.updateFruit(fruit)
    })
  };
  updateFruit = (fruit) => {
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
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
        <AllFruits 
          fruits={this.state.fruits}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </FruitApp>
    )
  }
}
WebpackerReact.setup({Main})
