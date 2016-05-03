![elf-logo](https://imgly.net/img/AfK.png)

官网地址：[http://jrainlau.github.io/elf/](http://jrainlau.github.io/elf/)

# 介绍
取名为“精灵”的elf，是一个干净，轻巧的响应式CSS框架。她基于flexbox，旨在快速搭建能够适配不同尺寸设备的响应式布局。


# 使用
安装

 `npm install elf-css`

elf是纯粹的css框架，首先需要在页面中引入`elf.css`：

 `<link rel="stylesheet" href="elf.css" />`

然后添加一个叫做`.elf`的class名到父容器上：

```
<main class="elf">
  ...
</main>
```


# 特点
### 干净
由于所有的elf的特性都只能在class名为`.elf`的容器中体现，因此elf可以搭配不同的css框架共同运作，避免了全局的样式污染。
### 轻量
完整的`elf.css`文件只有30kb左右大小，压缩后的体积将更小。小巧的体积意味着简单的语法，只需要3分钟即可上手，适合快速开发。
### 友好支持个性化定制
elf使用`less`语法构建，不同的功能独立为不同的`.less`文件，方便个性化定制。


# 浏览器支持
![替代文字](https://imgly.net/img/AfN.jpg)
（基于兼容性最低的object-fit属性）


# 参与开发
对elf有疑问或建议的朋友可以直接提issues，同时更加欢迎大家提交PR，elf期待大家的参与！


# 许可
[MIT](https://opensource.org/licenses/MIT)

Copyright © 2016 Jrain Lau