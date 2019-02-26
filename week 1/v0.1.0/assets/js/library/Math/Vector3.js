export default class Vector3{
    /**
     * 3D vector
     * @constructor
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    constructor(x, y, z){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
        this.z = Number(z) || 0;
    }

    /**
     * Addition 3d Vectors
     * @param {Vector3} v
     */
    add_3(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    /**
     * Subtraction 3d Vectors
     * @param {Vector3} v 
     */
    sub_3(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    /**
     * Scaling 3d Vectors
     * 
     * @param {Number} a 
     */
    scalar_3(a){
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
    }

    /**
     * Scaling 3d Vectors
     * 
     * @param {Number} a
     */
    scalerIn_3(a){
        return (this.x *= a.x) + (this.y *= a.y) + (this.z *= a.z);
    }

    /**
     * Norm
     * calculating Length of a 3d vector
    */
    norm_3(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }

    /**
     * Normalisation
     * changing the vector to a unitvector
     */
    normalisatie_3(){
        const norm = Math.sqrt(this.x**2 + this.y**2 + this.z**2);
        return (this.x/norm + this.y/norm + this.z/norm);
    }
}