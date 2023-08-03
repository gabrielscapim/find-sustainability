import resetLocalStorage from "../helpers/resetLocalStorage";
import { apiRequest } from "../services/apiRequest";

export default async ({ route, redirect }) => {
  const startupId = route.query.id;

  if (startupId) {
    try {
      const { email } = JSON.parse(localStorage.getItem('startup'));
      const startupToEdit = await apiRequest('get', `/startup/${startupId}`);
  
      if (email !== startupToEdit.email) {
        resetLocalStorage();
        return redirect('login');
      }
    } catch (error) {
      console.log(error);
      resetLocalStorage();
      redirect('login');
    }
  }
}
  