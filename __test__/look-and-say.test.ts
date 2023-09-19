import { lookAndSay } from '../lib/look-and-say'

describe('lookAndSay function', () => {
  it('should return "1" for n = 1', () => {
    expect(lookAndSay(1)).toBe('1')
  })

  it('should return "11" for n = 2', () => {
    expect(lookAndSay(2)).toBe('11')
  })

  it('should return "21" for n = 3', () => {
    expect(lookAndSay(3)).toBe('21')
  })

  it('should return "1211" for n = 4', () => {
    expect(lookAndSay(4)).toBe('1211')
  })

  it('should return "111221" for n = 5', () => {
    expect(lookAndSay(5)).toBe('111221')
  })
})
