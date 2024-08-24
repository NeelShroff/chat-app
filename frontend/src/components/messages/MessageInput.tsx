import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!message.trim() || loading) return; // Prevent submission if already sending or message is empty

		await sendMessage(message); // Send the message
		setMessage(""); // Clear the input field
	};

	return (
		<form className='px-4 mb-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={loading} // Disable input when loading
				/>
				<button
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3'
					disabled={loading} // Disable button when loading
				>
					{loading ? (
						<span className='loading loading-spinner' />
					) : (
						<Send className='w-6 h-6 text-white' />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
