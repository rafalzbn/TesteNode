const multer = require('multer');

module.exports = (multer({
storage: multer.diskStorage({
    destiantion: (req, file, cb) => {
    cb(null,'./public/upload/users')
    },
    filename: (req, file, cb)  => {
        cb(null, Date.now().toString() + "_" + file.originalname)
    }
}),
fileFilter: (req, file, cb) => {
    const exetnsaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find (formatoAceito => formatoAceito == filemimetype);

    if(extensaoImg){
        return cd(null, true);
    }
    return cb(null, false);
}
}));