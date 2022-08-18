import React from 'react';
import HornedBeast from './HornedBeast.js'


class Main extends React.Component{

  constructor(props){
    super(props);
}

  render(){
    return(

<div className = "main">

<HornedBeast/>


<HornedBeast/>


</div>
    )
  }
}

/*Add alt to images*/

export default Main; 