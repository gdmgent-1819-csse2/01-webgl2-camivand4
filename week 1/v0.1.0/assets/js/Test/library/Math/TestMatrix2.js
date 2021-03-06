import Matrix2 from '../../../library/Math/Matrix2.js'
import TestMatrix from './TestMatrix.js'

/**
 * Class to test the Matrix2 class
 */
export default class TestMatrix2 extends TestMatrix {
  /**
   * Create and run tests
   */
  constructor() {
    super()
    console.info("Test Matrix2")
    this.testAdd()
    this.testSub()
    this.testMul()
    this.testMulIdentity()
    this.testRot()
  }

  testAdd() {
    console.info("Test: Matrix2 add")
    const a = [
      1, 2,
      3, 4,
    ]

    const b = [
      7, 8,
      9, 6,
    ]

    const expected = [
      8, 10,
      12, 10,
    ]

    const m = new Matrix2(a)
    m.add(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }


  testSub() {
    console.info("Test: Matrix2 sub")
    const a = [
      5, 6,
      7, 8,
    ]

    const b = [
      9, 6,
      3, 2,
    ]

    const expected = [
      -4, 0,
      4, 6,
    ]

    const m = new Matrix2(a)
    m.sub(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }


  testMul() {
    console.info("Test: Matrix2 mul")
    const a = [
      1, 2,
      3, 4,
    ]

    const b = [
      2, 4,
      6, 8,
    ]

    const expected = [
      14, 20,
      30, 44,
    ]

    const m = new Matrix2(a)
    m.mul(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }


  testMulIdentity() {
    console.info("Test: Matrix2 mul")
    const a = [
      1, 3,
      5, 7,
    ]

    const b = [
      1, 0,
      0, 1,
    ]

    const expected = [
      1, 3,
      5, 7,
    ]

    const m = new Matrix2(a)
    m.mul(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  testRot() {
    console.info("Test: Matrix2 rot")
    const α = 90
    const a = [
      2, 4,
      6, 8,
    ]

    const expected = [
      4, -2,
      8, -6,
    ]

    const m = new Matrix2(a)
    m.rot(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }
}