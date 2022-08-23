import React from 'react';
import HornedBeast from './HornedBeast.js'

class Main extends React.Component {

  render() {    
    return (
      <div className="main">
        {this.props.hornAmount == 'All' ?
          <>
            {this.props.hbArray.map(beast => (
              <HornedBeast
                key={beast._id}
                title={beast.title}
                img_url={beast.image_url}
                description={beast.description}
                handleClick={() => this.props.selectBeast(beast)}
              />
            )
            )
            }
          </>
          :
          <>
          {
          this.props.filteredArr.map(beast => {
            return (
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
      </>
      }
    </div>
)}
}


export default Main;