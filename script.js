// Produtos de exemplo  4
const products = [
    { name: "Corrente Ponto de Luz", price: "R$ 299,90", image: "https://i.postimg.cc/5yLPzdZc/corrente.jpg" },
    { name: "Vestido Sarah", price: "R$ 390,90", image: "https://i.postimg.cc/YqtZJRZp/vestidobranco.jpg" },
    { name: "Salto alto Preto", price: "R$ 299,90", image: "https://i.postimg.cc/SxH495Ny/salto-alto.jpg" },
    { name: "Bolsa Branca Delicada", price: "R$ 199,90", image: "https://i.postimg.cc/v8qvXvrg/bolsa.jpg" },
    { name: "Pó Compacto Translúcido", price: "R$ 62,00", image: "/api/placeholder/400/300" },
    { name: "Sérum Facial Hidratante", price: "R$ 79,90", image: "/api/placeholder/400/300" },
    { name: "Protetor Solar FPS 50", price: "R$ 72,00", image: "/api/placeholder/400/300" },
    { name: "Demaquilante Bifásico", price: "R$ 48,00", image: "/api/placeholder/400/300" },
    { name: "Kit Pincéis Maquiagem", price: "R$ 115,90", image: "/api/placeholder/400/300" },
    { name: "Blush Rosado", price: "R$ 42,50", image: "/api/placeholder/400/300" },
    { name: "Iluminador Facial", price: "R$ 54,90", image: "/api/placeholder/400/300" },
    { name: "Contorno Facial em Pó", price: "R$ 65,90", image: "/api/placeholder/400/300" },
    { name: "Esmalte Gel Rosê", price: "R$ 24,90", image: "/api/placeholder/400/300" },
    { name: "Hidratante Corporal", price: "R$ 49,90", image: "/api/placeholder/400/300" },
    { name: "Óleo de Argan para Cabelos", price: "R$ 55,00", image: "/api/placeholder/400/300" },
    { name: "Shampoo Anti-Queda", price: "R$ 39,90", image: "/api/placeholder/400/300" },
    { name: "Condicionador Hidratante", price: "R$ 37,00", image: "/api/placeholder/400/300" },
    { name: "Máscara Capilar Reparadora", price: "R$ 52,50", image: "/api/placeholder/400/300" },
    { name: "Perfume Feminino 50ml", price: "R$ 119,90", image: "/api/placeholder/400/300" },
    { name: "Perfume Masculino 100ml", price: "R$ 139,90", image: "/api/placeholder/400/300" },
    { name: "Creme Anti-idade", price: "R$ 89,90", image: "/api/placeholder/400/300" },
    { name: "Sabonete Facial Esfoliante", price: "R$ 45,00", image: "/api/placeholder/400/300" },
    { name: "Água Termal 150ml", price: "R$ 37,90", image: "/api/placeholder/400/300" },
    { name: "Kit Manicure Profissional", price: "R$ 82,00", image: "/api/placeholder/400/300" },
    { name: "Lápis para Olhos Preto", price: "R$ 32,90", image: "/api/placeholder/400/300" },
    { name: "Delineador Líquido", price: "R$ 45,00", image: "/api/placeholder/400/300" },
    { name: "Fixador de Maquiagem", price: "R$ 58,00", image: "/api/placeholder/400/300" },
    { name: "Primer Facial", price: "R$ 61,90", image: "/api/placeholder/400/300" },
    { name: "Máscara Facial de Argila", price: "R$ 49,00", image: "/api/placeholder/400/300" },
    { name: "Lenços Demaquilantes", price: "R$ 28,90", image: "/api/placeholder/400/300" }
];

const catalogContainer = document.getElementById('catalog');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const clearCartButton = document.getElementById('clearCart');
const shareCartButton = document.getElementById('shareCart');
const cartButton = document.getElementById('cartButton');
const cartButtonCounter = document.getElementById('cartButtonCounter');

// Inicialização do carrinho e favoritos com localStorage
let cartItems = [];
let favorites = new Set();

// Carregar carrinho do localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('glamourCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

// Salvar carrinho no localStorage
function saveCartToStorage() {
    localStorage.setItem('glamourCart', JSON.stringify(cartItems));
}

// Carregar favoritos do localStorage
function loadFavoritesFromStorage() {
    const savedFavorites = localStorage.getItem('glamourFavorites');
    if (savedFavorites) {
        // Converter o array salvo de volta para um Set
        favorites = new Set(JSON.parse(savedFavorites));
    }
}

// Salvar favoritos no localStorage
function saveFavoritesToStorage() {
    // Converter o Set para array para salvar no localStorage
    localStorage.setItem('glamourFavorites', JSON.stringify([...favorites]));
}

