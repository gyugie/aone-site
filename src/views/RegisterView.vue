<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-primary dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-primary-500">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white-100"
          >
            Register
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
            <div class="text-left">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-100 text-left"
                >First Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                v-model="first_name"
              />
              <p
                v-if="inputFirstNameError"
                class="text-red-500 py-2"
                id="error"
              >
                {{ inputFirstNameError }}
              </p>
            </div>
            <div class="text-left">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-100 text-left"
                >Last Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                v-model="last_name"
              />
              <p v-if="inputLastNameError" class="text-red-500 py-2" id="error">
                {{ inputLastNameError }}
              </p>
            </div>
            <div class="text-left">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-100 text-left"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                v-model="email"
              />
              <p v-if="inputEmailError" class="text-red-500 py-2" id="error">
                {{ inputEmailError }}
              </p>
            </div>
            <div class="text-left">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white-100 text-left"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="password"
              />
              <p v-if="inputPasswordError" class="text-red-500 py-2" id="error">
                {{ inputPasswordError }}
              </p>
            </div>
            <button
              type="submit"
              class="w-full text-white-100 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-white-100">
              Already have an account?
              <router-link
                to="login"
                class="font-medium text-white-100 hover:underline dark:tex-white"
                >Sign in</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  },
  computed: {
    inputEmailError() {
      if (this.$store.state.setErrorLists.email) {
        return this.$store.state.setErrorLists.email[0];
      }
      return "";
    },
    inputFirstNameError() {
      if (this.$store.state.setErrorLists.first_name) {
        return this.$store.state.setErrorLists.first_name[0];
      }
      return "";
    },
    inputLastNameError() {
      if (this.$store.state.setErrorLists.last_name) {
        return this.$store.state.setErrorLists.last_name[0];
      }
      return "";
    },
    inputPasswordError() {
      if (this.$store.state.setErrorLists.password) {
        return this.$store.state.setErrorLists.password[0];
      }
      return "";
    },
    infoMessage() {
      return this.$store.state.infoMessage;
    },
  },
  methods: {
    submitForm() {
      // Dispatch the register action to the store
      this.$store.dispatch("userRegister", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });

      // console.log(this.$store.state.setErrorLists.email[0]);
    },
  },
};
</script>
