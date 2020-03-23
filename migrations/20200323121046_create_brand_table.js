
exports.up = async function(knex, Promise) {
    await knex.schema.createTable("brand", table => {
        table.string('name').notNullable().unique();
        table.uuid('id').primary();
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("brand")
};

