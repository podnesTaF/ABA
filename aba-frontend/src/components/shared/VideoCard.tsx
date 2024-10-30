'use client'
import React, {useState} from 'react';
import {getVideoDetails, VideoData} from "@/api/homeApi";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {PlayIcon, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import ReactPlayer from "react-player/youtube";

interface CustomVideoPlayerProps {
	videoId: string;
}


const VideoCard = ({videoId}: CustomVideoPlayerProps) => {
	const {data} = useQuery({
		queryKey: ['video', videoId],
		queryFn: () => getVideoDetails(videoId)
	})
	const [isModalOpen, setIsModalOpen] = useState(false);


	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	if (!data) return null
	return (
		<>
			<div className={'secondary-gradient rounded-3xl relative p-4 flex flex-col gap-8 overflow-hidden w-full xl:w-[440px] h-auto'}>
				<Image src={'/vectors/Track.png'} className={'absolute right-0 translate-x-1/2 bottom-0 translate-y-1/2'}
							 width={300} height={240} alt={'track'}/>
				<div className={'relative z-[1] cursor-pointer'}  onClick={openModal}>
					<Image src={data.thumbnail} alt={data?.title || ""}
								 className={'w-full min-h-48 h-auto rounded-2xl object-cover hover:scale-[1.02] transition-all duration-200'} width={440} height={260}/>
					<Button className={'p-2 h-12 absolute bottom-0 translate-y-1/2 left-6 hover:bg-primary'} hideIcon
									variant={'ghost'}>
						<PlayIcon size={32} color={'white'}/>
					</Button>
				</div>
				<h4 className={'text-xl font-semibold text-white z-[1]'}>
					{data?.title}
				</h4>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-70  flex justify-center items-center z-50 md:py-[10%]" onClick={closeModal}>
					<div className="relative rounded-lg shadow-lg max-w-5xl w-full h-full  max-h-96 sm:max-h-none">
						<Button
							onClick={closeModal}
							hideIcon

							className="absolute h-10 -top-8 -right-8 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
						>
							<X color={'white'} size={24} />
						</Button>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							playing
							controls
							width="100%"
							height="100%"
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default VideoCard;