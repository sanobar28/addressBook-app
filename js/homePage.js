window.addEventListener('DOMContentLoaded', (event) => {
    const template = document.createElement('template');
    template.innerHTML = `
    <header class="header-content header">
        <div class="logo-content">
            <img src="../assets/images/logo.png" id="address-book-logo"></img>
            <div class="logo-text">
                <span class="address-text">ADDRESS</span><br>
                <span class="address-text address-book">BOOK</span>
            </div>
        </div>
    </header>
    `
    let bodyContainer = document.getElementsByClassName("body-container")
    document.body.insertBefore(template.content, bodyContainer[0]);
});