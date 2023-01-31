import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test that checks if getFullYear() returns right year
test("getFullYear returns right year", () => {
  expect(getFullYear()).toBe(2022);
});

// Test that getFooterCopy returns right str
// when arg is false
test("getFooterCopy returns right str if false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

// Test that getFooterCopy returns right str when arg is
// When str is true
test("getFooterCopy returns right str if true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

// Test to check if getLatestNotification returns right str
test("getLatestNotification returns right str", () => {
  expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
