// DAY 2/366


const reverseSeq = n => {
    const res = [];
    for ( let i = n; i >= 1; i-- ) {
        res.push(i);
    }
    
    return res;
  };


console.log(reverseSeq(5));