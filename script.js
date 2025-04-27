// Produtos
const produtos = [
    { 
        nome: "Vestido Sarah", 
        price: "R$ 390,90", 
        image: "https://i.postimg.cc/YqtZJRZp/vestidobranco.jpg",
        description: "Vestido branco em tecido leve e fluido, com detalhes rendados. Ideal para ocasiões que pedem um visual romântico e sofisticado. *Cores disponiveis: branco, preto,*"
    },
    { 
        nome: "Salto alto Preto", 
        price: "R$ 299,90",
        image: "https://i.postimg.cc/SxH495Ny/salto-alto.jpg",
        description: "Sapato de salto alto preto em couro sintético de alta qualidade. Design atemporal que combina com diversos looks, oferecendo elegância e conforto. *Tamanhos disponiveis: 37, 38, 41*"
    },
    { 
        nome: "Bolsa Branca Delicada", 
        price: "R$ 199,90", 
        image: "https://i.postimg.cc/v8qvXvrg/bolsa.jpg",
        description: "Bolsa branca em material sintético de alta durabilidade, com acabamento premium e compartimentos internos organizados. *Cores disponiveis: rosa, azul, preto*"
    },
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
 * Compartilha carrinho de compras via WhatsApp
 * Função melhorada para compatibilidade com todos os navegadores
 */
function shareCartOnWhatsApp() {
    // Verificar se temos itens no carrinho
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        alert('Adicione produtos ao carrinho antes de compartilhar!');
        return;
    }
    
    try {
        // Criar um formulário para coletar todas as informações de uma vez
        createOrderForm(cartItems);
    } catch (error) {
        console.error('Erro ao processar o pedido:', error);
        alert('Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.');
    }
}

/**
 * Cria um formulário modal para coletar todas as informações do pedido
 * Versão melhorada para compatibilidade entre navegadores
 * @param {Array} cartItems - Itens do carrinho
 */
function createOrderForm(cartItems) {
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
    formContainer.style.webkitOverflowScrolling = 'touch'; // Para melhor desempenho em iOS
    
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
    
    // Adicionar cada produto com opções
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
        
        // MODIFICAÇÃO: Sempre adicionar campo de tamanho para todos os itens
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
        sizeInput.style.appearance = 'menulist'; // Garante que o dropdown apareça em todos os navegadores
        sizeInput.style.webkitAppearance = 'menulist'; // Para Safari/iOS
        
        // Opções de tamanho comuns
        const sizes = ['PP', 'P', 'M', 'G', 'GG', '34', '35', '36', '37', '38', '39', '40', '41', '42', 'Único'];
        sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            // Selecionar tamanho padrão para cada tipo de produto
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
        
        // MODIFICAÇÃO: Sempre adicionar campo de cor para todos os itens
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
        colorInput.style.borderRadius = '3px';
        colorInput.style.border = '1px solid #ccc';
        
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
    paymentSelect.style.appearance = 'menulist'; // Garante compatibilidade em navegadores
    paymentSelect.style.webkitAppearance = 'menulist'; // Para Safari/iOS
    
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
        notesTextarea.style.resize = 'vertical';
        notesTextarea.style.fontFamily = 'inherit';
    }
    
    // Botões
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.justifyContent = 'space-between';
    buttonGroup.style.marginTop = '20px';
    
    // Em telas pequenas, empilhar os botões
    const mediaQuery = window.matchMedia('(max-width: 480px)');
    if (mediaQuery.matches) {
        buttonGroup.style.flexDirection = 'column';
        buttonGroup.style.gap = '10px';
    }
    
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
    cancelButton.style.fontWeight = 'bold';
    cancelButton.style.touchAction = 'manipulation'; // Melhora resposta em dispositivos touch
    
    if (mediaQuery.matches) {
        cancelButton.style.width = '100%';
    }
    
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
    submitButton.style.fontWeight = 'bold';
    submitButton.style.touchAction = 'manipulation'; // Melhora resposta em dispositivos touch
    
    if (mediaQuery.matches) {
        submitButton.style.width = '100%';
    }
    
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
        setTimeout(() => {
            try {
                firstInput.focus();
            } catch (e) {
                console.log('Foco automático não suportado neste dispositivo');
            }
        }, 300);
    }
    
    // Prevenir scroll no body quando o modal está aberto
    document.body.style.overflow = 'hidden';
    
    // Restaurar scroll quando o modal for removido
    const restoreScroll = function() {
        document.body.style.overflow = '';
    };
    
    cancelButton.addEventListener('click', restoreScroll);
    submitButton.addEventListener('click', restoreScroll);
}

