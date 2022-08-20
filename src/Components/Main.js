import React from 'react';
import HornedBeast from './HornedBeast.js'
import beastData from "../data.json"

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hbArray: beastData
    };
  }
}

render(){
  return(
    <div className="main">
      {this.props.hornAmount == 'All' ? {
        this.state.hbArray.map(beast => {
          return (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              img_url={beast.image_url}
              description={beast.description}
              handleClick={() => this.props.selectBeast(beast)}
              />
          )
        });
      }}
      :
      {let filteredArr = hbArray.filter (beast => beast.horns == this.props.hornChoice)
          filteredArr(beast => {
            return(
              <HornedBeast
                key={beast._id}
                title={beast.title}
                img_url={beast.image_url}
                description={beast.description}
                handleClick={() => this.props.selectBeast}
                />
            )
          })
      }
    </div>
  );
}


export default Main;