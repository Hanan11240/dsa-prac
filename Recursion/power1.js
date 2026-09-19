function power(m,n){
    if(n===0){
        return 1
    }
    if(n%2==0){
        return power(m*m,n/2)
    }else{
        return m * power(m*m, (n-1)/2)
    }
    
}


console.log(power(2,9))