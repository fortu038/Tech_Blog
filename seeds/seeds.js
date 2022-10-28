const postData = require('./postData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  Comment.bulkCreate(commentData, {
  });

  Post.bulkCreate(postData, {
  });
};
seedDatabase();