/**
 * Cria um campo de formulário com estilos consistentes
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
        input.style.resize = 'vertical';
        input.style.minHeight = '100px';
        input.style.fontFamily = 'inherit';
    } else {
        input = document.createElement('input');
        input.type = type;
        // Correção para input type="date" no Safari
        if (type === 'date') {
            input.setAttribute('pattern', '\\d{4}-\\d{2}-\\d{2}');
            input.setAttribute('placeholder', 'AAAA-MM-DD');
        }
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
    input.style.fontFamily = 'inherit';
    input.style.fontSize = '16px'; // Evita zoom automático em iOS
    
    field.appendChild(fieldLabel);
    field.appendChild(input);
    
    return field;
}

/**
 * Processa os dados do formulário e prepara para envio
 * Versão melhorada para compatibilidade universal
 * @param {HTMLFormElement} form - Formulário
 * @param {Array} cartItems - Itens do carrinho
 */
function processFormData(form, cartItems) {
    // Verificar campo de endereço
    const addressInput = form.querySelector('#address');
    if (!addressInput || !addressInput.value.trim()) {
        alert('Por favor, informe o endereço de entrega.');
        if (addressInput) {
            try {
                addressInput.focus();
            } catch (e) {
                console.log('Foco automático não suportado neste dispositivo');
            }
        }
        return;
    }
    
    // Validar se o endereço é muito curto
    if (addressInput.value.trim().length < 10) {
        if (!confirm('O endereço parece muito curto. Deseja continuar mesmo assim?')) {
            try {
                addressInput.focus();
            } catch (e) {
                console.log('Foco automático não suportado neste dispositivo');
            }
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
    
    // Fechar o modal
    const modal = document.getElementById('order-form-modal');
    if (modal) {
        modal.remove();
        // Restaurar scroll
        document.body.style.overflow = '';
    }
    
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
    
    // Adicionar referências às fotos dos produtos
    const imageUrls = cartItemsWithDetails
        .filter(item => item.image && !item.image.includes('/api/placeholder/'))
        .map(item => ({
            url: item.image,
            name: item.name
        }));
    
    // Verificar se há imagens para compartilhar
    if (imageUrls.length > 0) {
        message += '\n\n*📸 Fotos dos produtos:*';
        imageUrls.forEach((image) => {
            message += `\n• ${image.name}: ${image.url}`;
        });
    }
    
    // Número de telefone do dono da loja
    const phoneNumber = '5583991816152';
    
    // Salvar no localStorage
    localStorage.setItem('lastOrderMessage', message);
    localStorage.setItem('lastOrderPhone', phoneNumber);
    
    // Enviar a mensagem com melhor compatibilidade
    sendWhatsAppMessage(message, phoneNumber);
}

/**
 * Envia mensagem para o WhatsApp com melhor compatibilidade entre navegadores
 * @param {String} message - Mensagem a ser enviada
 * @param {String} phoneNumber - Número do telefone
 */
function sendWhatsAppMessage(message, phoneNumber) {
    // Detectar tipo de dispositivo e navegador
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    
    // Criar um overlay de carregamento
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.flexDirection = 'column';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.zIndex = '10000';
    
    // Mensagem de carregamento
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Processando seu pedido...';
    loadingText.style.color = 'white';
    loadingText.style.fontSize = '20px';
    loadingText.style.marginBottom = '20px';
    loadingText.style.textAlign = 'center';
    loadingText.style.padding = '0 20px';
    
    // Spinner de carregamento
    const spinner = document.createElement('div');
    spinner.style.border = '5px solid #f3f3f3';
    spinner.style.borderTop = '5px solid #3498db';
    spinner.style.borderRadius = '50%';
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.animation = 'spin 2s linear infinite';
    
    // Adicionar keyframes para animação
    if (!document.getElementById('spinner-style')) {
        const style = document.createElement('style');
        style.id = 'spinner-style';
        style.innerHTML = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Adicionar elementos ao overlay
    loadingOverlay.appendChild(loadingText);
    loadingOverlay.appendChild(spinner);
    
    // Adicionar overlay à página
    document.body.appendChild(loadingOverlay);
    
    // Preparar URLs para diferentes abordagens
    const encodedMessage = encodeURIComponent(message);
    
    // URLs para diferentes abordagens de abertura do WhatsApp
    const whatsappWebURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappMobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappAPIURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Função para tentar abrir o WhatsApp
    const openWhatsApp = function() {
        loadingText.textContent = 'Redirecionando para o WhatsApp...';
        
        let windowReference = null;
        
        try {
            // Estratégia baseada no dispositivo e navegador
            if (isMobile) {
                if (isIOS && isSafari) {
                    // No Safari iOS, tentar usar a URL whatsapp://
                    windowReference = window.open(whatsappMobileURL, '_blank');
                    
                    // Se falhar, tentar a API URL como fallback
                    setTimeout(() => {
                        if (!windowReference || windowReference.closed) {
                            windowReference = window.open(whatsappAPIURL, '_blank');
                        }
                    }, 500);
                } else {
                    // Outros dispositivos móveis, usar a API URL
                    windowReference = window.open(whatsappAPIURL, '_blank');
                }
            } else {
                // Em desktop, abrir WhatsApp Web
                windowReference = window.open(whatsappWebURL, '_blank');
            }
            
            // Verificar se a janela foi aberta com sucesso
            setTimeout(() => {
                if (!windowReference || windowReference.closed || typeof windowReference.closed === 'undefined') {
                    // Se a janela não abriu, mostrar opções alternativas
                    if (document.getElementById('loading-overlay')) {
                        document.getElementById('loading-overlay').remove();
                    }
                    showFallbackOptions(whatsappAPIURL, message, phoneNumber);
                } else {
                    // Remover overlay após um curto tempo
                    setTimeout(() => {
                        if (document.getElementById('loading-overlay')) {
                            document.getElementById('loading-overlay').remove();
                        }
                    }, 1500);
                }
            }, 1000);
        } catch (error) {
            console.error('Erro ao abrir WhatsApp:', error);
            
            // Remover overlay
            if (document.getElementById('loading-overlay')) {
                document.getElementById('loading-overlay').remove();
            }
            
            // Mostrar opções alternativas
            showFallbackOptions(whatsappAPIURL, message, phoneNumber);
        }
    };
    
    // Dar um tempo para o overlay aparecer antes de tentar abrir o WhatsApp
    setTimeout(openWhatsApp, 500);
}

/**
 * Mostra opções alternativas caso o redirecionamento falhe
 * Versão melhorada para compatibilidade universal
 * @param {String} whatsappURL - URL do WhatsApp
 * @param {String} message - Mensagem do pedido
 * @param {String} phoneNumber - Número do telefone
 */
function showFallbackOptions(whatsappURL, message, phoneNumber) {
    // Verificar se já existe um modal de fallback
    if (document.getElementById('fallback-modal')) {
        return;
    }
    
    // Criar o modal de opções alternativas
    const fallbackModal = document.createElement('div');
    fallbackModal.id = 'fallback-modal';
    fallbackModal.style.position = 'fixed';
    fallbackModal.style.top = '0';
    fallbackModal.style.left = '0';
    fallbackModal.style.width = '100%';
    fallbackModal.style.height = '100%';
    fallbackModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fallbackModal.style.display = 'flex';
    fallbackModal.style.justifyContent = 'center';
    fallbackModal.style.alignItems = 'center';
    fallbackModal.style.zIndex = '10000';
    
    // Container para as opções
    const optionsContainer = document.createElement('div');
    optionsContainer.style.backgroundColor = 'white';
    optionsContainer.style.borderRadius = '10px';
    optionsContainer.style.padding = '20px';
    optionsContainer.style.maxWidth = '450px';
    optionsContainer.style.width = '90%';
    optionsContainer.style.textAlign = 'center';
    optionsContainer.style.boxSizing = 'border-box';
    
    // Título
    const title = document.createElement('h3');
    title.textContent = 'Não foi possível abrir o WhatsApp';
    title.style.marginTop = '0';
    title.style.color = '#333';
    
    // Mensagem
    const text = document.createElement('p');
    text.textContent = 'Escolha uma das opções abaixo para enviar seu pedido:';
    text.style.marginBottom = '20px';
    
    // Detectar sistema
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    // Botões de opções alternativas
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.gap = '10px';
    
    // Opção 1: Abrir diretamente no aplicativo (para dispositivos móveis)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        const appButton = createActionButton(
            'Abrir no Aplicativo WhatsApp', 
            '#25D366',
            () => {
                // URL específica para aplicativo
                const appURL = isIOS 
                    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
                    : `intent://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}#Intent;package=com.whatsapp;scheme=whatsapp;end`;
                
                // Em iOS, precisamos usar um redirecionamento especial
                if (isIOS) {
                    fallbackModal.remove();
                    // Em iOS, primeiro tentar whatsapp://
                    window.location.href = appURL;
                    
                    // Fallback para site depois de um breve atraso
                    setTimeout(() => {
                        window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                    }, 300);
                } else {
                    window.location.href = appURL;
                }
            });
        
        buttonContainer.appendChild(appButton);
    }
    
    // Opção 2: Tentar novamente
    const retryButton = createActionButton(
        'Tentar Novamente no Navegador', 
        '#4CAF50',
        () => {
            fallbackModal.remove();
            window.open(whatsappURL, '_blank');
        }
    );
    
    // Opção 3: Copiar mensagem
    const copyButton = createActionButton(
        'Copiar Mensagem', 
        '#2196F3',
        () => {
            const success = copyTextToClipboard(message);
            
            if (success) {
                // Atualizar texto e botões para próximos passos
                text.innerHTML = 'Mensagem copiada! Agora:<br>1. Abra o WhatsApp<br>2. Encontre ou inicie uma conversa com o número <strong>' + 
                    phoneNumber.replace('55', '') + '</strong><br>3. Cole a mensagem';
                
                // Limpar botões anteriores
                buttonContainer.innerHTML = '';
                
                // Adicionar botão para abrir WhatsApp diretamente
                const openWhatsAppButton = createActionButton(
                    'Abrir WhatsApp', 
                    '#25D366',
                    () => {
                        // URL dependendo do dispositivo
                        const whatsappURL = isIOS
                            ? `whatsapp://`
                            : /Android/i.test(userAgent)
                                ? `intent://send#Intent;package=com.whatsapp;scheme=whatsapp;end`
                                : `https://web.whatsapp.com/`;
                        
                        window.location.href = whatsappURL;
                    }
                );
                
                buttonContainer.appendChild(openWhatsAppButton);
                
                // Adicionar botão para fechar
                const closeButton = createActionButton(
                    'Fechar', 
                    '#f44336',
                    () => {
                        fallbackModal.remove();
                    }
                );
                
                buttonContainer.appendChild(closeButton);
            } else {
                // Se a cópia falhar, mostrar mensagem alternativa
                alert('Não foi possível copiar automaticamente. Por favor, anote o número: ' + 
                    phoneNumber.replace('55', '') + ' e envie sua mensagem pelo WhatsApp.');
            }
        }
    );
    
    // Opção 4: Fechar
    const closeButton = createActionButton(
        'Cancelar', 
        '#f44336',
        () => {
            fallbackModal.remove();
        }
    );
    
    // Adicionar botões ao container na ordem apropriada
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        buttonContainer.appendChild(retryButton);
    } else {
        // Em desktop, o botão de tentar novamente deve ser o primeiro
        buttonContainer.appendChild(retryButton);
    }
    
    buttonContainer.appendChild(copyButton);
    buttonContainer.appendChild(closeButton);
    
    // Montar o modal
    optionsContainer.appendChild(title);
    optionsContainer.appendChild(text);
    optionsContainer.appendChild(buttonContainer);
    
    fallbackModal.appendChild(optionsContainer);
    document.body.appendChild(fallbackModal);
}

