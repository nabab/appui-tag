<!-- HTML Document -->
<div class="appui-tag-form bbn-padding bbn-background">
  <div class="bbn-section">
    <legend><i class="nf nf-cod-tag bbn-right-smargin"/><?= _("New tag definition") ?></legend>
    <bbn-form :action="appui.plugins['appui-tag'] + '/actions/write'"
              :source="dataForm">
      <div class="bbn-w-100 bbn-spadding">
        <bbn-input bbn-model="dataForm.tag"
                   :placeholder="_('Tag')"
                   class="bbn-wide"/>
      </div>
      <div class="bbn-w-100 bbn-spadding">
        Color 
        <bbn-colorpicker bbn-model="dataForm.color"/>
      </div>
      <div class="bbn-w-100 bbn-spadding">
        <bbn-textarea bbn-model="dataForm.description"
                      :placeholder="_('Description')"
                      class="bbn-wide"/>
      </div>
    </bbn-form>
  </div>
</div>
  