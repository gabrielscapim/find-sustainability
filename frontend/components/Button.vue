<template>
  <button
    type="button"
    @click="$emit('handleClick')"
    class="button"
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
  }

  .button:hover {
    background-color: #1A614F;
    border: 1px solid #1A614F;
    cursor: pointer;
  }

  @media all and (max-width: 1024px) {
    .button {
      font-size: 14px;
    }
  }

</style>