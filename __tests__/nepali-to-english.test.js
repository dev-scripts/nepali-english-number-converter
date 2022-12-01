const englishToNepali = require("../src/nepali-to-english");

test("english १२३ number should converted to 123", () => {
  expect(englishToNepali("१२३")).toBe(123);
});

test("english १२,३४५ number should converted to 12345", () => {
  expect(englishToNepali("१२,३४५")).toBe(12345);
});

test("english १२,३४५.०५ number should converted to 12345.05", () => {
  expect(englishToNepali("१२,३४५.०५")).toBe(12345.05);
});

test("english १२,३४,५६,७८९.०५ number should converted to 123456789.05", () => {
  expect(englishToNepali("१२,३४,५६,७८९.०५")).toBe(123456789.05);
});
