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

// Função para carregar detalhes do produto
function loadProductDetails(index) {
    const product = products[index];
    
    // Se o produto não existir, redirecionar para a página principal
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Preencher detalhes do produto
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    
    // Adicionar descrição do produto
    if (product.description) {
        document.getElementById('productDescription').textContent = product.description;
    } else {
        // Descrição genérica caso não haja descrição específica
        document.getElementById('productDescription').textContent = `${product.name} é um item de alta qualidade que combina estilo e conforto. Feito com materiais duráveis e design elegante, é perfeito para complementar seu visual em diversas ocasiões.`;
    }
    
    // Atualizar título da página
    document.title = `${product.name} - Closet Dellas`;
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
        addToCartFromDetails(productIndex, quantity);
    });
}