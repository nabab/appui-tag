(() => {
  return {
    mixins: [bbn.cp.mixins.basic],
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
    computed: {
      listSource() {
        const cp = this;
        return [
          {
            text: bbn._("New tag"),
            value: '',
            action(a) {
              cp.getPopup({
                label: false,
                component: 'appui-tag-form',
                source: {
                  tag: '',
                  description: '',
                  color: ''
                },
                events: {
                  success() {
                    bbn.fn.log("SUCCESS")
                  },
                  add() {
                    bbn.fn.log("ADD")
                  }
                }
              })
            }
          },
          ...this.tags.map(a => {
            const r = JSON.parse(JSON.stringify(a));
            r.action = a => cp.$emit('addtag', a);
            return r;
          })
        ]
      }
    },
    methods: {
      renderElement(ele) {
        return '<div class="bbn-block bbn-vxspadding bbn-hspadding" style="color: ' + ele.value + '">' + ele.text + '</div>';
      },
      selectTag() {
        bbn.fn.log('selectTag', arguments)
      }
    }
  }
})();