// Função para mostrar notificação
function showNotification(message) {
    // Criar elemento de notificação se não existir
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    
    // Definir mensagem e mostrar notificação
    notification.textContent = message;
    notification.classList.add('show');
    
    // Esconder notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}




// Carregar produtos
function loadProducts() {
    catalogContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        
        // Verificar se o produto está favoritado para mostrar o ícone correto
        const isFavorite = favorites.has(index.toString());
        const heartClass = isFavorite ? 'fas fa-heart favorite-active' : 'far fa-heart';
        
        productCard.innerHTML = `
            <div class="product-image-container" data-index="${index}">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <div class="product-actions">
                    <button class="favorite-btn" data-index="${index}">
                        <i class="${heartClass}"></i>
                    </button>
                    <button class="cart-btn" data-index="${index}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        
        catalogContainer.appendChild(productCard);
    });
    
    // Adicionar contadores aos produtos que já estão no carrinho
    updateProductCounters();
    
    // Adicionar eventos após criar os elementos
    addEventListeners();
}

// Adicionar eventos
function addEventListeners() {
    // Evento para abrir modal ao clicar na imagem
    const productImages = document.querySelectorAll('.product-image-container');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            modalImg.src = products[index].image;
            modal.style.display = 'flex';
        });
    });
    
    // Fechar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Favoritar produto
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const heartIcon = this.querySelector('i');
            
            if (favorites.has(index)) {
                favorites.delete(index);
                heartIcon.classList.remove('fas', 'favorite-active');
                heartIcon.classList.add('far');
            } else {
                favorites.add(index);
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas', 'favorite-active');
            }
            
            // Salvar favoritos no localStorage após cada alteração
            saveFavoritesToStorage();
        });
    });
    
    // Adicionar ao carrinho
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            addToCart(index);
            
            // Verificar se já existe um contador no produto
            let counterElem = this.closest('.product').querySelector('.cart-counter');
            
            if (!counterElem) {
                // Criar contador se não existir
                counterElem = document.createElement('div');
                counterElem.classList.add('cart-counter');
                this.closest('.product').style.position = 'relative';
                this.closest('.product').appendChild(counterElem);
                counterElem.textContent = '1';
            } else {
                // Incrementar o contador do produto específico
                const currentCount = parseInt(counterElem.textContent || '0');
                counterElem.textContent = currentCount + 1;
            }
            
            // Animação de confirmação
            this.querySelector('i').style.color = '#e66fac';
            setTimeout(() => {
                this.querySelector('i').style.color = '';
            }, 300);
            
            // Mostrar notificação
            showNotification(`${products[index].name} adicionado ao carrinho!`);
        });
    });
    
    // Compartilhar site
    document.getElementById('shareButton').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Compartilhar via WhatsApp
        const text = 'Confira os produtos incríveis da Glamour Cosméticos!';
        const url = window.location.href;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
        window.open(whatsappUrl, '_blank');
    });
    
    // Fechar carrinho
    closeCart.addEventListener('click', function() {
        cartOverlay.style.display = 'none';
    });
    
    // Fechar carrinho ao clicar fora
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) {
            cartOverlay.style.display = 'none';
        }
    });
    
    // Limpar carrinho
    clearCartButton.addEventListener('click', function() {
        cartItems = [];
        updateCartDisplay();
        updateCartCounter();
        
        // Limpar contadores nos produtos
        document.querySelectorAll('.cart-counter').forEach(counter => {
            counter.remove();
        });
        
        // Limpar carrinho no localStorage
        saveCartToStorage();
    });
    
    // Compartilhar carrinho no WhatsApp
    shareCartButton.addEventListener('click', function() {
        shareCartOnWhatsApp();
    });
    
    // Botão do carrinho no canto superior direito
    cartButton.addEventListener('click', function() {
        openCart();
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productIndex) {
    const product = products[productIndex];
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity++;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    updateCartCounter();
    
    // Salvar carrinho no localStorage após cada alteração
    saveCartToStorage();
}

// Função para remover produto do carrinho
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
    updateCartCounter();
    
    // Atualizar contadores nos produtos
    updateProductCounters();
    
    // Salvar carrinho no localStorage após remover item
    saveCartToStorage();
}

// Função para atualizar contadores nos produtos
function updateProductCounters() {
    // Primeiro, remover todos os contadores
    document.querySelectorAll('.cart-counter').forEach(counter => {
        counter.remove();
    });
    
    // Depois, adicionar contadores atualizados
    cartItems.forEach(item => {
        const productElement = document.querySelector(`.product-image-container[data-index="${item.index}"]`);
        if (productElement) {
            const productCard = productElement.closest('.product');
            let counterElem = productCard.querySelector('.cart-counter');
            
            if (!counterElem) {
                counterElem = document.createElement('div');
                counterElem.classList.add('cart-counter');
                productCard.style.position = 'relative';
                productCard.appendChild(counterElem);
            }
            
            counterElem.textContent = item.quantity;
        }
    });
}

// Função para atualizar quantidade de um item no carrinho
function updateItemQuantity(index, change) {
    cartItems[index].quantity += change;
    
    if (cartItems[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCartDisplay();
        updateCartCounter();
        updateProductCounters();
        
        // Salvar carrinho no localStorage após atualizar quantidade
        saveCartToStorage();
    }
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio</p>';
        cartTotalElement.textContent = 'Total: R$ 0,00';
        return;
    }
    let cartHTML = '';
    let total = 0;
    
    cartItems.forEach((item, index) => {
        // Extrair o valor numérico do preço (removendo "R$ " e substituindo vírgula por ponto)
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">${item.price} x ${item.quantity}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateItemQuantity(${index}, -1)">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateItemQuantity(${index}, 1)">+</button>
                        <span class="cart-item-remove" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Função para atualizar o contador do botão do carrinho
function updateCartCounter() {
    let totalItems = 0;
    
    cartItems.forEach(item => {
        totalItems += item.quantity;
    });
    
    cartButtonCounter.textContent = totalItems;
    
    // Mostrar ou esconder o contador baseado na quantidade
    if (totalItems > 0) {
        cartButtonCounter.style.display = 'flex';
    } else {
        cartButtonCounter.style.display = 'none';
    }
}

// Função para abrir o carrinho
function openCart() {
    cartOverlay.style.display = 'flex';
    updateCartDisplay();
}

// Função para compartilhar o carrinho no WhatsApp
function shareCartOnWhatsApp() {
    if (cartItems.length === 0) {
        alert('Adicione produtos ao carrinho antes de compartilhar!');
        return;
    }
    
    // Pedir endereço e forma de pagamento ao usuário
    const endereco = prompt('Endereço: Digite seu endereço aqui');
    const formaPagamento = prompt('Digite sua forma de pagamento: cartão ou pix');
    
    // Verificar se o usuário forneceu as informações
    if (!endereco || !formaPagamento) {
        alert('Por favor, forneça seu endereço e forma de pagamento para continuar.');
        return;
    }
    
    let message = '*Olá, gostaria de fazer meu pedido:*\n\n';
    let total = 0;
    
    cartItems.forEach(item => {
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        message += `• ${item.quantity}x ${item.name} - ${item.price} cada\n`;
    });
    
    message += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += `*Endereço:* ${endereco}\n`;
    message += `*Forma de pagamento:* ${formaPagamento}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp com a mensagem preenchida
    window.open(`https://wa.me/+5583991816152?text=${encodedMessage}`, '_blank');
}

// Função para remover acentos de uma string
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Função para pesquisar produtos
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const catalogContainer = document.getElementById('catalog');
    // Criar elemento para mensagem de "nenhum resultado"
    const noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results';
    noResultsMessage.textContent = 'Nenhum produto encontrado para sua pesquisa.';
    noResultsMessage.style.display = 'none';
    // Adicionar a mensagem após o catálogo
    catalogContainer.parentNode.insertBefore(noResultsMessage, catalogContainer.nextSibling);

    // Função para realizar a pesquisa
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const searchTermNoAccents = removeAccents(searchTerm);
        const productCards = document.querySelectorAll('.product');
        let resultsFound = false;

        // Se o campo de pesquisa estiver vazio, mostrar todos os produtos
        if (!searchTerm) {
            productCards.forEach(card => {
                card.classList.remove('hidden');
                
                // Remover qualquer highlight anterior
                const title = card.querySelector('.product-title');
                title.innerHTML = title.textContent;
            });
            
            noResultsMessage.style.display = 'none';
            return;
        }

        // Verificar cada produto
        productCards.forEach(card => {
            const title = card.querySelector('.product-title');
            const productName = title.textContent.toLowerCase();
            const productNameNoAccents = removeAccents(productName);
            
            // Verificar se o produto corresponde à pesquisa (com ou sem acentos)
            if (productName.includes(searchTerm) || productNameNoAccents.includes(searchTermNoAccents)) {
                resultsFound = true;
                card.classList.remove('hidden');
                
                // Destacar o termo pesquisado no título
                // Criamos um regex que considera variações com e sem acentos
                let displayText = title.textContent;
                let startIndex = productNameNoAccents.indexOf(searchTermNoAccents);
                
                if (startIndex !== -1) {
                    const matchedText = productName.substring(startIndex, startIndex + searchTerm.length);
                    const regex = new RegExp(matchedText, 'gi');
                    displayText = displayText.replace(regex, `<span class="search-highlight">${matchedText}</span>`);
                    title.innerHTML = displayText;
                }
            } else {
                card.classList.add('hidden');
                
                // Remover qualquer highlight anterior
                title.innerHTML = title.textContent;
            }
        });

        // Mostrar mensagem se não houver resultados
        if (!resultsFound) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Evento de clique no botão de pesquisa
    searchButton.addEventListener('click', performSearch);

    // Pesquisa em tempo real enquanto o usuário digita
    searchInput.addEventListener('keyup', function(e) {
        // Pesquisar imediatamente ou se pressionar Enter
        if (e.key === 'Enter' || this.value.length >= 2 || this.value.length === 0) {
            performSearch();
        }
    });

    // Pesquisar quando o campo de pesquisa perder o foco
    searchInput.addEventListener('blur', performSearch);
}

// Inicializar o catálogo
window.onload = function() {
    // Carregar dados salvos do localStorage
    loadCartFromStorage();
    loadFavoritesFromStorage();
    
    // Inicializar o catálogo com os dados carregados
    loadProducts();
    updateCartCounter(); // Inicializar o contador do carrinho
    setupSearch(); // Inicializar a funcionalidade de pesquisa
};


