<template>
  <div class="px-6 sm:ml-64 border-gray-200 bg-white-500 h-screen">
    <Navigation breadcrumb="Users" />
    <div class="mt-6 bg-white-100 w-full md:w-1/2">
      <div class="text-left py-4 px-6">
        <span class="text-lg font-semibold">{{ first_name }}</span>
      </div>
      <div class="flex flex-wrap w-full pb-6">
        <div class="text-left px-6">
          <div>
            <img :src="avatarUrl" class="h-80 w-58 rounded-lg" />
          </div>
        </div>
        <div class="text-left px-6 pt-4">
          <div class="flex flex-col items-left pb-8">
            <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
              First Name
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              first_name
            }}</span>
          </div>
          <div class="flex flex-col items-left pb-8">
            <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
              Last Name
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              last_name
            }}</span>
          </div>
          <div class="flex flex-col items-left pb-8">
            <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
              Email
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              email
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items item-left py-6">
      <a
        @click="$router.go(-1)"
        class="bg-blue-200 hover:bg-blue-500 text-white-100 whitespace-nowrap py-4 px-6 md:px-10 rounded-full text-md md:text-lg cursor-pointer"
      >
        Back
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      avatarUrl: "",
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    this.userId = this.$route.params.id;
    fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${this.userId}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.email = res.data.email;
        this.avatarUrl = res.data.avatar;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  },
};
</script>
