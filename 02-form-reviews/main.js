// 1. Setup Data: Array of Objects
// We start with some dummy data to simulate existing reviews
let reviews = [
    {
        name: "Mike Derycke",
        rating: 5,
        text: "Great course. Come study MCT at EHB!"
    },
    {
        name: "P. Dickx",
        rating: 2,
        text: "I liked the orignal more."
    },
    {
        name: "Student 1",
        rating: 1,
        text: "Hard."
    }
];

// 2. Select DOM Elements
const reviewsContainer = document.getElementById('reviews-container');
const reviewForm = document.getElementById('review-form');
const nameInput = document.getElementById('name');
const ratingInput = document.getElementById('rating');
const reviewInput = document.getElementById('review');

// 3. Render Function
// This function should render the reviews array, based on the template in the HTML file.
function renderReviews() {
    console.log("Render the reviews");

    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const reviewElement = `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-name">${review.name}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `;

        reviewsContainer.innerHTML += reviewElement;
    });
}

// 4. Initial Render
// Call the function once on load to show the initial data
renderReviews();

// 5. Handle Form Submission
reviewForm.addEventListener('submit', (e) => {
    // 5.1 Stop the page from reloading!
    e.preventDefault();

    // 5.2 Create a new object from input values
    const newReview = {
        name: nameInput.value,
        rating: parseInt(ratingInput.value),
        text: reviewInput.value
    };

    // 5.3 Add (push) the new object to our data array
    reviews.push(newReview);

    // 5.4 Re-render the list to show the new item
    renderReviews();

    // Optional: Clear the form fields
    reviewForm.reset();
});
