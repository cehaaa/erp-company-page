import Button from "../Basics/Button/Button";

const HeroSection = () => {
	return (
		<div
			className='w-full min-h-[calc(100vh-128px)] bg-cover relative'
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80")',
			}}>
			<div className='absolute w-full h-full top-0 left-0 bg-blue-700 bg-opacity-50 flex items-center justify-center'>
				<div className='md:w-6/12 text-center text-white'>
					<div className='uppercase font-semibold tracking-wider'>
						Welcome to digital ERP agency
					</div>
					<div className='text-4xl md:text-6xl my-10 font-bold leading-snug'>
						Best Enterprise Resource Planning Agency
					</div>
					<Button variant='secondary'>Read more</Button>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
