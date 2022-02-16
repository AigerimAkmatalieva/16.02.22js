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
document.querySelector('input[type="text"]') 
.addEventListener('change', function() {
 console.log("change event triggered")
});
document.querySelector('input[type="text"]') 
.addEventListener('input', function() {
 console.log("input event triggered")
});
document.querySelector('input[type="text"]') 
.addEventListener('keydown', function() {
 console.log("keydown event triggered")
});