const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    tableName: 'posts',
    timestamps: false
})

module.exports = Post