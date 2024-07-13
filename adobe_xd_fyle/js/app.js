$(document).ready(function(){


// Function for sticky navigation based on scroll position
$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
  
});


// Adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

/*------------------------------------------------------------------------------------------*/ 

// Function to handle AJAX form submission with validation
$(document).ready(function() {
  $("#ajaxForm").submit(function(e) {
    e.preventDefault();

    $(this).removeClass('was-validated');
    
    if (!this.checkValidity()) {
      $(this).addClass('was-validated');
      return; 
    }

    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
      headers: {
        "Accept": "application/json"
      },
      success: function() {
        alert('The form was submitted successfully.');
        $("#ajaxForm")[0].reset();
        $('#exampleModal').modal('hide');
      },
      error: function() {
        alert('An error occurred! Please try again later.');
      }
    });
  });
});

/*------------------------------------------------------------------------------------------*/ 

// Function to create and initialize a carousel with image cards
$(document).ready(function(){
  const imageSources=[
    "images/c1.jpg",
    "images/c2.jpg",
    "images/c3.png",
    "images/c4.jpg",
    "images/c5.avif",
    "images/c6.avif",
    "images/c7.jpg",
    "images/c8.jpg",
    "images/c9.jpeg",
    "images/c10.jpg",
    "images/c11.webp",
  ];

  const $carousel=$('#carousel-container');

  const cardTemplate=(imgSrc)=>`
        <div class="card">
          <img src="${imgSrc}" alt="" class="carousel-img">
          <div class="card-body">
          <i class="bi bi-file-code-fill me-2 icon-lg" style="size:20px"></i>
            <h5 class="card-title">Web Development</h5>
            <p class="card-subtitle">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
            <button class="btn btn-light" onclick="window.open('https://www.fylehq.com/', '_blank')">
              Read More
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
    `;

  $.each(imageSources,function(index,imgSrc){
    $carousel.append(cardTemplate(imgSrc));
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,   
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    animateIn : "fadeInRight",
    animateOut : "fadeOut",
    responsive: {
      0: {
        dotsEach: 5,
        items: 1
      },
      600:{
        items:3
      },
      1000:{
          items:4
      }
    }
});
});
/*------------------------------------------------------------------------------------------*/ 

// Function to handle changing banner image based on clicked text link
$(document).ready(function() {
  $('.change-image').on('click', function(event) {
    event.preventDefault();
        var imgSrc = $(this).data('img');
    $('#bannerImage').attr('src', imgSrc);

    $('.change-image').removeClass('active-text');
    $(this).addClass('active-text');
  });
});

/*------------------------------------------------------------------------------------------*/ 

// Function to initialize the Filterizr library for filtering elements on the page
var filterizd = $('.filter-container').filterizr({
  animationDuration: .5,
});

/*------------------------------------------------------------------------------------------*/ 

// Function to initialize the Smooth Scroll library to create a smoother scrolling 
$('a').smoothScroll({
  speed:2000,
});

/*------------------------------------------------------------------------------------------*/ 

});
