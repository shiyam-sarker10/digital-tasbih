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

function reset(target) {
  function childNumber(number) {
    const resetItem = (target.parentNode.parentNode.childNodes[5].childNodes[
      number
    ].childNodes[3].innerText = initial);
    return resetItem;
  }
  initial = 0;
  const resetItem = childNumber(1);

  const resetItem1 = childNumber(5);

  const resetItem2 = childNumber(9);
}
// modified version
