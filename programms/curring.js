function cylinderVolume(length) {
    return (width) =>{
        return(height)=>{
            return length * width * height;
        }
    }
}
const cylinder = cylinderVolume(100)(50)(20);
console.log(cylinder);