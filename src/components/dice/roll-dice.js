export const rollDice = (listref, cb)=> {
  const dice = listref && [listref.current] || []
  Array.from(dice).forEach(diceIndex => {
    toggleClasses(diceIndex);
    diceIndex.dataset.roll = getRandomNumber(1, 6);
  });
  cb(dice[0].dataset.roll)
}

const toggleClasses = (diceIndex)=> {
  diceIndex.classList.toggle("odd-roll");
  diceIndex.classList.toggle("even-roll");
}

const getRandomNumber = (min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}