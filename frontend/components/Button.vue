<template>
  <button
    type="button"
    @click="$emit('handleClick')"
    :class="disabled ? 'button button-disabled' : 'button'"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style>
  .button {
    font-family: 'MuseoSansRounded-300';
    background-color: #91B31E;
    border: 1px solid #90b31ea8;
    padding: 12px 18px 12px 18px;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    max-height: 48px;
  }

  .button-disabled {
    border: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }

  .button:hover {
    background-color: #1A614F;
    border: 1px solid #1A614F;
    cursor: pointer;
  }

  .button-disabled:hover {
    border: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }

  @media all and (max-width: 1024px) {
    .button {
      font-size: 14px;
    }
  }

</style>