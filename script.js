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
        favoritos = new Set(JSON.parse(savedFavorites));
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
    
    /**
 * Cria um formulário modal para coletar todas as informações do pedido com melhorias de acessibilidade
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
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'order-form-title');
    modal.setAttribute('aria-modal', 'true');
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
    
    // Adicionar manipulador de tecla Escape para fechar o modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && document.getElementById('order-form-modal')) {
            modal.remove();
        }
    });
    
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
    title.id = 'order-form-title';
    title.textContent = 'Finalizar Pedido';
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    
    // Botão para fechar o modal (X no canto superior direito)
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Fechar formulário');
    closeButton.style.position = 'absolute';
    closeButton.style.right = '15px';
    closeButton.style.top = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#666';
    closeButton.onclick = function() {
        modal.remove();
    };
    
    formContainer.style.position = 'relative'; // Para posicionar o botão de fechar
    formContainer.appendChild(closeButton);
    
    // Formulário
    const form = document.createElement('form');
    form.id = 'checkout-form';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '15px';
    
    // Impedir o envio padrão do formulário
    form.onsubmit = function(e) {
        e.preventDefault();
        return false;
    };
    
    // Adicionar detalhes dos produtos ao formulário
    const productSection = document.createElement('div');
    productSection.style.marginBottom = '20px';
    
    const productTitle = document.createElement('h3');
    productTitle.textContent = 'Produtos no Carrinho';
    productTitle.style.marginBottom = '10px';
    productTitle.style.borderBottom = '1px solid #ddd';
    productTitle.style.paddingBottom = '5px';
    
    productSection.appendChild(productTitle);
    
    // Verificar se o carrinho tem itens
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Seu carrinho está vazio. Adicione produtos antes de finalizar o pedido.';
        emptyCartMessage.style.color = '#f44336';
        productSection.appendChild(emptyCartMessage);
        
        // Adicionar botão para continuar comprando
        const continueShoppingButton = document.createElement('button');
        continueShoppingButton.type = 'button';
        continueShoppingButton.textContent = 'Continuar Comprando';
        continueShoppingButton.style.padding = '10px 20px';
        continueShoppingButton.style.backgroundColor = '#4CAF50';
        continueShoppingButton.style.color = 'white';
        continueShoppingButton.style.border = 'none';
        continueShoppingButton.style.borderRadius = '5px';
        continueShoppingButton.style.cursor = 'pointer';
        continueShoppingButton.style.marginTop = '10px';
        continueShoppingButton.onclick = function() {
            modal.remove();
        };
        
        productSection.appendChild(continueShoppingButton);
        
        // Montar o formulário com apenas a mensagem de carrinho vazio
        formContainer.appendChild(title);
        formContainer.appendChild(productSection);
        modal.appendChild(formContainer);
        document.body.appendChild(modal);
        
        return;
    }
    
    // Calcular total
    let total = 0;
    
    // Adicionar cada produto com opções
    cartItems.forEach((item, index) => {
        try {
            // Calcular valor do item (com tratamento de erro)
            const priceString = item.price.replace('R$ ', '').replace(',', '.');
            const priceValue = parseFloat(priceString);
            
            if (isNaN(priceValue)) {
                console.error('Preço inválido:', item.price);
                throw new Error('Preço inválido');
            }
            
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
                <strong>${item.name || 'Produto sem nome'}</strong> - ${item.quantity}x ${item.price}
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
            sizeInput.setAttribute('aria-label', `Tamanho do produto ${item.name || 'Produto ' + (index + 1)}`);
            
            // Opções de tamanho comuns
            const sizes = ['PP', 'P', 'M', 'G', 'GG', '34', '35', '36', '37', '38', '39', '40', '41', '42', 'Único'];
            sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                
                // Selecionar tamanho padrão baseado no nome do produto
                const productName = (item.name || '').toLowerCase();
                if ((productName.includes('roupa') || 
                     productName.includes('vestido') || 
                     productName.includes('blusa')) && size === 'M') {
                    option.selected = true;
                } else if ((productName.includes('sapato') || 
                           productName.includes('salto')) && size === '37') {
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
            colorInput.setAttribute('aria-label', `Cor do produto ${item.name || 'Produto ' + (index + 1)}`);
            colorInput.style.width = '100%';
            colorInput.style.padding = '8px';
            colorInput.style.boxSizing = 'border-box';
            
            colorField.appendChild(colorLabel);
            colorField.appendChild(colorInput);
            productItem.appendChild(colorField);
            
            productSection.appendChild(productItem);
            
        } catch (error) {
            console.error('Erro ao processar item do carrinho:', error);
            
            // Criar uma versão simplificada do item em caso de erro
            const errorItem = document.createElement('div');
            errorItem.style.marginBottom = '15px';
            errorItem.style.padding = '10px';
            errorItem.style.backgroundColor = '#fff0f0';
            errorItem.style.borderRadius = '5px';
            errorItem.style.color = '#f44336';
            
            errorItem.textContent = `Produto ${index + 1}: Erro ao carregar detalhes. Por favor, entre em contato conosco.`;
            
            productSection.appendChild(errorItem);
        }
    });
    
    // Mostrar total com tratamento de erro
    const totalElement = document.createElement('div');
    totalElement.style.fontSize = '18px';
    totalElement.style.fontWeight = 'bold';
    totalElement.style.textAlign = 'right';
    totalElement.style.marginBottom = '20px';
    
    try {
        totalElement.innerHTML = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    } catch (error) {
        totalElement.innerHTML = 'Total: Erro ao calcular. Por favor, verifique os itens.';
        totalElement.style.color = '#f44336';
    }
    
    productSection.appendChild(totalElement);
    
    // Campo de Nome (novo campo)
    const nameField = createFormField('customer-name', 'Nome Completo:', 'text', '', 'Digite seu nome completo', true);
    
    // Campo de Telefone (novo campo)
    const phoneField = createFormField('phone', 'Telefone:', 'tel', '', '(00) 00000-0000', true);
    phoneField.querySelector('input').pattern = '\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}';
    phoneField.querySelector('input').placeholder = '(00) 00000-0000';
    
    // Adicionar máscara ao campo de telefone
    const phoneInput = phoneField.querySelector('input');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        }
    });
    
    // Campo de Endereço
    const addressField = createFormField('address', 'Endereço de entrega:', 'text', '', 'Digite seu endereço completo', true);
    
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
    paymentSelect.required = true;
    paymentSelect.setAttribute('aria-required', 'true');
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
    const notesField = createFormField('notes', 'Observações (opcional):', 'textarea', '', 'Informações adicionais para o pedido', false);
    const notesTextarea = notesField.querySelector('textarea');
    notesTextarea.style.minHeight = '100px';
    notesTextarea.style.resize = 'vertical';
    
    // Botões
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.justifyContent = 'space-between';
    buttonGroup.style.marginTop = '20px';
    
    // Botão Cancelar
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancelar';
    cancelButton.setAttribute('aria-label', 'Cancelar pedido');
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.minWidth = '120px';
    cancelButton.onclick = function() {
        // Confirmar cancelamento se o formulário já estiver parcialmente preenchido
        const nameValue = document.getElementById('customer-name')?.value;
        const addressValue = document.getElementById('address')?.value;
        
        if (nameValue || addressValue) {
            if (confirm('Tem certeza que deseja cancelar o pedido? Os dados preenchidos serão perdidos.')) {
                modal.remove();
            }
        } else {
            // Se não tem dados importantes, fechar sem confirmar
            modal.remove();
        }
    };
    
    // Botão Enviar Pedido
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar Pedido';
    submitButton.setAttribute('aria-label', 'Finalizar e enviar pedido');
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.minWidth = '120px';
    submitButton.style.fontWeight = 'bold';
    
    buttonGroup.appendChild(cancelButton);
    buttonGroup.appendChild(submitButton);
    
    // Montar o formulário
    form.appendChild(productSection);
    form.appendChild(nameField);
    form.appendChild(phoneField);
    form.appendChild(addressField);
    form.appendChild(paymentField);
    form.appendChild(notesField);
    form.appendChild(buttonGroup);
    
    // Manipulador de envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const customerName = document.getElementById('customer-name');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');
        
        // Verificar campos obrigatórios
        if (!customerName.value.trim()) {
            alert('Por favor, informe seu nome.');
            customerName.focus();
            return false;
        }
        
        if (!phone.value.trim() || phone.value.replace(/\D/g, '').length < 10) {
            alert('Por favor, informe um número de telefone válido.');
            phone.focus();
            return false;
        }
        
        if (!address.value.trim()) {
            alert('Por favor, informe o endereço de entrega.');
            address.focus();
            return false;
        }
        
        // Validar se o endereço é muito curto
        if (address.value.trim().length < 10) {
            if (!confirm('O endereço parece muito curto. Deseja continuar mesmo assim?')) {
                address.focus();
                return false;
            }
        }
        
        // Se a validação passou, processar o formulário
        processFormData(form, cartItems);
        return false;
    });
    
    // Adicionar o formulário ao container
    formContainer.appendChild(title);
    formContainer.appendChild(form);
    
    // Adicionar o container ao modal
    modal.appendChild(formContainer);
    
    // Adicionar o modal à página
    document.body.appendChild(modal);
    
    // Focar no primeiro campo (nome)
    const firstInput = form.querySelector('input, select, textarea');
    if (firstInput) {
        firstInput.focus();
    }
}

/**
 * Cria um campo de formulário com acessibilidade melhorada
 * @param {String} id - ID do campo
 * @param {String} label - Texto da label
 * @param {String} type - Tipo do campo
 * @param {String} value - Valor padrão
 * @param {String} placeholder - Placeholder
 * @param {Boolean} required - Se o campo é obrigatório
 * @returns {HTMLElement} - Campo de formulário
 */
