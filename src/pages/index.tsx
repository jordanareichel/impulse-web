import { useEffect } from 'react';

import { NextPage } from 'next';
import router from 'next/router';

const Home: NextPage = () => {
	useEffect(() => {
		router.push('/Home');
	}, []);

	return <div />;
};

export default Home;
