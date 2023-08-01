export default ({ route, redirect }) => {
  try {
    const startupId = localStorage.getItem('startup_id');
    const token = localStorage.getItem('token');
    if (!startupId || !token) {
      return redirect('/login');
    }
    if (startupId && !route.query.id && token) {
      return redirect(`/add-startup?id=1`);
    }
  } catch (error) {
    console.log(error);
  }
}
