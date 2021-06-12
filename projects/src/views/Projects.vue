<template>
  <div class="container">
    <div class="row g-0">
      <CardComponent :listProjects="listProjects"></CardComponent>
    </div>
  </div>
</template>

<script>
  import CardComponent from '../components/ui/CardComponent.vue';
  export default {
    name: 'Projects',
    components: {
      CardComponent,
    },
    data() {
      return {
        listProjects: [
          {
            judul: 'project 1',
            ket:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, omnis?',
            id: 1,
            img: '../assets/img/300x250.png',
          },
          {
            judul: 'project 2',
            ket: 'Lorem ipsum dolsectetur adipisicing elit. Magni, omnis?',
            id: 2,
            img: '../assets/img/300x250.png',
          },
          {
            judul: 'project 3',
            ket: 'Lorem ipsum dolor sit, amet consectetur adip, omnis?',
            id: 3,
            img: '../assets/img/300x250.png',
          },
        ],
      };
    },
  };
</script>
