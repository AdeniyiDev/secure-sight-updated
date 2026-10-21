/* =====================================================================
   projects.js  -  category filter on the Recent installs page
   ===================================================================== */
(function(){
  var bar=document.getElementById("proj-filters");
  if(!bar)return;
  var buttons=bar.querySelectorAll(".pf");
  var cards=document.querySelectorAll(".proj-card");
  var none=document.getElementById("proj-none");

  function apply(f){
    var shown=0;
    cards.forEach(function(c){
      var on=(f==="all"||c.getAttribute("data-cat")===f);
      c.classList.toggle("hide",!on);
      if(on)shown++;
    });
    if(none)none.classList.toggle("show",shown===0);
  }

  buttons.forEach(function(b){
    b.addEventListener("click",function(){
      buttons.forEach(function(x){x.classList.remove("on")});
      b.classList.add("on");
      apply(b.getAttribute("data-f"));
    });
  });
})();
