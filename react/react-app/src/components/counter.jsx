import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        imgUrl:'https://picsum.photos/200'
    }
    render() { 
        return (
        <React.Fragment>
            <span className="badge badge-primary m-2"> {this.formatCount()} </span>
            <img src={this.state.imgUrl} alt=""/>
            <button className="btn btn-success ">Increament</button>
        </React.Fragment>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;