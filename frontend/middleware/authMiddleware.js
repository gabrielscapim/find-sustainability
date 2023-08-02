import resetLocalStorage from "../helpers/resetLocalStorage";

export default ({ redirect }) => {
  const startup = JSON.parse(localStorage.getItem('startup'));
  const token = localStorage.getItem('token');
  const tokenGenerationTime = localStorage.getItem('tokenGenerationTime');
  const dateNow = Date.now();
  const TOKEN_EXPIRATION_TIME = 86400000;

  if (startup && token && (dateNow - tokenGenerationTime < TOKEN_EXPIRATION_TIME)) {
    redirect(`/add-startup?id=${startup.id}`)
  }

  if (dateNow - tokenGenerationTime > TOKEN_EXPIRATION_TIME) {
    resetLocalStorage();
  }
}
