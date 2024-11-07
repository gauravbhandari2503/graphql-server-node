const axios = require('axios');

const Todo = {
    user: async (parent) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${parent.userId}`);
        return response.data;
    },
};

const Query = {
    getTodos: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    },
    getAllUsers: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    },
    getUser: async (parent, args) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}`);
        return response.data;
    },
};

module.exports = {
    Query,
    Todo
};