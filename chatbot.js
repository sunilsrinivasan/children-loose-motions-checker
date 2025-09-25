// chatbot.js
// Full Loose Motions Chatbot Configuration (Steps 1–36)

const chatbotSteps = {
  // Step 1
  step1: {
    message: "How many loose motions has your child passed?",
    options: [
      { label: "Less than 3", next: "observe12" },
      { label: "More than 3", next: "step2" }
    ]
  },
  observe12: {
    message: "Observe for 12 hours. Give plenty of oral fluids or breast feeds. If loose motions> 3, restart",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 2
  step2: {
    message: "Any signs of dehydration like dry tongue, reduced urine?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step3" }
    ]
  },
  consultDoctor: {
    message: "Please consult your doctor.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 3
  step3: {
    message: "Passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step4" }
    ]
  },

  // Step 4
  step4: {
    message: "Is your child active?",
    options: [
      { label: "Yes", next: "step5" },
      { label: "No", next: "consultDoctor" }
    ]
  },

  // Step 5
  step5: {
    message: "Any breathing difficulty?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step6" }
    ]
  },

  // Step 6
  step6: {
    message: "Is your child feeding well?",
    options: [
      { label: "Yes", next: "step7" },
      { label: "No", next: "consultDoctor" }
    ]
  },

  // Step 7: Age selection
  step7: {
    message: "The age of your child is:",
    options: [
      { label: "< 6 months", next: "step8" },
      { label: "6 months - 1 year", next: "step15" },
      { label: "1 - 3 years", next: "step21" },
      { label: "3 - 5 years", next: "step25" },
      { label: "5 - 10 years", next: "step29" },
      { label: "> 10 years", next: "step33" }
    ]
  },

  // Branch: 0–6 months (Steps 8–14)
  step8: {
    message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step9" }
    ]
  },
  step9: {
    message: "Is your child only on breast feeds?",
    options: [
      { label: "Yes", next: "breastOnly" },
      { label: "No", next: "step10" }
    ]
  },
  breastOnly: {
    message: "Likely normal, no medicine needed. For rash around anus: apply Happynap/Rashfree cream 6× daily. Continue routine feeds.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step10: {
    message: "Is your baby vomiting?",
    options: [
      { label: "Yes", next: "vomitChatbot" },
      { label: "No", next: "step11" }
    ]
  },
  vomitChatbot: {
    message: "Consult vomiting chatbot. For loose motions: For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  0.5 ml  (10 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step11: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step12" }
    ]
  },
  step12: {
    message: "Is your baby voiding urine?",
    options: [
      { label: "Yes", next: "step13" },
      { label: "No", next: "observe12Advanced" }
    ]
  },
  observe12Advanced: {
    message: "Consult doctor if tired/not voided. Otherwise observe 12h and monitor urine. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  0.5 ml  (10 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step13: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFeverChatbot" },
      { label: "No", next: "step14" }
    ]
  },
  coughFeverChatbot: {
    message: "Consult cough/fever chatbot.For Loose motions: sips of readymade ORL -S  & ZIORAL or ZN20 drops 0.5 ml  (10 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step14: {
    message: "Do you use bottle feeds?",
    options: [
      { label: "Yes", next: "bottleStop" },
      { label: "No", next: "bottleNo" }
    ]
  },
  bottleStop: {
    message: "Stop bottle feeds; use paladai/spoon. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  0.5 ml  (10 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
    options: [{ label: "Restart", next: "step1" }]
  },
  bottleNo: {
    message: "Continue ORS and zinc drops + cream.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Branch: 6m–1y (Steps 15–20)
  step15: {
    message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step16" }
    ]
  },
  step16: {
    message: "Is your baby voiding urine?",
    options: [
      { label: "Yes", next: "step17" },
      { label: "No", next: "observe16" }
    ]
  },
  observe16: {
    message: "Observe 12h. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  1.0 ml  (20 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day .Consult if not voided/tired.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step17: {
    message: "Is your baby vomiting?",
    options: [
      { label: "Yes", next: "vomitChatbot17" },
      { label: "No", next: "step18" }
    ]
  },
  vomitChatbot17: {
    message: "Consult vomiting chatbot. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  1.0 ml  (20 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
 
    options: [{ label: "Restart", next: "step1" }]
  },
  step18: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step19" }
    ]
  },
  step19: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFever19" },
      { label: "No", next: "step20" }
    ]
  },
  coughFever19: {
    message: "Consult cough/fever chatbot. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  1.0 ml  (20 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
 
    options: [{ label: "Restart", next: "step1" }]
  },
  step20: {
    message: "Do you use bottle feeds?",
    options: [
      { label: "Yes", next: "bottleStop20" },
      { label: "No", next: "bottleNo20" }
    ]
  },
  bottleStop20: {
    message: "Stop bottle feeds; use paladai/spoon. For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  1.0 ml  (20 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
 
    options: [{ label: "Restart", next: "step1" }]
  },
  bottleNo20: {
    message: "ORS + zinc + cream.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Branch: 1–3y (Steps 21–24)
  step21: {
    message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step22" }
    ]
  },
  step22: {
    message: "Is your baby voiding urine?",
    options: [
      { label: "Yes", next: "step23" },
      { label: "No", next: "observe22" }
    ]
  },
  observe22: {
    message: "Observe 12h.For Loose motions: Give sips of readymade ORL -S  & ZIORAL or ZN20 drops (zinc)  1.0 ml  (20 drops) daily for 2 weeks. For anal rash: apply Happynap/Ezinap cream 6 times/day.",
 
    options: [{ label: "Restart", next: "step1" }]
  },
  step23: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step24" }
    ]
  },
  step24: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFever24" },
      { label: "No", next: "post24" }
    ]
  },
  coughFever24: {
    message: "Consult cough/fever chatbot. ORS + zinc + diet + cream.",
    options: [{ label: "Restart", next: "step1" }]
  },
  post24: {
    message: "ORS + zinc + diet + cream.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Branch: 3–5y (Steps 25–28)
  step25: {
    message: "Is your child voiding urine?",
    options: [
      { label: "Yes", next: "step26" },
      { label: "No", next: "observe25" }
    ]
  },
  observe25: {
    message: "Observe 12h. ORS + ECONORM sachets (1×2/day for 3d).",
    options: [{ label: "Restart", next: "step1" }]
  },
  step26: {
    message: "Is your child vomiting?",
    options: [
      { label: "Yes", next: "vomitChatbot26" },
      { label: "No", next: "step27" }
    ]
  },
  vomitChatbot26: {
    message: "Consult vomiting chatbot. ORS + ECONORM sachets (1×2/day for 3d).",
    options: [{ label: "Restart", next: "step1" }]
  },
  step27: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step28" }
    ]
  },
  step28: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFever28" },
      { label: "No", next: "post28" }
    ]
  },
  coughFever28: {
    message: "Consult cough/fever chatbot. ORS + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  post28: {
    message: "ECONORM sachets (3× daily for 3d) + ORS.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Branch: 5–10y (Steps 29–32)
  step29: {
    message: "Is your child voiding urine?",
    options: [
      { label: "Yes", next: "step30" },
      { label: "No", next: "observe29" }
    ]
  },
  observe29: {
    message: "Observe 12h. ORS + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step30: {
    message: "Is your child vomiting?",
    options: [
      { label: "Yes", next: "vomitChatbot30" },
      { label: "No", next: "step31" }
    ]
  },
  vomitChatbot30: {
    message: "Consult vomiting chatbot. ORS + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step31: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step32" }
    ]
  },
  step32: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFever32" },
      { label: "No", next: "post32" }
    ]
  },
  coughFever32: {
    message: "Consult cough/fever chatbot. ORS + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  post32: {
    message: "ECONORM sachets (3× daily for 3d) + ORS.",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Branch: >10y (Steps 33–36)
  step33: {
    message: "Is your child voiding urine?",
    options: [
      { label: "Yes", next: "step34" },
      { label: "No", next: "observe33" }
    ]
  },
  observe33: {
    message:
      "Observe 12h. ORS + Tab Andial 1×2/day×2d + ECONORM sachets (3× daily for 2d).",
    options: [{ label: "Restart", next: "step1" }]
  },
  step34: {
    message: "Is your child vomiting?",
    options: [
      { label: "Yes", next: "vomitChatbot34" },
      { label: "No", next: "step35" }
    ]
  },
  vomitChatbot34: {
    message: "Consult vomiting chatbot. ORS + Tab Andial + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step35: {
    message: "Is your child passing blood in the stools?",
    options: [
      { label: "Yes", next: "consultDoctor" },
      { label: "No", next: "step36" }
    ]
  },
  step36: {
    message: "Any other symptoms like cough or fever?",
    options: [
      { label: "Yes", next: "coughFever36" },
      { label: "No", next: "post36" }
    ]
  },
  coughFever36: {
    message: "Consult cough/fever chatbot. ORS + Tab Andial + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  },
  post36: {
    message: "ORS + Tab Andial + ECONORM sachets.",
    options: [{ label: "Restart", next: "step1" }]
  }
};

export default chatbotSteps;
