<template>
<dialog class="pin_dialog">
  <form method="dialog">
      <input id="input" placeholder="PIN"/><br>
      <button type="submit" value="cancel">Cancel</button>
      <button type="submit" value="ok">Ok</button>
  </form>
</dialog>
</template>

<script>
export default {

}
</script>

<style>
.pin_dialog{
  border: solid 1px #aaa;
  border-radius: 5px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
}
</style>
