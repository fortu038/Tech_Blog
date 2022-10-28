const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const postData = require('./postData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postData, {
    });

    await Comment.bulkCreate(commentData, {
    });
};
seedDatabase();