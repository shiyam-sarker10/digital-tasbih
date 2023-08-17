let initial = 0;
function increment(target) {
  const name = target.parentNode.parentNode.childNodes[1].innerText;
  if (initial > 32) {
    return alert(`The  tasbih count for ${name} is finish`), (initial = 0);
  }
  initial += 1;
  const count = (target.parentNode.parentNode.childNodes[3].innerText =
    initial);
}

function decrement(target) {
  const name = target.parentNode.parentNode.childNodes[1].innerText;
  if (initial <= 0) {
    return alert("Please click on increment and start you todays tasbih");
  }
  initial--;
  const count = (target.parentNode.parentNode.childNodes[3].innerText =
    initial);
}
// modified version
