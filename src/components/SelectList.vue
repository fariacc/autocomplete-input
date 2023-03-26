<template>
  <div class="select-list">
    <div class="select-list__wrapper">
      <ul v-if="hasOptionsListed">
        <li
          v-for="option in filteredOptions"
          :key="option"
          class="select-list__item"
          :class="{
            'select-list__item--selected': checkSelectedOption(option),
          }"
          @click="handleSelect(option)"
        >
          <span class="select-list__item-text">{{ option }}</span>
          <span class="select-list__item-text--copy"></span>
        </li>
      </ul>
      <p v-else class="select-list__empty-results">
        No results found. Try a different search term.
      </p>
    </div>
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
    searchTerm: {
      type: String,
      default: null,
    },
    selectedOptions: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['select'],
  computed: {
    filteredOptions() {
      if (this.searchTerm?.length >= 3) {
        return this.options.filter(
          (option) => option.indexOf(this.searchTerm) !== -1
        )
      }

      return this.options
    },
    hasOptionsListed() {
      return this.filteredOptions.length > 0
    },
  },
  methods: {
    handleSelect(option) {
      this.$emit('select', option)
    },
    checkSelectedOption(option) {
      return this.selectedOptions.includes(option)
    },
    getPartialMatch() {
      const originalTexts = document.querySelectorAll('.select-list__item-text')
      const copy = document.querySelectorAll('.select-list__item-text--copy')
      originalTexts.forEach((text, i) => {
        text.classList.add('select-list__item-text--hidden')
        copy[i].innerHTML = text.innerHTML
          .split(this.searchTerm)
          .join(
            `<span class="select-list__item-text--match">${this.searchTerm}</span>`
          )
      })
    },
  },
}
</script>

<style lang="scss">
.select-list {
  ul {
    margin: 0;
    padding: 0;
  }
}

.select-list__wrapper {
  border-top: 1px solid #dfe3e8;
  max-height: 140px;
  overflow: auto;
}

.select-list__item {
  list-style: none;
  padding: 5px 8px;

  &:hover {
    background-color: #dfe3e8;
  }

  &--selected {
    background-color: #cdddee;
  }
}

.select-list__item-text {
  &--hidden {
    display: none;
  }

  &--match {
    color: #3399ff;
  }
}

.select-list__empty-results {
  margin-top: 0;
}
</style>
