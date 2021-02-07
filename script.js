// document.getElementById('meal-name').addEventListener('click', function(event){
//     console.log('clicked');
// });

document.getElementById('search-btn').addEventListener('click', function(e){
    const searchValue = document.getElementById('search-input').value;
    const mealArea = document.getElementById('menu-area');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {   
    document.getElementById('foods').innerHTML = "";
    let menuInfo = '';
    if(data.meals){   
           
        data.meals.forEach(meal =>{
            menuInfo += `
            <div id="single-menu" class="single-menu">
            <img src="${meal.strMealThumb}" alt="Menu Item" class="img-fluid">
            <h3  onClick="onClickDetails(${meal.idMeal })" >${meal.strMeal}</h3>
            </div>`;
        })      
    }else{alert('Invalid Input')}   
    mealArea.innerHTML = menuInfo; 
    })
});

let onClickDetails = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ mealId }`)
        .then(res => res.json())
        .then(data => {
            let mealData = document.getElementById('menu-area');
            document.getElementById('menu-area').innerHTML = ' ';
            document.getElementById('menu-area').style.display = 'block';
            let mealDetails = document.createElement('div')
            mealDetails.innerHTML = `
            <img src="${ data.meals[0].strMealThumb }" class="img-fluid">
            <h2>${ data.meals[0].strMeal }</h2>
            <h4>Ingredient</h4>
            <ul class="list-group">
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient1 }</li>
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient2 }</li>
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient3 }</li>
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient4 }</li>
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient5 }</li>
                <li><i class="bi bi-check-square-fill"></i> ${ data.meals[0].strIngredient6 }</li>
            </ul>
            `;
            mealDetails.className = "mealDetails";
            mealData.appendChild(mealDetails);
        })
}