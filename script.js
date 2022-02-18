
 let h1 = document.querySelector('h1');


 document.querySelector('#text').addEventListener('input', function () {
 h1.textContent = this.value;

});


 document.querySelector('#color').addEventListener('input', function () {
 h1.style.color = this.value;
});

 document.querySelector('#bgcolor').addEventListener('input', function () {
 h1.style.backgroundColor = this.value;
});


document.querySelector('#range').addEventListener('input', function () {
  h1.style.fontSize = this.value + 'px';
 });
 
 document.querySelector('#bold').addEventListener('input', function () {
  h1.style.fontWeight = this.checked ? 'bold' : 'normal';
 });

 document.querySelector('#italic').addEventListener('input', function () {
  h1.style.fontWeight = this.checked ? 'italic' : 'normal';
 });

 document.querySelector('#underline').addEventListener('input', function () {
  h1.style.fontWeight = this.checked ? 'underline' : 'normal';
 });
 

 document.querySelector('border').addEventListener('input', function () {
  h1.style.borderRadius = this.value;
 });
 