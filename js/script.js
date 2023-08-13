const subhanallahDisplay = document.getElementById("subhanallahDisplay");
const subhanallahIncri = document.getElementById("subhanallahIncri");
const subhanallahDecri = document.getElementById("subhanallahDecri");
const alhamdulilahDisplay = document.getElementById("alhamdulilahDisplay");
const alhamdulilahIncri = document.getElementById("alhamdulilahIncri");
const alhamdulilahDecri = document.getElementById("alhamdulilahDecri");
const allahuakberDisplay = document.getElementById("allahuakberDisplay");
const allahuakberIncri = document.getElementById("allahuakberIncri");
const allahuakberDecri = document.getElementById("allahuakberDecri");
const resetBtn = document.getElementById("resetBtn");
let subhanallahInValue = 0;
subhanallahIncri.addEventListener('click', function(){
        if (subhanallahInValue == 33) {
          alert(" subhanallah is finish go to next tasbih");
        }
    subhanallahInValue ++;
    subhanallahDisplay.innerText = subhanallahInValue;

})
subhanallahDecri.addEventListener('click', function(){
        if (subhanallahInValue === 0) {
          return alert("the count is on zero please click on increment button");
        }
    subhanallahInValue --;
    subhanallahDisplay.innerText = subhanallahInValue;

})



let alhamdulilahInValue = 0;
alhamdulilahIncri.addEventListener("click", function () {
    if (alhamdulilahInValue == 33) {
      return alert(" alhamdulilah is finish go to next tasbih");
    }
  alhamdulilahInValue++;
alhamdulilahDisplay.innerText = alhamdulilahInValue;
  
});
alhamdulilahDecri.addEventListener("click", function () {
    if (alhamdulilahInValue == 0) {
      return alert("the count is on zero please click on increment button");
    }
     alhamdulilahInValue--;
      alhamdulilahDisplay.innerText = alhamdulilahInValue;
    
});



let allahuakberInValue = 0;
allahuakberIncri.addEventListener("click", function () {
    if (allahuakberInValue == 33) {
      return alert(" allahuakber count is finish ");
    }
  allahuakberInValue++;
allahuakberDisplay.innerText = allahuakberInValue;
  
});
allahuakberDecri.addEventListener("click", function () {
  if (allahuakberInValue == 0) {
    return alert("the count is on zero please click on increment button");
  }
  allahuakberInValue--;
  allahuakberDisplay.innerText = allahuakberInValue;
});

resetBtn.addEventListener('click', function(){
    alhamdulilahInValue = 0;
    alhamdulilahDisplay.innerText = alhamdulilahInValue;
    
    subhanallahInValue = 0;
    subhanallahDisplay.innerText = subhanallahInValue;
    
    allahuakberInValue = 0;
    allahuakberDisplay.innerText = allahuakberInValue;

})


