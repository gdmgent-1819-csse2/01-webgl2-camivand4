export default class Matrix2 
{
    /**
     * Represents 2D matrix
     * @constructor
     * @param {*} items the items for this matrix
     */
    constructor() {
        this.items = [
            0,0,
            0,0,
        ]
    }

    /**
     * Addition
     * @param {Matrix2} b
     */ 

    add(b)
    {
        const a = this.items
        this.items = [
            a[0] + b [0], a[1] + b[1],
            a[2] + b [2], a[3] + b[3],
        ]

    }

    /**
     * Subtraction
     * @param {Matrix2} b
     */     
    
    sub(b)
    {
        const a = this.items
        this.items = [
            a[0] - b [0], a[1] - b[1],
            a[2] - b [2], a[3] - b[3],
        ]
    }

    /**
     * Multiply
     * @param {Matrix2} b
     */ 

    mul(b)
    {
        const a = this.items
        const c = []

        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.items = c
    }

    /**
     * Rotation
     * @param {Matrix2} b
     */ 

    Rot(d)
    {
        d *= Math.PI / 180;
        const cos = Math.cos(d);
        const sin = Math.sin(d);

        const result = [
            cos, -sin,
            sin, cos,
        ]
        this.mul(result);
    }

}
