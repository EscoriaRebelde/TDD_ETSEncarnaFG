import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  //  it('should be a function', () => {
  //  expect(typeof fizzbuzz).toBe('function')
  //  })
  it('should throw a specificerror message if not number is providedas parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })
  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return "Encarna" if number provided is multiple of 2', () => {
    expect(fizzbuzz(4)).toBe('Encarna')
    expect(fizzbuzz(8)).toBe('Encarna')
  })

  it('should return "Fernandez" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('Fernandez')
  })

  it('should return "Fernandez" if number provided is multiple of 3', () => {
    expect(fizzbuzz(9)).toBe('Fernandez')
    //expect (fizzbuzz(12)).toBe('Fernandez')
  })
  it('should return "EncarnaFernandez" if number provided is multiple of 2 y 3',()=>{
    expect(fizzbuzz(6)).toBe('EncarnaFernandez')
  })

  it('should return "Gomez" if number provided is multiple of 11', () => {
    expect(fizzbuzz(11)).toBe('Gomez')
  })

})
