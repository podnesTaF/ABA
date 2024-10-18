export const cutString = (str?: string, length?: number) => {
	if(!str || !length) return ""

	return str.length <= length ? str : str.slice(0,length-3) + "..."
}