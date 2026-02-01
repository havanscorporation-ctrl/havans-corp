const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.querySelector('#chat-form button');

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const faqAnswers = {
  "what is havans corporation?": "Havans Corporation specializes in scenario-based learning and assessments designed to enhance real-world problem solving.",
  "how do scenario-based exams work?": "Scenario-based exams test your ability to apply knowledge to practical situations rather than memorizing facts.",
  "is daizy available 24/7?": "Yes, Daizy is available anytime to assist you with your questions.",
  "how can i contact support?": "You can contact support through the Contact page or by emailing support@havanscorp.com."
};

function getLocalResponse(message) {
  const msg = message.toLowerCase().trim();

  if (faqAnswers[msg]) {
    return faqAnswers[msg];
  }

  if (msg.includes('hello') || msg.includes('hi')) {
    return 'Hello! How can I help you with your O-level studies today?';
  }
  if (msg.includes('good morning')) {
    return 'Good morning! Ready to study and succeed?';
  }
  if (msg.includes('good afternoon')) {
    return 'Good afternoon! How can I assist you?';
  }
  if (msg.includes('good evening')) {
    return 'Good evening! Hope you had a great day!';
  }
  if (msg.includes('thank you') || msg.includes('thanks')) {
    return "You're welcome! If you have more questions, just ask.";
  }
  if (msg.includes('subjects')) {
    return 'O-level subjects in Uganda include Mathematics, English, Physics, Chemistry, Biology, History, Geography, Agriculture, ICT, and more.';
  }
  if (msg.includes('past exam papers') || msg.includes('past papers')) {
    return 'You can find past exam papers on the UNEB website or from your school\'s resource center.';
  }
  if (msg.includes('exam dates') || msg.includes('exams')) {
    return 'O-level exams in Uganda usually happen towards the end of the academic year, around October to November.';
  }
  if (msg.includes('how to prepare') || msg.includes('study tips')) {
    return 'Make a study timetable, focus on weak subjects, practice past papers, and ask teachers for help.';
  }
  if (msg.includes('topics in senior one science')) {
    return 'Senior One Science topics include Living things and their environment, Matter and materials, Energy, and Basic scientific skills.';
  }
  if (msg.includes('how many years')) {
    return 'O-level in Uganda takes 4 years, from Senior One to Senior Four.';
  }

  return "Sorry, I don't have an answer for that right now. Please try asking another question related to your O-level studies.";
}

// Updated submit handler with delay and button disable
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;
  addMessage(userMessage, 'user');
  chatInput.value = '';
  sendBtn.disabled = true;

  // Show "typing..." indicator
  addMessage('Daizy is typing...', 'bot');

  setTimeout(() => {
    // Remove the typing indicator (last bot message)
    const lastBotMsg = chatMessages.querySelector('.message.bot:last-child');
    if (lastBotMsg && lastBotMsg.textContent === 'Daizy is typing...') {
      chatMessages.removeChild(lastBotMsg);
    }

    const botReply = getLocalResponse(userMessage);
    addMessage(botReply, 'bot');
    sendBtn.disabled = false;
    chatInput.focus();
  }, 1200); // delay 1.2 seconds (adjust as you like)
});

// Updated sendFAQ with button visual feedback
function sendFAQ(question) {
  // Find the button with this exact question text and add active style briefly
  const buttons = document.querySelectorAll('.faq-suggestions button');
  buttons.forEach(btn => {
    if (btn.textContent === question) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 400); // highlight for 400ms
    }
  });

  chatInput.value = question;
  chatForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
}

