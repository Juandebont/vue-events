const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      vueLink: "https://www.google.nl/",
    };
  },
  computed: {
    fullname() {
      if (this.name === "" && this.lastName === "") {
        return "";
      } else {
        return `${this.name}  ${this.lastName}`;
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        alert(
          'D.m.v. "Watch" zie ik dat de waarde groter is dan 50. Waarde wordt gereset.'
        );
        this.counter = 0;
      }
    },
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    add(num) {
      this.counter += 10;
    },
    reduce(num) {
      this.counter -= 5;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
