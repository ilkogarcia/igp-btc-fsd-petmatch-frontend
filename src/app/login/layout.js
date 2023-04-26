/**
 * @module login/layout
 * @description Login page layout
 */
'use client';

import { logMeIn } from '../../services/PetMatch';

export default async function Login() {
	const bodyRequest = {
		email: 'ilko.garcia@gmail.com',
		password: '123456789abcd',
	};
	const loginResponse = await logMeIn(bodyRequest.email, bodyRequest.password);
	return (
		<div>
			<h2>{loginResponse.message}</h2>
			{loginResponse.sucess ? (
				<p>Logged in {loginResponse.data.token}</p>
			) : (
				<p>Not logged in</p>
			)}
		</div>
	);
}
