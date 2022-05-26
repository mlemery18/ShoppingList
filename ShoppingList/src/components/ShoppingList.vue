<template>
  <input
    type="text"
    class="form-control"
    v-model="newItem"
    name="newItem"
    placeholder="Add New Item"
    @keyup.enter="addItem"
    data-test="newItem"
  />
  <div class="list-group">
    <label
      class="list-group-item"
      v-for="(item, index) in items"
      :key="index"
      :class="{ selected: item.checked }"
    >
      <input
        class="form-check-input me-1"
        type="checkbox"
        value=""
        v-model="item.checked"
      />
      {{ item.text }}
    </label>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      items: [
        { text: "Banana", checked: false },
        { text: "Oranges", checked: false },
        { text: "Mangoes", checked: false },
      ],
      newItem: "",
    };
  },
  methods: {
    addItem() {
      var text = this.newItem.trim();
      if (text) {
        this.items.push({ text: this.newItem, checked: false });
        this.newItem = "";
      }
    },
  },
};
</script>

<style scoped>
.selected {
  color: grey;
  text-decoration: line-through;
}
</style>
