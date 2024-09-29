# Shopping-Website-Static-

Difficulty 1: Use Position for offset instead of top margin
Relative positioning still saves the original document flow, and offsets based on the current position, floating above other divs
Follow the principle of child-free parent-like

2: IconFont
Find the appropriate iconfont from iconfont.cn and download it, unzip it all to the css folder, open the icon html, copy the code, and write <span class="iconfont">&#xe848;</span> in the specified location

3: wrap
The same div can have multiple classes, and some of the overall layout css can be set uniformly

Difficulty 4
![alt text](image.png)
Two rows of li with different styles appear
Add a clear li format css style to the body

![alt text](image-1.png)
After adding active to li, it shows that one li is missing
Reason: Absolute positioning will cause the element to be separated from the document flow, while relative positioning will not

Difficulty 5:
Set scrolling
scrollTop scrollTo onscroll
let top = document.documentElement.scrollTop || document.body.scrollTop; Get how many pixels have been scrolled. Considering compatibility, add document.body.scrollTop

Difficulty 6:
Set animation effect, 1. Set animation frame @keyframe name{0%{ top:0;} 100%{top:75px;}} 2. Apply animation{name 0.5s ease}

Difficulty 8:
No need to set multiple attributes for elements in js, you can pre-set the style in css, and finally use className in js to add it after the original element, so some elements need to reserve class after them, even if there is no class name

Difficulty 9:
z-index controls the hierarchy of each element and must be positioned

Difficulty 10:
Animation effect: @keyframe If the requirement is to scroll a row of photos infinitely, two sets of identical photos are required, and transform: translateX(0) is set to -50%. And the size of the container should be set to 200% to accommodate two sets of photos

Difficulty 11:
Magnifying glass effect, mouse movement (magnifying glass moves with the mouse):

1. offsetleft and offsettop The distance between the element and the nearest positioned ancestor element

2. clientX and ClientY Return the distance of the mouse click position relative to the upper left corner of the browser

3. screenX and screenY Return the distance between the mouse click position and the upper left corner of the computer screen

4. offsetX and offsetY The horizontal position of the mouse relative to the left edge of the target event

5. pageX and pageY The position of the mouse relative to the entire page, including the distance that has been scrolled

6. clientHeight Returns the height inside the element

Difficulty: offsetX and offsetY can only get the distance between the mouse and the magnifying glass border, and cannot get the vertical or horizontal distance from the entire picture div, so you need to get the pageY distance minus half of the magnifying glass div distance minus the distance between offsettop and body, note that the ancestor of offsettop is not positioned

The position of each parent-child level was not planned in the early stage, resulting in the inability to obtain the height of this element to the top of the header using offsettop, and only the calculated fixed height can be used as a reference.

Secondly, mouseover and mousemove are two different events. Mousemove is for mouse movement (smooth), while mouseover is for mouse movement in and out (intermittent)
