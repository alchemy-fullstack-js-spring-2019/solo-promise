const fsPromises = require('fs').promises;

fsPromises.readFile('./1_promises.md', {encoding: 'utf8'})
    .then(data=>{
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    });


    //the first one that you get a response will send the data.
   Promise.race([
    ///function
    //function/
    //function
   ])
    .then(data => console.log(data));

    //waits for all functions to run, returns array 
    //of all things functions return
    Promise.all([
        ///function
        //function/
        //function
       ])
        .then(([result1, result2, resule3]) =>{
            //now can use destructured reults
        });

        //Promise.resulve(1)
        //turns 1 into a promise insteadof static data...