const app = Vue.createApp({
  //data, functions
//  template: '<h2> I am a template</h2>'
  data() {
    return{
      title: 'Harry Potter',
      author: "J.K. Rolling",
      age: 5
    }
  },
  methods: {
    changeTitle(abc){
        this.title = abc;
    }
  }

});

app.mount('#app');
