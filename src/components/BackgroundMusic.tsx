'use client';

import { useState, useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default 50%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(286); // Fallback to 4:46
  const [isExpanded, setIsExpanded] = useState(false); // Collapsed by default
  const [showTooltip, setShowTooltip] = useState(true); // Bouncing reminder tooltip
  const [isMounted, setIsMounted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Load persisted state if exists
    const savedPlayState = localStorage.getItem('bg-music-playing');
    const savedMuteState = localStorage.getItem('bg-music-muted');
    const savedVolumeState = localStorage.getItem('bg-music-volume');

    // Initialize values on the audio element once mounted
    if (audioRef.current) {
      if (savedVolumeState) {
        const parsedVolume = parseFloat(savedVolumeState);
        audioRef.current.volume = parsedVolume;
        setVolume(parsedVolume);
      } else {
        audioRef.current.volume = 0.5;
      }

      if (savedMuteState === 'true') {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }

    // Modern browser autoplay handling
    // Try to autoplay on first user click anywhere on the page
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying && localStorage.getItem('bg-music-manually-paused') !== 'true') {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem('bg-music-playing', 'true');
            setShowTooltip(false);
          })
          .catch((err) => {
            console.log('Autoplay blocked or interrupted:', err);
          });
      }
      // Remove listener after first interaction
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    // Only set up interaction listener if not manually paused before
    if (savedPlayState === 'true' || !savedPlayState) {
      window.addEventListener('click', handleFirstInteraction);
      window.addEventListener('touchstart', handleFirstInteraction);
    }

    // If it was already playing in a previous session, try to resume
    if (savedPlayState === 'true' && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch(() => {
          // If blocked, fallback to listening for interaction
          window.addEventListener('click', handleFirstInteraction);
          window.addEventListener('touchstart', handleFirstInteraction);
        });
    }

    // Clear tooltip after 10 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      clearTimeout(tooltipTimer);
    };
  }, []);

  // Update volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
    localStorage.setItem('bg-music-volume', newVolume.toString());
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem('bg-music-playing', 'false');
      localStorage.setItem('bg-music-manually-paused', 'true');
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem('bg-music-playing', 'true');
          localStorage.removeItem('bg-music-manually-paused');
          setShowTooltip(false);
        })
        .catch((err) => console.error('Play error:', err));
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    audioRef.current.muted = nextMute;
    setIsMuted(nextMute);
    localStorage.setItem('bg-music-muted', nextMute.toString());
  };

  // Format time (MM:SS)
  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle progress bar click/seek
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressBarRef.current || duration === 0) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const newTime = clickPercentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Audio element events
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 286);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {/* HTML5 Audio Tag */}
      <audio
        ref={audioRef}
        src="/audio/aaya-sher.mp3"
        loop
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Visualizer CSS Stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-bar-1 { 0%, 100% { height: 4px; } 50% { height: 20px; } }
        @keyframes bounce-bar-2 { 0%, 100% { height: 6px; } 50% { height: 24px; } }
        @keyframes bounce-bar-3 { 0%, 100% { height: 5px; } 50% { height: 16px; } }
        @keyframes bounce-bar-4 { 0%, 100% { height: 8px; } 50% { height: 28px; } }
        @keyframes bounce-bar-5 { 0%, 100% { height: 4px; } 50% { height: 18px; } }
        .vis-bar { width: 3px; border-radius: 9999px; background-color: #00c8ff; }
        .vis-bar-1 { animation: bounce-bar-1 1s ease-in-out infinite; }
        .vis-bar-2 { animation: bounce-bar-2 0.8s ease-in-out infinite; }
        .vis-bar-3 { animation: bounce-bar-3 1.2s ease-in-out infinite; }
        .vis-bar-4 { animation: bounce-bar-4 0.9s ease-in-out infinite; }
        .vis-bar-5 { animation: bounce-bar-5 1.1s ease-in-out infinite; }
        .vis-paused { animation-play-state: paused !important; height: 4px !important; }
      `}} />

      {/* Floating Music Widget Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none font-sans">
        
        {/* Play Suggestion Tooltip */}
        {showTooltip && !isPlaying && !isExpanded && (
          <div className="bg-[#004bff] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#004bff]/30 animate-bounce flex items-center gap-1.5 pointer-events-auto border border-white/20 select-none">
            <span>🎵 Tap to enable background music</span>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="hover:text-white/80 transition-colors ml-1 focus:outline-none"
            >
              ×
            </button>
          </div>
        )}

        {/* The Player Body */}
        {isExpanded ? (
          /* MAXIMIZED PLAYER VIEW */
          <div className="w-80 bg-neutral-950/85 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-black flex flex-col gap-4 pointer-events-auto transition-all duration-300 transform scale-100 origin-bottom-right">
            
            {/* Player Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {/* Glowing status circle */}
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isPlaying ? 'bg-[#00c8ff] shadow-[0_0_8px_#00c8ff]' : 'bg-neutral-500'}`} />
                <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">Background Music</span>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
                title="Collapse player"
              >
                {/* Collapse Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m19 9-7 7-7-7"/>
                </svg>
              </button>
            </div>

            {/* Track Details & Logo */}
            <div className="flex items-center gap-4">
              {/* Spinning Prompt Techies Logo */}
              <div className="relative w-14 h-14 rounded-full flex-shrink-0 bg-neutral-900 border border-[#00c8ff]/30 flex items-center justify-center shadow-lg shadow-[#00c8ff]/10 group overflow-hidden">
                <img 
                  src="/logo.jpg" 
                  alt="Prompt Techies Logo" 
                  className={`w-full h-full rounded-full object-cover transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ 
                    animationDuration: '8s', 
                    animationPlayState: isPlaying ? 'running' : 'paused',
                    filter: 'drop-shadow(0 0 4px rgba(0, 200, 255, 0.2))'
                  }}
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="text-sm font-black text-white truncate leading-tight uppercase font-mono tracking-wide bg-gradient-to-r from-[#00c8ff] to-white bg-clip-text text-transparent">Aaya Sher</h4>
                <p className="text-xs text-neutral-400 truncate leading-snug">Anirudh Ravichander</p>
                <span className="text-[9px] text-neutral-500 font-medium tracking-tight mt-0.5 truncate">Source: audio.com/johnpaul-alladi</span>
              </div>
            </div>

            {/* Interactive Progress Bar */}
            <div className="flex flex-col gap-1.5">
              <div 
                ref={progressBarRef}
                onClick={handleProgressBarClick}
                className="h-1.5 w-full bg-neutral-800 rounded-full cursor-pointer overflow-hidden relative group"
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#004bff] to-[#00c8ff] rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls Row (Play, Mute, Volume Slider) */}
            <div className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-3 py-2 border border-white/5">
              
              {/* Play / Pause */}
              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white text-black hover:bg-[#00c8ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all flex items-center justify-center focus:outline-none flex-shrink-0"
                title={isPlaying ? 'Pause' : 'Play Background Music'}
              >
                {isPlaying ? (
                  /* Pause Icon */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="14" y="4" width="4" height="16" rx="1"/>
                    <rect x="6" y="4" width="4" height="16" rx="1"/>
                  </svg>
                ) : (
                  /* Play Icon */
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                )}
              </button>

              {/* Interactive Equalizer Visualizer */}
              <div className="flex items-end gap-1 px-2 h-7 overflow-hidden w-16 justify-center flex-shrink-0">
                <span className={`vis-bar vis-bar-1 ${isPlaying ? '' : 'vis-paused'}`} />
                <span className={`vis-bar vis-bar-2 ${isPlaying ? '' : 'vis-paused'}`} />
                <span className={`vis-bar vis-bar-3 ${isPlaying ? '' : 'vis-paused'}`} />
                <span className={`vis-bar vis-bar-4 ${isPlaying ? '' : 'vis-paused'}`} />
                <span className={`vis-bar vis-bar-5 ${isPlaying ? '' : 'vis-paused'}`} />
              </div>

              {/* Mute & Volume controls */}
              <div className="flex items-center gap-2 flex-1 justify-end">
                <button 
                  onClick={toggleMute}
                  className="text-neutral-400 hover:text-white transition-colors focus:outline-none p-1 rounded hover:bg-white/5"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    /* Mute Icon */
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <line x1="23" y1="9" x2="17" y2="15"/>
                      <line x1="17" y1="9" x2="23" y2="15"/>
                    </svg>
                  ) : volume < 0.4 ? (
                    /* Low Volume Icon */
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                  ) : (
                    /* High Volume Icon */
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                    </svg>
                  )}
                </button>

                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#00c8ff] focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #00c8ff 0%, #00c8ff ${(isMuted ? 0 : volume) * 100}%, #404040 ${(isMuted ? 0 : volume) * 100}%, #404040 100%)`
                  }}
                />
              </div>

            </div>

          </div>
        ) : (
          /* COLLAPSED FLOATING PLAYER (MINIMIZED VIEW) */
          <button 
            onClick={() => { setIsExpanded(true); setShowTooltip(false); }}
            className={`
              w-12 h-12 rounded-full border bg-neutral-950/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 pointer-events-auto active:scale-95 focus:outline-none select-none
              ${isPlaying 
                ? 'border-[#00c8ff] text-[#00c8ff] shadow-[0_0_15px_rgba(0,200,255,0.3)] animate-pulse' 
                : 'border-white/10 text-neutral-300 hover:text-white hover:border-white/25'
              }
            `}
            title="Expand player / Show track details"
          >
            {isPlaying ? (
              /* Animated music bars in collapsed view */
              <div className="flex items-end gap-0.5 h-4 overflow-hidden">
                <span className="vis-bar vis-bar-1 h-2" style={{ width: '2px', backgroundColor: '#00c8ff' }} />
                <span className="vis-bar vis-bar-2 h-3" style={{ width: '2px', backgroundColor: '#00c8ff' }} />
                <span className="vis-bar vis-bar-3 h-1.5" style={{ width: '2px', backgroundColor: '#00c8ff' }} />
                <span className="vis-bar vis-bar-4 h-4" style={{ width: '2px', backgroundColor: '#00c8ff' }} />
              </div>
            ) : (
              /* Static Music Note Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-none">
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            )}
          </button>
        )}

      </div>
    </>
  );
}
