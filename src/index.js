const englishToNepali = require("./english-to-nepali");
const neplaiToEnglish = require("./nepali-to-english");

module.exports = function (number, type) {
  if (typeof type === "undefined") return false;

  if (typeof type !== "string") return false;

  //convert type in upper case
  type = type.toUpperCase();

  if (!["TO-EN", "TO-NP"].includes(type)) return false;

  if (type === "TO-EN") {
    return neplaiToEnglish(number);
  }

  if (type === "TO-NP") {
    return englishToNepali(number);
  }
};
