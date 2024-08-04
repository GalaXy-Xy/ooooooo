// 产品页面JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initProductTabs();
    initProductModal();
    initProductFilter();
});

// 产品分类标签功能
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productItems = document.querySelectorAll('.product-item');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新标签状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤产品
            filterProducts(category, productItems);
        });
    });
}

// 产品过滤功能
function filterProducts(category, productItems) {
    productItems.forEach((item, index) => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.classList.remove('hidden');
            // 添加淡入动画，使用延迟创建波浪效果
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.classList.add('fade-in-up');
            }, index * 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            item.classList.remove('fade-in-up');
            setTimeout(() => {
                item.style.display = 'none';
                item.classList.add('hidden');
            }, 300);
        }
    });
}

// 产品模态框功能
function initProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal) return;

    // 关闭模态框
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // 点击关闭按钮
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// 打开产品模态框
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // 产品数据
    const productData = getProductData(productId);
    
    if (productData) {
        // 更新模态框内容
        document.getElementById('modalImage').src = productData.image;
        document.getElementById('modalTitle').textContent = productData.title;
        document.getElementById('modalDescription').textContent = productData.description;
        document.getElementById('modalFeatures').innerHTML = productData.features;
        document.getElementById('modalPrice').textContent = productData.price;
        
        // 显示模态框
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 添加淡入动画
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// 获取产品数据
function getProductData(productId) {
    const products = {
        'product1': {
            image: 'https://via.placeholder.com/600x400/1E88E5/FFFFFF?text=企业管理系统',
            title: '企业管理系统',
            description: '全面的企业资源规划解决方案，帮助企业提升管理效率。系统集成了财务管理、人力资源、供应链管理、客户关系管理等核心模块，为企业提供一站式的管理解决方案。',
            features: '<span class="feature-tag">ERP</span><span class="feature-tag">CRM</span><span class="feature-tag">财务管理</span><span class="feature-tag">人力资源</span><span class="feature-tag">供应链</span>',
            price: '¥99,999/年'
        },
        'product2': {
            image: 'https://via.placeholder.com/600x400/1976D2/FFFFFF?text=数据分析平台',
            title: '数据分析平台',
            description: '强大的数据分析工具，助力企业数据驱动决策。平台支持多种数据源接入，提供丰富的数据可视化组件，帮助企业快速洞察业务趋势，优化运营策略。',
            features: '<span class="feature-tag">BI</span><span class="feature-tag">大数据</span><span class="feature-tag">可视化</span><span class="feature-tag">实时分析</span><span class="feature-tag">报表</span>',
            price: '¥79,999/年'
        },
        'product3': {
            image: 'https://via.placeholder.com/600x400/1565C0/FFFFFF?text=云服务平台',
            title: '云服务平台',
            description: '安全可靠的云服务解决方案，支持弹性扩展。平台提供计算、存储、网络等基础服务，支持容器化部署，确保业务高可用性和数据安全性。',
            features: '<span class="feature-tag">云计算</span><span class="feature-tag">容器化</span><span class="feature-tag">高可用</span><span class="feature-tag">安全</span><span class="feature-tag">弹性扩展</span>',
            price: '¥59,999/年'
        },
        'service1': {
            image: 'https://via.placeholder.com/600x400/0D47A1/FFFFFF?text=定制开发服务',
            title: '定制开发服务',
            description: '根据客户需求提供个性化定制开发解决方案。我们的专业团队拥有丰富的开发经验，能够快速理解客户需求，提供高质量的定制化解决方案。',
            features: '<span class="feature-tag">定制化</span><span class="feature-tag">快速交付</span><span class="feature-tag">专业团队</span><span class="feature-tag">技术支持</span><span class="feature-tag">维护</span>',
            price: '面议'
        },
        'service2': {
            image: 'https://via.placeholder.com/600x400/1E88E5/FFFFFF?text=系统集成服务',
            title: '系统集成服务',
            description: '专业的系统集成服务，确保各系统无缝对接。我们提供API开发、数据迁移、系统整合等专业服务，帮助企业实现系统间的有效协同。',
            features: '<span class="feature-tag">集成</span><span class="feature-tag">API</span><span class="feature-tag">数据迁移</span><span class="feature-tag">系统整合</span><span class="feature-tag">测试</span>',
            price: '面议'
        },
        'support1': {
            image: 'https://via.placeholder.com/600x400/1976D2/FFFFFF?text=7x24小时技术支持',
            title: '7x24小时技术支持',
            description: '全天候技术支持服务，确保系统稳定运行。我们的技术团队提供电话、邮件、在线等多种支持方式，快速响应并解决客户遇到的技术问题。',
            features: '<span class="feature-tag">24/7</span><span class="feature-tag">快速响应</span><span class="feature-tag">专业团队</span><span class="feature-tag">多渠道支持</span><span class="feature-tag">问题跟踪</span>',
            price: '¥19,999/年'
        },
        'support2': {
            image: 'https://via.placeholder.com/600x400/1565C0/FFFFFF?text=培训服务',
            title: '培训服务',
            description: '专业的培训服务，帮助用户快速掌握系统使用。我们提供线上和线下多种培训方式，包括基础培训、高级培训、认证培训等，确保用户能够充分利用系统功能。',
            features: '<span class="feature-tag">培训</span><span class="feature-tag">认证</span><span class="feature-tag">在线学习</span><span class="feature-tag">实践操作</span><span class="feature-tag">考核</span>',
            price: '¥9,999/人'
        }
    };
    
    return products[productId] || null;
}

// 产品搜索功能
function initProductFilter() {
    // 添加搜索框（如果需要的话）
    const searchInput = document.querySelector('.product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const productItems = document.querySelectorAll('.product-item');
            
            productItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// 产品卡片悬停效果
function initProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-item');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
            // 添加悬停时的图片缩放效果
            const img = this.querySelector('.product-image img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            // 恢复图片缩放
            const img = this.querySelector('.product-image img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
}

// 价格动画效果
function animatePrice() {
    const priceElements = document.querySelectorAll('.price');
    
    priceElements.forEach(element => {
        const finalPrice = element.textContent;
        const numericPrice = parseFloat(finalPrice.replace(/[^\d.]/g, ''));
        
        if (!isNaN(numericPrice)) {
            let currentPrice = 0;
            const increment = numericPrice / 50;
            
            const timer = setInterval(() => {
                currentPrice += increment;
                if (currentPrice >= numericPrice) {
                    element.textContent = finalPrice;
                    clearInterval(timer);
                } else {
                    element.textContent = '¥' + Math.floor(currentPrice).toLocaleString();
                }
            }, 30);
        }
    });
}

// 导出函数
window.ProductsJS = {
    openProductModal,
    filterProducts,
    initProductTabs,
    initProductModal,
    initProductFilter,
    initProductHoverEffects,
    animatePrice
};
