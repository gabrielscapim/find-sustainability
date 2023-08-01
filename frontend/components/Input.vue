<template>
  <div class="input-container">
    <label
      class="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :class="isWrong ? 'input wrong-input' : 'input'"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :maxlength="maxLenght"
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
    },
    isWrong: {
      type: Boolean,
    },
    maxLenght: {
      type: Number,
      default: "20"
    }
  },
};
</script>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 90%;
  }

  .label {
    margin-bottom: 8px;
  }

  .input {
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    padding: 2px 4px 2px 4px;
    height: 28px;
    font-family: 'MuseoSansRounded-300';
  }

  .wrong-input {
    border-bottom: 1px solid red;
  }

  .input:focus {
    border: none;
    border-bottom: 1px solid black;
  }
</style>
