const createImageUrl = require('mbtesturl');

const params = {
    width: 300,
    height: 200,
    quality: 10
    };
    
const imageUrl = createImageUrl(params);
console.log(imageUrl); 