<script lang="ts">
</script>

<p>Example event card for Toru.</p>
<div class="wrapper">
	<img alt="" src="/easy-lazy-gardening.jpg" />
	<div class="event">
		<mark>Partner Event </mark>

		<h3>Easy, Lazy No-stress Gardening</h3>

		<p class="description">
			Whether you want to provide affordable, nutrient-rich food for your family or you are worried
			about the Zombie Apocalypse, gardens are a wonderful way to provide care and resilience to
			your family and community.
		</p>

		<p class="details">
			Sunday, November 3, 2024
			<br /> 13:00 – 17:00
			<br />Kapiti Coast
		</p>

		<button>Event Details</button>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		margin-inline: auto;
		width: 30ch;
		border: 2px solid #7f8e20;
		border-radius: 0.375rem;
	}
	img {
		border-radius: 0.375rem;
	}
	.event {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;

		border-top: none;
	}
	mark {
		padding: 0.5rem;
		background-color: white;
		color: #7f8e20;
		border: 2px solid #7f8e20;
		border-radius: 0.375rem;
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
	}

	.description {
		text-align: justify;
		hyphens: auto;
		font-size: 1.2rem;
		font-weight: 200;
	}
	.details {
		padding: 0.5rem;
		font-size: 1.2rem;
		font-weight: 200;
		text-align: center;
	}
	button {
		display: block;
		background-color: #7f8e20;
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
		color: white;
	}
</style>
