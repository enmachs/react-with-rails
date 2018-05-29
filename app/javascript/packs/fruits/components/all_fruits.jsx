import React, {Component} from 'react';

const AllFruits = (props) => (
  props.fruits.map((fruit) =>{
    return(
      <div key={fruit.id}>
        <h1>{fruit.name}</h1>
        <p>{fruit.description}</p>
      </div>
    )
  })
)

export default AllFruits;
