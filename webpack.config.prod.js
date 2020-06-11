const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(['src/*.{jpg,png}'], {
    destination: 'src/images',
    plugins: [
        webp({quality: 60})
    ]
})