var canvas = {
    element: document.getElementById("canvas"),
    W: function(){
        return this.element.width;
    },
    H: function(){
        return this.element.height;
    },
    ctx: function(){
        return this.element.getContext("2d");
    },
    gravity: 0.9,
    bounceFactor: 0.5
};

export default canvas;
