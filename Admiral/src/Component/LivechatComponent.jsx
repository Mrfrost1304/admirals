
import { MessageCircle } from 'lucide-react';

export default function LiveChatButton() {
	return (
		<div className="fixed bottom-6 right-6 z-50">
			<button
				type="button"
				aria-label="Open live chat"
				className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				<MessageCircle className="w-5 h-5" />
				<span className="text-sm font-medium">Live chat</span>
			</button>
		</div>
	);
}