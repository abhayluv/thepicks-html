 // Handle language selection
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const lang = item.dataset.lang;
            const button = document.getElementById('languageDropdown');
            button.innerHTML = `<span class="flag-icon flag-icon-${lang}"></span> ${item.textContent.trim()}`;
            // You can add logic here to actually change the language of the page
            console.log(`Language changed to: ${lang}`);
        });
    });

    // Ensure dropdowns work correctly on mobile
    document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
        dropdown.addEventListener('show.bs.dropdown', function () {
            if (!this.classList.contains('show')) {
                this.classList.add('show');
            }
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            if (this.classList.contains('show')) {
                this.classList.remove('show');
            }
        });
    });

    //  prevent closing from inner clicks
    document.querySelectorAll('.dropdown-menu').forEach(dropdownMenu => {
        dropdownMenu.addEventListener('click', e => {
            e.stopPropagation();
        });
    });