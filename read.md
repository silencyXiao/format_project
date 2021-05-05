
Eslint + prettier VScode 编辑器自动格式化
--------
#### 安装依赖
```bash
yarn add -D 
@vue/eslint-config-prettier #禁用ESLint 和 prettier 之间的一些冲突
babel-eslint
eslint 
eslint-plugin-prettier
eslint-plugin-vue
prettier
```

### package.json 格式化配置
```JSON
"lint": "eslint \"src/**/*.{js,ts,vue}\"", // ESlint 检查
"format": "prettier \"src/**/*.{js,ts,vue}\" --write --ignore-unknown" // Prettier 监听
```

### stylelint 配置
```bash
yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-scss
```