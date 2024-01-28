/* 4b - uppgift 2 + 3
Tillägg en ny siffra i numbers-arrayn med push. Generera en ul-list i DOMen med JavaScript.
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 Gör en ny array med tre värden och slå ihop båda arrayn med concat. Generera en ul-list med javascript. */

 const array1 = [3, 4, 5, 6, 7];
 const array2 = [10, 11, 12];
 const combinedArray = array1.concat(array2);
 
 let numbers = [3, 4, 5, 6, 7];
 numbers.push(9);
 
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
     let ulCombinedArray = document.createElement('ul');
 
     if (messageDiv) {
         messageDiv.innerHTML = 'Combined array: ' + combinedArray.join(', ');
 
         // Create unordered list for combined array
         combinedArray.forEach(function (item) {
             let li = document.createElement('li');
             li.textContent = item;
             ulCombinedArray.appendChild(li);
         });
 
         // Append the unordered list to the messageDiv
         messageDiv.appendChild(ulCombinedArray);
     }
 
     if (doubledNumbersDiv) {
         doubledNumbersDiv.innerHTML = 'Doubled Numbers: ' + collectionNumbers.doubledNumbers.join(', ');
     }
     
     // Move the console.log inside the event listener if needed for debugging
     console.log(combinedArray);
 });
 