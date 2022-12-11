<svelte:head>
	<title>Youssef OUAMLIL</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>





<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 100px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}
</style>





<script>
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'

	let contact = undefined
	onMount(async () => {
		const { data, error } = await supabase
			.from('contact')
			.select('name')
			.limit(1)
			.single()
		contact = data
	})
</script>





<section class="w3-black">
  <!-- Page Content -->
  <div class="w3-padding-large" id="main">
    <!-- Header/Home -->
    <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
      <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> {contact?.name}</h1>
      <p>Engineer and Enterprise Architect</p>
      <img src="https://bhjzrqrdubhbkdtilvzc.supabase.co/storage/v1/object/sign/pictures/suit.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9zdWl0LnBuZyIsImlhdCI6MTY2NjY4MjEzMiwiZXhwIjoxOTgyMDQyMTMyfQ.k-DnH47X2ooV1pT4ItujWgkAzD0N_5h7ldlq7SGiHW0&t=2022-10-25T07%3A15%3A31.047Z" alt="boy" class="w3-image" width="992" height="1108">
    </header>
	</div>
</section>