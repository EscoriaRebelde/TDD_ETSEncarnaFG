/*
Escribir una funcion que al pasarleun nÚmero:
    - muestra "Encarna"si es multiplo de 2
    - muestra "Fernandez" si es multiplo de 3
    - muestra"Gomez" si es multiplo de 11
    - Muestra el número si no es múltplo de ninguno
        de los anteriores
*/
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 2: 'Encarna', 3: 'Fernandez', 11: 'Gomez' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}
