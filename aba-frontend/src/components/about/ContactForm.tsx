import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {contactSchema, ContactSchema} from "@/models/pages/home";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormField} from "@/models/shared/form";
import TextField from "@/components/form/TextField";
import {Button} from "@/components/ui/button";
import {CTAButton} from "@/models/shared/cta";
import {useMutation} from "@tanstack/react-query";
import {contactRequest} from "@/api/aboutApi";
import { toast } from "sonner"

const ContactForm = ({fields, btn}: {fields: FormField[], btn: CTAButton}) => {
	const {mutate} = useMutation({
		mutationKey: ['contact'],
		mutationFn: (dto: ContactSchema) => contactRequest(dto),
		onSuccess: () => {
			methods.reset()
			toast("Message has been sent", {
				description: "You have contacted Ace Battle. You will receive response to your email soon.",
				duration: 2000
			})
		},
		onError: e => {
			toast("Error while sending message", {
				description: "We cannot deliver your message, please try again",
				duration: 2000,
			})
		}
	})
	const methods = useForm<ContactSchema>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			email: "",
			fullName: "",
			subject: "",
			message: "",
		},
	});

	return (
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((dto) => mutate(dto))} className={'w-full flex flex-col gap-5'}>
					<div className={'flex flex-col lg:flex-row gap-5 flex-1'}>
						<div className="grid grid-cols-1 gap-4 flex-1">
							{fields.slice(0, 3).map((f) => (
								<TextField key={f.id} label={f.label} name={f.name} placeholder={f.placeholder}
													 multiline={!!f.multiline}/>
							))}
						</div>
						<div className={'flex-1 h-auto'}>
							{fields.slice(-1).map((f) => (
								<TextField key={f.id} label={f.label} name={f.name} placeholder={f.placeholder}
													 multiline={!!f.multiline}/>
							))}
						</div>
					</div>
					<div className={'flex justify-center'}>
						<Button type={'submit'} className={'bg-secondary text-white'}>
							{btn.title}
						</Button>
					</div>
				</form>
			</FormProvider>
	);
};

export default ContactForm;