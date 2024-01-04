const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          name: "Sản Phẩm A",
          price: 120,
        },
        {
          name: "Sản Phẩm B",
          price: 180,
        },
        {
          name: "Sản Phẩm C",
          price: 100,
        },
      ],
    };
  },
  methods: {},
});

app.mount("#contact");
