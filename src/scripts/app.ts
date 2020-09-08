import 'regenerator-runtime/runtime'
import './polyfill';

import { SidebarDrawer } from './../components/SidebarDrawer/SidebarDrawer';
import { Sticky } from './../components/Sticky/Sticky';
import { Toggler } from './bootstrap/toggler';
import { initiator } from './bootstrap/initiator';
import { Browser } from './bootstrap/browser';
import { modalsInit } from './app/modals';

export const ScrollComponent = new Browser();

window.addEventListener('load', () => {

  const toggler = new Toggler({
    id: 'header',
  });

  const sidebarDrawer = new SidebarDrawer({
    id: 'header',
  })

  toggler.onChange = (value) => {
    sidebarDrawer.setActive(value);
  };

  sidebarDrawer.onChange = (value) => {
    toggler.setActive(value);
  };


  initiator('[data-sticky]', (element) => {
    new Sticky({
      element,
    })
  });

  modalsInit();

  /* Inform stylesheet to remove style fallback for JavaScript elements */
  document.documentElement.classList.remove("isLoading");
});

window.onload = () => {

}