import React, {Component} from 'react';
import SingleFruit from './single_fruit';

const AllFruits = (props) => (
  props.fruits.map((fruit) =>{
    return(
      <div key={fruit.id}>
        <SingleFruit 
          fruit={fruit}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}
        />
      </div>
    )
  })
)

export default AllFruits;
