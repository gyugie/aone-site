<template>
  <div class="px-6 sm:ml-64 border-gray-200 bg-white-500 h-screen">
    <Navigation breadcrumb="Users" />
    <div class="mt-6 flex flex-wrap md:justify-between">
      <div class="text-left w-full md:w-1/2">
        <div class="pb-4">
          <span class="text-2xl font-extrabold pb-8"
            >Lorem ipsum dolor sit amet</span
          >
        </div>
        <div class="py-4">
          <span class=""
            >consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris
            mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu
            rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi,
            maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit
            vehicula arcu. In consectetur, purus sed consequat posuere, orci
            nunc consequat ipsum, ut sodales urna massa at neque.</span
          >
        </div>
        <div class="pb-4">
          <span class=""
            >Nulla eget tellus sodales, venenatis lacus eget, lobortis libero.
            Cras scelerisque metus non mi condimentum, ac lacinia enim
            fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta
            enim. Suspendisse molestie enim quam, a maximus massa faucibus nec.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis
            iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum
            commod</span
          >
        </div>
      </div>
      <div class="w-full md:w-1/3 flex items-center">
        <div>
          <img src="../assets/Rectangle-1.png" class="h-80 w-96" />
        </div>
      </div>
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
