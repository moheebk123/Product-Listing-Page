const productBox = document.getElementById('product-box');
const previousPageBtn = document.getElementById('previous-page');
const nextPageBtn = document.getElementById('next-page');
const pagesBox = document.getElementById('pages-box');
const categoryListBox = document.querySelector('#category-list');
const brand = document.querySelector('#brand');
const brandBox = document.querySelector('#brand-box');
const rating = document.querySelector('#rating');
const ratingBox = document.querySelector('#rating-box');
let categories;
let pages;
let pagesLength;

const categoryHTML = () => {
    return `
    <li class="category-item">All</li>
    <li class="category-item">Smartphones</li>
    <li class="category-item">Laptop</li>
    <li class="category-item">Electronics</li>
    <li class="category-item">Books</li>
    <li class="category-item">Fashion</li>
    <li class="category-item">Home-Decoration</li>
    `;
};

const mobileBrandHTML = () => {
    brand.style.display = 'block';
    brandBox.innerHTML = `
    <div>
        <input type="checkbox" value="Samsung">
        <label>Samsung</label>
    </div>

    <div>
        <input type="checkbox" value="Apple">
        <label>Apple</label>
    </div>

    <div>
        <input type="checkbox" value="OPPO">
        <label>OPPO</label>
    </div>

    <div>
        <input type="checkbox" value="IQOO">
        <label>IQOO</label>
    </div>

    <div>
        <input type="checkbox" value="Nothing">
        <label>Nothing</label>
    </div>

    <div>
        <input type="checkbox" value="Infinix">
        <label>Infinix</label>
    </div>

    <div>
        <input type="checkbox" value="VIVO">
        <label>VIVO</label>
    </div>

    <div>
        <input type="checkbox" value="POCO">
        <label>POCO</label>
    </div>

    <div>
        <input type="checkbox" value="Realme">
        <label>Realme</label>
    </div>

    <div>
        <input type="checkbox" value="Motorola">
        <label>Motorola</label>
    </div>
    `;
};

const laptopBrandHTML = () => {
    brand.style.display = 'block';
    brandBox.innerHTML = `
    <div>
        <input type="checkbox" value="Apple">
        <label>Apple</label>
    </div>

    <div>
        <input type="checkbox" value="HP">
        <label>HP</label>
    </div>

    <div>
        <input type="checkbox" value="Lenovo">
        <label>Lenovo</label>
    </div>

    <div>
        <input type="checkbox" value="ASUS">
        <label>ASUS</label>
    </div>

    <div>
        <input type="checkbox" value="ACER">
        <label>ACER</label>
    </div>
    `;
};

const ratingHTML = () => {
    return `
    <div>
    <input type="checkbox" value="5" class="ratings">
        <img class="star5" src="./asset/5 star.jpg" alt="5 star">
    </div>

    <div>
    <input type="checkbox" value="4" class="ratings">
    <img class="star4" src="./asset/4 star.jpg" alt="4 star">
    </div>
    `;
};

const paginationHTML = (length) => {
    pagesBox.innerHTML = '';
    productBox.style.transform = "translateY(-20px)";

    for(let i = 1; i <= length; i++) {

        if(i == 1) {
            const div = `<div class="page active">${i}</div>`;
            pagesBox.insertAdjacentHTML("beforeend", div);
        } else {
            const div = `<div class="page">${i}</div>`;
            pagesBox.insertAdjacentHTML("beforeend", div);
        }
    }

    pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.addEventListener("click", () => {
            pages.forEach(page => page.classList.remove("active"));
            page.classList.add("active");
            if (page.innerText == 1) {
                productBox.style.transform = "translateY(-20px)";
            } else if (page.innerText == 2) {
                productBox.style.transform = "translateY(-790px)";
            } else if (page.innerText == 3) {
                productBox.style.transform = "translateY(-1570px)";
            } else if (page.innerText == 4) {
                productBox.style.transform = "translateY(-2340px)";
            } else if (page.innerText == 5) {
                productBox.style.transform = "translateY(-3120px)";
            } else if (page.innerText == 6) {
                productBox.style.transform = "translateY(-3890px)";
            } else if (page.innerText == 7) {
                productBox.style.transform = "translateY(-4660px)";
            }
        });
    });

};

nextPageBtn.addEventListener('click', () => {
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];

        if (element.classList.contains('active')) {
            if( (index < pages.length - 1)) {
                pages[index + 1].classList.add('active');
                element.classList.remove('active');

                if (pages[index + 1].innerText == 1) {
                    productBox.style.transform = "translateY(-20px)";
                } else if (pages[index + 1].innerText == 2) {
                    productBox.style.transform = "translateY(-790px)";
                } else if (pages[index + 1].innerText == 3) {
                    productBox.style.transform = "translateY(-1570px)";
                } else if (pages[index + 1].innerText == 4) {
                    productBox.style.transform = "translateY(-2340px)";
                } else if (pages[index + 1].innerText == 5) {
                    productBox.style.transform = "translateY(-3120px)";
                } else if (pages[index + 1].innerText == 6) {
                    productBox.style.transform = "translateY(-3890px)";
                } else if (pages[index + 1].innerText == 7) {
                    productBox.style.transform = "translateY(-4660px)";
                }
            }

            break;
        }
    }
});

