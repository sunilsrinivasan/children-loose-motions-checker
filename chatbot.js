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

  // Observation for fewer than 3
  observe12: {
    message: "Observe for 12 hours. Give plenty of oral fluids or breast feeds.",
    options: [ { label: "Restart", next: "step1" } ]
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
    options: [ { label: "Restart", next: "step1" } ]
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
  step8: { message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?", options: [ { label: "Yes", next: "consultDoctor" }, { label: "No", next: "step9" } ] },
  step9: { message: "Is your child only on breast feeds?", options: [ { label: "Yes", next: "breastOnly" }, { label: "No", next: "step10" } ] },
  breastOnly: { message: "Likely normal, no medicine needed. For rash around anus: apply Happynap/Rashfree cream 6× daily. Continue routine feeds.", options: [ { label: "Restart", next: "step1" } ] },
  step10: { message: "Is your baby vomiting?", options: [ { label: "Yes", next: "vomitChatbot" }, { label: "No", next: "step11" } ] },
  vomitChatbot: { message: "Consult the vomiting chatbot. For loose motions: ZIORAL or ZN20 drops 0.5 ml (10 drops) daily for 2 weeks. For rash: Happynap/Rashfree cream 6× daily. Continue routine feeds.", options: [ { label: "Restart", next: "step1" } ] },
  step11: { message: "Is your child passing blood in the stools?", options: [ { label: "Yes", next: "consultDoctor" }, { label: "No", next: "step12" } ] },
  step12: { message: "Is your baby voiding urine?", options: [ { label: "Yes", next: "step13" }, { label: "No", next: "observeUrine12" } ] },
  observeUrine12: { message: "Observe 12 h and monitor urine. If tired or not voided, consult doctor. Otherwise: ZIORAL/ZN20 0.5 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },
  step13: { message: "Any other symptoms like cough or fever?", options: [ { label: "Yes", next: "coughFeverChatbot" }, { label: "No", next: "step14" } ] },
  coughFeverChatbot: { message: "Consult cough/fever chatbot. Zinc drops & cream as above.", options: [ { label: "Restart", next: "step1" } ] },
  step14: { message: "Do you use bottle feeds?", options: [ { label: "Yes", next: "bottleFeedsYes" }, { label: "No", next: "bottleFeedsNo" } ] },
  bottleFeedsYes: { message: "Stop bottle feeds; use paladai/spoon. Zinc drops & cream as above.", options: [ { label: "Restart", next: "step1" } ] },
  bottleFeedsNo: { message: "Zinc drops & cream as above.", options: [ { label: "Restart", next: "step1" } ] },

  // Branch: 6m–1y (Steps 15–20)
  step15: { message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?", options: [ { label: "Yes", next: "consultDoctor" }, { label: "No", next: "step16" } ] },
  step16: { message: "Is your baby voiding urine?", options: [ { label: "Yes", next: "step17" }, { label: "No", next: "observeUrine16" } ] },
  observeUrine16: { message: "Observe 12 h; if tired/not voided, consult doctor. Give ORS sips + zinc 1 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },
  step17: { message: "Is your baby vomiting?", options: [ { label: "Yes", next: "vomitChatbot17" }, { label: "No", next: "step18" } ] },
  vomitChatbot17: { message: "Consult vomiting chatbot. ORS sips + zinc 0.5 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },
  step18: { message: "Is your child passing blood in the stools?", options: [ { label: "Yes", next: "consultDoctor" }, { label: "No", next: "step19" } ] },
  step19: { message: "Any other symptoms like cough or fever?", options: [ { label: "Yes", next: "coughFeverChatbot19" }, { label: "No", next: "step20" } ] },
  coughFeverChatbot19: { message: "Consult cough/fever chatbot. ORS sips + zinc 1 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },
  step20: { message: "Do you use bottle feeds?", options: [ { label: "Yes", next: "bottleFeeds20Yes" }, { label: "No", next: "bottleFeeds20No" } ] },
  bottleFeeds20Yes: { message: "Stop bottle feeds; use paladai/spoon. ORS sips + zinc 1 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },
  bottleFeeds20No: { message: "ORS sips + zinc 1 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] },

  // Branch: 1–3y (Steps 21–24)
  step21: { message: "Any additional symptom like incessant cry, pain on touching ear, rash, or tiredness?", options: [ { label: "Yes", next: "consultDoctor" }, { label: "No", next: "step22" } ] },
  step22: { message: "Is your baby voiding urine?", options: [ { label: "Yes", next: "step23" }, { label: "No", next: "observeUrine22" } ] },
  observeUrine22: { message: "Observe 12 h; if tired/not voided, consult doctor. ORS sips + zinc 1 ml daily for 2 w + cream.", options: [ { label: "Restart", next: "step1" } ] }
  step23: { message: "Is your child passing blood in the stools?"
]
