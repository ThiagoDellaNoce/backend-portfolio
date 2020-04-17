exports.up = function (knex) {
  return knex.schema.createTable("contacts", function (table) {
    table.string("id").primary();

    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("subject").notNullable();
    table.string("message").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
