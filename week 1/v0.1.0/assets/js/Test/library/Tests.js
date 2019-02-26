import TestMatrix2 from './Math/TestMatrix2.js'
import TestMatrix3 from './Math/TestMatrix3.js'
import TestMatrix4 from './Math/TestMatrix4.js'
import TestVector2 from './Math/TestVector2.js'
import TestVector3 from './Math/TestVector3.js'
import TestVector4 from './Math/TestVector4.js'


export default class Tests {

    constructor() {
        console.log('Running Tests…')
        new TestMatrix2()
        new TestMatrix3()
        new TestMatrix4()
        new TestVector2()
        new TestVector3()
        new TestVector4()
    }
}