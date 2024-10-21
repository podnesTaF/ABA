import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import { CaretSortIcon } from '@radix-ui/react-icons';
import {Command, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import {CheckIcon} from "lucide-react";
import {cn} from "@/lib/utils";

const LanguagePicker = ({variant = 'dark'}: {variant: "dark" | 'light'}) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = React.useState("")

	const onChangeLanguage = (value: string) => {
		setValue(value)
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button hideIcon={true} aria-expanded={open} variant="ghost" className={`text-lg font-semibold ${variant === 'dark' ? "text-black" : "text-white"}`}>
					{value
						? value
						: "ENG"}
					<CaretSortIcon className="ml-2 h-6 w-4 shrink-0 opacity-80" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Command>
					<CommandList>
						<CommandGroup>
							<CommandItem
								key={"Eng"}
								value={"Eng"}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue)
									setOpen(false)
								}}
								className={`font-semibold flex gap-3 items-center ${variant === 'dark' ? 'text-black' : "text-white"}`}
							>
								Eng
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === "Eng" ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
							<CommandItem
								key={"Fr"}
								value={"Fr"}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue)
									setOpen(false)
								}}
							>
								Fr
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === "Fr" ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default LanguagePicker;