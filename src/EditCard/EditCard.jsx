import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditCard.css';

function mapStateToProps(state) {
    return {

    };
}

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.handleEditUser = this.handleEditUser.bind(this);
        this.state = {
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            country: this.props.user.country
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
    handleEditUser(e){
        console.log("aaaadd");
        e.preventDefault();
        
        let data = ({
            id: this.props.user.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country
        });

        this.props.dispatch({
            type:'UPDATE',
            data,
        })
    }

    render() {
        let { firstName, lastName, country } = this.state;
        let { listCountries } = this.props;
        return (
            <div className="card">
                <form >
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" type="text" placeholder="Enter First Name" required value={firstName} onChange={this.handleFirstNameChange}/> <br/> <br/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" type="text" placeholder="Enter Last Name" required value={lastName} onChange={this.handleLastNameChange}/> <br/> <br/>
                    <label htmlFor="country">Select country:</label>
                    <select id="country" value={country} onChange={this.handleCountryChange} required>
                    <option  value={""}>Select a country</option>
                        {listCountries.map((item,i)=>{
                            return(
                                <option key={i} value={item}>{item}</option>
                            )
                        })}
                    </select><br/><br/>
                    <button className="button-form" onClick={this.handleEditUser}>Update</button>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(EditCard);