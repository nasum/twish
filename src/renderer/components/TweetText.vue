<script>
import electron from 'electron';
const Shell = electron.shell;

export default {
  render (h) {
    let processTextArray = this.parseText();
    return <p>
      { processTextArray.map((text) => {
        if(this.urls.indexOf(text) >= 0) {
          return <a href="javascript:void(0)" onClick={() => Shell.openExternal(text)}>{text}</a>
        } else {
          return text
        }
      })}
    </p>
  },
  props: {
    text: String,
    urls: {
      type: Array,
      default: []
    }
  },
  methods: {
    parseText: function(){
      let processText = this.text;
      this.urls.forEach(function(url){
        processText = processText.replace(url, `,${url},`)
      })

      return processText.split(',');
    }
  }
}
</script>
