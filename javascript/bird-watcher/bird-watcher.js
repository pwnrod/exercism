// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    birds = birdsPerDay[i] + birds;
  }
  return birds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const lastIndex = week * 7 - 1;
  const firstIndex = lastIndex - 6;
  let birds = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    birds = birdsPerDay[i] + birds;
  }
  return birds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i === 0 || i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}
