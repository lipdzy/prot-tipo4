// ======================================================
// ÁREA DE CONFIGURAÇÃO - EDITE AQUI
// ======================================================
// Instruções: 
// 1. Apenas modifique os valores após os dois pontos (:)
// 2. Mantenha o formato exatamente como está
// 3. Não remova as aspas ou vírgulas
// 4. Salve o arquivo após as alterações

// CONFIGURAÇÃO DE PRODUTOS
// ======================================================
const PRODUTOS_CONFIG = {
    // Vestido Sarah (índice 1)
    "vestido-sarah": {
        nome: "Vestido Sarah",
        preco: "R$ 390,90",
        descricao: "Vestido branco em tecido leve e fluido, com detalhes rendados. Ideal para ocasiões que pedem um visual romântico e sofisticado.",
        imagens: [
            "https://i.postimg.cc/YqtZJRZp/vestidobranco.jpg",
            "https://i.postimg.cc/SxH495Ny/salto-alto.jpg",
            "https://i.postimg.cc/t4D0DLwy/vestidovermelho.jpg"
        ]
    },
    
    // Salto Alto Preto (índice 2)
    "salto-alto": {
        nome: "Salto Alto Preto",
        preco: "R$ 299,90",
        descricao: "Sapato de salto alto em couro sintético de alta qualidade. Design atemporal que combina com diversos looks, oferecendo elegância e conforto.",
        imagens: [
            "https://i.postimg.cc/SxH495Ny/salto-alto.jpg",
            "https://i.postimg.cc/9034KzRP/saltonude.jpg",
            "https://i.postimg.cc/rwxp2PQ9/saltovermelho.jpg"
        ]
    },
    
    // Bolsa Branca (índice 3)
    "bolsa-branca": {
        nome: "Bolsa Branca Delicada",
        preco: "R$ 199,90",
        descricao: "Bolsa branca em material sintético de alta durabilidade, com acabamento premium e compartimentos internos organizados. O acessório perfeito para complementar seu visual.",
        imagens: [
            "https://i.postimg.cc/v8qvXvrg/bolsa.jpg",
            "https://i.postimg.cc/Y9JgCLG3/bolsapreta.jpg",
            "https://i.postimg.cc/V6t8VvbS/bolsacaramelo.jpg"
        ]
    },
    
};

// NÃO MODIFIQUE NADA ABAIXO DESTA LINHA A MENOS QUE VOCÊ SAIBA O QUE ESTÁ FAZENDO
// ======================================================

// Script específico para a página de detalhes do produto
document.addEventListener('DOMContentLoaded', function() {
    // Obter o índice do produto selecionado
    const productIndex = localStorage.getItem('selectedProductIndex');
    
    // Se não houver produto selecionado, redirecionar para a página principal
    if (productIndex === null) {
        window.location.href = 'index.html';
        return;
    }
    
    // Carregar detalhes do produto
    loadProductDetails(parseInt(productIndex));
    
    // Configurar eventos na página de detalhes
    setupDetailPageEvents(parseInt(productIndex));
});

// Variáveis globais para controle de imagens
let currentProductConfig = null;
let currentImageIndex = 0;

