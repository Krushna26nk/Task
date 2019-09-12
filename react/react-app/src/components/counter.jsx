import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        imgUrl:'https://picsum.photos/200',
        tags : ['tag1','tag2','tag3','tag4']
    };

    handleOnIncreament = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1});
        console.log(this.state.value);
    }
    
    render() {
        const product = "cars";
        console.log('props',this.props);
        return (
        <div>
                {this.props.children}
            <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
            <button className="btn btn-success" onClick={ () => this.handleOnIncreament(product) }>Increament</button>
            {/* <div>
                <ul>
                    {this.state.tags.length === 0 && 'Please create tags .!!'}
                    {this.tagsRender()}
                </ul>
            </div> */}
            {/* <div> */}
            {/* <img src={this.state.imgUrl} alt=""/> */}
            {/* </div> */}
            <button onClick={() =>this.props.onDelete(this.props.id)} className="btn btn-danger m-2 p-2">Delete</button>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'zero' : value;
    }
    tagsRender(){
        if(this.state.tags.length === 0 ) return "There are no tags";
        return this.state.tags.map( (tag) => <li key={tag} >{tag}</li> );
    }
}
 
export default Counter;