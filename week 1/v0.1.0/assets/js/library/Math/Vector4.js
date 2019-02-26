export default class Vector4{
    /**
     * 4D vector
     * @constructor
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @param {Number} w 
     */
    constructor(x, y, z, w){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
        this.w = Number(w) || 0;
    }

    /**
     * Addition 4d Vectors
     * @param {Vector3} v 
     */
    add_4(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
    }

    /**
     * Subtraction 4d Vectors
     * @param {Vector3} v 
     */
    sub_4(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
    }

    /**
     * Scaling 4d Vectors
     * @param {Number} a
     */
    scalar_4(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        this.w *= a.w;
    }

     /**
     * Scaling 4d Vectors
     * @param {Number} a
     */
    scalerIn_4(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z) + (this.w *= a.w);
    }

     /**
     * Norm
     * calculating Length of a 4d vector
    */
    norm_4(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
    }

    /**
     * Normalisation
     * changing the vector to a unitvector
     */
    normalisatie_4(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
        return (this.x/norm) + (this.y/norm) + (this.z/norm) + (this.w/norm); 
    }
}