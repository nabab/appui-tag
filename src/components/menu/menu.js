(() => {
  return {
    props: {
      source: {
        type: Array,
        default() {
          return [];
        }
      },
      tags: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
      }
    },
    methods: {
      renderElement(ele) {
        return '<div class="bbn-spadding bbn-block" style="color: ' + ele.value + '">' + ele.text + '</div>';
      },
      selectTag() {
        bbn.fn.log('selectTag', arguments)
      }
    }
  }
})();