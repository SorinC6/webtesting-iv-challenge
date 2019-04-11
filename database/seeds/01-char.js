exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("chars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("chars").insert([
        {
          id: 1,
          name: "TestName",
          special_power: "testPower",
          world: "testWorld"
        }
      ]);
    });
};
