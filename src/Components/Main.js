import React from 'react';
import HornedBeast from './HornedBeast.js'


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="main">

        <HornedBeast 
          title = 'beast1'
          img_url = ''
          description = ''

        />

        <HornedBeast 
          title = 'beast1'
          img_url = ''
          description = ''
        />


      </div>
    )
  }
}

/*Add alt to images*/

export default Main; 