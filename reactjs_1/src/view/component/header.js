import React, {Component} from "react";

class Header extends Component {
    handleclick = (event)=>{
        this.setState({
            name: event.target.name
        })
    }

    render() {
        return (
            <>
                <div>
                    <input onClick={this.state.name} type={"text"}
                    onChange={(event)=>{this.handleclick(event)}}/>
                    my name is {this.state.name}
                </div>
                <div>

                </div>
            </>
        )
    }
}
export default Header