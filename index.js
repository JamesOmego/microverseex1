function abc(n){
    let cummulative=0
    
    for(let i=1;i<=n;i++){
        if(i===1){
            let likes= Math.floor(i/2)
        let shares=Math.floor(likes/2)*3
        cummulative +=shares
        }
        else{
            let likes= Math.floor(cummulative/2)
        let shares=Math.floor(likes/2)*3
        cummulative +=shares
        }

        
//console.log(likes)
    }
    return cummulative
    
}
abc(3)