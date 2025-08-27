
export function useState(){
    let count = 0;
    

    function setCount(no){
        count =+ no;
        console.log(count);
    }
    
    return [count, setCount];
    

};
