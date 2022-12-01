const nepaliToEnglishNumber = {
  "०": 0,
  "१": 1,
  "२": 2,
  "३": 3,
  "४": 4,
  "५": 5,
  "६": 6,
  "७": 7,
  "८": 8,
  "९": 9,
};

const neplaiToEnglish = (nepaliNumber) => {
  nepaliNumber = nepaliNumber.toString().replace(/,/g, "");
  const arrayEnglishNumber = nepaliNumber
    .toString()
    .split("")
    .map((character) => {
      if (character === ".") {
        return character;
      }

      return nepaliToEnglishNumber[character];
    });

  return Number(arrayEnglishNumber.join(""));
};

module.exports = neplaiToEnglish;
