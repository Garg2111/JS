// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //NAMED IIFE
    console.log(`DB Connected`);
    
})();  // global scope ke pollution se problem hoti hai kyi baar toh uske pollution ki htane ke liye hmne iife ka use kita

( (name)=> {
    console.log(`DB Connected Two ${name}`);
    
} )("Ansh")