const userReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_USER':
            return state.concat([action.data]);
        case 'DELETE_USER':
            return state.filter(user => user.id !== action.id);
        case 'EDIT_USER':
            return state.map((user) => user.id === action.id ? { ...user, editing: !user.editing } : user);
        case 'UPDATE':
            return state.map((user) => {
                if(user.id === action.data.id){
                    return {
                        firstName: action.data.firstName,
                        lastName: action.data.lastName,
                        country: action.data.country,
                        editing: false,
                    }
                }else{
                    return user;
                } 
            });
        default:
            return state;
    }
}

export default userReducer;