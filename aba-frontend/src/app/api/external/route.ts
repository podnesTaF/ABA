import axios from "axios";
import { type NextRequest } from 'next/server'


const apiKey = process.env.YOUTUBE_API_KEY

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const query = searchParams.get('id')
	const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${query}&key=${apiKey}`)
	const video = data.items[0].snippet;
	 return Response.json({
		title: video.title,
		thumbnail: video.thumbnails.high.url,
	});
}