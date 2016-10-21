(function () {
  'use strict';

  angular
    .module('configurations')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Configurations',
      state: 'configurations',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'configurations', {
      title: 'List Configurations',
      state: 'configurations.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'configurations', {
      title: 'Create Configuration',
      state: 'configurations.create',
      roles: ['user']
    });
  }
})();
