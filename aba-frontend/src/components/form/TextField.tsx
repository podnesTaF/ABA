import {useFormContext} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

type TextFieldProps = {
	label: string;
	name: string;
	placeholder: string;
	multiline?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({ label, name, placeholder, multiline = false }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className={multiline ? "w-full h-full flex flex-col gap-2" : 'w-auto'}>
			<label htmlFor={name}>{label}</label>
			{multiline ? (
				<Textarea
					id={name}
					placeholder={placeholder}
					className={"bg-white rounded-2xl py-4 lg:py-5 px-5 flex-1"}
					{...register(name)}
				/>
			) : (
				<Input
					id={name}
					type="text"
					placeholder={placeholder}
					{...register(name)}
					className={"bg-white rounded-full py-4 lg:py-5 px-5"}
				/>
			)}
			{errors[name] && <p className="text-red-500">{errors[name]?.message?.toString()}</p>}
		</div>
	);
};

export default TextField;