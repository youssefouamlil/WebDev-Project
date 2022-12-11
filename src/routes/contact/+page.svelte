<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
import { onMount } from 'svelte';
import { supabase } from '$lib/supabaseClient';

let name = '';
let email = '';
let message = '';
let subject = '';

const handleClick = async () => {
	const { data, error } = await supabase
		.from('contact')
		.insert([{ name: name, email: email, message: message, subject: subject }]);
	console.log('error', error);
	console.log('data', data);
};



	let contact = undefined
	onMount(async () => {
		const { data, error } = await supabase
			.from('contact')
			.select('phone')
			.limit(1)
			.single()
		contact = data
	})

</script>








<div class="w3-padding-large" id="main">

 

 <div class="w3-padding-large" id="main">
      <!-- Contact Section -->
      <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 class="w3-text-light-grey">Contact Me</h2>
        <hr style="width: 200px" class="w3-opacity" />

        <div class="w3-section">
          <p>
            <i
              class="
                fa fa-map-marker fa-fw
                w3-text-white w3-xxlarge w3-margin-right
              "
            ></i>
            Paris, France
          </p>
          <p>
            <i
              class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"
            ></i>
            {contact?.phone}
          </p>
          <p>
            <i
              class="
                fa fa-envelope fa-fw
                w3-text-white w3-xxlarge w3-margin-right
              "
            >
            </i>
            Email: youssef.ouamlil.23@eigsi.fr
          </p>
        </div>
        <br />
        <p>Let's get in touch. Send me a message:</p>

        <form action="/action_page.php" target="_blank">
          <p>
            <input
              bind:value={name}
              class="w3-input w3-padding-16"
              type="text"
              placeholder="Name"
              required=""
              name="Name"
            />
          </p>
          <p>
            <input
              bind:value={email}
              class="w3-input w3-padding-16"
              type="text"
              placeholder="Email"
              required=""
              name="Email"
            />
          </p>
          <p>
            <input
              bind:value={subject}
              class="w3-input w3-padding-16"
              type="text"
              placeholder="Subject"
              required=""
              name="Subject"
            />
          </p>
          <p>
            <input
              bind:value={message}
              class="w3-input w3-padding-16"
              type="text"
              placeholder="Message"
              required=""
              name="Message"
            />
          </p>
          <p>
            <button
              
              class="w3-button w3-light-grey w3-padding-large"
              type="submit" on:click={handleClick}
              onclick="window.location.href='/thanks';"
            >
              <i class="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
        </form>
        <!-- End Contact Section -->
      </div></div>


 
 

<!-- END PAGE CONTENT -->
</div>



