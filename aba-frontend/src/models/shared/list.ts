export type List = {
	id: number;
	items: ListItem[]
	title: string
}

export type ListItem = {
	id: number;
	content: string;
	title?: string
}