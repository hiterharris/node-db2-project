
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 128).notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Moddle', 128).notNullable();
      tbl.string('Mileage', 128);
  })
};

exports.down = function(knex) {
  
};
