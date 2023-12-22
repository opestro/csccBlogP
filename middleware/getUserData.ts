export default defineNuxtRouteMiddleware(async (to, _from) => {
    const user = useProfileStore()
    user.getUser()
    console.log(user.profileDetails)
  });
