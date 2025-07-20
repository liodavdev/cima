import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Buy from '../pages/Buy';
import Sell from '../pages/Sell';
import Invest from '../pages/Invest';
import Contact from '../pages/Contact';
import Agents from '../pages/Agents';
import Services from '../pages/Services';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='buy' element={<Buy />} />
				<Route path='sell' element={<Sell />} />
				<Route path='invest' element={<Invest />} />
				<Route path='services' element={<Services />} />
				<Route path='agents' element={<Agents />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
