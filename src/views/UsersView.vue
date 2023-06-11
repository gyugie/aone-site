<template>
  <div class="px-6 sm:ml-64 border-gray-200 bg-white-500 h-screen">
    <Navigation breadcrumb="Users" />
    <div class="mt-6 bg-white-100 rounded-lg border border-gray-100">
      <div class="text-left p-8">
        <span class="text-black text-lg font-semibold"> All Users </span>
      </div>

      <div class="flex justify-end px-4">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="w-full md:w-64 py-2 rounded rounded-md px-2 border border-gray-100"
        />
      </div>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-md font-medium text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-100"
        >
          <tr>
            <th
              scope="col"
              class="px-4 md:px-6 py-3 text-left md:text-center w-1/2"
            >
              Full Name
            </th>
            <th scope="col" class="px-6 py-3 w-1/3">Email</th>
            <th scope="col" class="hidden md:block px-6 py-3 w-1/4"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <td
              scope="row"
              class="px-4 md:px-6 md:px-12 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              <div class="flex flex-col md:flex-row md:items-center md:order-2">
                <div class="flex items-center justify-center">
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="user.avatar"
                    alt="user photo"
                  />
                </div>
                <div>
                  <span
                    class="md:pl-6 text-sm text-center flex items-center text-gray-500 dark:text-gray-500"
                    >{{ user.first_name }} {{ user.last_name }}</span
                  >
                </div>
              </div>
            </td>
            <td class="px-4 md:px-6 py-4">{{ user.email }}</td>
            <td class="px-2 py-4">
              <div class="relative">
                <button
                  class="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                  @click="toggleActionDropdown(user.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
                <div
                  class="absolute right-0 z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg dark:bg-white-100"
                  v-if="isActionDropdownVisible(user.id)"
                  @click="toggleActionDropdown(user.id)"
                >
                  <!-- Dropdown content -->
                  <router-link
                    :to="`/user/${user.id}`"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Detail
                  </router-link>
                  <router-link
                    :to="`/user/edit/${user.id}`"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Edit
                  </router-link>
                  <button
                    v-if="this.$store.state.profile.email != user.email"
                    @click="deletedUser(user.id)"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-end">
        <!-- Help text -->
        <div class="flex items-center">
          <span
            class="text-sm text-gray-700 dark:text-gray-400 py-8 text-center"
          >
            Showing
            <span class="font-semibold text-gray-900 dark:text-white">{{
              currentPage
            }}</span>
            to
            <span class="font-semibold text-gray-900 dark:text-white">10</span>
            of
            <span class="font-semibold text-gray-900 dark:text-white">{{
              totalPages
            }}</span>
            Entries
          </span>
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="p-2 text-sm font-medium text-white bg-gray-800 border-0 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="p-2 text-sm font-medium text-white bg-gray-800 border-0 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      totalPages: 0,
      searchQuery: "",
      actionDropdownVisibility: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      if (this.searchQuery) {
        const query = this.searchQuery;
        return this.users.filter((user) => {
          return (
            user.first_name.includes(query) ||
            user.last_name.includes(query) ||
            user.email.includes(query)
          );
        });
      } else {
        return this.users;
      }
    },
  },
  watch: {
    searchQuery() {
      this.fetchUsers();
    },
  },
  methods: {
    async fetchUsers() {
      console.log(process.env.VUE_APP_API_BASE_URL);

      const token = localStorage.getItem("token");
      fetch(
        `${process.env.VUE_APP_API_BASE_URL}/users?page=${this.currentPage}&search=${this.searchQuery}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((res) => {
          this.users = res.data;
          this.totalPages = res.last_page;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    nextPage() {
      console.log("nextPages");
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchUsers();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchUsers();
      }
    },
    toggleActionDropdown(index) {
      this.actionDropdownVisibility = [];
      this.actionDropdownVisibility[index] =
        !this.actionDropdownVisibility[index];
    },
    isActionDropdownVisible(index) {
      return this.actionDropdownVisibility[index];
    },
    deletedUser(id) {
      console.log(id);
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$store.dispatch("userDestroy", id);
          await this.fetchUsers();
          if (this.$store.state.infoMessage) {
            toast.success(this.$store.state.infoMessage, { rtl: true });
          }
          if (this.$store.state.errorMessage) {
            toast.error(this.$store.state.errorMessage, { rtl: true });
          }
        }
      });
    },
  },
};
</script>
