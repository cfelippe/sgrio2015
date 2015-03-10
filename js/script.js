jQuery(document).ready(function() {
  var maxHeight = 0;
  jQuery('.evento:not(.simples)').each(function() {
    var height = jQuery(this).height();
    if (height > maxHeight) maxHeight = height;
  });
  
  jQuery('.evento:not(.simples)').each(function() {
    jQuery(this).height(maxHeight);
  });

  jQuery('.tipo').each(function() {
    jQuery(this).parent().css('padding-left', jQuery(this).outerHeight() + 5);
    jQuery(this).width(jQuery(this).parent().outerHeight() - 1);
    jQuery(this).css('bottom', -jQuery(this).outerHeight());
  });
  
  jQuery("#dias").tabs();
});