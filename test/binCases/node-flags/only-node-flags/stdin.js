"use strict";

module.exports = function testAssertions(code, stdout, stderr) {
	expect(code).toBe(0);
	expect(stdout).toEqual(expect.anything());
	expect(stdout[5]).toContain("main.js");
	console.log(stdout[6])
	console.log(stdout[7])
	console.log(stdout[8])
	console.log(stdout[9])
	expect(stdout[7]).toMatch(/index\.js.*\{0\}/);
	expect(stderr).toHaveLength(0);
};
