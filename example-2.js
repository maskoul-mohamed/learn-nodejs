const args = process.argv;

function add(a, b, c){
    return parseInt(a) + parseInt(b) + parseInt(c);
}

let total= add(2, 44, 1);

console.log("total is: " + total);