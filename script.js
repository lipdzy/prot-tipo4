// Produtos de exemplo  
const products = [
    { name: "Buquê de rosas eternas com Ferrero Roche", price: "R$ 120,00", image: "https://i.postimg.cc/kGk1WvMQ/Imagem-do-Whats-App-de-2025-04-21-s-18-06-01-97d5dc61.jpg" }, // id; 00
    { name: "Buquê de 7 Rosas Eternas", price: "R$ 65,00", image: "https://i.postimg.cc/HW5hCF63/7-rosas-eterna.jpg" }, // id; 01
    { name: "Buquê de 7 mini rosas eternas com bombons", price: "R$ 100,00", image: "https://i.postimg.cc/sXJGYjVw/7-mini-rosas.jpg" }, // id; 02
    { name: "Buquê de 1 rosa eterna com bombons", price: "R$ 65,00", image: "https://i.postimg.cc/5yhJjzZG/1-rosa-eterna.jpg" }, // id; 03
    { name: "Buquê de Heineken", price: "R$ 75,00", image: "https://i.postimg.cc/yYh6WQ8y/heineken.jpg" }, // id; 04
    { name: "Buquê de borboletas sem led", price: "R$ 45,00", image: "https://i.postimg.cc/6qYHmxhh/sem-led.jpg" }, // id; 05
    { name: "Buquê de borboletas com Led", price: "R$ 55,00", image: "https://i.postimg.cc/MKfR48tK/com-led.jpg" }, // id; 06
    { name: "Buquê temático", price: "R$ 55,00", image: "https://i.postimg.cc/HkC3HtSM/tematico.jpg" }, // id; 07
    { name: "Buquê de chocolates", price: "R$ 65,00", image: "https://i.postimg.cc/8zKFwprC/de-chocolate.jpg" }, // id; 08
    { name: "Buquê Ferrero Roche", price: "R$ 200,00", image: "https://i.postimg.cc/zv6tnZS2/ferrero.jpg" }, // id; 09
    { name: "Rosa Eterna", price: "R$ 15,00", image: "https://i.postimg.cc/QN10zPmD/eterna.jpg" }, // id; 10
    { name: "Mini cesta de Bis", price: "R$ 35,00", image: "https://i.postimg.cc/MHpH1gKB/de-bis.jpg" }, // id; 11
    { name: "Cesta de coração", price: "R$ 35,00", image: "https://i.postimg.cc/htjYNsh0/de-coracao.jpg" }, // id; 12
    { name: "Cesta de bis com bombons", price: "R$ 55,00", image: "https://i.postimg.cc/44jbX185/bonbons.jpg" }, // id; 13
    { name: "Cesta de Ferrero com Mini Urso", price: "R$ 80,00", image: "https://i.postimg.cc/TPZYKhBZ/ferro-com-mini-urso.jpg" }, // id; 14
    { name: "Cesta de coração com Mini Urso", price: "R$ 45,00", image: "https://i.postimg.cc/fRHdFTXF/cesta36.jpg" }, // id; 15
    { name: "Cesta de Coração com Mini almofada", price: "R$ 45,00", image: "https://i.postimg.cc/MGCn2cGs/cest.jpg" }, // id; 16
    { name: "Luminária Rosa, Bela e a Fera", price: "R$ 65,00", image: "https://i.postimg.cc/sfTqmbg2/belafera.jpg" }, // id; 17
    { name: "Caixa Box Completa", price: "R$ 120,00", image: "https://i.postimg.cc/G34VMq8J/amorearte-id-1.jpg" }, // id; 18
    { name: "Cubo de Fotos giratório", price: "R$ 45,00", image: "https://i.postimg.cc/zGQRkz9k/cubo.jpg" }, // id; 19
    { name: "Calendário de fotos com imãs", price: "R$ 20,00", image: "https://i.postimg.cc/1tqTzzZ7/ima.jpg" }, // id; 20
    { name: "Quadro Personalizado Tradicional", price: "R$ 35,00", image: "https://i.postimg.cc/PrPDvv7q/quadro.jpg" }, // id; 21
    { name: "Chaveiro Personalizado", price: "R$ 15,00", image: "https://i.postimg.cc/G3s8cnTB/chaveiro.jpg" }, // id; 22
    { name: "Quadro Mãe Amor", price: "R$ 35,00", image: "https://i.postimg.cc/bJfxPYYR/quadro-de-mae.jpg" }, // id; 23
    { name: "Quadro Mãe Porto Seguro", price: "R$ 35,00", image: "https://i.postimg.cc/XJbm1yhK/quadro-porto-seguro.jpg" }, // id; 24
    { name: "Tirinha de fotos", price: "R$ 10,00", image: "https://i.postimg.cc/VkzFhWLk/tirinha.jpg" }, // id; 25
    { name: "Fotos Polaroid", price: "R$ 1,00 apartir de 10 fotos", image: "https://i.postimg.cc/BQPW6sxK/paraloid.jpg" }, // id; 26
   // { name: "Produto 25", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 27
   // { name: "Produto 26", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 28
   // { name: "Produto 27", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 29
   // { name: "Produto 28", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 30
   // { name: "Produto 29", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 31
   // { name: "Produto 30", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 32
   // { name: "Produto 31", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 33
   // { name: "Produto 32", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 34
   // { name: "Produto 33", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 35
   // { name: "Produto 34", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 36
   // { name: "Produto 35", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 37
   // { name: "Produto 36", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 38
   // { name: "Produto 37", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 39
   // { name: "Produto 38", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 40
   // { name: "Produto 39", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 41
   // { name: "Produto 40", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 42
   // { name: "Produto 41", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 43
   // { name: "Produto 42", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 44
   // { name: "Produto 43", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 45
   // { name: "Produto 44", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 46
   // { name: "Produto 45", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 47
   // { name: "Produto 46", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 48
   // { name: "Produto 47", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 49
   // { name: "Produto 48", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 50
   // { name: "Produto 49", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 51
   // { name: "Produto 50", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 52
   // { name: "Produto 51", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 53
   // { name: "Produto 52", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 54
   // { name: "Produto 53", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 55
   // { name: "Produto 56", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 56
   // { name: "Produto 57", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 57
   // { name: "Produto 58", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 58
   // { name: "Produto 59", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 59
// { name: "Produto 60", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 60
// { name: "Produto 61", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 61
// { name: "Produto 62", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 62
// { name: "Produto 63", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 63
// { name: "Produto 64", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 64
// { name: "Produto 65", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 65
// { name: "Produto 66", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 66
// { name: "Produto 67", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 67
// { name: "Produto 68", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 68
// { name: "Produto 69", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 69
// { name: "Produto 70", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 70
// { name: "Produto 71", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 71
// { name: "Produto 72", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 72
// { name: "Produto 73", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 73
// { name: "Produto 74", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 74
// { name: "Produto 75", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 75
// { name: "Produto 76", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 76
// { name: "Produto 77", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 77
// { name: "Produto 78", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 78
// { name: "Produto 79", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 79
// { name: "Produto 80", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 80
// { name: "Produto 81", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 81
// { name: "Produto 82", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 82
// { name: "Produto 83", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 83
// { name: "Produto 84", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 84
// { name: "Produto 85", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 85
// { name: "Produto 86", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 86
// { name: "Produto 87", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 87
// { name: "Produto 88", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 88
// { name: "Produto 89", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 89
// { name: "Produto 90", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 90
// { name: "Produto 91", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 91
// { name: "Produto 92", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 92
// { name: "Produto 93", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 93
// { name: "Produto 94", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 94
// { name: "Produto 95", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 95
// { name: "Produto 96", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 96
// { name: "Produto 97", price: "R$ 00,00", image: "/api/placeholder/400/300" }, // id; 97
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

// Sistema aprimorado de armazenamento para mobile Android e iOS
let cartItems = [];
let favorites = new Set();

// Inicialização com verificação de disponibilidade de localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se localStorage está disponível
    if (isStorageAvailable('localStorage')) {
        loadCartFromStorage();
        loadFavoritesFromStorage();
        updateCartIcon();
        renderCart();
    } else {
        console.warn("localStorage não está disponível. O carrinho e favoritos não serão persistentes.");
        // Opcionalmente notificar o usuário
        showNotification("Armazenamento local não disponível neste navegador.");
    }
});

