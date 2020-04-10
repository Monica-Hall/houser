import React, { Component } from "react";

export default class Wizard extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '', 
            address: '', 
            city: '', 
            state: '', 
            zipcode: 0
        }

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        this.setState({
            name: e.target.value, 
            address: e.target.value, 
            city: e.target.value, 
            state: e.target.value, 
            zipcode: e.target.value
        })
    }


    render() {
        let {name, address, city, state, zipcode} = this.state; 

        return (
            <div>
                <Wizard/> 
                <h2>Property Name: </h2>
                <input 
                value={name}
                name='name'
                onChange={e => this.handleChange(e)}
                />

                <h2>Adress: </h2>
                <input
                value={address}
                name='address'
                onChange={e => this.handleChange(e)}
                />

                <h2>City: </h2>
                <input
                value={city}
                name='city'
                onChange={e => this.handleChange(e)}
                />

                <h2>State: </h2>
                <input
                value={state}
                name='state'
                onChange={e => this.handleChange(e)}
                />

                <h2>Zipcode: </h2>
                <input
                value={zipcode}
                name='zipcode'
                onChange={e => this.handleChange(e)}
                />
            </div>
        )
    }
}