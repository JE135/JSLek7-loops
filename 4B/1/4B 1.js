// main.js

let numbers = [3, 4, 5, 6, 7];

function dubb(arr) {
    let doubledNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let dubb = arr[i];
        dubb = dubb * 2;
        doubledNumbers.push(dubb);
    }
    return doubledNumbers;
}

let collectionNumbers = {
    originalNumbers: numbers,
    doubledNumbers: dubb(numbers),
};

document.addEventListener('DOMContentLoaded', function () {
    let messageDiv = document.getElementById('message');
    let doubledNumbersDiv = document.getElementById('doubledNumbers');

    if (messageDiv) {
        messageDiv.innerHTML = '';
    }

    if (doubledNumbersDiv) {
        doubledNumbersDiv.innerHTML = 'Doubled Numbers: ' + collectionNumbers.doubledNumbers.join(', ');
    }
});
