// app.js
import chatbotSteps from './chatbot.js';

const container = document.getElementById('chat-container');
let currentStep = 'step1';

function renderStep(stepKey) {
    container.innerHTML = '';
    const step = chatbotSteps[stepKey];
    if (!step) {
        console.error('Invalid step:', stepKey);
        return;
    }
    const msg = document.createElement('div');
    msg.className = 'message';
    msg.textContent = step.message;
    container.appendChild(msg);

    const opts = document.createElement('ul');
    opts.className = 'options';
    step.options.forEach(opt => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = opt.label;
        btn.addEventListener('click', () => {
            currentStep = opt.next;
            renderStep(currentStep);
        });
        li.appendChild(btn);
        opts.appendChild(li);
    });
    container.appendChild(opts);
}

document.addEventListener('DOMContentLoaded', () => {
    renderStep(currentStep);
});

// app.js additions for landing view
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', () => {
    document.getElementById('landing-screen').classList.add('hidden');
    document.getElementById('chat-screen').classList.remove('hidden');
    renderStep('step1');  // start the chatbot
  });
});
