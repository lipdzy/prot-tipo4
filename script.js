// JavaScript para a loja Belle Rose
document.addEventListener('DOMContentLoaded', function() {
    // Remover qualquer fundo ou efeito da logo, garantindo transparência
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    if (logoPlaceholder) {
        logoPlaceholder.style.backgroundColor = 'transparent';
        // Remover qualquer efeito de brilho existente
        const glossyEffect = logoPlaceholder.querySelector('.glossy-effect');
        if (glossyEffect) {
            glossyEffect.remove();
        }
    }
    
    // Verificar o status da loja no carregamento inicial
    checkStoreStatus();
    
    // Adicionar efeitos hover nos itens sociais
    addSocialItemsHoverEffect();
    
    // Adicionar efeitos de brilho nos links
    addShimmerEffects();
    
    // Atualizar o status a cada minuto
    setInterval(checkStoreStatus, 60000);
});

// Função para verificar se a loja está aberta ou fechada
function checkStoreStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    // Definição dos horários de funcionamento
    const openTime = 9 * 60; // 09:00
    const closeTimeWeekday = 18 * 60; // 18:00
    const closeTimeSaturday = 13 * 60; // 13:00
    
    let isOpen = false;
    
    // Verifica se está dentro do horário de funcionamento
    if (day >= 1 && day <= 5) { // Segunda a Sexta
        isOpen = currentTime >= openTime && currentTime < closeTimeWeekday;
    } else if (day === 6) { // Sábado
        isOpen = currentTime >= openTime && currentTime < closeTimeSaturday;
    }
    
    // Atualiza o indicador de status
    const statusEl = document.getElementById('status');
    if (statusEl) {
        if (isOpen) {
            statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Aberta</span>';
            statusEl.className = 'status-indicator status-open';
        } else {
            statusEl.innerHTML = '<div class="status-dot"></div><span>Loja Fechada</span>';
            statusEl.className = 'status-indicator status-closed';
        }
    }
}

// Efeito de hover nos itens de redes sociais
function addSocialItemsHoverEffect() {
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

// Adicionar efeito de brilho nos links sociais
function addShimmerEffects() {
    document.querySelectorAll('.social-link').forEach(link => {
        // Adicionar efeito de brilho apenas aos links que ainda não o têm
        if (!link.querySelector('.shimmer-effect')) {
            const shimmerEffect = document.createElement('div');
            shimmerEffect.className = 'shimmer-effect';
            shimmerEffect.style.position = 'absolute';
            shimmerEffect.style.top = '0';
            shimmerEffect.style.left = '0';
            shimmerEffect.style.right = '0';
            shimmerEffect.style.bottom = '0';
            shimmerEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)';
            shimmerEffect.style.backgroundSize = '200% 200%';
            shimmerEffect.style.animation = 'linkShimmerDiagonal 4s ease-in-out infinite';
            shimmerEffect.style.pointerEvents = 'none';
            shimmerEffect.style.zIndex = '1';
            shimmerEffect.style.opacity = '0';
            
            link.style.position = 'relative';
            link.style.overflow = 'hidden';
            link.appendChild(shimmerEffect);
            
            // Adicionar efeito de hover para mostrar o brilho
            link.addEventListener('mouseenter', () => {
                shimmerEffect.style.opacity = '1';
            });
            
            link.addEventListener('mouseleave', () => {
                shimmerEffect.style.opacity = '0';
            });
        }
    });
    
    // Adicionar a animação de brilho ao CSS se ainda não existir
    if (!document.querySelector('style#dynamic-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-styles';
        style.textContent = `
            @keyframes linkShimmerDiagonal {
                0% { background-position: 200% -100%; }
                100% { background-position: -100% 200%; }
            }
            
            @keyframes glossyDiagonal {
                0% { background-position: 200% -100%; opacity: 0; }
                50% { opacity: 0.7; }
                100% { background-position: -100% 200%; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}