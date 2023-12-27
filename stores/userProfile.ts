export const useProfileStore = defineStore("userProfile", {
  state: () => ({
    profileDetails: "null",
  }),
  actions: {
    async getUser() {
      const { getItems } = useDirectusItems();
      const { fetchUser } = useDirectusAuth();
      await fetchUser().then(async (data) => {
        try {
          const getDetails = await getItems({
            collection: "User",
            params: {
              filter: {
                id: {
                  _eq: data.value.id,
                },
              },
            },
          });
          this.profileDetails = getDetails[0];
          console.log(this.profileDetails);
        } catch (e) {}
      });
    },
  },
});