/**
 * Cria um botão de ação estilizado com melhor compatibilidade
 * @param {String} text - Texto do botão
 * @param {String} color - Cor de fundo
 * @param {Function} onClick - Função de clique
 * @returns {HTMLElement} - Botão criado
 */
function createActionButton(text, color, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.padding = '12px 20px';
    button.style.backgroundColor = color;
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';
    button.style.width = '100%';
    button.style.margin = '5px 0';
    button.style.fontSize = '16px';
    button.style.touchAction = 'manipulation'; // Melhora resposta em dispositivos touch
    button.style.webkitAppearance = 'none'; // Normaliza aparência em iOS
    button.style.appearance = 'none';

    // Adicionar efeito de hover via JavaScript
    button.onmouseover = function() {
        this.style.opacity = '0.9';
        this.style.transition = 'opacity 0.2s ease';
    };
    
    button.onmouseout = function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.2s ease';
    };
    
    // Efeito de toque para dispositivos móveis
    button.ontouchstart = function() {
        this.style.opacity = '0.7';
    };
    
    button.ontouchend = function() {
        this.style.opacity = '1';
    };
    
    button.onclick = onClick;
    
    return button;
}

/**
 * Função aprimorada para copiar texto para a área de transferência
 * com melhor compatibilidade entre navegadores
 * @param {String} text - Texto a ser copiado
 * @returns {Boolean} - Sucesso ou falha na operação
 */
