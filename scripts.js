function searchRecipes() {
    const ingredients = document.getElementById('ingredient-input').value;
    if (ingredients.trim() === '') {
        alert('Please enter some ingredients.');
        return;
    }

    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = ''; // Clear previous results

    // Simulate fetching recipes (you can replace this with an actual API call)
    const recipes = [
        {
            title: 'Spaghetti Bolognese',
            image: 'non-copyright-image1.jpg',
            ingredients: 'spaghetti, ground beef, tomato sauce'
        },
        {
            title: 'Chicken Salad',
            image: 'non-copyright-image2.jpg',
            ingredients: 'chicken, lettuce, tomato, cucumber'
        }
        // Add more recipes as needed
    ];

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.ingredients}</p>
        `;
        recipesContainer.appendChild(card);
    });
}
