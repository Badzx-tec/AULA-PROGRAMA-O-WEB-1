/* ONG Esperança — main.js */
(function(){
  'use strict';
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => ctx.querySelectorAll(sel);

  // Ano no rodapé
  const ano = new Date().getFullYear();
  $$("#ano").forEach(el => el.textContent = String(ano));

  // Máscaras simples (progressive enhancement)
  function maskCPF(v){
    return v.replace(/\D/g,'')
            .slice(0,11)
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  }
  function maskFone(v){
    v = v.replace(/\D/g,'').slice(0,11);
    const isNine = v.length > 10;
    return v
      .replace(/(\d{2})(\d)/,'($1) $2')
      .replace(isNine ? /(\d{5})(\d{4}).*/ : /(\d{4})(\d{4}).*/, '$1-$2');
  }
  function maskCEP(v){
    return v.replace(/\D/g,'')
            .slice(0,8)
            .replace(/(\d{5})(\d{1,3})/,'$1-$2');
  }

  $$('input[data-mask="cpf"]').forEach(inp=>{
    inp.addEventListener('input', e => e.target.value = maskCPF(e.target.value));
  });
  $$('input[data-mask="fone"]').forEach(inp=>{
    inp.addEventListener('input', e => e.target.value = maskFone(e.target.value));
  });
  $$('input[data-mask="cep"]').forEach(inp=>{
    inp.addEventListener('input', e => e.target.value = maskCEP(e.target.value));
  });

  // Validação nativa: exibe mensagens ao tentar enviar
  const form = $("#form-cadastro");
  if(form){
    form.addEventListener('submit', (e)=>{
      if(!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
      }
    }, false);
  }
})();