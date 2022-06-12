import Image from 'next/image';
import Search from '../../assets/svg/search';

const styles = {
	header: 'bg-[#17171a] text-white h-20 flex gap-[100px] w-full p-[30px]',
	headerWrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
	navList: 'flex justify-center items-center gap-[20px]',
	navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
	badge:
		'rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4',
	inputContainer: 'flex items-center justify-center p-2 rounded bg-[#171924]',
	input: 'bg-transparent outline-none text-white w-70 mL-3',
};

const Header = () => {
	return (
		<div className={styles.header}>
			<Image
				src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
				alt='logo'
				width={220}
				height={220}
			/>
			<nav className={styles.headerWrapper}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Cryptocurrencies
						</a>
						<div className={styles.badge} />
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Exchanges
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							NFT
						</a>
						<div className={styles.badge} />
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Cryptown
						</a>
						<div className={styles.badge} />
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Portfolio
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Watchlist
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Products
						</a>
						<div className={styles.badge} />
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href='#'>
							Learn
						</a>
					</li>
				</ul>

				<div className='flex items-center'>
					{/* {connectBtn} */}
					<div className={styles.inputContainer}>
						<Search />
						<input type='text' className={styles.input} placeholder='Search' />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
