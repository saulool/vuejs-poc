<template>
  <div class="repository-detail">
    <h1 class="title">About {{$route.params.repositoryName}} repository</h1>
    <span class="loading" v-if="loading">Loading repository information...</span>
    
    <div class="about-repository" v-else>
      <div>Language: {{repository.language}}</div>
      <div>ID: {{repository.id}}</div>
      <div>URL: {{repository.html_url}}</div>
      <div>Created at: {{repository.created_at}}</div>
      <div>Updated at: {{repository.updated_at}}</div>
      <div># of forks: {{repository.forks_count}}</div>
      <div># of open issues: {{repository.open_issues_count}}</div>
      <div># of watchers: {{repository.watchers_count}}</div>
      <div># of subscribers: {{repository.subscribers_count}}</div>
      <div>Clone URL: {{repository.clone_url}}</div>
    </div>
    <router-link :to="{ name: 'Github Repositories List'}" class="back"><button class="back-button"><< Return to repositories list</button></router-link>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        repository: null,
        errors: [],
        loading: true,
      };
    },
    methods: {
      async fetchRepository() {
        try {
          const response = await axios.get(`http://api.github.com/repos/saulool/${this.$route.params.repositoryName}`);
          this.loading = false;
          this.repository = response.data;
        } catch (error) {
          this.errors.push(error);
        }
      },
    },
    mounted() {
      this.fetchRepository();
    },
  };

</script>

<style lang="less" scoped>
  .back {
    color: white;
    text-decoration: none;
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;

    .back-button {
      background-color: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 3px;
      color: white;
      font-size: 14px;
      padding: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .title {
    color: white;
    text-align: center;
    margin-bottom: 10px;
  }

  .about-repository {
    box-sizing: border-box;
    padding: 20px;
    display: block;
    margin: 0 auto;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    color: white;
    font-size: 14px;

    div {
      padding: 10px 0;
    }
  }
</style>
