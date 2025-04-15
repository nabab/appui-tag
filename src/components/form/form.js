(() => {
  return {
    props: ['source'],
    data() {
      return {
        dataForm: {
          id: this.source?.id || null,
          tag: this.source?.tag || '',
          lang: this.source?.lang || bbn.env.lang,
          color: this.source?.color || '',
          description: this.source?.description || '',
        }
      }
    },
    watch: {
      "dataForm.tag"(v) {
        if (this.source) {
          this.source.tag = v;
        }
      },
      "dataForm.lang"(v) {
        if (this.source) {
          this.source.lang = v;
        }
      },
      "dataForm.color"(v) {
        if (this.source) {
          this.source.color = v;
        }
      },
      "dataForm.description"(v) {
        if (this.source) {
          this.source.description = v;
        }
      },
    }
  }
}) ();
