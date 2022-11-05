import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            id_user: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING,
            email: {type: Sequelize.DataTypes.STRING,
                unique: true
            }
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}