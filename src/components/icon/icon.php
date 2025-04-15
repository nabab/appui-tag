<!-- HTML Document -->

<span class="appui-tag-icon"
      :title="currentTitle"
      @mouseenter="onEnter"
      @mouseleave="onLeave">
  <i class="nf nf-md-tag"
     :style="{color: source.color}"/>
</span>