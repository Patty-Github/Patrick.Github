class ImportNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <p class="navText">Patty-Github</p>
        <nav>
            <ul class="navLinks">
                <li><a href="Patty-Github/explanation-site.html">Code Projects</a></li>
                <li><a href="#">3D Models</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <button class="navButton">Contact</button>
    </header>`
    }
}

customElements.define("nav-bar", ImportNavbar);
