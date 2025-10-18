// main.js — simples e comentado
(function(){
  const ano = new Date().getFullYear();
  document.querySelectorAll('#ano').forEach(el => el.textContent = String(ano));

  // Máscaras muito simples (sem bibliotecas)
  const maskers = {
    cpf(v){ return v.replace(/\D/g,'').slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'); },
    fone(v){
      v = v.replace(/\D/g,'').slice(0,11);
      const isNine = v.length > 10;
      return v.replace(/(\d{2})(\d)/,'($1) $2').replace(isNine?/(\d{5})(\d{4}).*/:/(\d{4})(\d{4}).*/,'$1-$2');
    },
    cep(v){ return v.replace(/\D/g,'').slice(0,8).replace(/(\d{5})(\d{1,3})/,'$1-$2'); }
  };
  document.querySelectorAll('input[data-mask="cpf"]').forEach(i=>i.addEventListener('input',e=>e.target.value=maskers.cpf(e.target.value)));
  document.querySelectorAll('input[data-mask="fone"]').forEach(i=>i.addEventListener('input',e=>e.target.value=maskers.fone(e.target.value)));
  document.querySelectorAll('input[data-mask="cep"]').forEach(i=>i.addEventListener('input',e=>e.target.value=maskers.cep(e.target.value)));

  // Validação nativa + mensagem do navegador (simples para iniciantes)
  const form = document.getElementById('form-cadastro');
  if(form){
    form.addEventListener('submit', (ev)=>{
      if(!form.checkValidity()){
        ev.preventDefault();
        form.reportValidity();
      }
    });
  }
})();