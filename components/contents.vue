<template>
    <div>
        <v-container>
            <v-row >
                <v-col v-for="post in blogPosts.posts" :key="post.id" cols="12">
                  <v-card class="mx-auto" max-width="344" width="344" :title="post.user.fullName" :subtitle="post.user.bio" :prepend-avatar="img(post.user.profilePicture)">
                    <v-card-text>{{ post.content }}</v-card-text>
                    
                  </v-card>
                </v-col>
              </v-row>
            <v-row>
                <v-col cols="12" class="text-center mt-4">
                    <v-btn @click="fetchBlogPosts" color="primary">Refresh</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const userProfile = useProfileStore()
const { getItems } = useDirectusItems();
console.log(userProfile.profileDetails)
const { getThumbnail: img } = useDirectusFiles();
const blogPosts = ref({
  posts: [],
});
const fetchBlogPosts = async () => {
    try {
        const blogPostsData = await getItems({
            collection: "BlogPost",
        }).then((data) => {
            //     console.log(data)
            return data
        })
        const userIds = blogPostsData.map(post => post.uid);
        const usersData = await getItems({
            collection: 'User',
            filters: {
                id: {
                    _in: userIds,
                },
            },
        });

        blogPosts.value.posts = blogPostsData.map(post => {
            const user = usersData.find(user => user.id === post.uid);
            return {
                ...post,
                user,
            };
        });

        console.log(blogPosts);

    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }

}
onMounted(fetchBlogPosts)
</script>