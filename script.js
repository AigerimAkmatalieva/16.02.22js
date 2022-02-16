document.querySelector('input[type="text"]') 
.addEventListener('focus', function() {
  this.style.borderColor = "initial"
});
document.querySelector('input[type="text"]') 
.addEventListener('blur', function() {
  if (this.value ==false) {
   this.style.borderColor = "red"
  }
})

document.querySelector('input[type="text"]') 
.addEventListener('change', function() {
  alert('Change')
});

document.querySelector('input[type="checkbox"]') 
.addEventListener('change', function() {
  if (this.checked) {
    alert('You are employed');
   }
  else {
    alert('You are unemployed')
   }
});
