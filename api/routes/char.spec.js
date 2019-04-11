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
      await db("chars").insert({
        name: "Pippin",
        special_power: "ddd",
        world: "Tatooene"
      });
      await db("chars").insert({
        name: "Vader",
        special_power: "force",
        world: "unknow"
      });
      const allTheChars = await db("chars");
      expect(allTheChars).toHaveLength(2);
    });
  });

  describe("delete", () => {
    it("delete succesfully", async () => {
      const newChar = await db("chars").insert({
        name: "Walter",
        special_power: "Cooking",
        world: "earth"
      });
      await db("chars").insert({
        name: "Thanos",
        special_power: "titan",
        world: "somewhere"
      });
      await db("chars").insert({
        name: "Woddy",
        special_power: "cioc",
        world: "earth"
      });
      await db("chars")
        .where({ id: 3 })
        .delete();

      const database = await db("chars");
      expect(database).toHaveLength(2);
    });
  });
});
