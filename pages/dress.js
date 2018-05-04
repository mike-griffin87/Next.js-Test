import React from 'react';
import Nav from '../components/navigation.js';
import Data from '../data.json';

let currentDesigner = {};

const Content = (props) => (
  Data.map((designer) => {
    if (designer.designer === props.url.query.designer){
      currentDesigner = designer;
    }
  }),

  <div>
    <h1>{currentDesigner.designer}</h1>
    <p>{currentDesigner.blurb}</p>
    <ul>
      {currentDesigner.dresses.map((d, i) => <li key={i}><img src={require("/assets/images/1.jpg")} />{d.name}</li>)}
    </ul>
  </div>
)
 



class Dress extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Content url={this.props.url}/>
      </div>
    );
  }
}

export default Dress;