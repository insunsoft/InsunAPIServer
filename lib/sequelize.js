import Sequelize from 'sequelize'
import config from '../config'

const db = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
    host: config.database.host,
    dialect: config.server.db_type,
    define: {
        // 字段以下划线（_）来分割（默认是驼峰命名风格）
        underscored: true
    },
    dialectOptions: { // MySQL > 5.5，其它数据库删除此项
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_520_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        // max: 50, // 默认设置
        max: 1, // 测试用1
        min: 0,
        idle: 10000
    }
})

db.authenticate()
    .then(() => {
        console.log('连接数据库成功!')
    })
    .catch(err => {
        console.error('不能连接数据库:', err)
    })

export db
