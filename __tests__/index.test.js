const convert = require("../src/index");

test("english १२३ number should converted to 123", () => {
  expect(convert("१२३", "TO-EN")).toBe(123);
});

test("english १२३ number should converted to 123 with to-En.", () => {
  expect(convert("१२३", "to-En")).toBe(123);
});

test("english १२३ number should converted to 123 with invalid type. Invalid type should return false", () => {
  expect(convert("१२३", "t1o-En")).toBe(false);
});

test("english १२,३४५ number should converted to 12345", () => {
  expect(convert("१२,३४५", "to-en")).toBe(12345);
});

test("english १२,३४५.०५ number should converted to 12345.05", () => {
  expect(convert("१२,३४५.०५", "TO-EN")).toBe(12345.05);
});

test("english १२,३४,५६,७८९.०५ number should converted to 123456789.05", () => {
  expect(convert("१२,३४,५६,७८९.०५", "tO-eN")).toBe(123456789.05);
});

// english to nepali test
test("english 123 number should converted to १२३", () => {
  expect(convert(123, "TO-NP")).toBe("१२३");
});

test("english 123 number should converted to १२३", () => {
  expect(convert(123, "to-Np")).toBe("१२३");
});

test("english 123 number should converted to १२३ with invalid type. Invalid type should return false", () => {
  expect(convert("१२३", "to-en1")).toBe(false);
});

test("english 12345 number should converted to १२,३४५", () => {
  expect(convert(12345, "to-np")).toBe("१२,३४५");
});

test("english 12345.05 number should converted to १२,३४५.०५", () => {
  expect(convert(12345.05, "to-np")).toBe("१२,३४५.०५");
});

test("english 12345.05 number should converted to १२,३४५.०५", () => {
  expect(convert(12345.05, "To-nP")).toBe("१२,३४५.०५");
});

test("english 123456789.05 number should converted to १२,३४,५६,७८९.०५", () => {
  expect(convert(123456789.05, "tO-np")).toBe("१२,३४,५६,७८९.०५");
});
