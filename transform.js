import { forStatement } from "@babel/types";

forStatement.promises.readFile('./README.md', { encoding : 'uff8'})
.then(data=>{
    return data.replace(/[A-Z]/g, '');
})
.then(data => data.toUpperCase())
.then(data => [...data].reverse().join(''))
.then(data => console.log);