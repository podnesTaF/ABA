import React from 'react';
import {Input} from "@/components/ui/input";

type ControlledInputProps = {
	label?: string;
	icon: React.ReactNode;
	placeholder: string;
	onChange: (text: string) => void;
	value: string;
};


const ControlledInput = ({label, icon, placeholder, onChange, value}: ControlledInputProps) => {

	return (
		<div className={'w-auto'}>
			{label && <label htmlFor={label}>{label}</label>}
				<div className={'relative w-full'}>
					<Input
						id={label}
						type="text"
						placeholder={placeholder}
						value={value}
						onChange={(e) => onChange(e.target.value)}
						className={"bg-white rounded-full py-5 lg:py-5 px-5"}
					/>
					<div className={'absolute right-3 top-1/2 -translate-y-1/2'}>
						{icon}
					</div>
				</div>
		</div>
	);
};

export default ControlledInput;