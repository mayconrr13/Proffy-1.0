import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        // criando o relacionamento de tabelas
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            //para atualizar ou deletar um usuário, utiliza-se a opção CASCADE, ou seja, todos os dados dependentes daqueles usuário são removidos. 
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}