const englishToNepaliNumber = {
  0: "०",
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
  6: "६",
  7: "७",
  8: "८",
  9: "९",
};
const englishToNepali = (englishNumber) => {
  englishNumber = englishNumber.toString().replace(/,/g, "");
  englishNumber = new Intl.NumberFormat("en-IN").format(englishNumber);

  const arrayEnglishNumber = englishNumber
    .toString()
    .split("")
    .map((character) => {
      if (character === "." || character === ",") {
        return character;
      }

      return englishToNepaliNumber[Number(character)];
    });

  return arrayEnglishNumber.join("");
};

module.exports = englishToNepali;
