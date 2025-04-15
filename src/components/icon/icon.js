// Javascript Document

(() => {
  return {
    data() {
      return {
        delay: 2000,
        isPassedDelay: false,
      }
    },
    computed: {
      currentTitle() {
        if (this.source.description && this.isPasseddelay) {
          return this.source.tag + '\n\n' + this.source.description
        }

        return this.source.tag;
      }
    },
    methods: {
      onEnter() {
        if (this.source.description) {
          bbn.fn.log("onEnter");
          this.to = setTimeout(() => {
            this.isPassedDelay = true;
            this.to = false;
          }, this.delay)
        }
      },
      onLeave() {
        if (this.source.description) {
          bbn.fn.log("onLeave");
          if (![false, undefined].includes(this.to)) {
            clearTimeout(this.to);
            this.isPassedDelay = false;
            this.to = false;
          }
        }
      }
    }
  }
})();