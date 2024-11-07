const axios = require('axios');
const Query = {
    todos: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    },
};

module.exports = {
    Query,
};