const fs = require('fs');

try{
    fs.writeFileSync("test-file.txt", "This file written by nodejs file system (fs)");
} catch(err){
    console.log(err);
}