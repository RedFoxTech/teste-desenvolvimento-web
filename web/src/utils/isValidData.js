import { toast } from 'react-toastify';

export function isValidDataRegister(email, name, password) { 
  if (email === '' || name === '' || password === '') {
    toast.error('Preencha todos os campos, para proseguir!');
    return false;
  }

  if (password !== '' && password.length < 6) {
    toast.error('A senha não pode ter menos que 6 caracteres!');
    return false;
  }

  if (name !== '' && name.length < 4) {
    toast.error('Seu nome não pode ter menos que 4 caracteres!');
    return false;
  }

  return true;
}

export function isValidDataLogin(email, password) { 
  if (email === '' || password === '') {
    toast.error('Preencha todos os campos, para proseguir!');
    return false;
  }

  if (password !== '' && password.length < 6) {
    toast.error('A senha não pode ter menos que 6 caracteres!');
    return false;
  }

  return true;
}

export function validatePokemonData(data) {
  const valids = data.filter(item => item !== '' && item);
  
  if (valids.length < data.length) {
    toast.error('Preencha todos os campos!');
    return false;
  }

  return true;
}
