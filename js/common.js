$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

    $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("dsi-stretched");
  });

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar-sticky').addClass("dsi-sticky");
    } else {
      $('.navbar-sticky').removeClass("dsi-sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

    $("#sandwich-1").on("click", function(){
    $(this).toggleClass("active");
    $("body").toggleClass("dsi-menubar-1");
    $("html").toggleClass("overflow-hidden");
    window.dispatchEvent(new Event('resize'));
  });


  $(".dsi-owl-1").owlCarousel({
    responsive: {
      0: {
        margin: 12,
      },
      768: {
        margin: 12,
      },
      991: {
        margin: 32,
        nav: true,
      },
      1200: {
        center: true,
        loop: true,
        margin: 32,
        nav: true,
      },
    },
    items: 1,
    dots: true,
    smartSpeed: 1000,
  });

  Waves.attach('.dsi-pill, .dsi-btn-related, .dsi-btn-social, .owl-prev, .owl-next');
  Waves.attach('.btn, .dsi-sidebar-a, .dsi-bg-img, .dsi-avatar-big',  ['waves-light']);
  Waves.init();

  $("select:not(.search-hide)").select2();
  $("select.search-hide").select2({
    minimumResultsForSearch: Infinity
  });

    var placeholder;
  $(document).on('change', '.uploader-input', function() {
    var input = $(this),
        profilePicValue = input.val(),
        fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
    profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
    placeholder = input.siblings('.form-control').find('.image').attr('src');
    if (profilePicValue != '') {
      input.siblings('.form-control').children('.uploader-text').html(profilePicValue);
      input.closest('.dsi-uploader').addClass('uploaded');
    };
    let file = this.files[0]; 
    var reader = new FileReader();
    reader.onload = function (e) {
      input.siblings('.form-control').find('.image').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  }).on('click', '.delete', function() {
    $(this).closest('.dsi-uploader').removeClass('uploaded').find('input[type="file"]').val('').siblings('.form-control').children('.uploader-text').html('Upload your auction license certificate');
    $(this).closest('.dsi-uploader').find('.image').attr('src', placeholder);
  });

  var demo1 = new DragonDrop(document.getElementById('demo-1'), {
    handle: '.handle',
    announcement: {
      grabbed: function (el) { return el.querySelector('span').innerText + ' grabbed'; },
      dropped: function (el) { return el.querySelector('span').innerText + ' dropped'; },
      reorder: function (el, items) {
        var pos = items.indexOf(el) + 1;
        var text = el.querySelector('span').innerText;
        return 'The rankings have been updated, ' + text + ' is now ranked #' + pos + ' of ' + items.length;
      },
      cancel: function() { return 'Reranking cancelled.'; }
    }
  });

  demo1
    .on('grabbed', function (container, item) { console.log('grabbed: ', item); })
    .on('dropped', function (container, item) { console.log('dropped: ', item); })
    .on('reorder', function (container, item) { console.log('reorder: ', item); })
    .on('cancel', function () { console.log('Reordering cancelled'); });

});

