import React from 'react';
import Form from 'react-bootstrap/Form';


class Header extends React.Component {

  render() {
    return (

      <div className="header">

        <h1>Horned Beasts</h1>

      <Form.Select onChange = {(e) => this.props.hornChoice(e.target.value)}>
        <option>All</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>100</option>
      </Form.Select>

      </div>
    )
  }
}
export default Header; 