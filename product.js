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
    // Vestido Sarah (índice 0)
    "vestido-sarah": {
        nome: "Vestido Sarah",
        preco: "R$ 390,90",
        descricao: "Vestido branco em tecido leve e fluido, com detalhes rendados. Ideal para ocasiões que pedem um visual romântico e sofisticado. *Cores disponiveis: branco, preto,*"
    },

    // Salto Alto Preto (índice 1)
    "salto-alto": {
        nome: "Salto alto Preto",
        preco: "R$ 299,90",
        descricao: "Sapato de salto alto preto em couro sintético de alta qualidade. Design atemporal que combina com diversos looks, oferecendo elegância e conforto. *Tamanhos disponiveis: 37, 38, 41*"
    },

    // Bolsa Branca (índice 2)
    "bolsa-branca": {
        nome: "Bolsa Branca Delicada",
        preco: "R$ 199,90",
        descricao: "Bolsa branca em material sintético de alta durabilidade, com acabamento premium e compartimentos internos organizados. *Cores disponiveis: rosa, azul, preto*"
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
    
    // Ocultar a navegação de imagens, já que agora só usamos uma imagem
    const imageNavigation = document.getElementById('imageNavigation');
    if (imageNavigation) {
        imageNavigation.style.display = 'none';
    }
});

// Variáveis globais
let currentProductConfig = null;

// Função para carregar detalhes do produto
function loadProductDetails(index) {
    // Verificar se o índice é válido
    if (index < 0 || index >= produtos.length) {
        console.error(`Produto com índice ${index} não encontrado.`);
        window.location.href = 'index.html';
        return;
    }
    
    const produto = produtos[index];
    
    // Obter a configuração específica do produto com base no nome
    let produtoConfig = null;
    
    // Transformar nome do produto para formato de chave (lowercase e com hífens)
    const produtoKey = produto.nome.toLowerCase().replace(/\s+/g, '-');
    
    // Tentar encontrar o produto na configuração
    for (const [chave, config] of Object.entries(PRODUTOS_CONFIG)) {
        if (chave === produtoKey || config.nome === produto.nome) {
            produtoConfig = config;
            break;
        }
    }
    
    // Se não encontrar configuração específica, criar uma com os dados do produto original
    if (!produtoConfig) {
        console.log(`Configuração não encontrada para ${produto.nome}, usando dados padrão.`);
        produtoConfig = {
            nome: produto.nome,
            preco: produto.price,
            descricao: produto.description || `${produto.nome} é um item de alta qualidade que combina estilo e conforto.`
        };
    }
    
    // Guardar configuração do produto atual
    currentProductConfig = produtoConfig;
    
    // Preencher detalhes do produto
    const productImage = document.getElementById('productImage');
    if (productImage) {
        productImage.src = produto.image;
        productImage.alt = produto.nome;
    }
    
    const productName = document.getElementById('productName');
    if (productName) {
        productName.textContent = produto.nome;
    }
    
    const productPrice = document.getElementById('productPrice');
    if (productPrice) {
        productPrice.textContent = produto.price;
    }
    
    // Adicionar descrição do produto
    const productDescription = document.getElementById('productDescription');
    if (productDescription) {
        productDescription.textContent = produtoConfig.descricao;
    }
    
    // Atualizar título da página
    document.title = `${produto.nome} - Closet Dellas`;
}

// Configurar eventos na página de detalhes
function setupDetailPageEvents(productIndex) {
    // Obter elementos do DOM
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');
    const quantityValue = document.getElementById('quantityValue');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    // Verificar se todos os elementos necessários existem
    if (!decreaseBtn || !increaseBtn || !quantityValue || !addToCartBtn) {
        console.error('Elementos de quantidade ou botão de adicionar ao carrinho não encontrados.');
        return;
    }
    
    let quantity = 1;
    
    // Remover listeners antigos se existirem
    const newDecreaseBtn = decreaseBtn.cloneNode(true);
    const newIncreaseBtn = increaseBtn.cloneNode(true);
    const newAddToCartBtn = addToCartBtn.cloneNode(true);
    
    decreaseBtn.parentNode.replaceChild(newDecreaseBtn, decreaseBtn);
    increaseBtn.parentNode.replaceChild(newIncreaseBtn, increaseBtn);
    addToCartBtn.parentNode.replaceChild(newAddToCartBtn, addToCartBtn);
    
    // Diminuir quantidade
    newDecreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
    
    // Aumentar quantidade
    newIncreaseBtn.addEventListener('click', function() {
        quantity++;
        quantityValue.textContent = quantity;
    });
    
    // Adicionar ao carrinho
    newAddToCartBtn.addEventListener('click', function() {
        // Adicionar ao carrinho com a quantidade atual
        addToCartFromDetails(productIndex, quantity);
    });
}

// Função para adicionar produto ao carrinho a partir da página de detalhes
function addToCartFromDetails(productIndex, quantity) {
    // Verificar se o índice é válido
    if (productIndex < 0 || productIndex >= produtos.length) {
        console.error(`Produto com índice ${productIndex} não encontrado.`);
        return;
    }
    
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
            name: produto.nome,
            price: produto.price,
            image: produto.image,
            quantity: quantity
        });
    }
    
    // Atualizar exibição do carrinho e contador
    updateCartDisplay();
    updateCartCounter();
    
    // Salvar carrinho no localStorage
    saveCartToStorage();
    
    // Mostrar notificação
    showNotification(`${quantity}x ${produto.nome} adicionado ao carrinho!`);
}