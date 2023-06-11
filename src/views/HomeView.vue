<template>
  <div class="px-6 sm:ml-64 border-gray-200 bg-white-500 h-screen">
    <Navigation breadcrumb="Users" />
    <div class="mt-6 bg-white-100 rounded-lg border border-gray-100">
      <div class="text-left p-8">
        <span class="text-black text-lg font-semibold"> All Users </span>
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
            class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
          >
            <td
              scope="row"
              class="px-4 md:px-6 md:px-12 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              <div class="flex items-center md:order-2">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
                <span class="pl-6 text-sm text-gray-500 dark:text-gray-500"
                  >Bonnie Green</span
                >
              </div>
            </td>
            <td class="px-6 py-4">mugypleci@gmail.com</td>
            <td class="px-2 py-4">
              <button
                class="hidden md:block bg-blue-200 hover:bg-blue-500 text-white-100 whitespace-nowrap p-2 md:py-2 md:px-4 rounded-full text-xs md:text-md"
              >
                View Detail
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
          >
            <td
              scope="row"
              class="px-4 md:px-6 md:px-12 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              <div class="flex items-center md:order-2">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
                <span class="pl-6 text-sm text-gray-500 dark:text-gray-500"
                  >Bonnie Green</span
                >
              </div>
            </td>
            <td class="px-6 py-4 whitespace-wrap">mugypleci@gmail.com</td>
            <td class="px-2 py-4 hidden md:block">
              <button
                class="bg-blue-200 hover:bg-blue-500 text-white-100 whitespace-nowrap p-2 md:py-2 md:px-4 rounded-full text-xs md:text-md"
              >
                View Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "../components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
