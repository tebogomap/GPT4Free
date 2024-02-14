import React from 'react';
import useStore from '@store/store';

import ChatContent from './ChatContent';
import MobileBar from '../MobileBar';
import StopGeneratingButton from '@components/StopGeneratingButton/StopGeneratingButton';

const Chat = () => {
  const hideSideMenu = useStore((state) => state.hideSideMenu);

  return (
    <div
      className={`flex h-full flex-1 flex-col ${
        hideSideMenu ? 'md:pl-0' : 'md:pl-[260px]'
      }`}
    >
      <MobileBar />
      <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
        <ChatContent />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3346182201667382"
     crossorigin="anonymous"></script>
<!-- Auto image -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3346182201667382"
     data-ad-slot="5342788181"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        <StopGeneratingButton />
      </main>
    </div>
  );
};

export default Chat;
