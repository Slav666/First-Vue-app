const app = Vue.createApp({
  data() {
    return {
      showBook: true,
      title: "Test Title",
      author: "Test Author",
      age: 45,
    };
  },
  methods: {
    ChangeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
  },
});

app.mount("#app");
