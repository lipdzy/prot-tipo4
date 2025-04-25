// Produtos
const products = [
    { 
        name: "Corrente Ponto de Luz", 
        price: "R$ 299,90", 
        image: "https://i.postimg.cc/5yLPzdZc/corrente.jpg",
        description: "Elegante corrente banhada a ouro com pingente de cristal que reflete a luz de forma única. Perfeita para ocasiões especiais e uso diário."
    },
    { 
        name: "Vestido Sarah", 
        price: "R$ 390,90", 
        image: "https://i.postimg.cc/YqtZJRZp/vestidobranco.jpg",
        description: "Vestido branco em tecido leve e fluido, com detalhes rendados. Ideal para ocasiões que pedem um visual romântico e sofisticado."
    },
    { 
        name: "Salto alto Preto", 
        price: "R$ 299,90", 
        image: "https://i.postimg.cc/SxH495Ny/salto-alto.jpg",
        description: "Sapato de salto alto preto em couro sintético de alta qualidade. Design atemporal que combina com diversos looks, oferecendo elegância e conforto."
    },
    { 
        name: "Bolsa Branca Delicada", 
        price: "R$ 199,90", 
        image: "https://i.postimg.cc/v8qvXvrg/bolsa.jpg",
        description: "Bolsa branca em material sintético de alta durabilidade, com acabamento premium e compartimentos internos organizados. O acessório perfeito para complementar seu visual."
    },
    { 
        name: "Pó Compacto Translúcido", 
        price: "R$ 62,00", 
        image: "/api/placeholder/400/300",
        description: "Pó compacto de textura fina e acabamento translúcido que controla a oleosidade da pele sem ressecar. Perfeito para todos os tipos de pele."
    },
    { 
        name: "Sérum Facial Hidratante", 
        price: "R$ 79,90", 
        image: "/api/placeholder/400/300",
        description: "Sérum hidratante com ácido hialurônico e vitaminas que restaura a barreira de hidratação da pele, proporcionando luminosidade e maciez."
    },
    { 
        name: "Protetor Solar FPS 50", 
        price: "R$ 72,00", 
        image: "/api/placeholder/400/300",
        description: "Protetor solar de amplo espectro com FPS 50, textura leve e toque seco. Protege contra os raios UVA e UVB, além de prevenir o envelhecimento precoce."
    },
    { 
        name: "Demaquilante Bifásico", 
        price: "R$ 48,00", 
        image: "/api/placeholder/400/300",
        description: "Demaquilante bifásico que remove até as maquiagens mais resistentes sem ressecar a pele. Fórmula suave e com ingredientes hidratantes."
    },
    { 
        name: "Kit Pincéis Maquiagem", 
        price: "R$ 115,90", 
        image: "/api/placeholder/400/300",
        description: "Kit completo com 12 pincéis profissionais para maquiagem. Cerdas macias e cabos ergonômicos que facilitam a aplicação de produtos diversos."
    },
    { 
        name: "Blush Rosado", 
        price: "R$ 42,50", 
        image: "/api/placeholder/400/300",
        description: "Blush em pó com acabamento matte e tonalidade rosada natural. Proporciona um rubor delicado e duradouro com fácil aplicação."
    },
    { 
        name: "Iluminador Facial", 
        price: "R$ 54,90", 
        image: "/api/placeholder/400/300",
        description: "Iluminador em pó com partículas microfinas que proporcionam um brilho natural e luminoso à pele. Ideal para destacar os pontos altos do rosto."
    },
    { 
        name: "Contorno Facial em Pó", 
        price: "R$ 65,90", 
        image: "/api/placeholder/400/300",
        description: "Pó compacto para contorno facial que realça e define os traços do rosto. Textura aveludada e fácil de esfumar."
    },
    { 
        name: "Esmalte Gel Rosê", 
        price: "R$ 24,90", 
        image: "/api/placeholder/400/300",
        description: "Esmalte em tom rosê com acabamento gel que proporciona brilho intenso e durabilidade excepcional. Fórmula hipoalergênica e de secagem rápida."
    },
    { 
        name: "Hidratante Corporal", 
        price: "R$ 49,90", 
        image: "/api/placeholder/400/300",
        description: "Hidratante corporal de rápida absorção com manteiga de karité e vitamina E. Proporciona hidratação profunda e deixa a pele macia o dia todo."
    },
    { 
        name: "Óleo de Argan para Cabelos", 
        price: "R$ 55,00", 
        image: "/api/placeholder/400/300",
        description: "Óleo capilar com argan puro que nutre, repara e protege os fios do calor. Devolve o brilho e maciez aos cabelos danificados."
    },
    { 
        name: "Shampoo Anti-Queda", 
        price: "R$ 39,90", 
        image: "/api/placeholder/400/300",
        description: "Shampoo formulado com ativos que combatem a queda e estimulam o crescimento capilar. Limpa suavemente sem ressecar os fios."
    }
];

// Variáveis globais
let cartItems = [];
let favorites = new Set();

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
        cartItems = JSON.parse(savedCart);
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
        favorites = new Set(JSON.parse(savedFavorites));
    }
}

