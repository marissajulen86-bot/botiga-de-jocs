// All 8 products in your catalog
window.products = [
  {
    id: 1,
    name: "Speedy Grab",
    price: 12.99,
    img: "images/speedy-grab.jpg",
    desc: "Posa a prova la teva agilitat i reflexos! Sigues el primer a agafar les cartes correctes abans que els altres jugadors."
  },
  {
    id: 2,
    name: "CityScape",
    price: 13.25,
    img: "images/cityscape.jpg",
    desc: "Converteix-te en un mestre urbanista! Dissenya i construeix la teva ciutat mentre superes reptes i obstacles."
  },
  {
    id: 3,
    name: "Up",
    price: 11.10,
    img: "images/up.jpg",
    desc: "Senzill de jugar però impossible de deixar! Competeix per tenir la carta més alta en cada ronda."
  },
  {
    id: 4,
    name: "Qui se les queda",
    price: 13.99,
    img: "images/qui-se-les-queda.jpg",
    desc: "La clàssica Pedra, Paper, Tisores amb un toc especial! Usa cartes úniques per sorprendre els rivals."
  },
  {
    id: 5,
    name: "Urbatica",
    price: 12.99,
    img: "images/urbatica.jpg",
    desc: "Transforma la ciutat en un model de sostenibilitat! Treballa en equip per millorar l’urbanisme i cuidar el medi ambient."
  },
  {
    id: 6,
    name: "Huella",
    price: 20.00,
    img: "images/huella.jpg",
    desc: "Descobreix l’impacte de les teves decisions! Estratègia i reflexió personal combinades en un joc emocionant."
  },
  {
    id: 7,
    name: "Ciutat en crisi",
    price: 14.99,
    img: "images/ciutat-en-crisi.jpg",
    desc: "La ciutat està en perill! Col·labora amb els altres jugadors per salvar-la abans que sigui massa tard."
  },
  {
    id: 8,
    name: "La Falsa Identitat",
    price: 14.99,
    img: "images/falsa-identitat.jpg",
    desc: "Qui diu la veritat i qui enganya? Descobreix qui menteix abans que sigui massa tard en aquest joc de deducció."
  }
];

// Render products dynamically (call this on catalog page)
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;
  container.innerHTML = "";

  window.products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <span class="price">€${product.price.toFixed(2)}</span>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").addEventListener("click", () => {
      addToCart(product.id, 1);
    });
    container.appendChild(div);
  });
}
