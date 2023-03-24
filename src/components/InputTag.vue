<template>
  <div class="input-tag">
    <span>{{ tag }}</span>
    <font-awesome-icon :icon="['fas', 'circle-xmark']" @click="handleRemove" />
  </div>
</template>

<script>
export default {
  name: 'InputTag',
  props: {
    // tag: {
    //   type: Object,
    //   default: () => ({}),
    // },
    tag: {
      type: String,
      default: null,
    },
  },
  emits: ['remove'],
  methods: {
    handleRemove() {
      this.$emit('remove', this.tag)
    },
  },
}
</script>

<style lang="scss">
.input-tag {
  padding: 3px 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #3399ff;
  gap: 5px;

  &__label {
    color: #ffffff;
  }

  svg:hover {
    cursor: pointer;
  }
}
</style>
