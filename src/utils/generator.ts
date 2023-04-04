export function generatorArrayOfNumbers(size: number, step: number) {
    return Array.from({length: size}, (v, k) => k + step);
}