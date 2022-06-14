import React from 'react';
import Rightside from '../components/Rightside/Rightside';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet} from 'react-router-dom';


const Layout = () => {
	return (
		<>
			<Sidebar/>
			<Outlet/>
			<Rightside/>
		</>
	);
}

export default Layout;