// Função para carregar detalhes do produto
function loadProductDetails(index) {
    const produto = produtos[index];
    
    // Se o produto não existir, redirecionar para a página principal
    if (!produto) {
        window.location.href = 'index.html';
        return;
    }
    
    // Obter a configuração específica do produto com base no nome
    let produtoConfig = null;
    for (const [chave, config] of Object.entries(PRODUTOS_CONFIG)) {
        if (config.nome === produto.name) {
            produtoConfig = config;
            break;
        }
    }
    
    // Se não encontrar configuração específica, usar dados padrão
    if (!produtoConfig) {
        produtoConfig = {
            nome: produto.name,
            preco: produto.price,
            descricao: produto.description || `${produto.name} é um item de alta qualidade que combina estilo e conforto.`,
            imagens: [produto.image]
        };
    }
    
    // Guardar configuração do produto atual
    currentProductConfig = produtoConfig;
    currentImageIndex = 0;
    
    // Preencher detalhes do produto
    document.getElementById('productImage').src = produtoConfig.imagens[0];
    document.getElementById('productImage').alt = produtoConfig.nome;
    document.getElementById('productName').textContent = produtoConfig.nome;
    document.getElementById('productPrice').textContent = produtoConfig.preco;
    
    // Adicionar descrição do produto
    document.getElementById('productDescription').textContent = produtoConfig.descricao;
    
    // Atualizar título da página
    document.title = `${produtoConfig.nome} - Closet Dellas`;
    
    // Criar controles de navegação se houver múltiplas imagens
    if (produtoConfig.imagens && produtoConfig.imagens.length > 1) {
        // Mostrar os botões de navegação já existentes no HTML
        const prevBtn = document.getElementById('prevImageBtn');
        const nextBtn = document.getElementById('nextImageBtn');
        const imageCounter = document.getElementById('imageCounter');
        
        if (prevBtn && nextBtn) {
            // Configurar contagem de imagens
            imageCounter.textContent = `1/${produtoConfig.imagens.length}`;
            
            // Configurar eventos dos botões
            prevBtn.addEventListener('click', function() {
                navigateProductImages(-1);
            });
            
            nextBtn.addEventListener('click', function() {
                navigateProductImages(1);
            });
            
            // Mostrar os botões
            document.getElementById('imageNavigation').style.display = 'flex';
        }
    } else {
        // Se não houver várias imagens, ocultar os botões
        const imageNavigation = document.getElementById('imageNavigation');
        if (imageNavigation) {
            imageNavigation.style.display = 'none';
        }
    }
}

// Função para navegar entre as imagens do produto
function navigateProductImages(direction) {
    if (!currentProductConfig || !currentProductConfig.imagens || currentProductConfig.imagens.length <= 1) return;
    
    // Atualizar índice da imagem atual
    currentImageIndex = (currentImageIndex + direction + currentProductConfig.imagens.length) % currentProductConfig.imagens.length;
    
    // Atualizar contador de imagens
    const imageCounter = document.getElementById('imageCounter');
    if (imageCounter) {
        imageCounter.textContent = `${currentImageIndex + 1}/${currentProductConfig.imagens.length}`;
    }
    
    // Atualizar imagem
    changeProductImage(currentProductConfig.imagens[currentImageIndex]);
}

// Função para mudar a imagem do produto
function changeProductImage(imageUrl) {
    const productImage = document.getElementById('productImage');
    if (!productImage) return;
    
    // Adicionar efeito de fade na transição
    productImage.style.opacity = '0.5';
    productImage.style.transition = 'opacity 0.3s ease';
    
    // Mudar a imagem após um pequeno atraso para o efeito ser visível
    setTimeout(() => {
        productImage.src = imageUrl;
        
        // Quando a nova imagem carregar, restaurar a opacidade
        productImage.onload = function() {
            productImage.style.opacity = '1';
        };
    }, 300);
}

// Configurar eventos na página de detalhes
function setupDetailPageEvents(productIndex) {
    // Botões de quantidade
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');
    const quantityValue = document.getElementById('quantityValue');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    let quantity = 1;
    
    // Diminuir quantidade
    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
    
    // Aumentar quantidade
    increaseBtn.addEventListener('click', function() {
        quantity++;
        quantityValue.textContent = quantity;
    });
    
    // Adicionar ao carrinho
    addToCartBtn.addEventListener('click', function() {
        // Adicionar ao carrinho com a quantidade atual
        addToCartWithDetails(productIndex, quantity);
    });
}

// Função modificada para adicionar produto ao carrinho
function addToCartWithDetails(productIndex, quantity) {
    const produto = produtos[productIndex];
    
    // Verificar se o produto já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => 
        item.index === productIndex
    );
    
    if (existingItemIndex !== -1) {
        // Incrementar quantidade se já estiver no carrinho
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        // Adicionar novo item ao carrinho
        cartItems.push({
            index: productIndex,
            name: produto.name,
            price: produto.price,
            // Usar a imagem principal do produto
            image: currentProductConfig.imagens[0],
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    updateCartCounter();
    
    // Salvar carrinho no localStorage
    saveCartToStorage();
    
    // Mostrar notificação
    showNotification(`${quantity}x ${produto.name} adicionado ao carrinho!`);
}