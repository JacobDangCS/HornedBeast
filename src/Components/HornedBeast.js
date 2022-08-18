function beastLayout(){

    const hbArr = [{

      "_id": 1,
      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    },
  
    {
      "_id": 2,
      "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Parent rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
  
    {
      "_id": 3,
      "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a very silly unicorn head mask",
      "keyword": "unicorn",
      "horns": 1
  }]
  
  
    return <HornedBeasts titleOne={hbArr[0].title} imageurlOne={hbArr[0].image_url} descrOne={hbArr[0].description} keyOne={hbArr[0].keyword} hornAmtOne={hbArr[0].horns} 
    titleTwo={hbArr[1].title} imageurlTwo={hbArr[1].image_url} descrTwo={hbArr[1].description} keyTwo={hbArr[1].keyword} hornAmtTwo={hbArr[1].horns}
    titleThree={hbArr[2].title} imageurlThree={hbArr[2].image_url} descrThree={hbArr[2].description} keyThree={hbArr[3].keyword} hornAmtThree={hbArr[2].horns}/>;
  }
  
  function HornedBeasts(props){
    
    return(
      <>

        <div>
          <h2>{props.titleOne}</h2>
          <img src={props.imageurlOne} alt ="1"></img>
          <p>{props.descrOne}</p>
          <p>{props.keyOne}</p>
          <p>hornAmtOne</p>
        </div>

        <div>
          <h2>{props.titleTwo}</h2>
          <img src={props.imageurlTwo} alt ="2"></img>
          <p>{props.descrTwo}</p>
          <p>{props.keyTwo}</p>
          <p>{hornAmtTwo}</p>
        </div>

        <div>  
          <h2>{props.titleThree}</h2>
          <img src={props.imageurlThree} alt ="3"></img>
          <p>{props.descrThree}</p>
          <p>{props.keyThree}</p>
          <p>{hornAmtThree}</p>
        </div>
        
      </>
    );
   
  }
  
  export default HornedBeast;