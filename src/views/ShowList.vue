<template>
  <div class="ui container">
    <h2 class="ui header">Show Word</h2>

    <div class="ui form">
      <div class="field">
        <label for="english">
          <img src="https://flagcdn.com/w40/gb.png" alt="English" style="width: 20px; margin-right: 5px;" />
          English
        </label>
        <input type="text" id="english" :value="word.english" readonly />
      </div>

      <div class="field">
        <label for="german">
          <img src="https://flagcdn.com/w40/de.png" alt="German" style="width: 20px; margin-right: 5px;" />
          German
        </label>
        <input type="text" id="german" :value="word.german" readonly />
      </div>

      <button class="ui yellow button" @click="editWord">
        Edit word
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ShowList',
  data() {
    return {
      word: {
        english: '',
        german: '',
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    axios.get(`http://localhost:3000/vocab/${id}`)
      .then(({ data }) => {
        this.word = data;
      })
      .catch((error) => {
        console.error('Error fetching word:', error);
      });
  },
  methods: {
    editWord() {
      this.$router.push(`/words/edit/${this.$route.params.id}`);
    },
  },
};
</script>

<style scoped>
.ui.header {
  margin-top: 20px;
}
.ui.form {
  margin-top: 30px;
}
input[readonly] {
  background-color: #f9f9f9;
  font-style: italic;
}
</style>
