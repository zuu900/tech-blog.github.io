const port = process.env.PORT ?? 4444;
export default{
  launch: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  },
  browserContext: "incognito",
};
