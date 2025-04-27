// Produtos
const produtos = [
    { 
        nome: "Corrente Ponto de Luz", 
        price: "R$ 299,90", 
        image: "https://i.postimg.cc/5yLPzdZc/corrente.jpg",
        description: "Elegante corrente banhada a ouro com pingente de cristal que reflete a luz de forma única. Perfeita para ocasiões especiais e uso diário."
    },
    { 
        nome: "Vestido Sarah", 
        price: "R$ 390,90", 
        image: "https://i.postimg.cc/YqtZJRZp/vestidobranco.jpg",
        description: "Vestido branco em tecido leve e fluido, com detalhes rendados. Ideal para ocasiões que pedem um visual romântico e sofisticado."
    },
    { 
        nome: "Salto alto Preto", 
        price: "R$ 299,90", 
        image: "https://i.postimg.cc/SxH495Ny/salto-alto.jpg",
        description: "Sapato de salto alto preto em couro sintético de alta qualidade. Design atemporal que combina com diversos looks, oferecendo elegância e conforto."
    },
    { 
        nome: "Bolsa Branca Delicada", 
        price: "R$ 199,90", 
        image: "https://i.postimg.cc/v8qvXvrg/bolsa.jpg",
        description: "Bolsa branca em material sintético de alta durabilidade, com acabamento premium e compartimentos internos organizados. O acessório perfeito para complementar seu visual."
    },
    { 
        nome: "Pó Compacto", 
        price: "R$ 62,00", 
        image: "/api/placeholder/400/300",
        description: "Pó compacto de textura fina e acabamento translúcido que controla a oleosidade da pele sem ressecar. Perfeito para todos os tipos de pele."
    },
    { 
        nome: "Sérum Facial Hidratante", 
        price: "R$ 79,90", 
        image: "/api/placeholder/400/300",
        description: "Sérum hidratante com ácido hialurônico e vitaminas que restaura a barreira de hidratação da pele, proporcionando luminosidade e maciez."
    },
    { 
        nome: "Protetor Solar FPS 50", 
        price: "R$ 72,00", 
        image: "/api/placeholder/400/300",
        description: "Protetor solar de amplo espectro com FPS 50, textura leve e toque seco. Protege contra os raios UVA e UVB, além de prevenir o envelhecimento precoce."
    },
    { 
        nome: "Demaquilante Bifásico", 
        price: "R$ 48,00", 
        image: "/api/placeholder/400/300",
        description: "Demaquilante bifásico que remove até as maquiagens mais resistentes sem ressecar a pele. Fórmula suave e com ingredientes hidratantes."
    },
    { 
        nome: "Kit Pincéis Maquiagem", 
        price: "R$ 115,90", 
        image: "/api/placeholder/400/300",
        description: "Kit completo com 12 pincéis profissionais para maquiagem. Cerdas macias e cabos ergonômicos que facilitam a aplicação de produtos diversos."
    },
    { 
        nome: "Blush Rosado", 
        price: "R$ 42,50", 
        image: "/api/placeholder/400/300",
        description: "Blush em pó com acabamento matte e tonalidade rosada natural. Proporciona um rubor delicado e duradouro com fácil aplicação."
    },
    { 
        nome: "Iluminador Facial", 
        price: "R$ 54,90", 
        image: "/api/placeholder/400/300",
        description: "Iluminador em pó com partículas microfinas que proporcionam um brilho natural e luminoso à pele. Ideal para destacar os pontos altos do rosto."
    },
    { 
        nome: "Contorno Facial em Pó", 
        price: "R$ 65,90", 
        image: "/api/placeholder/400/300",
        description: "Pó compacto para contorno facial que realça e define os traços do rosto. Textura aveludada e fácil de esfumar."
    },
    { 
        nome: "Esmalte Gel Rosê", 
        price: "R$ 24,90", 
        image: "/api/placeholder/400/300",
        description: "Esmalte em tom rosê com acabamento gel que proporciona brilho intenso e durabilidade excepcional. Fórmula hipoalergênica e de secagem rápida."
    },
    { 
        nome: "Hidratante Corporal", 
        price: "R$ 49,90", 
        image: "/api/placeholder/400/300",
        description: "Hidratante corporal de rápida absorção com manteiga de karité e vitamina E. Proporciona hidratação profunda e deixa a pele macia o dia todo."
    },
    { 
        nome: "Óleo de Argan para Cabelos", 
        price: "R$ 55,00", 
        image: "/api/placeholder/400/300",
        description: "Óleo capilar com argan puro que nutre, repara e protege os fios do calor. Devolve o brilho e maciez aos cabelos danificados."
    },
    { 
        nome: "Shampoo Anti-Queda", 
        price: "R$ 39,90", 
        image: "/api/placeholder/400/300",
        description: "Shampoo formulado com ativos que combatem a queda e estimulam o crescimento capilar. Limpa suavemente sem ressecar os fios."
    }
];

