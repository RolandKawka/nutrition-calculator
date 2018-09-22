
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
        { name: 'Chicken breast', proteins: 20, carbs: 0, fat: 2, calories: 80, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'White rice', proteins: 8, carbs: 70, fat: 0, calories: 350, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'Bread', proteins: 5, carbs: 50, fat: 2, calories: 250, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'Apple', proteins: 0, carbs: 20, fat: 0, calories: 80, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'Banana', proteins: 2, carbs: 30, fat: 0, calories: 120, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'Beer', proteins: 0, carbs: 30, fat: 0, calories: 120, createdAt: new Date(), updatedAt: new Date(),},
        { name: 'Potatoes', proteins: 5, carbs: 30, fat: 0, calories: 120, createdAt: new Date(), updatedAt: new Date(),},
        ], {});

        const products = await queryInterface.sequelize.query(
            'SELECT id from Products;'
        );

        const productRows = products[0];

        return await queryInterface.bulkInsert('ProductImages', [
            { path: 'exampleImagePath1', createdAt: new Date(), updatedAt: new Date(), productId: productRows[0].id},
            { path: 'exampleImagePath2', createdAt: new Date(), updatedAt: new Date(), productId: productRows[1].id},
            { path: 'exampleImagePath3', createdAt: new Date(), updatedAt: new Date(), productId: productRows[2].id},
            { path: 'exampleImagePath4', createdAt: new Date(), updatedAt: new Date(), productId: productRows[3].id},
            { path: 'exampleImagePath5', createdAt: new Date(), updatedAt: new Date(), productId: productRows[4].id},
            { path: 'exampleImagePath6', createdAt: new Date(), updatedAt: new Date(), productId: productRows[5].id},
            { path: 'exampleImagePath7', createdAt: new Date(), updatedAt: new Date(), productId: productRows[6].id},
        ], {});
        },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
