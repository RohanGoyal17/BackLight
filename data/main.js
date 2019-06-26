var c = document.getElementById("myCanvas");


function myCanvas(el) {
  
  var c = document.getElementById("myCanvas");
  var img = document.getElementById("target");
  var img2 = document.getElementById("targeto");
  c.width = img2.width;
  c.height = img2.height;
  $.when(draw(img,c)).then(download(el,c));

  }


function download(el,c){
	var image = c.toDataURL("image/jpg");
 	el.href = image;
}

function draw(img,c){
	var ctx = c.getContext("2d");

  	ctx.filter = img.style.webkitFilter;
  	ctx.drawImage(img,0,0);
}





function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#target')
                    .attr('src', e.target.result)
                $('#targeto')
                    .attr('src', e.target.result)
                    
            };

            reader.readAsDataURL(input.files[0]);
        }

        document.getElementById("editorwindow").style.display = "block";
        document.getElementById("inputwin").style.display = "none";
        document.getElementById("body").style.background= "#111111";
    }

function inputwin() {
	
       document.location.reload();

}

function clickin(){
	document.getElementById("filein").click();
}

function change(){

	var con = document.getElementById("contrastslider").value;
	var sat = document.getElementById("saturationslider").value;
	var blurrad = document.getElementById("blurslider").value;
	var bri = document.getElementById("brightnessslider").value;
	var hueinv = document.getElementById("hueslider").value;
	var inv = document.getElementById("fadeslider").value/2;
	var sep = document.getElementById("sepiaslider").value;


	
  document.getElementById("valBox1").innerHTML=sat;
  document.getElementById("valBox2").innerHTML=con;
  document.getElementById("valBox3").innerHTML=blurrad;
  document.getElementById("valBox4").innerHTML=bri;
  document.getElementById("valBox5").innerHTML=hueinv;
  document.getElementById("valBox8").innerHTML=inv*2;

  document.getElementById("valBox7").innerHTML=sep;
  document.getElementById("target").style.webkitFilter= "saturate("+sat+"%)contrast("+con+"%)blur("+blurrad+"px)brightness("+bri+"%)hue-rotate("+hueinv+"deg)invert("+inv+"%)sepia("+sep+"%)";
  }

function filters(){
	document.getElementById("filters").style.display= "block";
	document.getElementById("editorwindow").style.display = "none";
}

function closefilter(){
	document.getElementById("filters").style.display= "none";
	document.getElementById("editorwindow").style.display = "block";
}

function tennisball(){
	document.getElementById("target").style.webkitFilter+= "url(#tennisball)";
	closefilter();
}

function scotch(){
	document.getElementById("target").style.webkitFilter+= "sepia(100%)contrast(150%)saturate(110%)";
	closefilter();
}

function bw(){
	document.getElementById("target").style.webkitFilter+= "grayscale(100%)contrast(110%)brightness(96%)";
	closefilter();
}

function sin(){
	document.getElementById("target").style.webkitFilter+= "url(#sin)";
	closefilter();
}

function invert(){
	document.getElementById("target").style.webkitFilter+= "invert(100%)";
	closefilter();
}

function refresh(){
	document.getElementById("target").style.webkitFilter = "";
	document.getElementById("contrastslider").value = 100;
	document.getElementById("saturationslider").value = 100;
	document.getElementById("blurslider").value = 0;
	document.getElementById("brightnessslider").value = 100;
	document.getElementById("hueslider").value=0;
	document.getElementById("fadeslider").value=0;
	document.getElementById("sepiaslider").value=0;
	document.getElementById("valBox1").innerHTML=100;
  document.getElementById("valBox2").innerHTML=100;
  document.getElementById("valBox3").innerHTML=0;
  document.getElementById("valBox4").innerHTML=100;
  document.getElementById("valBox5").innerHTML=0;
  document.getElementById("valBox8").innerHTML=0;
  document.getElementById("valBox7").innerHTML=0;
}


function disableselect(e) {
    return false;
}

function reEnable() {
    return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
    document.onmousedown = disableselect;
    document.onclick = reEnable;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}