const casual = require('casual');

casual.define('user', function () {
    return {
        email: casual.email,
        firstname: casual.first_name,
        lastname: casual.last_name,
        password: casual.password
    };
});

module.exports = () => {
    const data = {users: []};
    for (let i = 0; i < 50; i++) {
        data.users.push(casual.user);
    }
    return data
};