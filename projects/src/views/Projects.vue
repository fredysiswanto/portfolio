<template>
  <div class="projects">
    <div v-for="project in listProject" :key="project.id">
      <h2>{{ project.title }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Projects",
    data() {
      return {
        listProject: [
          { id: 1, title: "projects 1", part: "./project1" },
          { id: 2, title: "projects 2", part: "./project2" },
          { id: 3, title: "projects 3", part: "./project3" },
        ],
      };
    },
  };
</script>

<style></style>
