class FavBtn extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0
      };
    }
    favClicks = () => {
      this.setState(
        {clicks: this.state.clicks++,}
        );
    }
}

export default FavBtn;