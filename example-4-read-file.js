const fs = require('fs');

try{
    const data = fs.readFileSync('test-file.txt', 'utf8');
    console.log(data);
} catch(err){
    console.log(err);
}