import * as types from './actionTypes'

const Links = [
    {
        role: 'GUEST',
        text: 'Welcome',
        link: '/welcome'
    },
    {
        role: 'USER',
        text: 'Şifre Güncelleme',
        link: '/update-password'
    }, {
        role: 'ADMIN',
        text: 'Üye Yönetimi',
        link: '/user-management'
    }, {
        role: 'ADMIN',
        text: 'Uygulama Yönetimi',
        link: '/app-management'
    },
];

const initialState = {
    links: [],
    userrole: '',
    username: ''
};

function roleReducers(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                links: Links.filter(link => link.role === action.user.role),
                userrole: "ROLE_" + action.user.role,
                username: action.user.username,
            };
        default:
            return state;
    }
}

export default roleReducers;