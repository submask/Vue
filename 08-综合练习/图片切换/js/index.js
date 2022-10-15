const vue = new Vue({
  el: "#app",
  data: {
    list: [
      'url(../img/img1.jpg)', 'url(../img/img2.jpg)',
      'url(../img/img3.jpg)', 'url(../img/img4.jpg)',
    ],
    this_index: 0,
  },
  methods: {
    ChangeImages(index) {
      return { backgroundImage: `url(../img/img${index + 1}.jpg)` }
    },
    ChangePic(index) {
      this.this_index = index
    },
    PicChange() {
      return { backgroundImage: `url(../img/img${this.this_index + 1}.jpg)` }
    },
    isActive(index) {
      if (this.this_index == index) {
        return { active: true }
      }
    }
  },
})