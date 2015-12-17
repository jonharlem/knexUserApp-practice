
exports.up = function(knex, Promise) {
  //tables are always in the plural
  return knex.schema.createTable('users', function(table){
  	table.increments();
  	table.string('name');
  });
};

exports.down = function(knex, Promise) {
	//you need an up and down schema to rollback
	return knex.schema.dropTable('users');
};
