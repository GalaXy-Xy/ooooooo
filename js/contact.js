// 联系我们页面JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
    initFormValidation();
});

// 联系表单功能
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
}

// 处理表单提交
function handleFormSubmit(form) {
    // 验证表单
    if (validateForm(form)) {
        // 显示加载状态
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        // 模拟表单提交
        setTimeout(() => {
            // 显示成功消息
            showSuccessMessage('消息发送成功！我们会尽快与您联系。');
            
            // 重置表单
            form.reset();
            
            // 恢复按钮状态
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // 清除验证错误
            clearFormErrors(form);
        }, 2000);
    }
}

// 表单验证
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    // 清除之前的错误
    clearFormErrors(form);
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, '此字段为必填项');
            isValid = false;
        }
    });
    
    // 验证邮箱格式
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, '请输入有效的邮箱地址');
            isValid = false;
        }
    }
    
    // 验证电话格式
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phoneField.value)) {
            showFieldError(phoneField, '请输入有效的电话号码');
            isValid = false;
        }
    }
    
    return isValid;
}

// 显示字段错误
function showFieldError(field, message) {
    field.classList.add('error');
    
    // 创建错误消息元素
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // 插入错误消息
    field.parentNode.appendChild(errorElement);
}

// 清除表单错误
function clearFormErrors(form) {
    const errorFields = form.querySelectorAll('.error');
    const errorMessages = form.querySelectorAll('.error-message');
    
    errorFields.forEach(field => field.classList.remove('error'));
    errorMessages.forEach(message => message.remove());
}

// 显示成功消息
function showSuccessMessage(message) {
    // 移除现有的成功消息
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建成功消息
    const successElement = document.createElement('div');
    successElement.className = 'success-message show';
    successElement.textContent = message;
    
    // 插入到表单顶部
    const form = document.getElementById('contactForm');
    form.insertBefore(successElement, form.firstChild);
    
    // 3秒后自动隐藏
    setTimeout(() => {
        successElement.classList.remove('show');
        setTimeout(() => {
            successElement.remove();
        }, 300);
    }, 3000);
}

// FAQ功能
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 关闭其他FAQ项
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前FAQ项
            item.classList.toggle('active');
        });
    });
}

// 表单验证功能
function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const fields = form.querySelectorAll('input, select, textarea');
    
    fields.forEach(field => {
        // 实时验证
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        // 清除错误状态
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMessage = this.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });
    });
}

// 验证单个字段
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // 必填字段验证
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = '此字段为必填项';
    }
    
    // 邮箱格式验证
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = '请输入有效的邮箱地址';
        }
    }
    
    // 电话格式验证
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = '请输入有效的电话号码';
        }
    }
    
    // 显示或清除错误
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    return isValid;
}

// 地图功能（模拟）
function initMap() {
    const mapContainer = document.querySelector('.map-placeholder');
    if (!mapContainer) return;
    
    // 模拟地图交互
    mapContainer.addEventListener('click', function() {
        alert('地图功能需要集成真实的地图服务（如百度地图、高德地图等）');
    });
    
    // 添加悬停效果
    mapContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    mapContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// 联系信息动画
function animateContactInfo() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('fade-in-up');
        }, index * 200);
    });
}

// 表单字符计数
function initCharacterCount() {
    const textarea = document.querySelector('textarea[name="message"]');
    if (!textarea) return;
    
    const maxLength = 500;
    const counter = document.createElement('div');
    counter.className = 'character-count';
    counter.style.textAlign = 'right';
    counter.style.fontSize = '0.8rem';
    counter.style.color = '#666';
    counter.style.marginTop = '0.5rem';
    counter.style.transition = 'color 0.3s ease';
    
    textarea.parentNode.appendChild(counter);
    
    function updateCount() {
        const remaining = maxLength - textarea.value.length;
        const percentage = (remaining / maxLength) * 100;
        counter.textContent = `剩余 ${remaining} 字符 (${Math.round(percentage)}%)`;
        
        if (remaining < 50) {
            counter.style.color = '#dc3545';
        } else if (remaining < 100) {
            counter.style.color = '#ffc107';
        } else {
            counter.style.color = '#666';
        }
    }
    
    textarea.addEventListener('input', updateCount);
    textarea.setAttribute('maxlength', maxLength);
    updateCount();
}

// 表单自动保存功能
function initAutoSave() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formData = {};
    
    // 保存表单数据到本地存储
    function saveFormData() {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.name && input.value) {
                formData[input.name] = input.value;
            }
        });
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }
    
    // 恢复表单数据
    function restoreFormData() {
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data[key];
                }
            });
        }
    }
    
    // 监听表单输入
    form.addEventListener('input', window.MainJS ? window.MainJS.debounce(saveFormData, 1000) : debounce(saveFormData, 1000));
    
    // 表单提交成功后清除保存的数据
    form.addEventListener('submit', function() {
        localStorage.removeItem('contactFormData');
    });
    
    // 页面加载时恢复数据
    restoreFormData();
}

// 页面加载完成后初始化
window.addEventListener('load', function() {
    initMap();
    animateContactInfo();
    initCharacterCount();
    initAutoSave();
});

// 工具函数（如果MainJS不可用）
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 导出函数
window.ContactJS = {
    handleFormSubmit,
    validateForm,
    showFieldError,
    clearFormErrors,
    showSuccessMessage,
    initFAQ,
    initFormValidation,
    validateField,
    initMap,
    animateContactInfo,
    initCharacterCount,
    initAutoSave,
    debounce
};
