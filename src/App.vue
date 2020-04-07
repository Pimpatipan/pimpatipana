<template>
  <div id="app">
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      config: {
        toolbarButtons: {
          'moreText': {
            'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']   
          },   
          'moreParagraph': {     
            'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']   
          },   
          'moreRich': {     
            'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']   
          },   
          'moreMisc': {     
            'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],     
            'align': 'right',     
            'buttonsVisible': 2   
          }
        },
        events: {
          'initialized': function () {
            console.log(this);
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  }
}
</script>