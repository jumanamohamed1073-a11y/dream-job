
  function playKidVoice(text, langCode) {
    
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    
   
    msg.lang = langCode;

  
    msg.pitch = 1.4; 
    msg.rate = 1;  
   

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang.startsWith(langCode));
    
    if (matchingVoice) {
      msg.voice = matchingVoice;
    }

    
    window.speechSynthesis.speak(msg);
  }

 
  window.speechSynthesis.onvoiceschanged = () => {
    console.log("Voices loaded!");
  };


 