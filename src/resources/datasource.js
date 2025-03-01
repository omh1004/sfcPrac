export const generatorNum = function* (title){
    let count=0;
    while(true){
        yield `${title}_${count++}`; 
    }
} 