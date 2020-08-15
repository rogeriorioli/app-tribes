import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema.createTable('posts', table => {
        table.increments()
        table.string('title').notNullable()
        table.text('content').notNullable()
        table.string('feature_image').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.string('token').notNullable()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.foreign('token').references('id').inTable('users')
      
    });
}

export async function down(knex :knex) {
    return knex.schema.dropTable('posts');
}
