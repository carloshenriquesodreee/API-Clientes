import { MysqlDatabase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ('clients', {
    id_client:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    cep: Sequelize.DataTypes.STRING,
    name: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING,
    PhoneNumber: Sequelize.DataTypes.NUMBER
});