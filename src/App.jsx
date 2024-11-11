import Toggle from './component/Toggle';

const App = () => {
	return (
		<div>
			<Toggle>
				<Toggle.Active>Active</Toggle.Active>
				<Toggle.Inactive>Inactive</Toggle.Inactive>
				<Toggle.Button>Toggle</Toggle.Button>
			</Toggle>
		</div>
	);
};
export default App;

// import React from 'react';
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import { Grid, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// function App() {
// 	return (
// 		<>
// 			<h1 className="text-3xl text-center text-red-700 mb-8">
// 				Welcome to Vite with TailwindCSS and React
// 			</h1>

// 			<div className="flex justify-center">
// 				<Swiper
// 					slidesPerView={3} // Adjusted to show one item per column with grid rows
// 					grid={{
// 						rows: 2, // Two rows in each slide
// 						fill: 'row', // Ensures slides fill by row instead of column
// 					}}
// 					spaceBetween={30}
// 					pagination={{
// 						clickable: true,
// 					}}
// 					modules={[Grid, Pagination]}
// 					className="w-full mySwiper"
// 				>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 1
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 2
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 3
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 4
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 5
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 6
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 7
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 8
// 					</SwiperSlide>
// 					<SwiperSlide className="flex justify-center items-center bg-gray-200 p-4">
// 						Slide 9
// 					</SwiperSlide>
// 				</Swiper>
// 			</div>
// 		</>
// 	);
// }

// export default App;
