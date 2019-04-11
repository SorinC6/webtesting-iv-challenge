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
      const secondChar = await db("chars").insert({
        name: "Vader",
        special_power: "force",
        world: "unknow"
      });
      const allTheChars = await db("chars");
      expect(allTheChars).toHaveLength(2);
    });
  });
});
