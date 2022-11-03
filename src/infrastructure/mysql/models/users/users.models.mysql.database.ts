import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance() .createModel('users', {
    id_user: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING
});