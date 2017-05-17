<script>
export default {
  render (h) {
    return <p>
      { this.text }
    </p>
  },
  props: ["text", "urls"],
  filterLinkText: function(){
    let computedText = this.text
    this.urls.forEach((url) => {
      
    });
    return computedText;
  }
}
</script>