// Verificar se o storage está disponível e funcionando
function isStorageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
        return e instanceof DOMException && (
            // Tudo exceto Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // Código de erro de teste, caso códigos mudem no futuro
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // Verificar se já tem itens no armazenamento
            (storage && storage.length !== 0);
    }
}

// Carregar carrinho com tratamento de erros aprimorado
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('glamourCart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            
            // Validar se o conteúdo é um array
            if (Array.isArray(parsedCart)) {
                cartItems = parsedCart;
                console.log("Carrinho carregado com sucesso:", cartItems.length, "itens");
            } else {
                throw new Error("Formato de dados do carrinho inválido");
            }
        } else {
            console.log("Nenhum carrinho encontrado no armazenamento");
            cartItems = [];
        }
    } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        cartItems = [];
        // Remover dados possivelmente corrompidos
        localStorage.removeItem('glamourCart');
    }
}

// Salvar carrinho com verificação de tamanho e compressão
function saveCartToStorage() {
    try {
        // Verificar tamanho dos dados antes de salvar
        const cartString = JSON.stringify(cartItems);
        const cartSize = new Blob([cartString]).size;
        
        if (cartSize > 4500000) { // ~4.5MB para ficar seguro (5MB é o limite típico)
            console.warn("Carrinho muito grande para armazenamento local");
            showNotification("Seu carrinho está muito grande e alguns itens podem não ser salvos.");
        }
        
        localStorage.setItem('glamourCart', cartString);
        
        // Atualizar indicadores visuais
        updateCartIcon();
    } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
        
    }
}

