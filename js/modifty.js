let initial = 0;
function increment(target) {
  const name = target.parentNode.parentNode.childNodes[1].innerText;
  if (initial > 32) {
    return alert(`The  tasbih count for ${name} is finish`), (initial = 0);
  }
  initial += 1;
  const count = (target.parentNode.parentNode.childNodes[3].innerText =initial);
}
function decrement(target) {
  const name = target.parentNode.parentNode.childNodes[1].innerText;
  if (initial <= 0) {
    return alert("Please click on increment and start you todays tasbih");
  }
  initial--;
  const count = (target.parentNode.parentNode.childNodes[3].innerText =initial);
}
function reset(target) {
  initial = 0;
  const resetItem =(target.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].innerText=initial);
  const resetItem1 =(target.parentNode.parentNode.childNodes[5].childNodes[5].childNodes[3].innerText=initial)
  const resetItem2 =(target.parentNode.parentNode.childNodes[5].childNodes[9].childNodes[3].innerText=initial)
}
// modified version
