# 企业官网

一个现代化、响应式的企业官网展示页面，采用纯HTML、CSS和JavaScript开发。

## 项目特性

- 🎨 现代化设计风格，简约商务感
- 📱 完全响应式设计，支持PC、平板、手机
- ⚡ 原生JavaScript，无框架依赖
- 🎯 用户体验优化，交互流畅
- 🔧 模块化代码结构，易于维护

## 页面结构

- **首页** - 企业形象展示，轮播图，产品预览，新闻动态
- **关于我们** - 公司简介，发展历程，团队介绍，企业文化
- **产品中心** - 产品分类，产品展示，详情模态框
- **联系我们** - 联系信息，留言表单，常见问题

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 媒体查询, 动画)
- 原生JavaScript (ES6+)
- Font Awesome 图标
- Google Fonts 字体
- Intersection Observer API
- Local Storage API

## 文件结构

```
├── index.html          # 首页
├── about.html          # 关于我们
├── products.html       # 产品中心
├── contact.html        # 联系我们
├── styles/
│   ├── main.css        # 主样式文件
│   ├── about.css       # 关于我们页面样式
│   ├── products.css    # 产品页面样式
│   └── contact.css     # 联系我们页面样式
├── js/
│   ├── main.js         # 主JavaScript文件
│   ├── products.js     # 产品页面功能
│   └── contact.js      # 联系我们页面功能
└── README.md           # 项目说明
```

## 功能特性

### 首页
- 自动轮播图展示
- 响应式导航栏
- 产品预览卡片
- 新闻动态展示
- 页面加载动画

### 关于我们
- 公司发展历程时间线
- 团队成员介绍
- 企业文化展示
- 滚动触发动画

### 产品中心
- 产品分类筛选
- 产品详情模态框
- 产品卡片悬停效果
- 波浪式过滤动画

### 联系我们
- 联系信息展示
- 表单验证功能
- 常见问题折叠面板
- 地图位置展示
- 表单自动保存
- 字符计数功能

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 本地运行

1. 克隆项目到本地
2. 使用任意HTTP服务器运行项目
3. 或直接在浏览器中打开 `index.html`

### 使用Python运行本地服务器

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 使用Node.js运行本地服务器

```bash
# 安装http-server
npm install -g http-server

# 运行服务器
http-server
```

## 自定义配置

### 修改主题色彩
在 `styles/main.css` 中修改CSS变量：

```css
:root {
    --primary-color: #1E88E5;
    --secondary-color: #1976D2;
    --accent-color: #1565C0;
}
```

### 添加新页面
1. 创建HTML文件
2. 添加对应的CSS文件
3. 更新导航菜单
4. 添加必要的JavaScript功能

## 部署

项目为静态网站，可以部署到任何静态网站托管服务：

- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：
- 邮箱：info@company.com
- 电话：+86 400-123-4567
