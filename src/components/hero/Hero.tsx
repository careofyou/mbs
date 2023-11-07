import React from 'react';

const Hero: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <div className="hero">
      <div className="flex flex-row mt-10 justify-center">
      <div className="flex flex-col-reverse justify-between space-x-4 sm:mt-12 sm:w-2/3 sm:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="mb-10 mt-[-5rem] z-50  space-y-2 text-5xl font-extrabold text-blue-700">
            Медико-биологический Союз
          </h1>
          <h2 className="mb-5 mt-2 text-lg text-gray-700 ">
            <span className="bg-gradient-to-r from-blue-400 via-darkblue-500 to-purple-500 bg-clip-text font-semibold text-transparent">
              Группа компаний
            </span>
          </h2>
          
        </div>
      </div>
    </div>
      <div className="top-0 video-container">
        <video autoPlay loop muted playsInline>
          <source src='./mbu.webm' type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100vh;
          height: 100vh; /* Adjust the height as needed */
        }

        .video-container {
          position: absolute;
          top: -1;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Hero;