// Carregar favoritos com tratamento de erros
function loadFavoritesFromStorage() {
    try {
        const savedFavorites = localStorage.getItem('glamourFavorites');
        if (savedFavorites) {
            const parsedFavorites = JSON.parse(savedFavorites);
            
            // Validar se o conteúdo é um array
            if (Array.isArray(parsedFavorites)) {
                favorites = new Set(parsedFavorites);
                console.log("Favoritos carregados com sucesso:", favorites.size, "itens");
            } else {
                throw new Error("Formato de dados dos favoritos inválido");
            }
        } else {
            console.log("Nenhum favorito encontrado no armazenamento");
            favorites = new Set();
        }
    } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
        favorites = new Set();
        // Remover dados possivelmente corrompidos
        localStorage.removeItem('glamourFavorites');
    }
}

// Salvar favoritos com verificação
function saveFavoritesToStorage() {
    try {
        // Verificar se há favoritos para salvar
        if (favorites.size > 0) {
            localStorage.setItem('glamourFavorites', JSON.stringify([...favorites]));
        } else {
            // Se estiver vazio, remover do armazenamento para economizar espaço
            localStorage.removeItem('glamourFavorites');
        }
    } catch (error) {
        console.error("Erro ao salvar favoritos:", error);
        showNotification("Não foi possível salvar seus favoritos. Espaço de armazenamento insuficiente.");
    }
}

// Adicionar item ao carrinho com sincronização imediata
function addToCart(product) {
    // Verificar se o produto já existe no carrinho
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({...product, quantity: 1});
    }
    
    // Salvar imediatamente após cada alteração
    saveCartToStorage();
    showNotification("Item adicionado ao carrinho!");
}

// Remover item do carrinho com sincronização imediata
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCart(); // Atualizar interface
}

// Alternar favorito com sincronização imediata
function toggleFavorite(productId) {
    if (favorites.has(productId)) {
        favorites.delete(productId);
    } else {
        favorites.add(productId);
    }
    
    saveFavoritesToStorage();
    updateFavoriteIcons(); // Atualizar interface
}

// Criar elemento de notificação se não existir
function createNotificationElement() {
    const notification = document.createElement('div');
    notification.id = 'notification';
    document.body.appendChild(notification);
    return notification;
}

// Sincronização periódica para maior segurança
setInterval(() => {
    if (isStorageAvailable('localStorage')) {
        saveCartToStorage();
        saveFavoritesToStorage();
    }
}, 30000); // A cada 30 segundos

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
    
    let message = '*Olá, gostaria de fazer meu pedido:*\n\n';
    let total = 0;
    
    cartItems.forEach(item => {
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        message += `• ${item.quantity}x ${item.name} - ${item.price} cada\n`;
    });
    
    message += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    
    // Número do WhatsApp do dono da empresa (substitua pelo número real)
    const ownerPhoneNumber = "5511934660856"; // Exemplo: 5511999999999 (formato: código do país + DDD + número)
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerPhoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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


