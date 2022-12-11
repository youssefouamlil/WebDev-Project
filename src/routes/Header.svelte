<script>
  import { page } from "$app/stores"
  const routes = [
    { title: "HOME", link: "/", icon: "fa fa-home w3-xxlarge" },
    { title: "ABOUT", link: "/about", icon: "fa fa-user w3-xxlarge" },
    { title: "PHOTO", link: "/picture", icon: "fa fa-eye w3-xxlarge" },
    { title: "CONTACT", link: "/contact", icon: "fa fa-envelope w3-xxlarge" },

  ]
</script>

<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px; }
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 100px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

</style>
<header>
	<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- my image -->
  <img src="https://media-exp1.licdn.com/dms/image/C5603AQF8U497fh4tpQ/profile-displayphoto-shrink_200_200/0/1644442308456?e=2147483647&amp;v=beta&amp;t=1GrmWHsncKI_Snf-ap5RTwXsX3MWTx9fCYlIP2pbiw8" style="width:100%">

  {#each routes as { title, link, icon }}
		<a href={link} class={`w3-bar-item w3-button w3-padding-large ${$page.route.id === link ? "w3-black" : "w3-hover-black"}`}>
      <i class={icon} style="color:white"></i>
      <p style="color:white">{title}</p>
    </a>
	{/each}
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="Website.html" class="w3-bar-item w3-button" style="width:25% !important">HOME</a>
    <a href="about.html" class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
    <a href="picture.html" class="w3-bar-item w3-button" style="width:25% !important">PHOTOS</a>
    <a href="Contact.html" class="w3-bar-item w3-button" style="width:25% !important">CONTACT</a>
  </div>
</div>
</header>


