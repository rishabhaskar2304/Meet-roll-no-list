let x = $0.parentNode.parentNode;
let r = [];
while(x != null)
{
   let t = x.lastChild.lastChild;
   let txt = t.innerText;
   let i = parseInt(txt.match(/\d+/)[0]);
    r.push(i);
    x = x.nextSibling;
}
r.sort(function(a, b){return a-b});
console.log(r);