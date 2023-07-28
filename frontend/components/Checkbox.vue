<template>
  <div class="checkbox-container">
    <input
      class="checkbox"
      :id="id"
      type="checkbox"
      :checked="checked"
      @change="$emit('input', $event.target.checked)"
    />
    <label
      class="label"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true
    },
    modelValue: {
      type: [String, Number]
    },
    label: {
      type: String,
      require: true
    },
  },
};
</script>

<style scoped>
  .checkbox-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    width: 90%;
    align-items: baseline;
  }

  .label {
    margin-bottom: 0px;
    padding: 0px;
  }

  .checkbox {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 0px;
    font-family: 'MuseoSansRounded-300';
    accent-color: #91B31E;
    margin-right: 6px;
  }
</style>
