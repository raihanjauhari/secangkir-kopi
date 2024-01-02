// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const ShoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sc.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove("active");
  }
});

// Tombol "Beli Sekarang"
const beliSekarangButton = document.querySelector(".cta");

beliSekarangButton.addEventListener("click", function (event) {
  // Menghentikan perilaku default dari tautan (mengarahkan ke '#')
  event.preventDefault();

  // Mengarahkan ke elemen produk
  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" });
  }

  // Menonaktifkan tombol setelah diklik
  beliSekarangButton.removeEventListener("click", this);
  beliSekarangButton.setAttribute("disabled", true);
});