// Variáveis globais
let cartItems = [];
let favoritos = new Set();

// Elementos DOM comuns
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const clearCartButton = document.getElementById('clearCart');
const shareCartButton = document.getElementById('shareCart');
const cartButton = document.getElementById('cartButton');
const cartButtonCounter = document.getElementById('cartButtonCounter');

// Carregar carrinho do localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('closetDellasCart');
    if (savedCart) {
        try {
            cartItems = JSON.parse(savedCart);
        } catch (e) {
            console.error('Erro ao carregar carrinho:', e);
            cartItems = [];
        }
    }
}

// Salvar carrinho no localStorage
function saveCartToStorage() {
    localStorage.setItem('closetDellasCart', JSON.stringify(cartItems));
}

// Carregar favoritos do localStorage
function loadFavoritesFromStorage() {
    const savedFavorites = localStorage.getItem('closetDellasFavorites');
    if (savedFavorites) {
        try {
            favoritos = new Set(JSON.parse(savedFavorites));
        } catch (e) {
            console.error('Erro ao carregar favoritos:', e);
            favoritos = new Set();
        }
    }
}

// Salvar favoritos no localStorage
function saveFavoritesToStorage() {
    localStorage.setItem('closetDellasFavorites', JSON.stringify([...favoritos]));
}

// Função para mostrar notificação
function showNotification(message) {
    // Criar elemento de notificação se não existir
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notification.style.zIndex = '10000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease-in-out';
        document.body.appendChild(notification);
    }
    
    // Definir mensagem e mostrar notificação
    notification.textContent = message;
    notification.style.opacity = '1';
    
    // Esconder notificação após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);
}

