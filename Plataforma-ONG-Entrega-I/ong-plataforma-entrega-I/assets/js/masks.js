function onlyDigits(v){ return v.replace(/\D/g,''); }
function maskCPF(value){
  let v = onlyDigits(value).slice(0,11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return v;
}
function maskCEP(value){
  let v = onlyDigits(value).slice(0,8);
  v = v.replace(/(\d{5})(\d)/, '$1-$2');
  return v;
}
function maskPhone(value){
  let v = onlyDigits(value).slice(0,11);
  if (v.length > 10){
    v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  } else {
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  }
  return v.trim();
}

document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const cep = document.getElementById('cep');
  const tel = document.getElementById('telefone');

  if (cpf){
    cpf.addEventListener('input', (e) => { e.target.value = maskCPF(e.target.value); });
  }
  if (cep){
    cep.addEventListener('input', (e) => { e.target.value = maskCEP(e.target.value); });
  }
  if (tel){
    tel.addEventListener('input', (e) => { e.target.value = maskPhone(e.target.value); });
  }

  // Live validity hints
  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('invalid', () => {
      const out = el.parentElement.querySelector('.error');
      if (out){ out.textContent = el.validationMessage; }
    });
    el.addEventListener('input', () => {
      const out = el.parentElement.querySelector('.error');
      if (out){ out.textContent = el.validity.valid ? '' : el.validationMessage; }
    });
  });
});