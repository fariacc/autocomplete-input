<template>
  <div class="select-input">
    <div class="select-input__wrapper">
      <div class="select-input__tags">
        <template v-if="hasSelectedOptions">
          <InputTag
            v-for="tag in selectedOptions"
            :key="tag"
            :tag="tag"
            @remove="handleRemove"
          />
        </template>
        <input
          v-model="searchTerm"
          type="text"
          class="select-list__search"
          autofocus
          placeholder="Please type at least 3 characters"
          @input="handleSearch"
        />
      </div>
    </div>
    <SelectList
      v-if="showList"
      ref="selectList"
      :options="options"
      :selected-options="selectedOptions"
      :search-term="formattedSearchTerm"
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
      searchTerm: null,
    }
  },
  computed: {
    hasSelectedOptions() {
      return this.selectedOptions.length > 0
    },
    showList() {
      return this.formattedSearchTerm?.length >= 3
    },
    formattedSearchTerm() {
      return this.searchTerm?.trim().toLowerCase()
    },
  },
  methods: {
    handleSelect(selectedOption) {
      if (!this.selectedOptions.includes(selectedOption)) {
        this.selectedOptions.push(selectedOption)
      }
    },
    handleRemove(removedOption) {
      this.selectedOptions = this.selectedOptions.filter(
        (option) => option !== removedOption
      )
    },
    handleSearch() {
      if (this.showList) {
        this.$refs.selectList.getPartialMatch()
      }
    },
  },
}
</script>

<style lang="scss">
.select-input {
  border: 1px solid #dfe3e8;
  border-radius: 4px;
}

.select-input__wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px;

  &:focus {
    border-color: #3399ff;
  }
}

.select-list__search {
  flex: auto;
  border: none;

  &:focus {
    outline: none;
  }
}

.select-input__tags {
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  gap: 4px 6px;
}
</style>
