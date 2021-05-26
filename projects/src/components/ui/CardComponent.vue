<template>
  <div
    class="card mt-3 mx-2"
    style="width: 18rem;"
    v-for="project in listProjects"
    :key="project.key"
  >
    <div class="card-header">
      <h3>{{ project.judul }}</h3>
    </div>
    <div class="card-body">
      <img :src="project.img" alt="" />
      <p>
        {{ project.ket }}
      </p>
      <a href="" class="btn btn-primary">Show</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardComponent",
    props: {
      listProjects: Array,
    },
  };
</script>
