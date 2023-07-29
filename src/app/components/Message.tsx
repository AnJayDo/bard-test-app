import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function Message({
  message,
}: {
  message: { content: string; from: string };
}) {
  return message.from === 'BOT' ? (
    <div className='flex p-3 bg-[#00000066] rounded-lg mb-4'>
      <div className='icon w-8 h-8'>
        <Image src={'/sparkle_resting_v2.gif'} width={32} height={32} alt="Resting" />
      </div>
      <div className='w-full pl-3 flex items-center'><AnimatedText className="" space={5} opacity={1} text={message.content} /></div>
    </div>
  ) : (
    <div className='flex p-3 mb-4'>
      <div className='icon w-8 h-8'>
        <svg stroke="#ffffff" fill="#ffffff" strokeWidth="0" viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
      </div>
      <div className='w-full pl-3 flex items-center'>{message.content}</div>
    </div>
  );
}
