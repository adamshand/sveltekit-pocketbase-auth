<script lang="ts">
	import { enhance } from '$app/forms'

	let fileInput: HTMLInputElement | null = $state(null)
	let images: { blobUrl?: string; caption?: string; file: File }[] = $state([])

	export async function handleImages(e: Event) {
		const files = (e.target as HTMLInputElement)?.files ?? []

		for (const file of files) {
			const blob = URL.createObjectURL(file)
			images.push({ blobUrl: blob, file })
		}
	}

	$inspect({ images })
</script>

<form
	enctype="multipart/form-data"
	method="POST"
	use:enhance={({ formData }) => {
		images.forEach((image, i) => {
			formData.delete('files')
			formData.append(`files-${i}`, image.file)
			formData.append(`caption-${i}`, image.caption ?? '')
		})
	}}
>
	<input
		accept="image/*"
		bind:this={fileInput}
		multiple
		name="files"
		onchange={handleImages}
		type="file"
	/>

	{#each images as image, i}
		<figure>
			<img alt="Preview {i}" src={image.blobUrl} />

			<figcaption>
				<textarea bind:value={image.caption} name="caption-{i}"></textarea>
			</figcaption>
		</figure>
	{/each}

	<button type="submit"> Submit </button>
</form>

<style>
	figure {
		display: grid;
		grid-template-columns: 33% 1fr;
		gap: 1rem;

		width: 80vw;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
	}
	img {
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}
	figcaption {
		padding: 0;
	}
	textarea {
		height: 100%;
		width: 100%;
	}
</style>
