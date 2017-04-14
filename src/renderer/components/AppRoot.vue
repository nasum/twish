<template>
  <div>
    <div class="window">
      <header class="toolbar toolbar-header">
        <h1 class="title"></h1>
        <div class="tab-group">
          <div class="tab-item active">
            <span class="icon icon-cancel icon-close-tab"></span>
            Home
          </div>
          <div class="tab-item tab-item-fixed">
            <span class="icon icon-plus"></span>
          </div>
        </div>
      </header>
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-sm sidebar">
            <nav class="nav-group">
              <h5 class="nav-group-title">Favorites</h5>
              <button class="btn btn-large btn-primary" onclick="document.getElementsByClassName('pin_dialog')[0].show();">Primary</button>
            </nav>
          </div>
          <div class="pane">
            <ul class="list-group">
              <li class="list-group-header">
                <h5>
                  Home
                </h5>
                <input class="form-control" type="text" placeholder="Search for someone">
              </li>
            </ul>
          </div>
          <div class="pane">
            <ul class="list-group">
              <li class="list-group-header">
                <h5>
                  Notification
                </h5>
                <input class="form-control" type="text" placeholder="Search for someone">
              </li>
            </ul>
          </div>
          <div class="pane">
            <ul class="list-group">
              <li class="list-group-header">
                <h5>
                  Messages
                </h5>
                <input class="form-control" type="text" placeholder="Search for someone">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <pin-form-dialog></pin-form-dialog>
  </div>
</template>

<script>
import PinFormDialog from './PinFormDialog'

export default {
  components: {
    PinFormDialog: PinFormDialog
  }
}
</script>