function createFormField(id, label, type, value = '', placeholder = '', required = false) {
    const field = document.createElement('div');
    field.style.marginBottom = '15px';
    
    const fieldLabel = document.createElement('label');
    fieldLabel.htmlFor = id;
    fieldLabel.textContent = label + (required ? ' *' : '');
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
    input.required = required;
    
    if (required) {
        input.setAttribute('aria-required', 'true');
    }
    
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
 * Função melhorada para enviar mensagem para o WhatsApp
 * @param {String} message - Mensagem a ser enviada
 * @param {String} phoneNumber - Número do telefone
 */
function sendWhatsAppMessage(message, phoneNumber) {
    // Verificar entradas
    if (!message || !phoneNumber) {
        alert('Erro: Mensagem ou número de telefone inválidos.');
        return;
    }
    
    // Criar um overlay de carregamento
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.setAttribute('role', 'alert');
    loadingOverlay.setAttribute('aria-busy', 'true');
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
    loadingText.id = 'loading-text';
    loadingText.style.color = 'white';
    loadingText.style.fontSize = '20px';
    loadingText.style.marginBottom = '20px';
    
    // Spinner de carregamento
    const spinner = document.createElement('div');
    spinner.style.border = '5px solid #f3f3f3';
    spinner.style.borderTop = '5px solid #3498db';
    spinner.style.borderRadius = '50%';
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.animation = 'spin 2s linear infinite';
    
    // Adicionar keyframes para animação (se ainda não existir)
    if (!document.getElementById('spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = `
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
    
    // Verificar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // URL codificada para WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Tentar abrir o WhatsApp com tratamento de erros
    try {
        setTimeout(() => {
            // Atualizar mensagem de carregamento
            const loadingTextElement = document.getElementById('loading-text');
            if (loadingTextElement) {
                loadingTextElement.textContent = 'Redirecionando para o WhatsApp...';
            }
            
            // Remover o overlay após um curto tempo
            setTimeout(() => {
                const overlay = document.getElementById('loading-overlay');
                if (overlay) {
                    overlay.remove();
                }
                
                // URL do WhatsApp Web ou app
                const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
                
                // Armazenar a URL para possível recuperação posterior
                localStorage.setItem('lastWhatsAppURL', whatsappURL);
                
                if (isMobile) {
                    // Em dispositivos móveis, tentar primeiro o link direto para o app
                    const whatsappDeepLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
                    
                    // Tentar abrir o app do WhatsApp
                    const appOpened = tryOpenURL(whatsappDeepLink);
                    
                    // Se falhar, tentar a versão web
                    setTimeout(() => {
                        if (!appOpened) {
                            window.open(whatsappURL, '_blank');
                            
                            // Mostrar opções de fallback após um tempo
                            setTimeout(() => {
                                showFallbackOptions(whatsappURL, message, phoneNumber);
                            }, 3000);
                        }
                    }, 1500);
                } else {
                    // Em desktop, abrir em uma nova guia
                    const newTab = window.open(whatsappURL, '_blank');
                    
                    // Se o navegador bloqueou a abertura da nova guia
                    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
                        // Tentar redirecionamento direto
                        window.location.href = whatsappURL;
                        
                        // Ainda oferecer opções alternativas após um tempo
                        setTimeout(() => {
                            showFallbackOptions(whatsappURL, message, phoneNumber);
                        }, 3000);
                    }
                }
            }, 1500);
        }, 1000);
    } catch (error) {
        console.error('Erro ao abrir WhatsApp:', error);
        
        // Remover overlay em caso de erro
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Mostrar mensagem de erro e opções alternativas
        alert('Não foi possível abrir o WhatsApp automaticamente. Tente as opções alternativas.');
        showFallbackOptions(
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, 
            message, 
            phoneNumber
        );
    }
}

/**
 * Tenta abrir uma URL e retorna se foi bem-sucedido
 * @param {String} url - URL para abrir
 * @returns {Boolean} - Se a tentativa de abrir foi iniciada
 */
function tryOpenURL(url) {
    try {
        // Criar iframe oculto (evita problemas com bloqueadores de pop-up)
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        document.body.appendChild(iframe);
        
        // Remover o iframe após um curto tempo
        setTimeout(() => {
            if (iframe && iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
            }
        }, 100);
        
        return true;
    } catch (error) {
        console.error('Erro ao abrir URL:', error);
        return false;
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