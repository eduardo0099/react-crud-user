import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormCard.css';

class FormCard extends Component {

    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            country: ""
        }
    }
    handleFirstNameChange = (e) =>{
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }
    handleCountryChange = (e) =>{
        this.setState({
            country: e.target.value
        })
    }
    cleanFields = () =>{
        this.setState({
            firstName:"",
            lastName:"",
            country: ""
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        let data = ({
            id: new Date().getTime(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country
        });

        this.props.dispatch({
            type:'ADD_USER',
            data,
        })

        this.cleanFields();
    }
    
    render() {
        let { firstName, lastName, country } = this.state;
        let { listCountries } = this.props;
        return (
            <div className="container-form">
                <h1>Create User</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter First Name" required value={firstName} onChange={this.handleFirstNameChange}/> <br/> <br/>
                    <input type="text" placeholder="Enter Last Name" required value={lastName} onChange={this.handleLastNameChange}/> <br/> <br/>
                    <label htmlFor="country">Select country:</label>
                    <select id="country" value={country} onChange={this.handleCountryChange} required>
                    <option  value={""}>Select a country</option>
                        {listCountries.map((item,i)=>{
                            return(
                                <option key={i} value={item}>{item}</option>
                            )
                        })}
                    </select><br/><br/>
                    <button className="button-form">Save</button>
                </form>
            </div>
        );
    }
}

export default connect()(FormCard);