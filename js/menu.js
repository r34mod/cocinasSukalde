$(document).ready(function() {
   window.onscroll = function() {scrollFunction()};
   function scrollFunction() {
      var height = $(".-header").height();
      if (document.body.scrollTop > height - 50 || document.documentElement.scrollTop > height - 50) {
         $(".-header-items").css({"background-color" : "rgba(0,0,0,0.5)", "box-shadow": "0 1rem 3rem rgba(0,0,0,.175)", "padding": "10px"});
      } else {
         $(".-header-items").css({"background-color" : "transparent", "box-shadow": "none", "padding": "20px"});
      }
   }
   $(".-header-content-items-toggle-btn").click(function(){
      $(".-header-content-resp").slideDown(500);
   });
   $(".close-dropdown").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   $(".-header-content-resp-item").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   function chekWidth() {
      if (window.innerWidth > 991) {
         $(".-header-content-resp").css({"display": "none"});
      }
   }
   setInterval(chekWidth, 500);
   const imgData = ["https://www.infercocinas.es/wp-content/uploads/2019/04/DSC1935-r-1024x683.jpg",
      "https://www.infercocinas.es/wp-content/uploads/2019/04/30-1-2019-Cocinas-Rio-Casa-Decor-Expo-012-1024x683.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
       "https://www.infercocinas.es/wp-content/uploads/2019/01/INFER-201715454.jpg",
       "https://www.infercocinas.es/wp-content/uploads/2019/11/BAHIA_02-1-1024x724.jpg",
       "https://www.infercocinas.es/wp-content/uploads/2018/12/cocina-boston-infer-15.jpg",
       "https://www.infercocinas.es/wp-content/uploads/2019/07/20190722_100513738_iOS-1024x768.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/11/CADIZ_01-1-1024x724.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2018/12/cocina-cumbre_0007_INFER-201715566.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/06/Detalle-2.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/07/20190723_144356616_iOS-1024x768.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2018/12/cocina-londres_0002_INFER-201715488-copia.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/03/thumbnail-1024x683.jpeg",
	   "https://www.infercocinas.es/wp-content/uploads/2018/12/cocinas-madrid_0005_INFER-201715550.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/06/Vista-Izquierda-Final-1024x576.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/06/9.RGB_color-1024x576.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2018/12/Cocinas-Oslo_0006_INFER-201715662-copia.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2019/10/VISTA01X-1024x576.jpg",
	   "https://www.infercocinas.es/wp-content/uploads/2018/12/cocina-turin_0007_INFER-201715640-copia.jpg"

   ];
   for (var i = imgData.length - 1; i >= 0; i--) {
      $(".-row-ourimages").append("<img src='" + imgData[i] + "' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'" + ">");
   }
});