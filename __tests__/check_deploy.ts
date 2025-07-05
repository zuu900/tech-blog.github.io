import { TARGET_URL } from "../setting";
import "jest-puppeteer";
import "expect-puppeteer";

test("check deploy", async () => {
  await page.goto(TARGET_URL + "top.html");
  const title = await page.$eval("title", (el) => {
    return (el as HTMLTitleElement).innerText;
  });
  expect(title).toBe("Progate Path Developers Blog");
});
