const Sequelize = require('Sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/ranking_users';

const orm = new Sequelize(DATABASE_URL, {logging: false});

const User = orm.define('user', {
    name: {
        type: Sequelize.STRING,
        defaultValue: 'Joanne Rowling',
        allowNull: false,
        notEmpty: true,
        notIn: [['moe', 'curly', 'larry']]
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull: true,
        notEmpty: false
    },
    rank: {
        type: Sequelize.NUMERIC,
        max: 100,
        min: 0
    }
});

const syncAndSeed = ()=>{
    return orm.sync({force: true})
    .then(()=> User.create({name:'HackerNoon', bio: '', rank: 20}))
    .then(()=> User.create({name:'HackerEve', bio: '', rank: 10}))
    .catch((err)=>console.log(err))
}

module.exports = {syncAndSeed, User}
