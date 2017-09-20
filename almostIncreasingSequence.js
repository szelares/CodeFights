function almostIncreasingSequence(sequence) {
    let poss = 0;
    for(var i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i-1]){
            poss ++;
           if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
             return false;}
        } 
} return poss <=1;
}