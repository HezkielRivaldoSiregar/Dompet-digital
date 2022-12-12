import { Sequelize } from "sequelize";
import db from '../config/Database.js'

const {DataTypes} = Sequelize;

const Transaksi = db.define('Transaksi', {
    tanggal_transaksi: DataTypes.DATE,
    kategori: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
}, {
    freezeTableName:true
})

export default Transaksi;

(async()=>{
    await db.sync();
})();