function copyTextToClipboard(text) {
    let success = false;
    
    // Método 1: API Clipboard moderna (contextos seguros)
    if (navigator.clipboard && window.isSecureContext) {
        try {
            navigator.clipboard.writeText(text);
            console.log('Texto copiado com sucesso usando Clipboard API');
            success = true;
        } catch (err) {
            console.error('Erro ao copiar texto com Clipboard API:', err);
            // Continuar para método alternativo
        }
    }
    
    // Se o método moderno falhou ou não está disponível, usar alternativa
    if (!success) {
        try {
            // Método 2: execCommand (compatível com navegadores mais antigos)
            const textArea = document.createElement('textarea');
            textArea.value = text;
            
            // Tornar o elemento invisível
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            textArea.style.opacity = '0';
            
            // Especial para iOS
            textArea.setAttribute('readonly', ''); // Evita que o teclado apareça em iOS
            textArea.contentEditable = 'true';  
            textArea.readOnly = false;
            
            document.body.appendChild(textArea);
            
            // Selecionar o texto (diferente para iOS)
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                // iOS requer abordagem especial para seleção
                const range = document.createRange();
                range.selectNodeContents(textArea);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, text.length); // iOS específico
            } else {
                textArea.select();
            }
            
            // Executar o comando de cópia
            success = document.execCommand('copy');
            console.log('Texto copiado usando execCommand: ' + (success ? 'sucesso' : 'falha'));
            
            // Remover o elemento temporário
            document.body.removeChild(textArea);
        } catch (err) {
            console.error('Erro ao copiar texto com método alternativo:', err);
            success = false;
        }
    }
    
    // Se ambos os métodos falharam, tentar um terceiro método
    if (!success) {
        try {
            // Método 3: prompt com instruções para o usuário copiar manualmente
            const tempInput = document.createElement('div');
            tempInput.style.position = 'fixed';
            tempInput.style.top = '50%';
            tempInput.style.left = '50%';
            tempInput.style.transform = 'translate(-50%, -50%)';
            tempInput.style.zIndex = '99999';
            tempInput.style.backgroundColor = 'white';
            tempInput.style.padding = '20px';
            tempInput.style.borderRadius = '5px';
            tempInput.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
            tempInput.style.maxWidth = '90%';
            tempInput.style.maxHeight = '80vh';
            tempInput.style.overflow = 'auto';
            tempInput.style.wordBreak = 'break-word';
            
            tempInput.innerHTML = `
                <h3 style="margin-top:0">Copie este texto:</h3>
                <div style="background:#f5f5f5; padding:10px; border:1px solid #ddd; margin:10px 0; white-space:pre-wrap;">${text}</div>
                <p>Selecione todo o texto acima e use Ctrl+C (ou Cmd+C no Mac) para copiar.</p>
                <button id="copyDoneBtn" style="background:#4CAF50; color:white; border:none; padding:10px 15px; border-radius:4px; cursor:pointer">Concluído</button>
            `;
            
            document.body.appendChild(tempInput);
            
            // Botão para fechar
            document.getElementById('copyDoneBtn').onclick = function() {
                document.body.removeChild(tempInput);
                success = true; // Assumir que o usuário conseguiu copiar
            };
            
            // Também permitir ESC para fechar
            const escHandler = function(e) {
                if (e.key === 'Escape') {
                    document.body.removeChild(tempInput);
                    success = true; // Assumir que o usuário conseguiu copiar
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
            
            // Esse método é interativo e bloqueia a execução, então retornaremos "true" imediatamente
            // e deixaremos o usuário indicar quando terminar com o botão
            return true;
        } catch (err) {
            console.error('Erro ao usar método de cópia manual:', err);
            success = false;
        }
    }
    
    return success;
}

/**
 * Função de detecção avançada de plataforma para melhor compatibilidade
 * @returns {Object} - Informações sobre o dispositivo e navegador
 */
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Verificar plataforma
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isWindows = /Windows/i.test(userAgent);
    const isMac = /Mac/i.test(userAgent) && !isIOS;
    const isLinux = /Linux/i.test(userAgent) && !isAndroid;
    
    // Verificar navegador
    const isChrome = /Chrome/i.test(userAgent) && !/Edg|Edge/i.test(userAgent);
    const isFirefox = /Firefox/i.test(userAgent);
    const isSafari = /Safari/i.test(userAgent) && !/Chrome/i.test(userAgent);
    const isEdge = /Edg|Edge/i.test(userAgent);
    const isIE = /Trident|MSIE/i.test(userAgent);
    const isOpera = /Opera|OPR/i.test(userAgent);
    const isSamsung = /SamsungBrowser/i.test(userAgent);
    
    // Verificar se é dispositivo móvel
    const isMobile = isAndroid || isIOS || /webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // Verificar recursos específicos que podem impactar o compartilhamento
    const hasNavigatorShare = 'share' in navigator;
    const isSecureContext = window.isSecureContext;
    const hasClipboardAPI = 'clipboard' in navigator;
    
    return {
        // Plataforma
        isAndroid,
        isIOS,
        isWindows,
        isMac,
        isLinux,
        
        // Navegador
        isChrome,
        isFirefox,
        isSafari,
        isEdge,
        isIE,
        isOpera,
        isSamsung,
        
        // Tipo de dispositivo
        isMobile,
        
        // Recursos
        hasNavigatorShare,
        isSecureContext,
        hasClipboardAPI
    };
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