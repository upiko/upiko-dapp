import { resultToArray } from "./StateUtil";
import { IUser, IAppState } from "../common/Interfaces";
//import puppeteer from "puppeteer";

const testInput = [
  {
    "0": "firstmewser",
    "1": "0xf7d1314C521E022a3992F63233C45A1B4c84e9fd",
    "2": false,
    name: "firstmewser",
    ethAddr: "0xf7d1314C521E022a3992F63233C45A1B4c84e9fd",
    isProvider: false
  },
  {
    "0": "meeessssecond",
    "1": "0x7504688b0de13d595b77F0346e7fa608ab93648e",
    "2": false,
    name: "meeessssecond",
    ethAddr: "0x7504688b0de13d595b77F0346e7fa608ab93648e",
    isProvider: false
  }
];

test("empty array result", () => {
  const testInput = Array<any>();
  const expectedArray = new Array<IUser>();
  const callResult = resultToArray<IUser>(testInput);
  expect(callResult).toEqual(expectedArray);
});

test("expected result count from returned array", () => {
  const callResult = resultToArray<IUser>(testInput);
  expect(2).toBe(callResult.length);
});

test("expected result type returned array", () => {
  const callResult = resultToArray<IUser>(testInput);
  const expectedType = callResult[0].ethAddr !== undefined;
  expect(expectedType).toBeTruthy();
});
 






/*
test("That puppeteer runs", async () => {
  jest.setTimeout(12000);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--window-size=1920,1080"]
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/skills");
  await page.click("input#add-skill-input");
  await page.type("input#add-skill-input", "Me");
  const textEntered = await page.$eval(
    "#add-skill-input",
    el => el.textContent
  );
  expect(textEntered).toBe("Me");
});
*/
