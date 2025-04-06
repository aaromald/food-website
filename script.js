// Add interactivity to the food buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.food-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Get the food type from the data-type attribute
            const foodType = button.getAttribute('data-type');
            alert(`You selected ${foodType}! Let's explore some delicious ${foodType} options.`);
            // You can add more functionality here, like fetching food items of the selected type
        });
    });
});