function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length
        ? 1
        : -1
    } else {
        return arr1.reduce((acc, num) => acc += num, 0) > arr2.reduce((acc, num) => acc += num, 0)
        ? 1
        : arr1.reduce((acc, num) => acc += num, 0) === arr2.reduce((acc, num) => acc += num, 0)
        ? 0
        : -1
    }
}