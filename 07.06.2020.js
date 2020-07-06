// find the shortest 'stick' in the array. subtract the length of shortest
// 'stick' from each value in the array. remove the shortest stick(s) from 
// the array until all are removed. return the length of the array at each
// iteration of removal. 

function cutTheSticks(arr) {
    let newArr =[]
    while(arr.length > 0){
        let min = arr[0]
        for(let i = 0; i < arr.length; i++){
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        newArr.push(arr.length)
        for(let j = 0; j < arr.length; j++){
            if (min - arr[j] == 0){
                arr.splice(j, 1)
                j--
            }else{
                arr[j] -= min
            }
        }
    }
    return newArr;
}

cutTheSticks([5,4, 4, 2, 2, 8])
