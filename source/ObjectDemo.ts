module ObjectDemo {

    var rectangle = {
        len: 20,
        width: 20,
        calculateArea: function () {
            return this.len * this.width
        }
    };

    console.log(rectangle.calculateArea());
    
    var sqaure = function (rect: { len: number; w?: number }) {
        if(rect.w === undefined) {
            return rect.len;
        }
        return rect.len * rect.w;
    }
}