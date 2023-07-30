<template>
  <div class="textarea-container">
    <label
      class="label"
      :for="id"
    >
      {{ label }}
    </label>
    <textarea
      :class="isWrong ? 'input wrong-input' : 'input'"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :maxlength="maxLength"
    >
    </textarea>
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
    maxLength: {
      type: Number,
      default: 250
    },
    isWrong: {
      type: Boolean,
    }
  },
}
</script>

<style scoped>
  .textarea-container {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 90%;
  }

  .label {
    margin-bottom: 16px;
  }

  .input {
    outline: none;
    border: 1px solid gray;
    padding: 2px 4px 2px 4px;
    height: 72px;
    font-family: 'MuseoSansRounded-300';
  }

  .wrong-input {
    border: 1px solid red;
  }

  .input:focus {
    border: 1px solid black;
  }
</style>