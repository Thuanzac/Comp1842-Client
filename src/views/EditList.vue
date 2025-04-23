<template>
  <div class="ui container">
    <h2 class="ui header">Edit Word</h2>

    <form class="ui form" @submit.prevent="submitForm">
      <div class="field">
        <label for="english">
          <img src="https://flagcdn.com/w40/gb.png" style="width: 20px" alt="English flag" />
          English
        </label>
        <input type="text" id="english" v-model="english" required />
      </div>

      <div class="field">
        <label for="german">
          <img src="https://flagcdn.com/w40/de.png" style="width: 20px" alt="German flag" />
          German
        </label>
        <input type="text" id="german" v-model="german" required />
      </div>

      <button class="ui primary button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditList',
  data() {
    return {
      english: '',
      german: '',
    };
  },
  created() {
    this.loadWord();
  },
  methods: {
    loadWord() {
      const { id } = this.$route.params;
      axios.get(`http://localhost:3000/vocab/${id}`)
        .then(({ data }) => {
          this.english = data.english;
          this.german = data.german;
        })
        .catch((error) => {
          console.error('Error fetching word for editing:', error);
        });
    },

    submitForm() {
      const { id } = this.$route.params;
      const updatedWord = {
        english: this.english,
        german: this.german,
      };

      axios.put(`http://localhost:3000/vocab/${id}`, updatedWord)
        .then(() => {
          this.$router.push('/words');
        })
        .catch((error) => {
          console.error('Error updating word:', error);
        });
    },
  },
};
</script>

<style scoped>
h2.ui.header {
  margin-top: 20px;
}
</style>
