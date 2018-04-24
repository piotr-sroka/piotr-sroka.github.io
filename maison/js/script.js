(function(){
    let menuHamburgerBtn = document.querySelector(".menutoggle.hamburger");
    let menuCrossBtn = document.querySelector(".menutoggle.cross");
    let mainMenu = document.querySelector(".header-topbar_menu");
    let filtersExpandButtons = document.querySelectorAll(".filter-expand-button");
    let categoriesSection = document.querySelector(".preferences-categories");
    let filtersSection = document.querySelector(".preferences-filters");
    let priceInputs = document.querySelectorAll(".price-filter_input");
    let priceFrom = document.querySelector(".price-filter_input__from");
    let priceTo = document.querySelector(".price-filter_input__to");
    let categories = document.querySelectorAll(".preferences-categorieslist_listitem");
    let colors = document.querySelectorAll(".filterbody-colors_coloritem");
    let sizes = document.querySelectorAll(".filterbody-sizes_sizeitem");
    let brands = document.querySelectorAll(".filterbody-brands_branditem");
    let filtersArray = [colors, sizes, brands];
    let products = document.querySelectorAll(".products-results_productitem");
    let categoriesFilter = "cat-all";
    let colorFilters = [];
    let sizeFilters = [];
    let brandFilters = [];

    menuHamburgerBtn.addEventListener("click", onMenuToggleClick);
    menuCrossBtn.addEventListener("click", onMenuToggleClick);

    filtersExpandButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            btn.classList.toggle("active");
            let parent = e.target.parentNode;
            if (parent.classList.contains("preferences-categories")) {
                parent.querySelector(".preferences-categorieslist").classList.toggle("active");
            }
            if (parent.classList.contains("preferences-filters")) {
                parent.querySelectorAll(".preferences-filters_filter").forEach(filter => filter.classList.toggle("active"));
            }
        });
    });

    function onMenuToggleClick() {
        if (this === menuHamburgerBtn) {
            menuHamburgerBtn.style.display = "none";
            menuCrossBtn.style.display = "block";
            mainMenu.style.display = "block";
        } else {
            menuHamburgerBtn.style.display = "block";
            menuCrossBtn.style.display = "none";
            mainMenu.style.display = "none";
        }
    }

    priceInputs.forEach(priceInput => {
        priceInput.addEventListener("keyup", () => {
            priceInput.value = "€ " + priceInput.value.replace(new RegExp("[^0-9]", "gi"), "");
            if (priceInput.value === "€ ") priceInput.value = "";
        });
    });

    categories.forEach(filter => {
        filter.addEventListener("click", () => {
            categories.forEach(filter => {
                filter.classList.remove("active");
            });
            filter.classList.add("active");
            categoriesFilter = filter.getAttribute("data-filter-category");
            categorizeProducts();
        });
    });
    
    filtersArray.forEach(filtersSection => {
        filtersSection.forEach(filter => {
            filter.addEventListener("click", () => {
                filter.classList.toggle("active");
                colorFilters = [];
                sizeFilters = [];
                brandFilters = [];
                filtersArray.forEach(filtersSection => {
                    filtersSection.forEach(filter => {
                        if (filter.classList.contains("active")) {
                        }
                    });
                });
                filterProducts();
            });
        });
    });

    function categorizeProducts() {
        products.forEach(product => {
            product.classList.add("hidden");
            if (categoriesFilter === "cat-all" || categoriesFilter === product.getAttribute("data-product-category")) {
                product.classList.remove("hidden");
            }
        });
    }

    function filterProducts() {
        products.forEach(product => {
            if (!product.classList.contains("hidden")) {
                // console.log(specificFilters.indexOf("white"));
                // console.log(product);
                // specificFilters.forEach(filter => {
                //     // console.log(">" + filter);
                //     console.log(filter !== product.getAttribute("data-product-color") && filter !== product.getAttribute("data-product-size") && filter !== product.getAttribute("data-product-brand"));
                //     console.log("-------------------------------------------")
                //     if (filter !== product.getAttribute("data-product-color") && filter !== product.getAttribute("data-product-size") && filter !== product.getAttribute("data-product-brand")) {
                //     //     product.classList.add("filtered");
                //         // console.log(filter);
                //     }
                // })
            }
        // specificFilters.forEach(filter => {
            // if (!product.classList.contains("hidden")) {
                // if (filter === product.getAttribute("data-product-color")) {
                //     product.classList.remove("hidden");
                // } else {
                //     product.classList.add("hidden");
                // }
                // if (filter === product.getAttribute("data-product-size")) {
                //     product.classList.remove("hidden");
                // } else {
                //     product.classList.add("hidden");
                // }
                // if (filter === product.getAttribute("data-product-brand")) {
                //     product.classList.remove("hidden");
                // } else {
                //     product.classList.add("hidden");
                // }
            // }
        });
        // console.log("categories: " + categoriesFilter);
        // console.log("specific: " + specificFilters);
    }
})();