function countSquares(cuts){
    if (cuts === 0){
        return 1;
    } else{
        return Math.pow(cuts + 1,3) - Math.pow(cuts - 1, 3);
    }
} 


// countSquares = cuts => Math.pow(cuts + 1,3) - Math.pow(cuts - 1,3);


    console.log(countSquares(5));
    console.log(countSquares(16));
    console.log(countSquares(23));