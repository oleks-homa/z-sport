import { useState } from 'react';
import googleLogo from '../assets/google_logo.svg'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/auth.js';

const initialState = { fullName: '', email: '', password: '' };

const Register = () => {
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await dispatch(signup(form, navigate));
			setError('');
		} catch (err) {
			setError(err.response?.data?.message || "An error occurred");
			console.log(err);
		}
	};

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
				<div className='flex flex-col justify-center p-8 md:p-14'>
					<span className='mb-3 text-4xl font-bold text-center'>Welcome!</span>
					{error && <p className='text-red-600 border border-red-600 bg-red-100 p-2'>{error}</p>}
					<div className='py-4'>
						<span className='mb-2 text-md'>Full name</span>
						<input
							type="text"
							className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
							name='fullName'
							id='fullName'
							onChange={handleChange}
						/>
					</div>
					<div className='py-4'>
						<span className='mb-2 text-md'>Email</span>
						<input
							type="email"
							className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
							name='email'
							id='email'
							onChange={handleChange}
						/>
					</div>
					<div className='py-4'>
						<span className='mb-2 text-md'>Password</span>
						<input
							type="password"
							className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
							name='password'
							id='password'
							onChange={handleChange}
						/>
					</div>

					<button
						className='w-full bg-black border border-black text-white p-2 rounded-lg mb-2 hover:bg-white hover:text-black hover:border-gray-300 transition-all duration-300'
						onClick={handleSubmit}
					> Create account</button>

					<span className='font-light text-gray-400 text-center mb-2'>Or</span>

					<button
						className='w-full border border-gray-300 text-black p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border-black transition-all duration-300'
					>
						<img
							src={googleLogo}
							alt="google logo"
							className='w-6 h-6 inline mr-2'
						/>
						Sign up with Google
					</button>
					<div className='flex justify-center w-full py-2'>
						<span className='font-normal text-md'>Already have an account? <Link to='/login' className='text-blue-400 transition-all duration-300 hover:text-gray-300 cursor-pointer'>Sign in!</Link> </span>
					</div>
				</div>
				<div className='relative'>

				</div>
			</div>
		</div>
	)
}

export default Register;