<template>
  <div class="projects">
    <img src="../assets/logo.png" />
    <div v-for="project in listProjects" :key="project.id">
      <img :src="project.img" :alt="project.judul" />
    </div>
  </div>
</template>

<script>
  export default {
    neme: "Projects",

    data() {
      return {
        listProjects: [
          {
            id: 1,
            judul: "projects1",
            ket: "Lorem ipsum dolor sit amet.",
            img: "../assets/logo.png",
          },
          {
            id: 2,
            judul: "projects2",
            ket: "Lorem ipsum dolor sit amet.",
            img: "../assets/logo.png",
          },
          {
            id: 3,
            judul: "projects3",
            ket: "Lorem ipsum dolor sit amet.",
            img: "../assets/logo.png",
          },
        ],
      };
    },
  };
</script>

<style scoped></style>
