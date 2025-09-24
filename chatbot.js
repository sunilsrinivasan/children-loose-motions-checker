// chatbot.js
// Full Loose Motions Chatbot Configuration (Steps 1–36)

const chatbotSteps = {
  step1: { message: "How many loose motions has your child passed?", options: [
      { label: "Less than 3", next: "observe12" },
      { label: "More than 3", next: "step2" }
  ] },
  observe12: { message: "Observe for 12 hours. Give plenty of oral fluids or breast feeds.", options: [
      { label: "Restart", next: "step1" }
  ] },

  step2: { message: "Any signs of dehydration like dry tongue, reduced urine?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step3" }
  ] },

  consultDoctor: { message: "Please consult your doctor.", options: [
      { label: "Restart", next: "step1" }
  ] },

  step3: { message: "Passing blood in the stools?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step4" }
  ] },

  step4: { message: "Is your child active?", options: [
      { label: "Yes", next: "step5" },
      { label: "No", next: "consultDoctor" }
  ] },

  step5: { message: "Any breathing difficulty?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step6" }
  ] },

  step6: { message: "Is your child feeding well?", options: [
      { label: "Yes", next: "step7" },
      { label: "No", next: "consultDoctor" }
  ] },

  step7: { message: "The age of your child is:", options: [
      { label: "< 6 months", next: "step8" },
      { label: "6 months - 1 year", next: "step15" },
      { label: "1 - 3 years", next: "step21" },
      { label: "3 - 5 years", next: "step25" },
      { label: "5 - 10 years", next: "step29" },
      { label: "> 10 years", next: "step33" }
  ] },

  // Branch: 0–6 months
  step8: { message: "Any additional symptom like incessant cry, pain on touching the ear, rash, or tiredness?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step9" }
  ] },
  step9: { message: "Is your child only on breast feeds?", options: [
      { label: "Yes", next: "breastOnly" },
      { label: "No", next: "step10" }
  ] },
  breastOnly: { message: "Likely to be normal, no medicine needed. For rash around anus: apply Happynap/Rashfree cream 6× daily. Continue routine feeds.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step10: { message: "Is your baby vomiting?", options: [
      { label: "Yes", next: "vomitChatbot" },
      { label: "No", next: "step11" }
  ] },
  vomitChatbot: { message: "Consult vomit chatbot. For loose motions: ZIORAL or ZN20 drops 0.5 ml (10 drops) daily for 2 weeks. For rash: apply cream. Continue feeds.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step11: { message: "Is your child passing blood in the stools?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step12" }
  ] },
  step12: { message: "Is your baby voiding urine?", options: [
      { label: "Yes", next: "step13" },
      { label: "No", next: "observe12Advanced" }
  ] },
  observe12Advanced: { message: "Consult doctor if tired/not voided. Otherwise observe 12h and monitor urine. Continue ORS and zinc drops + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step13: { message: "Any other symptoms like cough or fever?", options: [
      { label: "Yes", next: "coughFeverChatbot" },
      { label: "No", next: "step14" }
  ] },
  coughFeverChatbot: { message: "Consult cough/fever chatbot. Continue ORS and zinc drops + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step14: { message: "Do you use bottle feeds?", options: [
      { label: "Yes", next: "bottleStop" },
      { label: "No", next: "bottleNo" }
  ] },
  bottleStop: { message: "Stop bottle feeds; use paladai/spoon. Continue ORS and zinc drops + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  bottleNo: { message: "Continue ORS and zinc drops + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },

  // Branch: 6m–1y
  step15: { message: "Any additional symptom?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step16" }
  ] },
  step16: { message: "Is your baby voiding urine?", options: [
      { label: "Yes", next: "step17" },
      { label: "No", next: "observe16" }
  ] },
  observe16: { message: "Observe 12h. ORS sips + zinc 1ml daily + cream. Consult if not voided/tired.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step17: { message: "Is your baby vomiting?", options: [
      { label: "Yes", next: "vomitChatbot17" },
      { label: "No", next: "step18" }
  ] },
  vomitChatbot17: { message: "Consult vomit chatbot. ORS sips + zinc drops + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step18: { message: "Is child passing blood?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step19" }
  ] },
  step19: { message: "Any cough or fever?", options: [
      { label: "Yes", next: "coughFever19" },
      { label: "No", next: "step20" }
  ] },
  coughFever19: { message: "Consult cough/fever chatbot. ORS + zinc + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step20: { message: "Use bottle feeds?", options: [
      { label: "Yes", next: "bottleStop20" },
      { label: "No", next: "bottleNo20" }
  ] },
  bottleStop20: { message: "Stop bottle, use paladai/spoon. ORS + zinc + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  bottleNo20: { message: "ORS + zinc + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },

  // Branch: 1–3y
  step21: { message: "Any additional symptom?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step22" }
  ] },
  step22: { message: "Is baby voiding urine?", options: [
      { label: "Yes", next: "step23" },
      { label: "No", next: "observe22" }
  ] },
  observe22: { message: "Observe 12h. ORS + zinc + cream. Consult if issues.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step23: { message: "Is child bleeding?", options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step24" }
  ] },
  step24: { message: "Any cough or fever?", options: [
      { label: "Yes", next: "coughFever24" },
      { label: "No", next: "post24" }
  ] },
  coughFever24: { message: "Consult cough/fever chatbot. ORS + zinc + diet + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },
  post24: { message: "ORS + zinc + diet + cream.", options: [
      { label: "Restart", next: "step1" }
  ] },

  // Branch: 3–5y
  step25: { message: "Is baby voiding urine?", options: [
      { label: "Yes", next: "step26" },
      { label: "No", next: "observe25" }
  ] },
  observe25: { message: "Observe 12h. ORS + ECONORM sachets.", options: [
      { label: "Restart", next: "step1" }
  ] },
  step26: { message: "Is baby vomiting?", options: [
      { label: "Yes", next: "vomitChatbot26" },
      { label: "No", next: "step27" }
  ] },
  vomitChatbot26: { message: "Consult vomit chatbot. ORS + ECONORM sachets.", options: [
      { label: "Restart", next: "step1" }
  ] },

  // Remaining steps...
};

export default chatbotSteps;
