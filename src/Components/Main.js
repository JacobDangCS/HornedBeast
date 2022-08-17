import React from 'react';
import HornedBeast from './HornedBeast'




class Main extends React.Component{
  render(){

    return(

<div className = "main">

<HornedBeast 
title={<h2>"HornedBeast1"</h2>}  
image_Url={""}
description={<p>""</p>}/>


<HornedBeast 
title={<h2>"HornedBeast2"</h2>}  
image_Url={""}
description={<p>""</p>}/>


 <HornedBeast 
 title={<h2>"HornedBeast3"</h2>}  
image_Url={""}
description={<p>""</p>}/>


</div>
    )
  }
}

/*Add alt to images*/

export default Main; 