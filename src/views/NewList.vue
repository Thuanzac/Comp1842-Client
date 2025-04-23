<template>
  <div class="ui container">
    <h2 class="ui header">New Word</h2>

    <form class="ui form" @submit.prevent="submitForm">
      <!-- English -->
      <div class="field">
        <label for="english"><img src="https://flagcdn.com/w40/gb.png" style="width: 20px" alt="English flag" />English</label>
        <input
          id="english"
          v-model="english"
          type="text"
          placeholder="Enter English word"
          required
        />
      </div>

      <!-- German -->
      <div class="field">
        <label for="german"><img src="https://flagcdn.com/w40/de.png" style="width: 20px" alt="German flag" />German</label>
        <input
          id="german"
          v-model="german"
          type="text"
          placeholder="Enter German word"
          required
        />
      </div>

      <button class="ui primary button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewList',
  data() {
    return {
      english: '',
      german: '',
    };
  },
  methods: {
    submitForm() {
      const newWord = {
        english: this.english,
        german: this.german,
      };

      axios
        .post('http://localhost:3000/vocab', newWord)
        .then(() => {
          this.english = '';
          this.german = '';
          this.$router.push('/words');
        })
        .catch((error) => {
          console.error('Error adding word:', error);
        });
    },
  },
};
</script>
