import Header from '../molecules/Header';
import Footer from '../organisms/Footer';
import Menu from '../organisms/Menu';

function Layout({ children }) {
	return (
		<section className='relative h-screen w-screen'>
			<Header />
			<Menu />
			<main className='w-full overflow-hidden'>{children}</main>
			<Footer />
		</section>
	);
}

export default Layout;
