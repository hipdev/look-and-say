export function lookAndSay(n: number): string {
  //  Init with 1
  let term = '1'

  // Iterate from 1 to n -1
  for (let i = 1; i < n; i++) {
    let nextTerm = ''
    let j = 0

    // go over term
    while (j < term.length) {
      let count = 1 // Count repetitions

      // Count repetitive digits from term
      while (j + 1 < term.length && term[j] === term[j + 1]) {
        count++
        j++
      }

      // Add count and digit to nextTerm
      nextTerm += count + term[j]

      j++
    }

    // update term with nextTerm
    term = nextTerm
  }

  return term
}
