const db = require("../../database/dbConfig");

describe("chars model", () => {
  beforeEach(async () => {
    await db("chars").truncate();
  });
  afterEach(async () => {
    await db("chars").truncate();
  });

  describe("insert", () => {
    it("insert char into db", async () => {
      const newChar = await db("chars").insert({
        name: "Pippin",
        special_power: "ddd",
        world: "Tatooene"
      });
      const allTheChars = await db("chars");
      expect(allTheChars).toHaveLength(1);
    });
  });
});
