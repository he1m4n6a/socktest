const createImageUrl = require('mbtesturl');

const params = {
    width: 300,
    height: 200,
    quality: 80
    };
    
const imageUrl = createImageUrl(params);
console.log(imageUrl); 