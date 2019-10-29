function getTree(node,lvl) {
  if (!lvl) {
    lvl = 1;
  }
  if (node == null) {
    return;
  }

  console.log(
    Array(lvl)
      .fill(" ")
      .join("") + node.nodeName
  );

  getTree(node.firstElementChild,lvl++);
  getTree(node.nextElementSibling,lvl++);
}
getTree(document);

let elements = [];
elements.push(document.body);
elements.push(document.getElementById('navv'));
elements.push(document.getElementById('link'));

let handler = () =>{
  let p = Math.random()
  event.preventDefault()
  if (p<0.1){
    console.log('target: ' +event.target.nodeName, 'currentTarget:'+event.currentTarget.nodeName ) ;
    event.target.classList.toggle("active")
    event.currentTarget.classList.toggle("active")
  }
}

console.log(elements);

elements.forEach((el)=>{

  el.addEventListener('click',handler,true)
  el.addEventListener('click',handler,false)  
})

