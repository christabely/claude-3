document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerSidebar = document.getElementById('hamburger-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const wishlistIcon = document.getElementById('wishlist-icon');
    const cartIcon = document.getElementById('cart-icon');
    const categoriesIcon = document.getElementById('categories-icon');

    function toggleSidebar(sidebar) {
        sidebar.classList.toggle('active');
    }

    hamburgerMenu.addEventListener('click', () => toggleSidebar(hamburgerSidebar));
    closeSidebar.addEventListener('click', () => toggleSidebar(hamburgerSidebar));

    // Toggle submenu and change plus/minus sign
    document.querySelectorAll('.toggle-submenu').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const submenu = event.target.nextElementSibling;
            const toggleIcon = event.target.querySelector('.toggle-icon');
            
            if (submenu) {
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
            }
            
            toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
        });
    });

    // Example functions to update cart and wishlist counts
    function updateCartCount(count) {
        document.querySelector('.cart-count').textContent = count;
    }

    function updateWishlistCount(count) {
        document.querySelector('.wishlist-count').textContent = count;
    }

    // Example function to add item to wishlist
    function addToWishlist(item) {
        // Implement wishlist functionality
        updateWishlistCount(1); // Update this with actual count
    }

    // Example function to add item to cart
    function addToCart(item) {
        // Implement cart functionality
        updateCartCount(1); // Update this with actual count
    }

    // Add click events for other icons (implement as needed)
    wishlistIcon.addEventListener('click', () => {
        // Implement wishlist view functionality
    });

    cartIcon.addEventListener('click', () => {
        // Implement cart view functionality
    });

    categoriesIcon.addEventListener('click', () => {
        // Implement categories view functionality
    });
});
