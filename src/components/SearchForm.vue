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
