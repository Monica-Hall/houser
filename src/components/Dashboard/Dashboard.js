import React, { Component } from "react";
import House from "../House/House";
import axios from 'axios';
import {Link} from "react-router-dom"


export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            listings: [], 
            name: '',
            address:' ',
            city: '',
            state: '',
            zipcode: 0,
            image_url: '',
            mortgage: '',
            rent: ''
        }

        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get('/api/listings').then(res => {
            this.setState({
                listings: res.data
            })
        })
    }

   handleDelete(id) {
       axios.delete(`/api/house/${id}`).then (() => this.componentDidMount())
   }

    render() {
        let {listings} = this.state; 
        let mappedListings = listings.map((e, i) => {
            return (
                <House
                key={i}
                id={e.id}
                name={e.name}
                address={e.address}
                city={e.city}
                state={e.state}
                zipcode={e.zipcode}
                image_url={e.image_url}
                mortgage={e.mortgage}
                rent={e.rent}
                delete={this.handleDelete}
                />
            )
        })
        return (
            <div>
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <Dashboard/>
                {mappedListings}
            </div>
        )
    }
}