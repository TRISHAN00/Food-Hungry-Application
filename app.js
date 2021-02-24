let mealBtn = document.getElementById('meal-btn').addEventListener('click',function(){
    const mealBox = document.getElementById('meal-box').value
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealBox)
    .then(res => res.json())
    .then(data => functionName(data))
})

function functionName(mealsPara) {
    const meals = mealsPara.meals
    const mealName = document.getElementById('meal-name')
    const mealImg = document.getElementById('meal-img')
    const mealDetailsThumb = document.getElementById('meal-details-thumb')
    meals.forEach(meal => {
        const mealNames = `${meal.strMeal}`
        const mealThumb = `${meal.strMealThumb}`
        mealName.innerHTML = mealNames
        mealImg.src=mealThumb
    });
    
}