const text = "Wonderful Joyful Happiness Time Task Apple";
const pattern = /\b[^Aa\s]{6,}\b/g;
const matches = text.match(pattern);
console.log(matches);
