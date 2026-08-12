const filterButtons =
    document.querySelectorAll(".control-btn");

const mealRows =
    document.querySelectorAll("#mealRows tr");

const searchInput =
    document.getElementById("search");


let activeFilter = "All";


function filterMeals() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    mealRows.forEach((row) => {

        const category =
            row.dataset.category;

        const searchData =
            row.dataset.search;


        const matchesCategory =
            activeFilter === "All" ||
            category === activeFilter;


        const matchesSearch =
            searchTerm === "" ||
            searchData.includes(searchTerm);


        if (matchesCategory && matchesSearch) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach((item) => {

                item.classList.remove("active");

            });


            this.classList.add("active");


            activeFilter =
                this.dataset.filter;


            filterMeals();

        }
    );

});


searchInput.addEventListener(
    "input",
    filterMeals
);