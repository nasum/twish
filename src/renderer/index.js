require('../css/photon.css');

import { ipcRenderer } from 'electron';

document.title = __('title');
document.getElementsByClassName('title')[0].innerText = __('title');

ipcRenderer.send('AUTH', '');
