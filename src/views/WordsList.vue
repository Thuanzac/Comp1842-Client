<template>
  <div>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in words" :key="word._id">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td>
            <button @click="showWord(word._id)">Show</button>
            <button @click="editWord(word._id)">Edit</button>
            <button @click="deleteWord(word._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WordsList',
  data() {
    return {
      words: [],
    };
  },
  created() {
    this.fetchWords();
  },
  methods: {
    fetchWords() {
      axios.get('http://localhost:3000/vocab')
        .then(({ data }) => {
          this.words = data;
        })
        .catch((error) => {
          console.error('Error fetching words:', error);
        });
    },

    showWord(id) {
      this.$router.push(`/words/show/${id}`);
    },

    editWord(id) {
      this.$router.push(`/words/edit/${id}`);
    },

    deleteWord(id) {
      axios.delete(`http://localhost:3000/vocab/${id}`)
        .then(() => {
          this.words = this.words.filter((w) => w._id !== id);
        })
        .catch((error) => {
          console.error('Error deleting word:', error);
        });
    },
  },
};
</script>
