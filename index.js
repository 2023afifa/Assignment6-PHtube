const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data);

    const tabContainer = document.getElementById("tab-container");
    const categories = data.data;

    categories.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="categorySection('${category.category_id}')" class="btn bg-gray-200 hover:bg-gray-300 focus:bg-primary-color focus:text-white mr-3">${category.category}</button>
        `;
        tabContainer.appendChild(div);
    })
};


const categorySection = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    cardContainer.textContent = "";

    if (!data.status) {
        const falseDiv = document.createElement("div");
        falseDiv.innerHTML = `
        <div class="">
                    <img src="images/Icon.png" alt="" class="w-36 h-36 mx-auto">
                    <h2 class="text-3xl font-bold text-center">Oops!! Sorry, There is no content here</h2>
        </div>
        `;
        cardContainer.appendChild(falseDiv);
    }

    data.data?.forEach((cards) => {
        console.log(cards);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src=${cards?.thumbnail} alt="" class="h-48 w-full" /></figure>
            <div class="card-body">
                <div class="flex">
                    <div class="mr-5">
                        <img src=${cards?.authors[0].profile_picture} alt="" class="w-10 h-10 rounded-full">
                    </div>
                    <div>
                        <h2 class="card-title text-base font-bold">${cards?.title}</h2>
                        <div class="flex">
                            <p class="flex-none mr-2">${cards?.authors[0].profile_name}</p>
                            <img src=${cards?.authors[0]?.verified ? "images/fi_10629607.png" : ""}>
                        </div>
                        <p>${cards?.others.views}</p>
                    </div>
                </div>
            </div>
        </div>
        `;

        cardContainer.appendChild(div);
    })
}

const sortButton = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await response.json();

    // console.log(data.data);

    data.data.forEach((viewTotal) => {
        const viewStr = viewTotal.others.views;
        const viewInt = parseFloat(viewStr);
        console.log(viewInt);
    })   
}

function sortArr(viewInt){
    const viewArr = [];
    viewArr.push(viewInt);
    console.log(viewArr);
}

loadCategory();
// categorySection(1000);



function blogBtn(){
    window.location.href = "blog.html";
}