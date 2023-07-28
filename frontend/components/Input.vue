<template>
  <div class="input-container">
    <label
      class="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      class="input"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number]
    },
    label: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
    }
  },
};
</script>

<style scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    width: 90%;
  }

  .label {
    margin-bottom: 8px;
  }

  .input {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 2px 4px 2px 4px;
    height: 28px;
    font-family: 'MuseoSansRounded-300';
  }

  .input:focus {
    outline: none;
    border: 1px solid black;
  }
</style>
