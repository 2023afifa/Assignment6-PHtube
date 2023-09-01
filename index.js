const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data);

    const tabContainer = document.getElementById("tab-container");
    const categories = data.data;

    categories.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="categorySection('${category.category_id}')" class="btn bg-gray-200 hover:bg-primary-color hover:text-white mr-3">${category.category}</button>
        `;
        tabContainer.appendChild(div);
    })
};


const categorySection = (categoryId) => {
    console.log(categoryId);
}


loadCategory();