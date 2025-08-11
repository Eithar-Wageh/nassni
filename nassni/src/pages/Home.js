import React from 'react';

function Home() {
  return (
    <div className="light-mode min-h-screen flex flex-col items-center justify-center bg-secondary">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Nassni</h1>
        <p className="text-lg text-high-contrast-text mt-2">
          Convert your speech into live text for people with hearing disabilities
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6">
        {/* Start Transcription Button */}
        <button
          className="btn accent"
          aria-label="Start transcription"
          onClick={() => alert('You will be redirected to the transcription dashboard')}
        >
          Start Transcription
        </button>

        {/* Language Select */}
        <select
          className="p-2 border border-primary rounded bg-secondary-alt text-high-contrast-text"
          aria-label="Select language"
        >
          <option value="ar-SA">Arabic</option>
          <option value="en-US">English</option>
        </select>

        {/* Microphone Button */}
        <button
          className="btn"
          aria-label="Activate microphone"
          onClick={() => alert('Microphone activated')}
        >
          Activate Microphone
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-secondary-alt w-full text-center py-4">
        <a href="/about" className="text-primary mx-4 hover:underline">
          About the Project
        </a>
        <a href="/contact" className="text-primary mx-4 hover:underline">
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default Home;
