// Error - an object that is created to represent a problem
// often occurs with userinput or network
// promise rejection, network, security errors

// try {} - encloses any code that may cause error
// catch {} - catch and handle the error from try{}
// finally {} -alwats execute , use mostly for clean up ex, close files, close connection , release resources 



try{
    const divident =  window.prompt("enter a divident")
    const divisor =  window.prompt("enter a divisor")

    if(divisor === 0){
        throw new Error("you cant divide by 0")
    }

}catch(error){
    console.error(error);
}finally{
    console.log("this always executex");
}

console.log("end line");

