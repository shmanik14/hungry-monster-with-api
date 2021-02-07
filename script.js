document.getElementById('search-btn').addEventListener('click', function(){
    const searchValue = document.getElementById('search-input').value;
    const mealArea = document.getElementById('menu-area');
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {   
    let menuInfo = '';     
    if(data.meals){     
        data.meals.forEach(meal =>{
            menuInfo += `
            <div id="single-menu" class="single-menu">
            <img src="${meal.strMealThumb}" alt="Menu Item" class="img-fluid">
            <h3>${meal.strMeal}</h3>
            </div>`;
        })
    }else{alert('Invalid Input')}   
    mealArea.innerHTML = menuInfo;
    })
}) 
document.getElementById('single-menu').addEventListener('click', function(){ 
    console.log('clicked');
}) 