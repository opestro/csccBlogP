export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { fetchUser, setUser } = useDirectusAuth();
  const { getItems } = useDirectusItems();
  const user = useDirectusUser();
  console.log(user);
  if (user.value) {
    const user = await fetchUser();
    setUser(user.value);
  }
  if (user.value) {
    return navigateTo("/");
  }
});
