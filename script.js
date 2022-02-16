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