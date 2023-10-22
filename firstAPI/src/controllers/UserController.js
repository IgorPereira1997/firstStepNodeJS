const users = require('../mocks/users');

module.exports = {
    listUsers(request, response){
        const { order } = request.query;
        const sortedUsers = users.sort((a, b) => {
            if(order === 'desc'){
                return a.id < b.id ? 1: -1
            }
            return a.id > b.id ? 1: -1
        })
        response.send(200, sortedUsers);
        // response.writeHead(200, { 'Content-Type': 'application/json ' });
        // response.end(JSON.stringify(sortedUsers));
    },
    getUserByID(request, response){
        const { id } = request.params;

        const user = users.find((user) => user.id === Number(id));

        if(!user){
            // response.writeHead(400, { 'Content-Type': 'application/json ' });
            // response.end(JSON.stringify({ error: "User not found" }));
            return response.send(400, {error: 'User not found'});
        }
        // response.writeHead(200, { 'Content-Type': 'application/json ' });
            // response.end(JSON.stringify(user));
        response.send(200, user);
        
    }
};