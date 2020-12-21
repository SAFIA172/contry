import React from 'react'

class Button extends React.Component{

    render(){
        return (

        <div className="btn-group mt-4 mx-4" > 
            {/* <button type="button" class="btn btn-primary">Primary</button> */}
            <button className="btn btn-primary mx-sm-3 " onClick={this.props.onClick}  >
            {this.props.children}
            {this.props.isSelected}
            </button>
            </div>
        )
    }
}export default Button