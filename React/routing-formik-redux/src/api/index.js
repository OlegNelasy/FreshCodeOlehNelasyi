import axios from 'axios';

const axiosTaskInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const getTasks = (limit) => axiosTaskInstance.get(`/todos?_limit=${limit}`);

// axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     .then(data => console.log(data.data))
//     .catch(err => console.log(err));

// async function loadTask() {
//     try {
//         const data = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
//         console.log(data.data)
//     } catch (err) {
//         console.log(err);

//     }
// }
// loadTask();

// const axiosInstans = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/todos'
// });

// axiosInstans.get('?_limit=5')
//     .then(data => console.log(data.data))
//     .catch(err => console.log(err));



// 'https://jsonplaceholder.typicode.com/todos?_limit=5'