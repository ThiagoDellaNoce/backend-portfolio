exports.up = function (knex) {
  return knex.schema.createTable("experiences", function (table) {
    table.string("id").primary();

    table.string("local").notNullable();
    table.string("dateBegin").notNullable();
    table.string("dateEnd").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.boolean("isActual").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("experiences");
};
