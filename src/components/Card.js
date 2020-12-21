import React from 'react';
 //import Button from './Button'



 class Card extends React.Component {


  render() {

    return (
      <div className="card border-black nb-3 col-sm-6 mx-auto mt-4">
        <div className ="card-img-top">
        <p>< img src={this.props.flag}  style={{ width:250, height:200}}alt =""/></p>
        </div>
        <div className="mt-4">
        <p> name: {this.props.name}</p>
        <p> capital:{this.props.capital}</p>
        <p> flag: {this.props.flag}</p>
        <p> population:{this.props.population}</p>
        <p>region:{this.props.region}</p>
        </div>
       
        </div>
    )
  }
} export default Card