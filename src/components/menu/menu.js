(() => {
  return {
    mixins: [bbn.cp.mixins.basic],
    props: {
      linkId: {
        type: String,
        required: true
      },
      idEntity: {
        type: String,
        required: true
      },
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
        return this.tags.map(a => {
          const r = JSON.parse(JSON.stringify(a));
          r.action = a => cp.$emit('addtag', a);
          return r;
        })
      }
    },
    methods: {
      renderElement(ele) {
        return '<div class="bbn-block bbn-vxspadding bbn-hspadding" style="color: ' + ele.value + '">' + ele.text + '</div>';
      },
      selectTag() {
        bbn.fn.log('selectTag', arguments)
      }
    },
    components: {
      tags: {
        mixins: [
          bbn.cp.mixins.basic,
          bbn.cp.mixins.keynav,
        ],
        template: `
<div class="bbn-block">
  <bbn-input class="bbn-w-100"
             bbn-model="tag"
             bbn-focused="true"
             @keydown="onKeydown"
             :nullable="true"
             button-right="nf nf-md-arrow_right_bold_box_outline"
             :action-right="send"/>
  <bbn-list bbn-if="hasSource"
            :source="filteredData"
            @select="onSelect"
            ref="list"/>
</div>`,
        data() {
          return {
            cp: null,
            tag: '',
            hasSource: false,
            filteredData: null,
            itemSelected: null
          }
        },
        methods: {
          onSelect(item) {
            this.itemSelected = item;
            this.send();
          },
          onKeydown(e) {
            if (this.tag && (e.key === 'Escape')) {
              this.tag = '';
              e.stopPropagation();
              e.preventDefault();
            }
            else if (bbn.var.keys.upDown.includes(e.keyCode)) {
              e.stopPropagation();
              e.preventDefault();
              const list = this.getRef('list');
              if (list) {
                this.keynav(e);
              }

              if (list && this.filteredData[list.overIdx]) {
                this.itemSelected = this.filteredData[list.overIdx];
              }
              else {
                this.itemSelected = null;
              }
            }
            else if (e.key === 'Enter') {
              e.stopPropagation();
              e.preventDefault();
              this.send();
            }
          },
          send() {
            let v;
            if (this.itemSelected) {
              v = this.itemSelected.tag;
            }
            else if (this.tag) {
              v = this.tag;
            }
            else {
              return;
            }
            
            const data = {
              id: this.cp.linkId,
              id_entity: this.cp.idEntity,
              tag: v,
              lang: 'fr'
            };
            this.post('adherent/actions/link/cgar/tag', data, d => {
              bbn.fn.log(d, data);
            })
          },
          update() {
            const arr = this.cp.listSource;
            this.filteredData = arr.filter(a => a.text.toLowerCase().indexOf((this.tag || '').toLowerCase()) > -1);
            this.hasSource = true;
          },
        },
        watch: {
          tag() {
            this.update();
          }
        },
        created() {
          this.cp = this.closest('appui-tag-menu');
          this.update();
        },
      }
    }
  }
})();