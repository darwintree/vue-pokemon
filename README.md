# vue-pokemon

> A vue implement for pokedex, damage calculator, and so on.  
>Pokemon data was copied from https://github.com/jake-white/VGC-Damage-Calculator  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 功能
### 基础功能
- [x] 展示宝可梦六维数据
- [x] 从trainertower拿宝可梦数据（实际上是从ps偷来的）
- [ ] 技能
- [ ] 场地
- [ ] 特性
- [ ] 道具
- [ ] 异常状态
- [ ] 伤害计算
- [ ] 导入导出
- [ ] 多只宝可梦列表/切换

### 高级功能
- [ ] 蒙特卡罗计算多段攻击（如连续两回合种枪/下马威+偷袭/被单回合内集火）存活/击杀概率（包括ct，不含异常状态）
- [ ] ↑引入异常状态（大概率鸽）
- [ ] 存活/击杀计算器（给定存活/击杀条件和相应概率，计算努力值）
