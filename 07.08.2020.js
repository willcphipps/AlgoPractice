// Count the number of 'jumps' it takes to reach the last 'cloud'.
// Clouds are represented by the array (c) of values either 0 || 1.
// 0's are cumulus and are safe. 1's are thunderheads and are not safe.
// our 'hero' can either jump one space or two spaces. 


function jumpingOnClouds(c) {
    let count = 0;
    for(let i = 0; i < c.length-1; i++){
        if (c[i + 2] != 1){
            i++
        }
        count++
    }
    return count;
}


// return the minimum number of integers to delete from an array
// in order to 'equalize' of given array. 

function equalizeArray(arr) {
    let count = 0;
    let j = 0;
    arr.sort()
    for(let i=1; i < arr.length; i++){
        if(arr[i] != arr[j]){
            j++
            count++
        }
    }
    return count;
}