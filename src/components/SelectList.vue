<template>
  <div class="select-list">
    <input
      v-model="searchTerm"
      type="text"
      class="select-list__search"
      @input="handleSearch"
    />
    <p v-if="showEmptyResults">
      No results found. Try a different search term.
    </p>
    <ul>
      <li
        v-for="option in filteredOptions"
        :key="option"
        :class="{ 'select-list__item--selected': getSelectedOptions(option) }"
        @click="handleSelect(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectList',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['search', 'select'],
  data() {
    return {
      searchTerm: null,
      selectedOption: null,
      showEmptyResults: false,
    }
  },
  computed: {
    filteredOptions() {
      if (this.searchTerm?.length >= 3) {
        return this.options.filter(
          (option) => option.indexOf(this.searchTerm.toLowerCase()) !== -1
        )
      }

      return this.options
    },

    hasOptionsListed() {
      return this.filteredOptions.length > 0
    },
  },
  methods: {
    handleSearch() {
      if (this.hasOptionsListed) {
        this.$emit('search', this.filteredOptions)
        this.showEmptyResults = false
      } else {
        this.showEmptyResults = true
      }
    },
    handleSelect(option) {
      this.selectedOption = option
      this.$emit('select', this.selectedOption)
    },
    getSelectedOptions(option) {
      console.log(this.options)
      console.log(option)
      return this.options.includes(option)
    },
  },
}
</script>

<style lang="scss">
.select-list {
  padding: 10px;

  &__search {
    background-color: #f4f4f4;
  }
}
</style>