// Salvar favoritos no localStorage
function saveFavoritesToStorage() {
    localStorage.setItem('closetDellasFavorites', JSON.stringify([...favorites]));
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

// Carregar produtos na página principal
function loadProducts() {
    const catalogContainer = document.getElementById('catalog');
    if (!catalogContainer) return; // Se não estiver na página principal
    
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
                <div class="product-info">
                    <div class="product-title-price">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
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

// Função para adicionar ao carrinho a partir da página de detalhes
function addToCartFromDetails(productIndex, quantity) {
    const product = products[productIndex];
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.index === productIndex);
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: product.name,
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
    showNotification(`${quantity}x ${product.name} adicionado ao carrinho!`);
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
 * Encaminha diretamente para o chat do WhatsApp com as informações do pedido
 */
function shareCartOnWhatsApp() {
    // Verificar se temos itens no carrinho
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        alert('Adicione produtos ao carrinho antes de compartilhar!');
        return;
    }
    
    try {
        // Perguntar tamanho e cor para cada item que precisa dessas informações
        const cartItemsWithDetails = cartItems.map(item => {
            // Valores padrão
            let size = 'Único';
            let color = 'Único';
            
            // Se for uma peça de roupa ou calçado, perguntar tamanho
            if (item.name.toLowerCase().includes('vestido') || 
                item.name.toLowerCase().includes('salto') || 
                item.name.toLowerCase().includes('sapato') ||
                item.name.toLowerCase().includes('roupa') ||
                item.name.toLowerCase().includes('calça') ||
                item.name.toLowerCase().includes('blusa')) {
                
                size = prompt(`Qual tamanho para ${item.name}?`, 'M');
                // Se cancelar em qualquer prompt, interromper o processo
                if (size === null) return null;
            }
            
            // Se for um produto que normalmente tem opções de cor
            if (item.name.toLowerCase().includes('bolsa') || 
                item.name.toLowerCase().includes('esmalte') || 
                item.name.toLowerCase().includes('sapato') ||
                item.name.toLowerCase().includes('cor')) {
                
                color = prompt(`Qual cor para ${item.name}?`, 'Como na imagem');
                // Se cancelar em qualquer prompt, interromper o processo
                if (color === null) return null;
            }
            
            return {
                ...item,
                size: size || 'Não especificado',
                color: color || 'Não especificado'
            };
        });
        
        // Verificar se algum item retornou null (usuário cancelou)
        if (cartItemsWithDetails.includes(null)) {
            return;
        }
        
        // Solicitar endereço
        const endereco = prompt('Endereço de entrega completo:', '');
        if (!endereco) {
            alert('É necessário informar um endereço para continuar.');
            return;
        }
        
        // Validação básica de endereço
        if (endereco.length < 10) {
            if (!confirm('O endereço parece muito curto. Deseja continuar mesmo assim?')) {
                return;
            }
        }
        
        // Solicitar forma de pagamento com opções pré-definidas
        const opcoesFormaPagamento = ['PIX', 'Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];
        let formaPagamento = '';
        
        // Criar mensagem com as opções numeradas
        let mensagemOpcoes = 'Escolha a forma de pagamento:\n';
        opcoesFormaPagamento.forEach((opcao, index) => {
            mensagemOpcoes += `${index + 1} - ${opcao}\n`;
        });
        
        // Solicitar escolha do usuário
        const escolha = prompt(mensagemOpcoes, '1');
        if (escolha === null) return;
        
        // Converter a escolha para o texto da opção
        const indiceEscolhido = parseInt(escolha, 10) - 1;
        if (indiceEscolhido >= 0 && indiceEscolhido < opcoesFormaPagamento.length) {
            formaPagamento = opcoesFormaPagamento[indiceEscolhido];
        } else {
            // Se a entrada não for um número válido, usar o texto digitado como forma de pagamento
            formaPagamento = escolha;
        }
        
        // Verificar se temos uma forma de pagamento
        if (!formaPagamento) {
            alert('É necessário informar uma forma de pagamento para continuar.');
            return;
        }
        
        // Solicitar observações (opcional)
        const observacoes = prompt('Observações adicionais para o pedido (opcional):', '');
        
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
            
            // Só incluir tamanho se não for "Único"
            if (item.size !== 'Único') {
                message += `  - Tamanho: ${item.size}\n`;
            }
            
            // Só incluir cor se não for "Único"
            if (item.color !== 'Único') {
                message += `  - Cor: ${item.color}\n`;
            }
        });
        
        // Adicionar informações do pedido
        message += `\n*💰 Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
        message += `*🏠 Endereço:* ${endereco}\n`;
        message += `*💳 Forma de pagamento:* ${formaPagamento}\n`;
        
        // Adicionar observações se houver
        if (observacoes) {
            message += `\n*📝 Observações:* ${observacoes}\n`;
        }
        
        // Adicionar data e hora do pedido
        const now = new Date();
        const dataHora = now.toLocaleString('pt-BR');
        message += `\n*⏰ Data/Hora:* ${dataHora}`;
        
        // Codificar a mensagem para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Remover o "+" do número do telefone para evitar problemas de codificação
        const phoneNumber = '5583991816152'; // Removido o "+" do início
        
        // Criar botão visível que abre o WhatsApp
        const whatsappLink = document.createElement('a');
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        whatsappLink.target = '_blank';
        whatsappLink.style.display = 'none'; // Esconder o elemento
        document.body.appendChild(whatsappLink);
        
        // Mostrar feedback ao usuário
        alert('Seu pedido foi processado! Clique em OK para ser direcionado ao WhatsApp.');
        
        // Clicar no link para forçar a abertura
        whatsappLink.click();
        
        // Remover o elemento após o clique
        setTimeout(() => {
            document.body.removeChild(whatsappLink);
            
            // Como backup, tentar redirecionar diretamente após um curto delay
            setTimeout(() => {
                window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
            }, 500);
        }, 100);
    } catch (error) {
        console.error('Erro ao processar o pedido:', error);
        alert('Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.');
    }
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