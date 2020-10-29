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
l = new Set(r);
console.log("Present\n");
console.log(l);
let abs = [];
let j = 0;
for(let k=1;k<48;k++)
    {
        if(!l.has(k))
            abs.push(k);
    }
console.log("Absent\n")
console.log(abs);
