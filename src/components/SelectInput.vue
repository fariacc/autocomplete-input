<template>
  <div class="select-input">
    <div class="select-input__wrapper" @click="toggleList">
      <div v-if="hasSelectedOptions" class="select-input__tags">
        <InputTag
          v-for="tag in selectedOptions"
          :key="tag"
          :tag="tag"
          @remove="handleRemove"
        />
      </div>
      <div class="select-input__icon">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </div>
    <SelectList
      v-if="showList"
      :options="options"
      @search="handleSearch"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import InputTag from './InputTag.vue'
import SelectList from './SelectList.vue'
export default {
  name: 'SelectInput',
  components: {
    InputTag,
    SelectList,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedOptions: [],
      isSearching: false,
      showList: false,
    }
  },
  computed: {
    hasSelectedOptions() {
      return this.selectedOptions.length > 0
    },
  },
  methods: {
    handleSearch(searchTerm) {
      if (searchTerm.length >= 3) {
        this.isSearching = true
      }
    },
    handleSelect(selectedOption) {
      this.selectedOptions.push(selectedOption)
    },
    handleRemove(removedOption) {
      this.selectedOptions = this.selectedOptions.filter(
        (option) => option !== removedOption
      )
    },
    toggleList() {
      this.showList = !this.showList
    },
  },
}
</script>

<style lang="scss">
.select-input {
  border: 1px solid #f4f4f4;
  border-radius: 4px;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 8px;

    &:focus {
      border-color: #3399ff;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
  }

  &__icon {
    margin-left: auto;
  }
}
</style>
