import { mult, splitIntoWords, sum } from "./01"

let a = 1
let b = 2
let c = 3

beforeEach ( () => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {


    const result = sum(a, b)
    const result1 = sum(b, c)
    const result2 = sum(a, c)

    expect(result).toBe(3)
    expect(result1).toBe(5)
    expect(result2).toBe(4)
})

test('multiply should be correct', () => {


    const result = mult(a, b)
    const result1 = mult(b, c)
    const result2 = mult(a, c)

    expect(result).toBe(2)
    expect(result1).toBe(6)
    expect(result2).toBe(3)
})

test('splitting into words should be corrected', () => {

    const sent1 = 'Hello my friends'
    const sent2 = 'JS - the best programming language'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})