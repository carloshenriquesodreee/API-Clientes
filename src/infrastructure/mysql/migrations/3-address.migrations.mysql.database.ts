import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('address', {
            idenderecos: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cep: Sequelize.DataTypes.STRING,
            logradouro: Sequelize.DataTypes.STRING,
            bairro: Sequelize.DataTypes.STRING,
            cidade: Sequelize.DataTypes.STRING,
            estado: Sequelize.DataTypes.STRING,
            id_client: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'clients'
                    },
                    key: 'id_client'
                }
            }
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('address');
    }
}