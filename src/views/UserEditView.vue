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
            <span class="text-red-500 text-xs text-left">
              sorry can't update avatar for now, storage limited</span
            >
          </div>
        </div>
        <div class="text-left px-6 pt-4 w-full md:w-1/2">
          <form class="pr-4 text-left" @submit.prevent="submitForm">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >First Name</label
              >
              <input
                type="text"
                class="py-2 w-full rounded rounded-md px-2 border border-gray-100"
                placeholder="your first name"
                required
                v-model="first_name"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >Last Name</label
              >
              <input
                type="text"
                class="py-2 w-full rounded rounded-md px-2 border border-gray-100 peer-invalid:text-red-500"
                placeholder="last name"
                required
                v-model="last_name"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >Email</label
              >
              <input
                type="text"
                class="py-2 w-full rounded rounded-md px-2 border border-gray-100"
                placeholder="email"
                required
                v-model="email"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white-100 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update Profile
            </button>
          </form>
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
import Navigation from "../components/Navigation";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
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
  methods: {
    submitForm() {
      // Dispatch the userUpdate action to the store
      this.$store.dispatch("userUpdate", {
        id: this.userId,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
      });

      if (this.$store.state.infoMessage) {
        toast.info(this.$store.state.infoMessage, { rtl: true });
      }
      if (this.$store.state.errorMessage) {
        toast.error(this.$store.state.errorMessage, { rtl: true });
      }
    },
  },
};
</script>
