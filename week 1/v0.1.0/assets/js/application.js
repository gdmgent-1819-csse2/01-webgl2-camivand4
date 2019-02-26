import Vector2 from "./library/Math/Vector2.js"
import Matrix2 from './library/math/Matrix2.js';

export default class Application 
{
constructor()
    {        
        const v1 = new Vector2(2,4)
        const v2 = new Vector2(3, 2.5)
        const v3 = new Vector2(2,5)
        const v4 = new Vector2(5,3)
        const v5 = new Vector2(-3,-5,4,5)
        
        console.log('start: ',v1, v2) 
        
        v1.add(v2)
        console.log('<- addition ->') 
        console.log('add: ',v1, v2) 
        console.log('result: ', v1)
        
        v1.sub(v2)
        console.log('<- subtraction ->')
        console.log('sub: ',v1, v2)
        console.log('result: ', v1) 

        v1.mul(v2)
        console.log('<- multiply ->')
        console.log('mul: ',v1, v2)
        console.log('result: ', v1)
        
        const a = 10
        v1.scalar(a)
        console.log('<- scaling ->')
        console.log('scalar: ',a, v1)
        console.log('result: ', v1)
        

        console.log('<- norm ->')
        console.log('norm of v1: ', v1.norm())
        console.log('result: ', v1)


        console.log('v3 . v4: ', v3.dot(v4))
        console.log('v5 . v6: ', v3.dot(v5))  
      
        


        const matrix2 = new Matrix2([2,2,3,2]);
        const matrix2_1 = new Matrix2([2,2,3,2]);
        const matrix2_1_2 = new Matrix2([2,2,3,2]);
        const matrix2_2 = new Matrix2([7,4,0,3]);
        
        const matrix2_3 = new Matrix2([2,0,4,9]);
        const matrix2_3_1 = new Matrix2([2,0,4,9]);
        const matrix2_4 = new Matrix2([1,5,6,2]);

        const matrix2_5 = new Matrix2([2,0,4,9]);
        const matrix2_5_1 = new Matrix2([2,0,4,9]);
        const matrix2_6 = new Matrix2([1,5,6,2]);

        console.log('<-Addition->');
        console.log('Matrix1 ' , matrix2 , 'and Matrix2' ,matrix2_2);
        matrix2_1.add(matrix2_2.items);
        console.log('result: ',matrix2_1);

        console.log('<-Subtraction->');
        console.log('Matrix1 ' , matrix2_3 , 'and Matrix2' ,matrix2_4);
        matrix2_3_1.sub(matrix2_4.items);
        console.log('result',matrix2_3_1);

        console.log('<-Multiply->');
        console.log('Matrix1 ' , matrix2_5 , 'and Matrix2' ,matrix2_6);
        matrix2_5_1.mul(matrix2_6.items);
        console.log('result',matrix2_5_1);
        
        console.log('<-Rotation->');
        console.log('Matrix1 ' , matrix2_1_2);
        matrix2.Rot(90);
        console.log('Matrix1 90° rotated ' , matrix2);

        const tests = true
        if (tests) {
            new Tests()
        }
        console.info('WebGL2 Demo')
    }   


}
