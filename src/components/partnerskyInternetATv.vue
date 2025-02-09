<template>
  <main v-if="showComponent">
    <table class="tb">
      <thead>
        <tr>
          <th>G1</th>
          <td>50/20</td>
          <td>18€</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>G3</th>
          <td>400/80</td>
          <td>24€</td>
        </tr>
        <tr>
          <th>G5</th>
          <td>800/160</td>
          <td>32€</td>
        </tr>
        <tr>
          <th>G6</th>
          <td>1000/300</td>
          <td>44€</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>


export default {
  name: "partnerskyInternetATv",
  props: {
    showComponent: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/internet.css";
</style>
