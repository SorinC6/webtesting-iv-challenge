exports.up = function(knex, Promise) {
  return knex.schema.createTable("chars", table => {
    table.increments();

    table
      .string("name", 128)
      .notNullable()
      .unique();
    table.string("special power", 128).notNullable();
    table.string("world", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
