$(document).ready(function() {
    var time1, time2, result;

    parseIngredients = function() {
        var ingredientsUI = $("li[itemprop='ingredient']"),
            ingredientsCount = ingredientsUI.length,
            thisIngredientUI = null,
            ingredients = [],
            i = 0;

        for (; i < ingredientsCount; i += 1) {
            thisIngredientUI = ingredientsUI[i];
            amount = thisIngredientUI.children[0].innerHTML;
            name = thisIngredientUI.children[1].innerHTML;

            thisIngredient = {}
            thisIngredient.name = name;
            thisIngredient.amount = amount;
            ingredients.push(thisIngredient);
        }

        return ingredients;
    };

    parsePreparation = function() {
        var preparationStepsUI = $("ol[itemprop='instructions']")[0].children,
            preparationStepsCount = preparationStepsUI.length,
            thisStepUI = null,
            preparationSteps = [],
            subArr,
            i = 0,
            j = 0;

        for (; i < preparationStepsCount; i += 1) {
            thisStepUI = preparationStepsUI[i].innerHTML;
            subArr = thisStepUI.split('.');
            lastIndex = subArr.length - 1;
            firstSubstep = subArr[0];
            lastSubstep = subArr[lastIndex];
            if (typeof +firstSubstep.substring(0, 1) === 'number') {
                subArr.shift();
            }
            if (lastSubstep === "") {
                subArr.pop();
            }
            console.log(subArr);
        }
    };

    parsePreparation();
});