// Carregar produtos na página principal
function loadProducts() {
    const catalogContainer = document.getElementById('catalog');
    if (!catalogContainer) return; // Se não estiver na página principal
    
    catalogContainer.innerHTML = '';
    produtos.forEach((produto, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        
        // Verificar se o produto está favoritado para mostrar o ícone correto
        const isFavorite = favoritos.has(index.toString());
        const heartClass = isFavorite ? 'fas fa-heart favorite-active' : 'far fa-heart';
        
        productCard.innerHTML = `
            <div class="product-image-container" data-index="${index}">
                <img src="${produto.image}" alt="${produto.nome}">
            </div>
            <div class="product-details">
                <div class="product-info">
                    <div class="product-title-price">
                        <h3 class="product-title">${produto.nome}</h3>
                        <p class="product-price">${produto.price}</p>
                    </div>
                    <div class="product-actions">
                        <button class="favorite-btn" data-index="${index}">
                            <i class="${heartClass}"></i>
                        </button>
                        <button class="cart-btn" data-index="${index}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
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

// Adicionar eventos na página principal
function addEventListeners() {
    // Evento para navegar para a página de detalhes ao clicar na imagem
    const productImages = document.querySelectorAll('.product-image-container');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            // Salvar o índice do produto no localStorage para recuperar na página de detalhes
            localStorage.setItem('selectedProductIndex', index);
            // Redirecionar para a página de detalhes
            window.location.href = 'product.html';
        });
    });
    
    // Favoritar produto
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const heartIcon = this.querySelector('i');
            
            if (favoritos.has(index)) {
                favoritos.delete(index);
                heartIcon.classList.remove('fas', 'favorite-active');
                heartIcon.classList.add('far');
            } else {
                favoritos.add(index);
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
            showNotification(`${produtos[index].nome} adicionado ao carrinho!`);
        });
    });
    
    // Compartilhar site
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Compartilhar via WhatsApp
            const text = 'Confira os produtos incríveis da Closet Dellas!';
            const url = window.location.href;
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // Eventos do carrinho (comuns a todas as páginas)
    setupCartEvents();
    
    // Configurar a pesquisa
    setupSearch();
}

// Configurar eventos do carrinho (comuns a todas as páginas)
function setupCartEvents() {
    // Fechar carrinho
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartOverlay.style.display = 'none';
        });
    }
    
    // Fechar carrinho ao clicar fora
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === cartOverlay) {
                cartOverlay.style.display = 'none';
            }
        });
    }
    
    // Limpar carrinho
    if (clearCartButton) {
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
    }
    
    // Compartilhar carrinho no WhatsApp
    if (shareCartButton) {
        shareCartButton.addEventListener('click', function() {
            shareCartOnWhatsApp();
        });
    }
    
    // Botão do carrinho no canto superior direito
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            openCart();
        });
    }
}

// Função para adicionar produto ao carrinho
function addToCart(productIndex) {
    const product = produtos[productIndex];
    if (!product) {
        console.error(`Produto com índice ${productIndex} não encontrado`);
        return;
    }
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity++;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: product.nome,
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

// Função para adicionar ao carrinho a partir da página de detalhes
function addToCartFromDetails(productIndex, quantity) {
    const product = produtos[productIndex];
    if (!product) {
        console.error(`Produto com índice ${productIndex} não encontrado`);
        return;
    }
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: product.nome,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    updateCartCounter();
    
    // Salvar carrinho no localStorage
    saveCartToStorage();
    
    // Mostrar notificação
    showNotification(`${quantity}x ${product.nome} adicionado ao carrinho!`);
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
    // Se não estiver na página principal, retornar
    if (!document.getElementById('catalog')) return;
    
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
    if (index < 0 || index >= cartItems.length) {
        console.error(`Índice de item inválido: ${index}`);
        return;
    }
    
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
    if (!cartItemsContainer) return;
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio</p>';
        if (cartTotalElement) cartTotalElement.textContent = 'Total: R$ 0,00';
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
    if (cartTotalElement) cartTotalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Função para atualizar o contador do botão do carrinho
function updateCartCounter() {
    if (!cartButtonCounter) return;
    
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
    if (!cartOverlay) return;
    
    cartOverlay.style.display = 'flex';
    updateCartDisplay();
}

/**
 * Função para compartilhar carrinho de compras via WhatsApp
 * Simplificada para evitar erros com popups e redirecionamentos
 */
function shareCartOnWhatsApp() {
    // Verificar se temos itens no carrinho
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        alert('Adicione produtos ao carrinho antes de compartilhar!');
        return;
    }
    
    try {
        // Criar formulário simplificado para coletar informações
        createSimplifiedOrderForm(cartItems);
    } catch (error) {
        console.error('Erro ao processar o pedido:', error);
        alert('Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.');
    }
}

/**
 * Cria um formulário modal simplificado para o pedido
 * @param {Array} cartItems - Itens do carrinho
 */
function createSimplifiedOrderForm(cartItems) {
    // Remover qualquer formulário existente
    const existingForm = document.getElementById('order-form-modal');
    if (existingForm) {
        existingForm.remove();
    }
    
    // Criar o container do modal
    const modal = document.createElement('div');
    modal.id = 'order-form-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    
    // Criar o conteúdo do formulário
    const formContainer = document.createElement('div');
    formContainer.style.backgroundColor = 'white';
    formContainer.style.borderRadius = '10px';
    formContainer.style.padding = '20px';
    formContainer.style.width = '90%';
    formContainer.style.maxWidth = '500px';
    formContainer.style.maxHeight = '80vh';
    formContainer.style.overflowY = 'auto';
    
    // Título do formulário
    const title = document.createElement('h2');
    title.textContent = 'Finalizar Pedido';
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    
    // Formulário
    const form = document.createElement('form');
    form.id = 'checkout-form';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '15px';
    
    // Adicionar detalhes dos produtos ao formulário
    const productSection = document.createElement('div');
    productSection.style.marginBottom = '20px';
    
    const productTitle = document.createElement('h3');
    productTitle.textContent = 'Produtos no Carrinho';
    productTitle.style.marginBottom = '10px';
    productTitle.style.borderBottom = '1px solid #ddd';
    productTitle.style.paddingBottom = '5px';
    
    productSection.appendChild(productTitle);
    
    // Calcular total
    let total = 0;
    
    // Adicionar cada produto
    cartItems.forEach((item, index) => {
        // Calcular valor do item
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        // Container do produto
        const productItem = document.createElement('div');
        productItem.style.marginBottom = '15px';
        productItem.style.padding = '10px';
        productItem.style.backgroundColor = '#f9f9f9';
        productItem.style.borderRadius = '5px';
        
        // Informações do produto
        const productInfo = document.createElement('div');
        productInfo.innerHTML = `
            <strong>${item.name}</strong> - ${item.quantity}x ${item.price}
        `;
        
        productItem.appendChild(productInfo);
        
        // Campo de tamanho
        const sizeField = document.createElement('div');
        sizeField.style.marginTop = '10px';
        
        const sizeLabel = document.createElement('label');
        sizeLabel.htmlFor = `size-${index}`;
        sizeLabel.textContent = 'Tamanho: ';
        
        const sizeInput = document.createElement('select');
        sizeInput.id = `size-${index}`;
        sizeInput.name = `size-${index}`;
        sizeInput.className = 'form-control';
        sizeInput.style.width = '100%';
        sizeInput.style.padding = '8px';
        sizeInput.style.boxSizing = 'border-box';
        sizeInput.style.marginTop = '5px';
        
        // Opções de tamanho
        const sizes = ['PP', 'P', 'M', 'G', 'GG', '34', '35', '36', '37', '38', '39', '40', '41', '42', 'Único'];
        sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            // Selecionar tamanho padrão
            if ((item.name.toLowerCase().includes('vestido') || 
                 item.name.toLowerCase().includes('blusa')) && size === 'M') {
                option.selected = true;
            } else if ((item.name.toLowerCase().includes('sapato') || 
                       item.name.toLowerCase().includes('salto')) && size === '37') {
                option.selected = true;
            } else if (size === 'Único') {
                option.selected = true;
            }
            sizeInput.appendChild(option);
        });
        
        sizeField.appendChild(sizeLabel);
        sizeField.appendChild(sizeInput);
        productItem.appendChild(sizeField);
        
        // Campo de cor
        const colorField = document.createElement('div');
        colorField.style.marginTop = '10px';
        
        const colorLabel = document.createElement('label');
        colorLabel.htmlFor = `color-${index}`;
        colorLabel.textContent = 'Cor: ';
        
        const colorInput = document.createElement('input');
        colorInput.type = 'text';
        colorInput.id = `color-${index}`;
        colorInput.name = `color-${index}`;
        colorInput.value = 'Como na imagem';
        colorInput.className = 'form-control';
        colorInput.style.width = '100%';
        colorInput.style.padding = '8px';
        colorInput.style.boxSizing = 'border-box';
        colorInput.style.marginTop = '5px';
        
        colorField.appendChild(colorLabel);
        colorField.appendChild(colorInput);
        productItem.appendChild(colorField);
        
        productSection.appendChild(productItem);
    });
    
    // Mostrar total
    const totalElement = document.createElement('div');
    totalElement.style.fontSize = '18px';
    totalElement.style.fontWeight = 'bold';
    totalElement.style.textAlign = 'right';
    totalElement.style.marginBottom = '20px';
    totalElement.innerHTML = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    
    productSection.appendChild(totalElement);
    
    // Campo de Endereço
    const addressField = createFormField('address', 'Endereço de entrega:', 'text', '', 'Digite seu endereço completo');
    
    // Campo de Forma de Pagamento
    const paymentField = document.createElement('div');
    paymentField.style.marginBottom = '15px';
    
    const paymentLabel = document.createElement('label');
    paymentLabel.htmlFor = 'payment';
    paymentLabel.textContent = 'Forma de Pagamento:';
    paymentLabel.style.display = 'block';
    paymentLabel.style.marginBottom = '5px';
    paymentLabel.style.fontWeight = 'bold';
    
    const paymentSelect = document.createElement('select');
    paymentSelect.id = 'payment';
    paymentSelect.name = 'payment';
    paymentSelect.style.width = '100%';
    paymentSelect.style.padding = '10px';
    paymentSelect.style.borderRadius = '5px';
    paymentSelect.style.border = '1px solid #ddd';
    
    const paymentOptions = ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];
    paymentOptions.forEach(option => {
        const paymentOption = document.createElement('option');
        paymentOption.value = option;
        paymentOption.textContent = option;
        paymentSelect.appendChild(paymentOption);
    });
    
    paymentField.appendChild(paymentLabel);
    paymentField.appendChild(paymentSelect);
    
    // Campo de Observações
    const notesField = createFormField('notes', 'Observações (opcional):', 'textarea', '', 'Informações adicionais para o pedido');
    const notesTextarea = notesField.querySelector('textarea');
    if (notesTextarea) {
        notesTextarea.style.minHeight = '100px';
    }
    
    // Botões
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.justifyContent = 'space-between';
    buttonGroup.style.marginTop = '20px';
    
    // Botão Cancelar
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancelar';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.onclick = function() {
        modal.remove();
    };
    
    // Botão Enviar Pedido
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Enviar Pedido';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    submitButton.onclick = function() {
        processFormData(form, cartItems);
    };
    
    buttonGroup.appendChild(cancelButton);
    buttonGroup.appendChild(submitButton);
    
    // Montar o formulário
    form.appendChild(productSection);
    form.appendChild(addressField);
    form.appendChild(paymentField);
    form.appendChild(notesField);
    form.appendChild(buttonGroup);
    
    // Adicionar o formulário ao container
    formContainer.appendChild(title);
    formContainer.appendChild(form);
    
    // Adicionar o container ao modal
    modal.appendChild(formContainer);
    
    // Adicionar o modal à página
    document.body.appendChild(modal);
    
    // Focar no primeiro campo
    const firstInput = form.querySelector('input, select, textarea');
    if (firstInput) {
        firstInput.focus();
    }
}

/**
 * Cria um campo de formulário
 * @param {String} id - ID do campo
 * @param {String} label - Texto da label
 * @param {String} type - Tipo do campo
 * @param {String} value - Valor padrão
 * @param {String} placeholder - Placeholder
 * @returns {HTMLElement} - Campo de formulário
 */
function createFormField(id, label, type, value = '', placeholder = '') {
    const field = document.createElement('div');
    field.style.marginBottom = '15px';
    
    const fieldLabel = document.createElement('label');
    fieldLabel.htmlFor = id;
    fieldLabel.textContent = label;
    fieldLabel.style.display = 'block';
    fieldLabel.style.marginBottom = '5px';
    fieldLabel.style.fontWeight = 'bold';
    
    let input;
    if (type === 'textarea') {
        input = document.createElement('textarea');
    } else {
        input = document.createElement('input');
        input.type = type;
    }
    
    input.id = id;
    input.name = id;
    input.value = value;
    input.placeholder = placeholder;
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.borderRadius = '5px';
    input.style.border = '1px solid #ddd';
    input.style.boxSizing = 'border-box';
    
    field.appendChild(fieldLabel);
    field.appendChild(input);
    
    return field;
}

/**
 * Processa os dados do formulário e envia para o WhatsApp
 * Versão corrigida para evitar problemas com popups
 * @param {HTMLFormElement} form - Formulário
 * @param {Array} cartItems - Itens do carrinho
 */
function processFormData(form, cartItems) {
    // Verificar campo de endereço
    const addressInput = form.querySelector('#address');
    if (!addressInput || !addressInput.value.trim()) {
        alert('Por favor, informe o endereço de entrega.');
        if (addressInput) addressInput.focus();
        return;
    }
    
    // Validar se o endereço é muito curto
    if (addressInput.value.trim().length < 10) {
        if (!confirm('O endereço parece muito curto. Deseja continuar mesmo assim?')) {
            addressInput.focus();
            return;
        }
    }
    
    // Coletar dados do formulário
    const address = addressInput.value.trim();
    const paymentSelect = form.querySelector('#payment');
    const payment = paymentSelect ? paymentSelect.value : 'PIX';
    const notesInput = form.querySelector('#notes');
    const notes = notesInput ? notesInput.value.trim() : '';
    
    // Coletar detalhes de tamanho e cor
    const cartItemsWithDetails = cartItems.map((item, index) => {
        const newItem = { ...item };
        
        // Obter tamanho
        const sizeField = form.querySelector(`#size-${index}`);
        newItem.size = sizeField ? sizeField.value : 'Único';
        
        // Obter cor
        const colorField = form.querySelector(`#color-${index}`);
        newItem.color = colorField ? colorField.value : 'Como na imagem';
        
        return newItem;
    });
    
    // Formatar a mensagem do pedido
    let message = '*📋 NOVO PEDIDO:*\n\n';
    let total = 0;
    
    // Adicionar detalhes de cada item
    cartItemsWithDetails.forEach(item => {
        // Calcular valor de cada item
        const priceValue = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;
        
        // Adicionar item à mensagem
        message += `• ${item.quantity}x ${item.name} - ${item.price} cada\n`;
        message += `  - Tamanho: ${item.size}\n`;
        message += `  - Cor: ${item.color}\n`;
    });
    
    // Adicionar informações do pedido
    message += `\n*💰 Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += `*🏠 Endereço:* ${address}\n`;
    message += `*💳 Forma de pagamento:* ${payment}\n`;
    
    // Adicionar observações se houver
    if (notes) {
        message += `\n*📝 Observações:* ${notes}\n`;
    }
    
    // Adicionar data e hora do pedido
    const now = new Date();
    const dataHora = now.toLocaleString('pt-BR');
    message += `\n*⏰ Data/Hora:* ${dataHora}`;
    
    // Simplificar referências às fotos e remover imagens de placeholder
    const relevantImages = cartItemsWithDetails
        .filter(item => item.image && !item.image.includes('/api/placeholder/'))
        .map(item => item.name);
    
    if (relevantImages.length > 0) {
        message += '\n\n*📸 Produtos com imagens:* ' + relevantImages.join(', ');
    }
    
    // Número de telefone do dono da loja
    const phoneNumber = '5583991816152';
    
    // Fechar o modal
    const modal = document.getElementById('order-form-modal');
    if (modal) {
        modal.remove();
    }
    
    // Usar método direto e simplificado para abrir o WhatsApp
    openWhatsAppDirectly(message, phoneNumber);
}

/**
 * Função simplificada para abrir o WhatsApp diretamente
 * Evita problemas com bloqueios de popup e encadeamento de callbacks
 * @param {String} message - Mensagem a ser enviada
 * @param {String} phoneNumber - Número do telefone
 */
function openWhatsAppDirectly(message, phoneNumber) {
    // Mostrar notificação de carregamento
    showNotification('Preparando mensagem para WhatsApp...');
    
    try {
        // Codificar a mensagem para a URL
        const encodedMessage = encodeURIComponent(message);
        
        // Criar URL do WhatsApp (web ou app)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir em uma nova janela/guia
        window.open(whatsappURL, '_blank');
        
        // Exibir backup da mensagem caso o WhatsApp não abra
        setTimeout(() => {
            showMessageBackup(message, phoneNumber);
        }, 1500);
    } catch (error) {
        console.error('Erro ao abrir WhatsApp:', error);
        // Em caso de erro, mostrar backup imediatamente
        showMessageBackup(message, phoneNumber);
    }
}

/**
 * Exibe um backup da mensagem caso o WhatsApp não abra
 * @param {String} message - Mensagem formatada
 * @param {String} phoneNumber - Número do telefone
 */
function showMessageBackup(message, phoneNumber) {
    // Verificar se o modal de backup já existe
    if (document.getElementById('message-backup-modal')) {
        return;
    }
    
    // Criar container do modal
    const modal = document.createElement('div');
    modal.id = 'message-backup-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '10000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    // Container do conteúdo
    const content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '10px';
    content.style.maxWidth = '90%';
    content.style.width = '450px';
    content.style.maxHeight = '80vh';
    content.style.overflowY = 'auto';
    
    // Título
    const title = document.createElement('h3');
    title.textContent = 'Seu pedido está pronto!';
    title.style.textAlign = 'center';
    title.style.marginTop = '0';
    
    // Instruções
    const instructions = document.createElement('p');
    instructions.innerHTML = 'Se o WhatsApp não abriu automaticamente, você pode:';
    
    // Botões de ação
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.marginTop = '15px';
    
    // Botão para tentar abrir o WhatsApp novamente
    const openWhatsAppButton = document.createElement('button');
    openWhatsAppButton.textContent = 'Abrir WhatsApp';
    openWhatsAppButton.style.padding = '12px';
    openWhatsAppButton.style.backgroundColor = '#25D366';
    openWhatsAppButton.style.color = 'white';
    openWhatsAppButton.style.border = 'none';
    openWhatsAppButton.style.borderRadius = '5px';
    openWhatsAppButton.style.cursor = 'pointer';
    openWhatsAppButton.style.fontWeight = 'bold';
    openWhatsAppButton.onclick = function() {
        // URL direta do WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };
    
    // Botão para copiar a mensagem
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar mensagem';
    copyButton.style.padding = '12px';
    copyButton.style.backgroundColor = '#4285F4';
    copyButton.style.color = 'white';
    copyButton.style.border = 'none';
    copyButton.style.borderRadius = '5px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.fontWeight = 'bold';
    copyButton.onclick = function() {
        copyToClipboard(message);
        this.textContent = 'Mensagem copiada!';
        setTimeout(() => {
            this.textContent = 'Copiar mensagem';
        }, 2000);
    };
    
    // Botão para fechar o modal
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.padding = '12px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontWeight = 'bold';
    closeButton.onclick = function() {
        modal.remove();
    };
    
    // Adicionar botões ao container
    buttonContainer.appendChild(openWhatsAppButton);
    buttonContainer.appendChild(copyButton);
    buttonContainer.appendChild(closeButton);
    
    // Montar o modal
    content.appendChild(title);
    content.appendChild(instructions);
    content.appendChild(buttonContainer);
    modal.appendChild(content);
    
    // Adicionar à página
    document.body.appendChild(modal);
}

/**
 * Função auxiliar para copiar texto para o clipboard
 * @param {String} text - Texto a ser copiado
 */
function copyToClipboard(text) {
    // Usar a API Clipboard se disponível
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Erro ao copiar texto:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        // Método alternativo para contextos não seguros
        fallbackCopyToClipboard(text);
    }
}

/**
 * Método alternativo para copiar para o clipboard
 * @param {String} text - Texto a ser copiado
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Tornar o elemento invisível mas presente no DOM
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    textArea.style.pointerEvents = 'none';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Falha ao copiar texto:', err);
    }
    
    document.body.removeChild(textArea);
}

// Função para remover acentos de uma string (para pesquisa)
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Função para configurar a pesquisa
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const catalogContainer = document.getElementById('catalog');
    
    if (!searchInput || !searchButton || !catalogContainer) return;
    
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

// Inicializar a aplicação
window.onload = function() {
    // Verificar se estamos na página principal ou de detalhes do produto
    const isProductPage = window.location.pathname.includes('product.html');
    
    // Carregar dados salvos do localStorage
    loadCartFromStorage();
    loadFavoritesFromStorage();
    
    if (!isProductPage) {
        // Inicializar o catálogo com os dados carregados na página principal
        loadProducts();
    }
    
    // Atualizar o contador do carrinho (comum a todas as páginas)
    updateCartCounter();
    
    // Configurar eventos do carrinho (comum a todas as páginas)
    setupCartEvents();
};