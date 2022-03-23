<template>
    <div class="notebook">
        <ul>
            <li v-for="(page, index) of pages" class="page" v-bind:class="{ 'active': index === activePage }" @click="changePage(index)" v-bind:key="index">
                <div>{{page.title}}</div>
            </li>
            <li class="new-page" @click="newPage()">New Page +</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Notebook',
    props: ['pages', 'activePage'],
    methods: {
      changePage (index) {
        this.$emit('change-page', index)
      },
      newPage () {
        this.$emit('new-page')
      }
    }
  }
</script>

<style scoped>
    .notebook {
        max-width: 20rem;
        width: 30rem;
        background: #ecfcff;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 100%;
        position: relative;
    }

    li {
        padding: 1rem;
        font-size: 1.25rem;
        min-height: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    li:hover {
        cursor: pointer;
        background-color: #c5edf5;
    }

    .active {
        background-color: #80cee0;
    }

    .active:hover {
        background-color: #5caec1;
    }

    .new-page {
        background-color: #233b5d;
        color: white;
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .new-page:hover {
        background-color: #182c48;
    }
</style>