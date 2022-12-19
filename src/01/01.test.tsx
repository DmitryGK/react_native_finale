import { mult, sum } from "./01"

test ('sum should be correct', () => {
    const a = 1
    const b = 2
    const c = 3

    const result = sum(a,b)
    const result1 = sum(b,c)
    const result2 = sum(a,c)

    expect (result).toBe(3)
    expect (result1).toBe(5)
    expect (result2).toBe(4)
})

test ('multiply should be correct', () => {
    const a = 1
    const b = 2
    const c = 3

    const result = mult(a,b)
    const result1 = mult(b,c)
    const result2 = mult(a,c)

    expect (result).toBe(2)
    expect (result1).toBe(6)
    expect (result2).toBe(3)
})
