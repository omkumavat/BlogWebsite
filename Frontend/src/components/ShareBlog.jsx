import React, { useState } from 'react';
import { Share2, Copy } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";


const ShareBlog = ({ blogUrl, blogTitle }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(blogUrl)
      .then(() => {
        toast.success('Link copied to clipboard!', { 
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(err => {
        toast.error('Failed to copy text');
      });
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>
      
      {showOptions && (
        <div className="origin-top-right absolute right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(blogTitle + ' ' + blogUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/images/whatsapp.png"
                className='h-5 w-5'
                alt="WhatsApp Icon" />
              <span className='px-2'>WhatsApp</span>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blogTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/images/twitter.png"
                className='h-5 w-5'
                alt="Twitter Icon" />
              <span className='px-2'> X (Twitter)</span>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/images/facebook.png"
                className='h-5 w-5'
                alt="Facebook Icon" />
              <span className='px-2'>Facebook</span>
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Copy className="w-4 h-4 mr-2" /> Copy Link
            </button>
          </div>
        </div>
      )}
       <Toaster position="top-right" />
    </div>
  );
};

export default ShareBlog;
