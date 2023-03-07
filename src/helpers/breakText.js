export function breakText(text) {
  const newText = [];

  let textArray = text.split(" ");
  // textArray = textArray.map((sentence) => (sentence += " "));
  let counter = 0;
  let start = 0;

  textArray.forEach((item, i) => {
    counter += item.length + 1;
    if (counter >= 74) {
      newText.push(textArray.slice(start, i).join(" ") + " ");
      start = i;
      counter = 0;
    }
  });

  let acc = 0;
  newText.forEach((item, i) => {
    acc += item.length;
  });
  return [...newText, text.slice(acc)];
}
