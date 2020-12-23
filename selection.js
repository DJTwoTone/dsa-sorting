function selectionSort(arr) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for ( let i = 0; i < arr.length; i++) {
        let small = j;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[small] > arr[j]) {
                small = j;
            }
        }
        if (i !== small) swap(arr, i, small);
    }

    return arr;
}

module.exports = selectionSort;