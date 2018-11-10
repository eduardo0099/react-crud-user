import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit(){
        this.props.dispatch({
            type:'EDIT_USER',
            id: this.props.user.id
        })
    }
    handleDelete(){
        this.props.dispatch({
            type:'DELETE_USER',
            id: this.props.user.id
        });
    }
    render() {
        let { user } = this.props;
        return (
            <div className="card">
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Country: {user.country}</p>
                <button className="button-form" onClick={this.handleEdit}>Edit</button>
                <button className="button-form" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default connect()(Card);