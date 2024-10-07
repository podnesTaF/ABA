export const getImageUrl = (imagePath?: string | null) => {
	const base_url = process.env.NEXT_PUBLIC_API_BASE_URL
	if(!imagePath || !base_url) {
			return "/placeholders/no-image-found.png"
		} else {
			return `${base_url}${imagePath}`
		}
}