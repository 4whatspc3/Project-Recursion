const mergeSort = (arr) => {
    if(arr.length === 1){
        return arr
    }

    let mid = Math.floor(arr.length/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right))
}

const merge = (arr1, arr2) => {
    let combined = [],
        i = 0,
        j = 0;

        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                combined.push(arr1[i])
                i++
            } else {
                combined.push(arr2[j])
                j++
            }
        }

        while(i < arr1.length) {
            combined.push(arr1[i])
            i++
        }

        while(j < arr2.length) {
            combined.push(arr2[j])
            j++
        }

    return combined
}

console.log(mergeSort([1,0,6,4,3,20,19, 100]))