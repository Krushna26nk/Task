class Rectangle{
    constructor(_width,_height,_color){
        console.log('rectangle creation');
        this.width = _width;
        this._height=_height;
        this.color=_color;
    }

    getArea(){
        return this.width * this._height;
    }
}
let rec1 = new Rectangle(10,5,"red");
console.log(rec1.getArea());
