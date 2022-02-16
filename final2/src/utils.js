
const isArrEmpty = (arr) => {
    if (arr !== undefined && arr !== null && arr.Length >0){
        return true;
    }
    return false
}

const dumpLogs=(msg) =>{
    console.log(msg)
}

export {isArrEmpty,dumpLogs}