const englishToNepali = require("../src/english-to-nepali");

test("english 123 number should converted to १२३", () => {
  expect(englishToNepali(123)).toBe("१२३");
});

test("english 12345 number should converted to १२,३४५", () => {
  expect(englishToNepali(12345)).toBe("१२,३४५");
});

test("english 12345.05 number should converted to १२,३४५.०५", () => {
  expect(englishToNepali(12345.05)).toBe("१२,३४५.०५");
});

test("english 12345.05 number should converted to १२,३४५.०५", () => {
  expect(englishToNepali(12345.05)).toBe("१२,३४५.०५");
});

test("english 123456789.05 number should converted to १२,३४,५६,७८९.०५", () => {
  expect(englishToNepali(123456789.05)).toBe("१२,३४,५६,७८९.०५");
});
