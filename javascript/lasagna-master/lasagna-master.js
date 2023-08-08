/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = (remainingTime) => {
    if (remainingTime === null || remainingTime === undefined) {
        return 'You forgot to set the timer.';
    }

    if (remainingTime === 0) {
        return 'Lasagna is done.';
    }

    return 'Not done, please wait.';
};

export const preparationTime = (layers, timePerLayer) => {
    if (timePerLayer === null || timePerLayer === undefined) {
        timePerLayer = 2;
    }

    return layers.length * timePerLayer;
};

export const quantities = (layers) => {
    const NOODLE_SERVING = 50;
    const SAUCE_SERVING = 0.2;
    let totalSauce = 0;
    let totalNoodles = 0;
    let ingredients = {};

    layers.map((layer) => {
        if (layer === 'sauce') {
            totalSauce += SAUCE_SERVING;
        }
        if (layer === 'noodles') {
            totalNoodles += NOODLE_SERVING;
        }
    });

    ingredients.sauce = totalSauce;
    ingredients.noodles = totalNoodles;

    return ingredients;
};

export const addSecretIngredient = (friendsIngredients, myIngredients) => {
    myIngredients.push(friendsIngredients[friendsIngredients.length - 1]);
};

export const scaleRecipe = (recipe, portions) => {
    let newRecipe = {};

    for (let ingredient in recipe) {
        newRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
    }

    return newRecipe;
};
