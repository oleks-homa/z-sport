import { useState } from 'react';
import googleLogo from '../assets/google_logo.svg'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setPicturePath, setIsSignedIn } from '../state';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
	const [email, setEmailLocal] = useState('');
	const [password, setPassword] = useState('');
	const user = {
		email: 'test@gmail.com',
		password: '123'
	}

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignIn = () => {
		if (email === user.email && password === user.password) {
			dispatch(setEmail(email));
			dispatch(setPicturePath('nature.jpg'));
			dispatch(setIsSignedIn(true));
			navigate('/');
		}
	}
	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
				<div className='flex flex-col justify-center p-8 md:p-14'>
					<span className='mb-3 text-4xl font-bold text-center'>Welcome back</span>
					<span className='font-light text-gray-400 mb-8'>Welcome back! Please enter your details</span>
					<div className='py-4'>
						<span className='mb-2 text-md'>Email</span>
						<input
							type="text"
							className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
							name='email'
							id='email'
							onChange={event => setEmailLocal(event.target.value)}
						/>
					</div>
					<div className='py-4'>
						<span className='mb-2 text-md'>Password</span>
						<input
							type="password"
							className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
							name='password'
							id='password'
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className='flex justify-center w-full py-4'>
						<span className='font-bold text-md transition-all duration-300 hover:text-gray-300 cursor-pointer'>Forgot password?</span>
					</div>
					<button
						className='w-full bg-black border border-black text-white p-2 rounded-lg mb-2 hover:bg-white hover:text-black hover:border-gray-300 transition-all duration-300'
						onClick={handleSignIn}
					> Sign in</button>

					<span className='font-light text-gray-400 text-center mb-2'>Or</span>

					<GoogleLogin
						clientId='GOOGLE ID'
						render={() => (
							<button
								className='w-full border border-gray-300 text-black p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border-black transition-all duration-300'
							>
								<img
									src={googleLogo}
									alt="google logo"
									className='w-6 h-6 inline mr-2'
								/>
								Sign in with Google
							</button>
						)}
					/>

					<div className='flex justify-center w-full py-2'>
						<span className='font-normal text-md'>Don't have an account? <Link to='/register' className='text-blue-400 transition-all duration-300 hover:text-gray-300 cursor-pointer'>Create it!</Link> </span>
					</div>
				</div>
				<div className='relative'>

				</div>
			</div>
		</div>
	)
}

export default Login