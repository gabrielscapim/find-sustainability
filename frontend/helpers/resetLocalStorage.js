const resetLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('startup');
  localStorage.removeItem('tokenGenerationTime');
};

export default resetLocalStorage;