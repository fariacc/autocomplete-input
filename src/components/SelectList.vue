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
          <span class="select-list__item-text">
            {{ getOptionText(option) }}
          </span>
          <span class="select-list__item-text--empty"></span>
          <span v-if="!isArrayOfStrings"> by {{ option.author }}</span>
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
          (option) =>
            this.getOptionText(option)
              .toLowerCase()
              .indexOf(this.searchTerm) !== -1
        )
      }
      return this.options
    },
    hasOptionsListed() {
      return this.filteredOptions.length > 0
    },
    isArrayOfStrings() {
      return typeof this.options[0] === 'string'
    },
  },
  methods: {
    handleSelect(option) {
      this.$emit('select', this.getOptionText(option))
    },
    getOptionText(option) {
      if (this.isArrayOfStrings) {
        return option
      } else {
        return option.title.toLowerCase()
      }
    },
    checkSelectedOption(option) {
      return this.selectedOptions.includes(this.getOptionText(option))
    },
    getPartialMatch() {
      const originalSpans = document.querySelectorAll('.select-list__item-text')
      const emptySpans = document.querySelectorAll(
        '.select-list__item-text--empty'
      )
      originalSpans.forEach((span, i) => {
        span.classList.add('select-list__item-text--hidden')
        emptySpans[i].innerHTML = span.innerHTML
          .toLowerCase()
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
    color: #000000;

    .select-list__item-text--match {
      color: #3399ff;
    }
  }

  &--selected {
    background-color: #3399ff;
  }
}

.select-list__item-text {
  &--hidden {
    display: none;
  }

  &--match {
    color: #ffffff;
  }
}

.select-list__empty-results {
  margin: 0;
  padding: 8px;
  color: #dfe3e8;
}
</style>
