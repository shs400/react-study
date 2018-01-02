import React from 'react'

class ListViewDetail extends React.Component{

    constructor(props){
        super(props);

        this.state = JSON.parse(localStorage.getItem('userData'))
    }

    render(){

        return (
            <div>
                <h2></h2>
                <div>
                    <p>Name : {this.state.name}</p>
                    <p>Age : {this.state.age} </p>
                    <p>Phone : {this.state.phone} </p>
                    <p>Email : {this.state.email} </p>
                </div>
            </div>
        )
    }

}

export default ListViewDetail;