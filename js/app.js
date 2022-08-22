const cart = [];
// products-cart

function displayProduct() {

    const cartContainer = document.getElementById("players-cart");
    cartContainer.textContent = '';

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].playerName}</td>
        `;
        cartContainer.appendChild(tr);
    }

    const tr = document.createElement('tr');

    cartContainer.appendChild(tr);
}

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const player = {
        playerName: playerName,
    }

    cart.push(player);

    displayProduct();
}