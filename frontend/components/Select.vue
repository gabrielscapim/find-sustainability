<template>
  <div class="select-container">
    <label
      class="label"
      :for="id"
    >
      {{ label }}
    </label>
    <select
      class="select"
      v-model="selectedOption"
      @change="emitChange"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String || Number,
      default: '',
    },
  },
  data() {
    return {
      selectedOption: this.value,
    };
  },
  methods: {
    emitChange() {
      this.$emit('input', this.selectedOption);
    },
  },
};
</script>

<style scoped>
  .select-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    margin-top: 24px;
    width: 90%;
  }

  .label {
    margin-bottom: 8px;
  }

  .select {
    border: 1px solid gray;
    background-color: white;
    height: 28px;
    font-family: 'MuseoSansRounded-300';
    text-align: left;
  }
</style>
