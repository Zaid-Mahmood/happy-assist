"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import voiceTransitionImg from "@/assets/banner-imgs/voice-transition-img.png";
import { FaMicrophone } from "react-icons/fa";

const voices = [
  {
    title: "Voice 1",
    voiceIndex: 0,
  },
  {
    title: "Voice 2",
    voiceIndex: 1,
  },
  {
    title: "Voice 3",
    voiceIndex: 2,
  },
];

const VoiceAgentCard = () => {
  const [activeVoice, setActiveVoice] = useState(0);
  const [scale, setScale] = useState(1);
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>(
    []
  );

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setBrowserVoices(availableVoices);
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setScale(1);
  };

  const startAnimation = () => {
    let currentScale = 1;
    let direction = 1;

    const animate = () => {
      currentScale += direction * 0.015;

      if (currentScale >= 1.22) direction = -1;
      if (currentScale <= 1) direction = 1;

      setScale(currentScale);

      if (window.speechSynthesis.speaking) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setScale(1);
      }
    };

    animate();
  };

  const handleVoiceSelect = (index: number) => {
    stopSpeaking();

    setActiveVoice(index);

    const utterance = new SpeechSynthesisUtterance(
      "Hello! I am Happy Assist, your AI voice assistant. I can answer calls, capture leads, book appointments, and help your business stay available twenty four seven."
    );

    if (browserVoices[voices[index].voiceIndex]) {
      utterance.voice = browserVoices[voices[index].voiceIndex];
    }

    utterance.rate = 1;
    utterance.pitch = index === 0 ? 1.2 : index === 1 ? 0.8 : 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      startAnimation();
    };

    utterance.onend = () => {
      setScale(1);
    };

    utterance.onerror = () => {
      setScale(1);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full  max-w-[437px] rounded-[28px] bg-gradient-to-b from-[#9BEFD5] to-[#A9CFE5] p-2">
      <div className="flex rounded-full border border-white/40 bg-white/10 p-1">
        {voices.map((voice, index) => (
          <button
            key={voice.title}
            type="button"
            onClick={() => handleVoiceSelect(index)}
            className={`flex-1 cursor-pointer rounded-full p-3 md:py-3 md:px-9 text-center text-xs md:text-base transition ${
              activeVoice === index
                ? "bg-white text-[#262626]"
                : "text-[#262626] hover:bg-white/40"
            }`}
          >
            {voice.title}
          </button>
        ))}
      </div>

      <div className="flex h-fit md:h-full py-6 flex-col items-center justify-center">
        <Image
          src={voiceTransitionImg}
          alt="AI voice animation"
          style={{
            transform: `scale(${scale}) rotate(${scale * 2}deg)`,
          }}
          className="w-[220px] transition-transform duration-75"
          priority
        />

        <button
          type="button"
          onClick={() => handleVoiceSelect(activeVoice)}
          className="mt-12 flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full bg-[#FFD83D] text-white shadow-lg"
        >
          <FaMicrophone />
        </button>

        <p className="mt-4 mb-[46px] text-sm text-[#262626]">
          Talk to <span className="font-bold text-primary">HappyAssist</span>
        </p>
      </div>
    </div>
  );
};

export default VoiceAgentCard;
