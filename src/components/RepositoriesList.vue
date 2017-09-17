<template>
  <div class="repositories">
    <div class="loading" v-if="loading">
      Loading Repositories...
    </div>
    
    <ul class="repositories-list">
      <repository-card v-for="repository of repositories" :repository="repository"></repository-card>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import repositoryCard from '@/components/RepositoryCard';

export default {
  data() {
    return {
      repositories: [],
      errors: [],
      loading: true,
    };
  },
  methods: {
    async fetchRepositories() {
      try {
        const response = await axios.get('http://api.github.com/users/saulool/repos');
        this.loading = false;
        this.repositories = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
  components: {
    repositoryCard,
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<style lang="less" scoped>
  .repositories-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
