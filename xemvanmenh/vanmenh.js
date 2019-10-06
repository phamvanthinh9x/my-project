function clickmenu2()
{
	if (	document.getElementById("click_menu_1").style.display === 'none') 
	{       
		    document.getElementById("click_menu_2").style.display = 'none';
	        document.getElementById("click_menu_1").style.display = 'block';

	}
	else {
		document.getElementById("click_menu_1").style.display = 'none';
		document.getElementById("click_menu_2").style.display = 'block';
	}
}

/*.....scroll....*/
var f=function() {
var p=function() {
  if($(window).width()>=768 && window.scrollY>220||$(window).width()<=576 && window.scrollY>400){
   document.getElementById("click_menu_1").style.display='block';
   document.getElementById("click_menu_2").style.display='none';
  }

  }
  window.addEventListener('scroll',p)
}
document.addEventListener('DOMContentLoaded',f)