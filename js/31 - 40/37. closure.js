




function useState(){
    let count = 0;
    

    function setCount(no){
        count =+ no;
        console.log(count);
    }
    
    return [count, setCount];
    

};

let [count, setCount] = useState();
setCount(count++)
setCount(count++)
setCount(count++)
setCount(count++)
setCount(count++)
setCount(count++)