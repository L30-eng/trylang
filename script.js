// ================= DARK MODE =================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("codepath-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("codepath-theme", "dark");
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("codepath-theme", "light");
    }

});


// Side bar to katabi sa LOGO //

const menuToggle = document.getElementById("menuToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (menuToggle && sidebarMenu && sidebarOverlay) {

    function toggleSidebar() {
        const isOpen = sidebarMenu.classList.toggle("active");

        sidebarOverlay.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    }

    menuToggle.addEventListener("click", toggleSidebar);

    sidebarOverlay.addEventListener("click", toggleSidebar);

    sidebarMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            sidebarMenu.classList.remove("active");
            sidebarOverlay.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}