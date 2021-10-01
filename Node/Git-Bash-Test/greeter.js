const args = process.argv.slice(2);
//Slice to remove the first two values in the list

for (const arg of args) {
    console.log(`Hi there, ${arg}!`);
}