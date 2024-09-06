# Shopping-Website-Static-

难点一：使用定位 Position 进行偏移而不是上外边距
相对定位仍然保存原来的文档流，并基于当前位置进行偏移,浮于其他 div 之上
遵循子绝父相原理

二：IconFont
在 iconfont.cn 中找到合适的 iconfont 并下载，全部解压到 css 文件夹，打开 icon html，复制代码， 指定位置写入<span class="iconfont">&#xe848;</span>

三：wrap
同一 div 可设多个 class，其中一些总体布局的 css 可统一设置

难点 4
![alt text](image.png)
出现两排样式不同的 li
为 body 添加清楚 li 的格式 css 样式

    ![alt text](image-1.png)
    为li添加了active后，显示缺少一个li
        原因：绝对定位会使元素从文档流中脱离，而相对定位不会

难点 5：
设置滚动
scrollTop scrollTo onscroll
let top = document.documentElement.scrollTop || document.body.scrollTop; 获取已经滚动了多少像素，考虑到兼容性，所以添加 document.body.scrollTop

难点 6：
设置动画效果，1.设置动画帧 @keyframe name{0%{ top:0;} 100%{top:75px;}} 2. 应用 animation{name 0.5s ease}

难点 8：
无需在 js 中为元素设置多个属性，可在 css 中预先设置好样式，最后在 js 中利用 className 添加在原有元素后面，所以一些元素后面需要预留 class，即使没有类名

难点 9：
z-index 控制各个元素的层级，必须有定位
