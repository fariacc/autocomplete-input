<template>
  <div class="search-form">
    <SelectInput :options="cities" field-label="Cities" field-id="cities" />
    <SelectInput :options="books" field-label="Books" field-id="books" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SelectInput from './Select/SelectInput.vue'
export default {
  name: 'SearchForm',
  components: {
    SelectInput,
  },
  computed: {
    ...mapGetters({
      cities: 'getCities',
      books: 'getBooks',
    }),
  },
}
</script>

<style lang="scss">
.search-form {
  padding: 30px 60px;
  border: 2px solid #dfe3e8;
  border-radius: 4px;
}
</style>
