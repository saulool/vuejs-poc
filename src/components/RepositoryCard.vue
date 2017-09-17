<template>
  <li class="repository-card">
    <div class="header">
      <span class="name">{{ repository.name }}</span>
      <span class="language">{{ repository.language }}</span>
    </div>
    <span class="description">{{ repository.description ? repository.description : 'No description' }}</span>
    <router-link :to="{ name: 'Repository Detail', params: { repositoryName: repository.name} }"><button class="details-button">Details</button></router-link>
  </li>
</template>

<script>
export default {
  props: ['repository'],
};
</script>

<style lang="less" scoped>
  .repository-card {
    padding: 20px;
    margin: 20px;
    border-radius: 3px;
    display: inline-block;
    width: ~'calc((100% / 3) - 40px)';
    height: 150px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    vertical-align: top;
    position: relative;

    .header {
      display: block;
      height: 20px;

      .name {
        font-weight: 700;
        float: left;
        display: inline-block;
      }

      .language {
        float: right;
        display: inline-block;
      }
    }

    .description {
      clear: both;
      display: block;
      margin-top: 10px;
      height: 60px;
    }

    .details-button {
      width: 100%;
      height: 30px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 0;
      border-radius: 3px;
      color: white;
      font-size: 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
