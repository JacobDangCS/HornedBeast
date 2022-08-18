function beastLayout(){

    const hbArr = [{
      "imageURL": "https://static.wikia.nocookie.net/monsterhunter/images/6/6d/MHRise-Rajang_Render_001.png/revision/latest?cb=20210217224211",
      "title": "Mad Monkey",
      "description": "Seen in the Monster Hunter series. Very strong by nature, but with electricity it becomes nearly unstoppable.",
    },
  
    {
      "imageURL": "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5f/Sebastian-meyer-blackpantherconceptart-rhino-01.jpg/revision/latest?cb=20180501203200",
      "title": "War Rhino",
      "description": "Seen in Marvel's Black Panther. It's real life counterpart is actually a White Rhino.",
    },
    
  ];
  
  
    return <HornedBeasts titleOne={hbArr[0].title} imageurlOne={hbArr[0].imageURL} descrOne={hbArr[0].descr} titleTwo={hbArr[1].title} imageurlTwo={hbArr[1].imageURL} descrTwo={hbArr[1].descr}/>;
  }
  
  function HornedBeasts(props){
    
    return(
      <>

        <div>
          <h2>{props.titleOne}</h2>
          <img src={props.imageurlOne} alt ="1"></img>
          <p>{props.descrOne}</p>
        </div>
        <div>
          <h2>{props.titleTwo}</h2>
          <img src={props.imageurlTwo} alt ="2"></img>
          <p>{props.descrTwo}</p>
        </div>
        
      </>
    );
   
  }
  
  export default HornedBeast;