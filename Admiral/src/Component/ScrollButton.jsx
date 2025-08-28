import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
const ScrollButton=()=>{
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 200);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	if (!visible) return null;

	return (
		<div className="fixed bottom-6 left-6 z-50">
			<button
				type="button"
				aria-label="Scroll to top"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				<ArrowUp className="w-5 h-5" />
			</button>
		</div>
	);
}
export default ScrollButton;