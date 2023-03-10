export default function analyzeArray(array) {
    if (array.length === 0) return
    const maxValue = array.reduce((prev, curr) => prev > curr ? prev : curr)
    const minValue = array.reduce((prev, curr) => prev < curr ? prev : curr)
    const averageValue = (array.reduce((prev, curr) => prev + curr)) / array.length

    return {
        average: averageValue,
        min: minValue,
        max: maxValue,
        length: array.length,
    }
}