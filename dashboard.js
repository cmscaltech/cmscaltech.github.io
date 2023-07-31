/* globals Chart:false, feather:false */

function parseMenu(nav, menu) {
  console.log(menu);
  for (const navKey in menu["_order"]) {
    var menuName = menu["_order"][navKey];
    nav.append('<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"><span>'+menuName+'</span></h6>');
    nav.append('<ul id="automenu'+navKey+'" class="nav flex-column"></ul>');
    var menulist=$("#automenu"+navKey);
    for (var i=0;i<menu[menuName].length; i++){
      var menuItem = menu[menuName][i];
      // TODO: active flag
      $(menulist).append('<li class="nav-item"><a class="nav-link" aria-current="page" href="#"><span data-feather="home"></span>'+menuItem["name"]+'</a></li>')
    }
  }
}

(function () {
  'use strict'

  $.ajax({
    'async': false,
    'global': false,
    'url': "/menu.json",
    'dataType': "json",
    'success': function(data) {
      var menu=$('#sidebarMenuDiv');
      parseMenu(menu, data);
    }
  });

  feather.replace({ 'aria-hidden': 'true' })
})()
