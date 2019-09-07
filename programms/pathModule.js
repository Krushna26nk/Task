const path = require('path');
const samplePath = '/home/admin1/Desktop/images/ms.jpg'
let pathObj = {
    filname   : path.basename(samplePath),
    directory : path.dirname(samplePath),
    extension : path.extname(samplePath),
    isPathAbsolute : path.isAbsolute(samplePath),
    normalizePath : path.normalize(samplePath),
    fullDetails : function(){
        return `The file name of the path specified is ${this.filname} ,
        which presents in the directory ${this.directory}.The extension of file is ${this.extension}
        The path of the file is Absolute ${this.isPathAbsolute} .`
    }()
}

console.log(pathObj);