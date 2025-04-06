'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { createUser } from './actions';
import { signupSchema } from './signupSchema';

import { TextField, Button, Box } from '@mui/material';
import { createUser } from './actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function SignupForm() {
	const [signupMethod, setSignupMethod] = useState('normal');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signupSchema),
	});
  const router = useRouter()

	const onSubmit = async (data) => {
		if (signupMethod === "google") {
			const result = await createUser(data);
			if (result.user) {
				localStorage.setItem("auth", result._tokenResponse.idToken
				)
				alert("Signup Successfully!");
				router.push("/")
			} else {
				alert("Facing some error while signup")
			}
		} else {
			alert("signup successfuly!");

		}
	};
	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 400,
				margin: '0 auto',
				gap: 2,
				mt: 5,
			}}
		>
			<TextField
				label="Email"
				variant="outlined"
				fullWidth
				{...register('email', { required: 'Email is required' })}
				error={!!errors.email}
				helperText={errors.email?.message}
			/>

			<TextField
				label="Password"
				type="password"
				variant="outlined"
				fullWidth
				{...register('password', { required: 'Password is required' })}
				error={!!errors.password}
				helperText={errors.password?.message}
			/>

			<Button variant="contained" type="submit">
				Sign Up
			</Button>

			<Button
				variant="contained"
				type="submit"
				onClick={() => setSignupMethod('google')}
				color="primary"
			>
				Sign Up with Google
			</Button>
		</Box>
	);
}
