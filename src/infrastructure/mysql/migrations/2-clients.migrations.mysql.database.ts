import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('clients', {
            id_client: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cep: Sequelize.DataTypes.STRING,
            name: Sequelize.DataTypes.STRING,
            cpf: Sequelize.DataTypes.STRING,
            PhoneNumber: Sequelize.DataTypes.STRING
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('clients');
    }
}