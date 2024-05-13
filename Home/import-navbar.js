/*class ImportNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <p class="navText">Patty-Github</p>
        <nav>
            <ul class="navLinks">
                <li><a href="/PattyWebsite/Coding Explanation/explanation-site.html">Code Projects</a></li>
                <li><a href="#">3D Models</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <button class="navButton">Contact</button>
    </header>`
    }
}*/

/*class ImportNavbar extends HTMLElement {
    connectedCallback() {
        fetch("/Patty-Github/Home/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch HTML content');
            }
            return response.text();
        })
        .then(navbarContent => {
            this.innerHTML = navbarContent;
        })
        .catch(error => {
            console.error('Error loading HTML content:', error);
        });
    }
}*/

class ImportNavbar extends HTMLElement {
    connectedCallback() {
        fetch("/Patty-Github/Home/navbar.html")
        .then(response => {
            return response.text();
        })
        .then(navbarContent => {
            this.innerHTML = navbarContent;
        })
    }
}

customElements.define("nav-bar", ImportNavbar);