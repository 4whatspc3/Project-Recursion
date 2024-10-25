const fibsForLoop = (num) =>{
    let sequence = [0, 1];

    for(let i = 2; i < num; i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }

    return sequence
}


function fibsRecursion (n) {
    if (n < 3) {
        return [0, 1];   
    }

    const sequence = fibsRecursion(n - 1);

    sequence.push(sequence[n - 3] + sequence[n - 2]);

    return sequence;
};