previousPageBtn.addEventListener('click', () => {
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];

        if (element.classList.contains('active')) {
            if( (index > 0)) {
                pages[index - 1].classList.add('active');
                element.classList.remove('active');

                if (pages[index - 1].innerText == 1) {
                    productBox.style.transform = "translateY(-20px)";
                } else if (pages[index - 1].innerText == 2) {
                    productBox.style.transform = "translateY(-790px)";
                } else if (pages[index - 1].innerText == 3) {
                    productBox.style.transform = "translateY(-1570px)";
                } else if (pages[index - 1].innerText == 4) {
                    productBox.style.transform = "translateY(-2340px)";
                } else if (pages[index - 1].innerText == 5) {
                    productBox.style.transform = "translateY(-3120px)";
                } else if (pages[index - 1].innerText == 6) {
                    productBox.style.transform = "translateY(-3890px)";
                } else if (pages[index - 1].innerText == 7) {
                    productBox.style.transform = "translateY(-4660px)";
                }
            }

            break;
        }
    }
});

const productHTML = (productData) => {
    let ratingImageLink;
    if(productData.rating == 5) {
        ratingImageLink = './asset/5 star.jpg';
    } else {
        ratingImageLink = './asset/4 star.jpg';
    }
    return `
    <div class="product">
        <div id="product-image-box">
            <img src="${productData.image}" class="product-image">
        </div>
        <div id="content-box">
            <div id="rating-box">
                <img src="${ratingImageLink}" id="rating-image">
            </div>
            <div id="price">₹${productData.price}</div>

            <div id="title">${productData.title}</div>
        </div>
    </div>
    `;
};

const showProductbyCategory = async (productCategory) => {
    const data = await searchProduct();

    const ratings = ratingBox.querySelectorAll('input');
    ratings.forEach((rating) => rating.checked = false);

    const brands = brandBox.querySelectorAll("input");
    brands.forEach((brand) => brand.checked = false);

    const filterProductByCategory = data.filter((filterProduct) => filterProduct.category.includes(productCategory));

    ratings.forEach((rating) => {
        rating.addEventListener('click', () => {
            ratings.forEach((rating) => rating.checked = false);
            rating.checked = true;
            const currentRating = Number(rating.value);
            const filterProductByCategoryRating = filterProductByCategory.filter((rate) => rate.rating == currentRating);

            brands.forEach((brand) => {
                brand.addEventListener('click', () => {
                    brands.forEach((brand) => brand.checked = false);
                    brand.checked = true;
                    const currentBrand = brand.value;
                    const filterProductByCategoryRatingBrand = filterProductByCategoryRating.filter((brandName) => brandName.brand.includes(currentBrand));

                    fillProduct(filterProductByCategoryRatingBrand);

                    pagesLength = Math.ceil(filterProductByCategoryRatingBrand.length / 6);
                    paginationHTML(pagesLength);
                });
            });

            fillProduct(filterProductByCategoryRating);

            pagesLength = Math.ceil(filterProductByCategoryRating.length / 6);
            paginationHTML(pagesLength);
        });
    });

    brands.forEach((brand) => {
        brand.addEventListener('click', () => {
            brands.forEach((brand) => brand.checked = false);
            brand.checked = true;
            const currentBrand = brand.value;
            const filterProductByCategoryBrand = filterProductByCategory.filter((brandName) => brandName.brand.includes(currentBrand));

            ratings.forEach((rating) => {
                rating.addEventListener('click', () => {
                    ratings.forEach((rating) => rating.checked = false);
                    rating.checked = true;
                    const currentRating = Number(rating.value);
                    const filterProductByCategoryBrandRating = filterProductByCategoryBrand.filter((rate) => rate.rating == currentRating);

                    fillProduct(filterProductByCategoryBrandRating);

                    pagesLength = Math.ceil(filterProductByCategoryBrandRating.length / 6);
                    paginationHTML(pagesLength);
                });
            });

            fillProduct(filterProductByCategoryBrand);

            pagesLength = Math.ceil(filterProductByCategoryBrand.length / 6);
            paginationHTML(pagesLength);
        });
    });

    fillProduct(filterProductByCategory);

    pagesLength = Math.ceil(filterProductByCategory.length / 6);
    paginationHTML(pagesLength);
};

const searchProduct = async () => {
    try {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const response = await fetch('./index.json', setHeader);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(`The error is ${err}`);
    }
};

const fillProduct = (data) => {
    productBox.innerHTML = '';
    data.forEach((productData, index) => {
        const product = productHTML(productData);
        productBox.insertAdjacentHTML("beforeend", product);
    });
};

const showData = async () => {
    const rating = ratingHTML();
    ratingBox.innerHTML = rating;

    const category = categoryHTML();
    categoryListBox.innerHTML = category;
    categories = document.querySelectorAll('.category-item');

    const data = await searchProduct();

    fillProduct(data);

    pagesLength = Math.ceil(data.length / 6);
    paginationHTML(pagesLength);
};

categoryListBox.addEventListener('click', () => {
    if (event.target.innerHTML === 'Smartphones') {
        mobileBrandHTML();
    } else if (event.target.innerHTML === 'Laptop') {
        laptopBrandHTML();
    } else {
        brand.style.display = 'none';
    }

    if (event.target.innerHTML === 'Smartphones' ||
    event.target.innerHTML === 'Laptop' ||
    event.target.innerHTML === 'Electronics' ||
    event.target.innerHTML === 'Books' ||
    event.target.innerHTML === 'Fashion' ||
    event.target.innerHTML === 'Home-Decoration' ||
    event.target.innerHTML === 'All') {
        rating.style.display = 'block';
        let productCategory = event.target.innerHTML;
        if (productCategory === 'All') {
            productCategory = '';
        }
        showProductbyCategory(productCategory);
    }
});

window.addEventListener('load', showData);
