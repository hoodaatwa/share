<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);




/* Extra styles for the cancel button */
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 0px 0 -7px 0;
    position: relative;
}

img.avatar {
    width: 40%;
    border-radius: 50%;
}

.container {
    padding: 16px;
}
.containerB {
    padding: 16px;
}
span.psw {
    float: right;
    padding-top: 16px;
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10000; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    border: 3px solid #888;
    width: 98%;
    overflow: scroll;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 20px;
    top: 5px;
    color: #000;
    font-size: 44px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Add Zoom Animation */
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>

<style>

</style>
<style>
/*
 * Social Buttons for Bootstrap
 *
 * Copyright 2013 Panayiotis Lipiridis
 * Licensed under the MIT License
 *
 * https://github.com/lipis/bootstrap-social
 */

.btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social :first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}
.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg :first-child{line-height:45px;width:45px;font-size:1.8em}
.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm :first-child{line-height:28px;width:28px;font-size:1.4em}
.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs :first-child{line-height:20px;width:20px;font-size:1.2em}
.btn-social-icon{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding-left:0;padding-right:0}.btn-social-icon :first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}
.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg :first-child{line-height:45px;width:45px;font-size:1.8em}
.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm :first-child{line-height:28px;width:28px;font-size:1.4em}
.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs :first-child{line-height:20px;width:20px;font-size:1.2em}
.btn-social-icon :first-child{border:none;text-align:center;width:100% !important}
.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}
.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}
.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}
.btn-bitbucket{color:#fff;background-color:#205081;border-color:rgba(0,0,0,0.2)}.btn-bitbucket:hover,.btn-bitbucket:focus,.btn-bitbucket:active,.btn-bitbucket.active,.open .dropdown-toggle.btn-bitbucket{color:#fff;background-color:#183c60;border-color:rgba(0,0,0,0.2)}
.btn-bitbucket:active,.btn-bitbucket.active,.open .dropdown-toggle.btn-bitbucket{background-image:none}
.btn-bitbucket.disabled,.btn-bitbucket[disabled],fieldset[disabled] .btn-bitbucket,.btn-bitbucket.disabled:hover,.btn-bitbucket[disabled]:hover,fieldset[disabled] .btn-bitbucket:hover,.btn-bitbucket.disabled:focus,.btn-bitbucket[disabled]:focus,fieldset[disabled] .btn-bitbucket:focus,.btn-bitbucket.disabled:active,.btn-bitbucket[disabled]:active,fieldset[disabled] .btn-bitbucket:active,.btn-bitbucket.disabled.active,.btn-bitbucket[disabled].active,fieldset[disabled] .btn-bitbucket.active{background-color:#205081;border-color:rgba(0,0,0,0.2)}
.btn-dropbox{color:#fff;background-color:#1087dd;border-color:rgba(0,0,0,0.2)}.btn-dropbox:hover,.btn-dropbox:focus,.btn-dropbox:active,.btn-dropbox.active,.open .dropdown-toggle.btn-dropbox{color:#fff;background-color:#0d70b7;border-color:rgba(0,0,0,0.2)}
.btn-dropbox:active,.btn-dropbox.active,.open .dropdown-toggle.btn-dropbox{background-image:none}
.btn-dropbox.disabled,.btn-dropbox[disabled],fieldset[disabled] .btn-dropbox,.btn-dropbox.disabled:hover,.btn-dropbox[disabled]:hover,fieldset[disabled] .btn-dropbox:hover,.btn-dropbox.disabled:focus,.btn-dropbox[disabled]:focus,fieldset[disabled] .btn-dropbox:focus,.btn-dropbox.disabled:active,.btn-dropbox[disabled]:active,fieldset[disabled] .btn-dropbox:active,.btn-dropbox.disabled.active,.btn-dropbox[disabled].active,fieldset[disabled] .btn-dropbox.active{background-color:#1087dd;border-color:rgba(0,0,0,0.2)}
.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,0.2)}.btn-facebook:hover,.btn-facebook:focus,.btn-facebook:active,.btn-facebook.active,.open .dropdown-toggle.btn-facebook{color:#fff;background-color:#30487b;border-color:rgba(0,0,0,0.2)}
.btn-facebook:active,.btn-facebook.active,.open .dropdown-toggle.btn-facebook{background-image:none}
.btn-facebook.disabled,.btn-facebook[disabled],fieldset[disabled] .btn-facebook,.btn-facebook.disabled:hover,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook:hover,.btn-facebook.disabled:focus,.btn-facebook[disabled]:focus,fieldset[disabled] .btn-facebook:focus,.btn-facebook.disabled:active,.btn-facebook[disabled]:active,fieldset[disabled] .btn-facebook:active,.btn-facebook.disabled.active,.btn-facebook[disabled].active,fieldset[disabled] .btn-facebook.active{background-color:#3b5998;border-color:rgba(0,0,0,0.2)}
.btn-flickr{color:#fff;background-color:#ff0084;border-color:rgba(0,0,0,0.2)}.btn-flickr:hover,.btn-flickr:focus,.btn-flickr:active,.btn-flickr.active,.open .dropdown-toggle.btn-flickr{color:#fff;background-color:#d6006f;border-color:rgba(0,0,0,0.2)}
.btn-flickr:active,.btn-flickr.active,.open .dropdown-toggle.btn-flickr{background-image:none}
.btn-flickr.disabled,.btn-flickr[disabled],fieldset[disabled] .btn-flickr,.btn-flickr.disabled:hover,.btn-flickr[disabled]:hover,fieldset[disabled] .btn-flickr:hover,.btn-flickr.disabled:focus,.btn-flickr[disabled]:focus,fieldset[disabled] .btn-flickr:focus,.btn-flickr.disabled:active,.btn-flickr[disabled]:active,fieldset[disabled] .btn-flickr:active,.btn-flickr.disabled.active,.btn-flickr[disabled].active,fieldset[disabled] .btn-flickr.active{background-color:#ff0084;border-color:rgba(0,0,0,0.2)}
.btn-github{color:#fff;background-color:#444;border-color:rgba(0,0,0,0.2)}.btn-github:hover,.btn-github:focus,.btn-github:active,.btn-github.active,.open .dropdown-toggle.btn-github{color:#fff;background-color:#303030;border-color:rgba(0,0,0,0.2)}
.btn-github:active,.btn-github.active,.open .dropdown-toggle.btn-github{background-image:none}
.btn-github.disabled,.btn-github[disabled],fieldset[disabled] .btn-github,.btn-github.disabled:hover,.btn-github[disabled]:hover,fieldset[disabled] .btn-github:hover,.btn-github.disabled:focus,.btn-github[disabled]:focus,fieldset[disabled] .btn-github:focus,.btn-github.disabled:active,.btn-github[disabled]:active,fieldset[disabled] .btn-github:active,.btn-github.disabled.active,.btn-github[disabled].active,fieldset[disabled] .btn-github.active{background-color:#444;border-color:rgba(0,0,0,0.2)}
.btn-google-plus{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}.btn-google-plus:hover,.btn-google-plus:focus,.btn-google-plus:active,.btn-google-plus.active,.open .dropdown-toggle.btn-google-plus{color:#fff;background-color:#ca3523;border-color:rgba(0,0,0,0.2)}
.btn-google-plus:active,.btn-google-plus.active,.open .dropdown-toggle.btn-google-plus{background-image:none}
.btn-google-plus.disabled,.btn-google-plus[disabled],fieldset[disabled] .btn-google-plus,.btn-google-plus.disabled:hover,.btn-google-plus[disabled]:hover,fieldset[disabled] .btn-google-plus:hover,.btn-google-plus.disabled:focus,.btn-google-plus[disabled]:focus,fieldset[disabled] .btn-google-plus:focus,.btn-google-plus.disabled:active,.btn-google-plus[disabled]:active,fieldset[disabled] .btn-google-plus:active,.btn-google-plus.disabled.active,.btn-google-plus[disabled].active,fieldset[disabled] .btn-google-plus.active{background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}
.btn-instagram{color:#fff;background-color:#517fa4;border-color:rgba(0,0,0,0.2)}.btn-instagram:hover,.btn-instagram:focus,.btn-instagram:active,.btn-instagram.active,.open .dropdown-toggle.btn-instagram{color:#fff;background-color:#446a89;border-color:rgba(0,0,0,0.2)}
.btn-instagram:active,.btn-instagram.active,.open .dropdown-toggle.btn-instagram{background-image:none}
.btn-instagram.disabled,.btn-instagram[disabled],fieldset[disabled] .btn-instagram,.btn-instagram.disabled:hover,.btn-instagram[disabled]:hover,fieldset[disabled] .btn-instagram:hover,.btn-instagram.disabled:focus,.btn-instagram[disabled]:focus,fieldset[disabled] .btn-instagram:focus,.btn-instagram.disabled:active,.btn-instagram[disabled]:active,fieldset[disabled] .btn-instagram:active,.btn-instagram.disabled.active,.btn-instagram[disabled].active,fieldset[disabled] .btn-instagram.active{background-color:#517fa4;border-color:rgba(0,0,0,0.2)}
.btn-linkedin{color:#fff;background-color:#007bb6;border-color:rgba(0,0,0,0.2)}.btn-linkedin:hover,.btn-linkedin:focus,.btn-linkedin:active,.btn-linkedin.active,.open .dropdown-toggle.btn-linkedin{color:#fff;background-color:#005f8d;border-color:rgba(0,0,0,0.2)}
.btn-linkedin:active,.btn-linkedin.active,.open .dropdown-toggle.btn-linkedin{background-image:none}
.btn-linkedin.disabled,.btn-linkedin[disabled],fieldset[disabled] .btn-linkedin,.btn-linkedin.disabled:hover,.btn-linkedin[disabled]:hover,fieldset[disabled] .btn-linkedin:hover,.btn-linkedin.disabled:focus,.btn-linkedin[disabled]:focus,fieldset[disabled] .btn-linkedin:focus,.btn-linkedin.disabled:active,.btn-linkedin[disabled]:active,fieldset[disabled] .btn-linkedin:active,.btn-linkedin.disabled.active,.btn-linkedin[disabled].active,fieldset[disabled] .btn-linkedin.active{background-color:#007bb6;border-color:rgba(0,0,0,0.2)}
.btn-pinterest{color:#fff;background-color:#cb2027;border-color:rgba(0,0,0,0.2)}.btn-pinterest:hover,.btn-pinterest:focus,.btn-pinterest:active,.btn-pinterest.active,.open .dropdown-toggle.btn-pinterest{color:#fff;background-color:#a81a20;border-color:rgba(0,0,0,0.2)}
.btn-pinterest:active,.btn-pinterest.active,.open .dropdown-toggle.btn-pinterest{background-image:none}
.btn-pinterest.disabled,.btn-pinterest[disabled],fieldset[disabled] .btn-pinterest,.btn-pinterest.disabled:hover,.btn-pinterest[disabled]:hover,fieldset[disabled] .btn-pinterest:hover,.btn-pinterest.disabled:focus,.btn-pinterest[disabled]:focus,fieldset[disabled] .btn-pinterest:focus,.btn-pinterest.disabled:active,.btn-pinterest[disabled]:active,fieldset[disabled] .btn-pinterest:active,.btn-pinterest.disabled.active,.btn-pinterest[disabled].active,fieldset[disabled] .btn-pinterest.active{background-color:#cb2027;border-color:rgba(0,0,0,0.2)}
.btn-tumblr{color:#fff;background-color:#2c4762;border-color:rgba(0,0,0,0.2)}.btn-tumblr:hover,.btn-tumblr:focus,.btn-tumblr:active,.btn-tumblr.active,.open .dropdown-toggle.btn-tumblr{color:#fff;background-color:#1f3346;border-color:rgba(0,0,0,0.2)}
.btn-tumblr:active,.btn-tumblr.active,.open .dropdown-toggle.btn-tumblr{background-image:none}
.btn-tumblr.disabled,.btn-tumblr[disabled],fieldset[disabled] .btn-tumblr,.btn-tumblr.disabled:hover,.btn-tumblr[disabled]:hover,fieldset[disabled] .btn-tumblr:hover,.btn-tumblr.disabled:focus,.btn-tumblr[disabled]:focus,fieldset[disabled] .btn-tumblr:focus,.btn-tumblr.disabled:active,.btn-tumblr[disabled]:active,fieldset[disabled] .btn-tumblr:active,.btn-tumblr.disabled.active,.btn-tumblr[disabled].active,fieldset[disabled] .btn-tumblr.active{background-color:#2c4762;border-color:rgba(0,0,0,0.2)}
.btn-twitter{color:#fff;background-color:#2ba9e1;border-color:rgba(0,0,0,0.2)}.btn-twitter:hover,.btn-twitter:focus,.btn-twitter:active,.btn-twitter.active,.open .dropdown-toggle.btn-twitter{color:#fff;background-color:#1c92c7;border-color:rgba(0,0,0,0.2)}
.btn-twitter:active,.btn-twitter.active,.open .dropdown-toggle.btn-twitter{background-image:none}
.btn-twitter.disabled,.btn-twitter[disabled],fieldset[disabled] .btn-twitter,.btn-twitter.disabled:hover,.btn-twitter[disabled]:hover,fieldset[disabled] .btn-twitter:hover,.btn-twitter.disabled:focus,.btn-twitter[disabled]:focus,fieldset[disabled] .btn-twitter:focus,.btn-twitter.disabled:active,.btn-twitter[disabled]:active,fieldset[disabled] .btn-twitter:active,.btn-twitter.disabled.active,.btn-twitter[disabled].active,fieldset[disabled] .btn-twitter.active{background-color:#2ba9e1;border-color:rgba(0,0,0,0.2)}
.btn-vk{color:#fff;background-color:#587ea3;border-color:rgba(0,0,0,0.2)}.btn-vk:hover,.btn-vk:focus,.btn-vk:active,.btn-vk.active,.open .dropdown-toggle.btn-vk{color:#fff;background-color:#4a6a89;border-color:rgba(0,0,0,0.2)}
.btn-vk:active,.btn-vk.active,.open .dropdown-toggle.btn-vk{background-image:none}
.btn-vk.disabled,.btn-vk[disabled],fieldset[disabled] .btn-vk,.btn-vk.disabled:hover,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk:hover,.btn-vk.disabled:focus,.btn-vk[disabled]:focus,fieldset[disabled] .btn-vk:focus,.btn-vk.disabled:active,.btn-vk[disabled]:active,fieldset[disabled] .btn-vk:active,.btn-vk.disabled.active,.btn-vk[disabled].active,fieldset[disabled] .btn-vk.active{background-color:#587ea3;border-color:rgba(0,0,0,0.2)}
.row {
    margin-right: 3px;
    margin-left: 3px;
}
.column {
    float: left;
    width: 50%;
    padding: 10px;
}
</style>
<style>
body {
    font-family: Arial;
}


.openBtn {
  background: #4CAF50;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border: 0px;
}

.openBtn:hover {
    background: #bbb;
}

.overlay {
    height: 100%;
    width: 100%;
    display: none;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: scroll;
}

.overlay-content {
    position: relative;
    top: 46%;
    width: 80%;
    text-align: center;
    margin-top: 30px;
    margin: auto;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    cursor: pointer;
    color: white;
}

.overlay .closebtn:hover {
    color: #ccc;
}

.overlay input[type=text] {
    padding: 15px;
    font-size: 17px;
    border: none;
    float: left;
    width: 80%;
    background: white;
}

.overlay input[type=text]:hover {
    background: #f1f1f1;
}

.overlay button {
    float: left;
    width: 20%;
    padding: 15px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.overlay button:hover {
    background: #bbb;
}
</style>

<style>
.share {
    position: fixed;
    bottom: 15px;
    left: 15px;
    width: 80px;
    height: 80px;
    z-index: 3;
}
.share ul {
    position:relative;
    margin:0;
    padding:0;
    width:100%;
    height:100%;
}
.share ul li {
    position:absolute;
    top:0;
    left:0;
    list-style:none;
    width:100%;
    height:100%;
    border-radius:40px;
    background:#fff;
    overflow:hidden;
}

.share ul li a {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    line-height:80px;
    text-align:center;
    font-size:30px;
    color:#2196f3;
}



.share ul li a:hover {
    color:#fff;
    background:#2196f3;
}

.share ul.active li:nth-child(1){
    top:-400%;
    left:0;
    transition-delay:0.2s;
}
.share ul.active li:nth-child(2){
    top:-300%;
    left:0%;
    transition-delay:0.4s;
}
.share ul.active li:nth-child(3){
    top:-200%;
    left:0%;
    transition-delay:0.6s;
}.share ul.active li:nth-child(4){
    top:-100%;
    left:0%;
    transition-delay:0.6s;
}
.togglesh {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#e91e63;
    transform:scale(0.95);
    overflow:hidden;
    border-radius:40px;
    z-index:1;
    cursor:pointer;
}
.togglesh:before {
    content:'\f1e0';
    font-family:fontAwesome;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    text-align:center;
    line-height:80px;
    color:#fff;
    font-size:30px;
}

.togglesh.active:before {
    content:'\f00d';
}
    
    
</style>

</head>
<body>


<div class="share">
    <div class="togglesh"></div>
    <ul>
        <li><a class="w-inline-block social-share-btn fb" href="https://www.facebook.com/sharer/sharer.php?u=&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;">
        <i class="fa fa-facebook" aria-hidden="true">
        
        
        
        
        
        </i></a></li>
        <li><a class="w-inline-block social-share-btn tw" href="https://twitter.com/intent/tweet?" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=%20Check%20up%20this%20awesome%20content' + encodeURIComponent(document.title) + ':%20 ' + encodeURIComponent(document.URL)); return false;">
        <i class="fa fa-twitter" aria-hidden="true">
        
        
        
        
        
        </i></a></li>
        <li><a class="w-inline-block social-share-btn gplus" href="https://plus.google.com/share?url=" target="_blank" title="Share on Google+" onclick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false; " >
        <i class="fa fa-google-plus" aria-hidden="true">
        
        </i></a></li>
        
        
        
        
        
        
        
        <li><a class="w-inline-block social-share-btn lnk" href="#" title="MORE" onclick=" document.getElementById('id01sh').style.display='block'" >
        <i class="fa fa-plus" aria-hidden="true">
        
        </i></a></li>
        
        
        
        </ul>
        
        
        
       </div>
 
        <div id="id01sh" class="modal">
  
  <form class="modal-content animate" >
    <div class="imgcontainer" style="background-color: whitesmoke;" >
            <div style="background-color: whitesmoke;height: 50px;" >

      <span onclick="document.getElementById('id01sh').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>
        



</div>
            <div class="containerB">
            
            
            
            <div class="row">
  <div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket" href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank" title="Share on LinkedIn" onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;" >
        <i class="fa fa-linkedin"></i> share with linkedin
      </a>

  </div>
  <div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket"  title="Pin it" target="_blank" href='https://telegram.me/share/url?url=<URL>&text=Share&description=<TITLE>'
        
onclick="window.open('https://telegram.me/share/url?url=<URL>&text=Share link&description=<TITLE>&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;"  >
        <i class="fa fa-telegram"></i>  share with telegram
      </a>

  </div><div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket"title="Pin it" target="_blank" href='http://pinterest.com/pin/create/button/?url=<URL>&description=<TITLE>'
        
onclick="window.open('http://pinterest.com/pin/create/button/?url=<URL>&description=<TITLE>&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;" >
        <i class="fa fa-pinterest"></i> share with pinterest
      </a>

  </div><div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket" href="http://www.tumblr.com/share?v=3&u=&t=&s=" target="_blank" title="Post to Tumblr" onclick="window.open('http://www.tumblr.com/share?v=3&u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title)); return false;" >
        <i class="fa fa-tumblr"></i> share  with tumblr
      </a>

  </div><div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket" href="http://www.reddit.com/submit?url=&title=" target="_blank" title="Submit to Reddit" onclick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;">
        <i class="fa fa-reddit"></i>  share with reddit
      </a>

  </div><div class="column" >
           <a class="btn btn-block btn-social btn-bitbucket" href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank" title="Share on LinkedIn" onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;" >
        <i class="fa fa-bitbucket"></i> Sign in with Bitbucket
      </a>

  </div>
  </div>


        
        
       
        
      
        
       
    
    
    
    
    
    
    </div>

         </form>
</div>


 

<script>
// Get the modal
var modal = document.getElementById('id01sh');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>







    
    
    
    
    
    
    
    
    


<script>
$(document).ready(function(){
    $('.togglesh').click(function(){
        $('.togglesh').toggleClass('active');
        $('ul').toggleClass('active');
    });
});
</script>

</body>
</html>


