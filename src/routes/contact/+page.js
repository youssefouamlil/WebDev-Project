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
