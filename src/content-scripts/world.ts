// 在网页的window对象上运行，与main.ts的window对象不同
// 这里可以用来搞js注入或劫持，下面这个可以在top window里取到

window.____inject_data = 'hello world'
