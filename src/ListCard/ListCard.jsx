import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Card/Card';
import EditCard from '../EditCard/EditCard';
import './ListCard.css';

function mapStateToProps(state) {
    return {
        listUsers: state
    };
}

class ListCard extends Component {
    render() {
        var { listUsers, listCountries } = this.props;
        return (
            <div>
                <h1>Users</h1>
                {listUsers.map((user) => {
                    return(
                        <div key={user.id}>
                            {user.editing ? <EditCard user={user} key={user.id} listCountries={listCountries} /> : <Card  user={user} key={user.id} />}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ListCard);