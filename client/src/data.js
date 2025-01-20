const categoriesDHZ = [
    {
        name: 'Cat1',
        id: '_c1',
        subCategories: [{id: '_sc1', name: 'SubCat1'}, {id: '_sc3', name: 'SubCat3'}],
        picturePath: 'nature.jpg'
    }
];

const categoriesZSPORT = [
    {
        name: 'Cat1',
        id: '_c1',
        subCategories: [{id: '_sc1', name: 'SubCat1'}, {id: '_sc3', name: 'SubCat3'}],
        picturePath: 'nature.jpg'
    }
];

const productsDHZ = [
    {
        name: 'Product 1 DHZ',
        id: '_p1',
        categoryID: '_c1',
        subcategoryID: '_sc1'
    }
];

const productsZSPORT = [
    {
        name: 'Product 1 ZSPORT',
        id: '_p1',
        categoryID: '_c1',
        subcategoryID: '_sc1'
    }
];

module.exports = {
    categoriesDHZ, categoriesZSPORT, productsDHZ, productsZSPORT
};