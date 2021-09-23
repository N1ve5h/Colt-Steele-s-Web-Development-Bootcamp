// const sing = async () => {
//   throw new Error("CAN'T SING");
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("Promise Resolve, Here is the data: ", data);
//   })
//   .catch((err) => {
//       console.log("PROMISE REJECTED");
//       console.log(err);
//   });

const  login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'thisPasswordisStrong') return 'Welcome';
    throw 'Invalid Password';
}

login('Hello','thisPasswordisStrong')
    .then(msg =>{
        console.log("LOGGED IN");
        console.log(msg)
    })
    .catch(err =>{
        console.log("ERROR")
        console.log(err);
    })
