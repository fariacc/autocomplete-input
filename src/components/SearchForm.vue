<template>
  <div class="search-form">
    <SelectInput :label="cities.label" :options="cities.options" />
    <!-- <SelectInput :label="books.label" :options="books.options" /> -->
  </div>
</template>

<script>
import SelectInput from './SelectInput.vue'
export default {
  name: 'SearchForm',
  components: {
    SelectInput,
  },
  data() {
    return {
      cities: {
        label: 'Cities',
        options: [
          'san jose',
          'santiago',
          'san francisco',
          'santa rosa',
          'san juan',
          'sabadell',
          'salamanca',
          'salt lake city',
          'salinas',
          'salem',
          'sausalito',
          'taipei',
          'tel aviv',
          'tempe',
          'termez',
          'temuco',
          'tiajuna',
          'tieling',
          'thousand oaks',
          'thunder bay',
          'tokyo',
          'tulsa',
        ],
      },

      books: {
        label: 'Books',
        options: [
          {
            title: 'Don Quixote',
            author: 'Miguel De Cervantes',
          },
          {
            title: "Pilgrim's Progress",
            author: 'John Bunyan',
          },
          {
            title: 'Robinson Crusoe',
            author: 'Daniel Defoe',
          },
          {
            title: "Gulliver's Travels",
            author: 'Jonathan Swift',
          },
          {
            title: 'Tom Jones',
            author: 'Henry Fielding',
          },
          {
            title: 'Clarissa',
            author: 'Samuel Richardson',
          },
          {
            title: 'Tristram Shandy',
            author: 'Laurence Sterne',
          },
        ],
      },
    }
  },
}
</script>

<style></style>
