const questions = [
  {
    question: "Which of the following  is perseveration?",
    answers: [
      { text: "Persistent and inappropriate repetition of the same thoughts", correct: true },
      { text: "Feeling of distress in a patient with schizophrenia", correct: false },
      { text: "Characteristic of schizophrenia", correct: false },
      { text: "Characteristic of obsessive compulsive disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is most common form of acute transient psychotic disorder?",
    answers: [
      { text: "Acute polymorphic psychotic disorder without symptoms of schizophrenia", correct: true },
      { text: "Acute polymorphic psychotic disorder with symptoms of schizophrenia", correct: false },
      { text: "Acute schizophrenia – like psychotic disorder", correct: false },
      { text: "Acute transient psychotic disorder, unspecified", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following is not risk factors for development of delusional disorders?",
    answers: [
      { text: "Early age", correct: true },
      { text: "Social Isolation", correct: false },
      { text: "Recent immigration", correct: false },
      { text: "Sensory deprivation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a type of somatic delusion? ",
    answers: [
      { text: "Othello syndrome", correct: true },
      { text: "Delusional parasitosis", correct: false },
      { text: "Bromosis", correct: false },
      { text: "Dysmorphic delusion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hallucinations is more common in a delirious patient?",
    answers: [
      { text: "Visual", correct: true },
      { text: "Tactile", correct: false },
      { text: "Auditory", correct: false },
      { text: "Olfactory", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following defect of conation is seen in?",
    answers: [
      { text: "Catatonic schizophrenia", correct: true },
      { text: "Disorganized schizophrenia", correct: false },
      { text: "Paranoid schizophrenia", correct: false },
      { text: "Simple schizophrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following neurotransmitter abnormality“Anhedonia” seen in schizophrenia is linked to?",
    answers: [
      { text: "Norepinephrine", correct: true },
      { text: "Serotonin", correct: false },
      { text: "Glutamate", correct: false },
      { text: "GABA", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following genetic disease schizophrenia is a common presentation? ",
    answers: [
      { text: "DiGeorge syndrome ", correct: true },
      { text: "Down's syndrome", correct: false },
      { text: "Klinefelter's syndrome ", correct: false },
      { text: "Neurofibromatosis ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antipsychotic drug  is associated with raised QT interval? ",
    answers: [
      { text: "Risperidone ", correct: true },
      { text: "Phenobarbitone", correct: false },
      { text: "Fluoxetine", correct: false },
      { text: "Midazolam", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following disorder is the most commonly resebles  as psychosis resulting due to chronic amphetamine intake?",
    answers: [
      { text: "Paranoid schizophrenia ", correct: true },
      { text: "Mania", correct: false },
      { text: "Delirium", correct: false },
      { text: "Dissociative disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following atypical agent has low risk of weight gain ? ",
    answers: [
      { text: "Aripiprazole", correct: true },
      { text: "Clozapine", correct: false },
      { text: "Quetiapine", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is called delusional belief about subjective double?",
    answers: [
      { text: "Doppelganger", correct: true },
      { text: "Autoscopy", correct: false },
      { text: "Delusion of identification ", correct: false },
      { text: "Depersonalization", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young patient is admitted to your hospital with acute psychosis. He wakes up and asks for his wife even though she is present in the same room. Upon seeing her, he starts beating her, accusing her of being a nurse, masquerading as his wife. He also says that the nurse was trying to give him the wrong medication in an attempt to harm him. What is your diagnosis?",
    answers: [
      { text: "Capgras syndrome", correct: true },
      { text: "Fregoli syndrome", correct: false },
      { text: "Delusion of subjective doubles", correct: false },
      { text: "Othello syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 26-year old male is brought to casualty emergency service. He is aggressive and violent, requiring the efforts of several staff to restrain him. When questioned, the patient is paranoid. Physical exam shows him to have muscle rigidity and pupils that move up and down rapidly. What neurochemical mechanisms are most likely to account for the patient’s current behaviour?",
    answers: [
      { text: "Antagonism of the glutamate receptors", correct: true },
      { text: "Reduction in levels of GABA", correct: false },
      { text: "Partial agonist of the postsynaptic serotonin receptors", correct: false },
      { text: "Antagonism of the locus cerelous pathway and blocking of substance P", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old man suspects his wife of having an affair with his friend. He also thinks that other people are making fun of him. His wife and other friends try convincing him, but he is not convinced. Other than this peculiar behaviour for the past 3 months, there is no other odd behaviour. He manages other activities well. What is the diagnosis?",
    answers: [
      { text: "Delusional disorder", correct: true },
      { text: "Acute transient psychosis ", correct: false },
      { text: "Paranoid personality disorder ", correct: false },
      { text: "Schizophrenia ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A35-year-old patient presents with mental confusion, visual and auditory hallucinations, perceived changes of body shape, swelling of the tongue and a fear of impending death after he was treated for primary chancre of syphilis with an intramuscular injection. What is the likely diagnosis?",
    answers: [
      { text: "Hoigne Syndrome", correct: true },
      { text: "Undiagnosed Psychosis", correct: false },
      { text: "Jarisch-Herxheimer Reaction", correct: false },
      { text: "Adjustment Reaction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A middle aged man suddenly becomes detached, and starts writing poems and stories, although it couldn’t be understood by anyone because of language and context was also not rational. Which of the following is the most probable diagnosis?",
    answers: [
      { text: "Schizophrenia", correct: true },
      { text: "Genius writer", correct: false },
      { text: "Mania", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22-year-old male patient has been brought to OPD by his family members with history of loosening of clothes at inappropriate places. There are several times when he laughs inappropriately during the interview. His speech is confusing and unpredictably shifts from one topic to another. There is also history of mirror gazing and giggling to self. What is the most likely diagnosis?",
    answers: [
      { text: "Hebephrenic Schizophrenia", correct: true },
      { text: "Simple Schizophrenia", correct: false },
      { text: "Catatonic Schizophrenia", correct: false },
      { text: "Paranoid Schizophrenia", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "A 38-year-old patient on haloperidol developed hyperprolactinemia and wishes to change her drug. Which of the following drugs could benefit her the most?",
    answers: [
      { text: "Clozapine", correct: true },
      { text: "Ouetlapine", correct: false },
      { text: "Rlsperidone", correct: false },
      { text: "Zonisamide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A man coining from mountain whose wife died 6 months prior says that his wife appeared to him and asked him to join her. Which of the following disorder is the most likely to be?",
    answers: [
      { text: "Normal grief", correct: true },
      { text: "Grief psychosis", correct: false },
      { text: "Bereavement reaction", correct: false },
      { text: "Supernatural phenomenon", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman is seen in an outpatient psychiatric clinic for the chief complaint of a depressed mood for 4 months. During the interview, she gives very long, complicated explanations and many unnecessary details before finally answering the original questions. Which of the following psychiatric findings best describes this style of train of thought?",
    answers: [
      { text: "Circumstantiality", correct: true },
      { text: "Loose assosiation ", correct: false },
      { text: "Neologism", correct: false },
      { text: "Flight of ideas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22-year-old Babu had fight with his neighbour’s son. Next day going to the bus stop, he felt that 2 uniformed policemen were following him. On reaching home he was frightened and he felt that the neighbours were using radio waves to control his mind. Which of the following is this symptom?",
    answers: [
      { text: "Passivity phenomenon", correct: true },
      { text: "Delusion persecution", correct: false },
      { text: "auditory hallucination", correct: false },
      { text: "Thought insertion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 18-year-old male, history of firm unshakable belief of hands passing through the body & gripping his lungs indicates. Which of the following disorder is most likely to be?",
    answers: [
      { text: "Schizophrenia", correct: true },
      { text: "Depression", correct: false },
      { text: "Somatization", correct: false },
      { text: "Asthma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old university student had a fight with the neighbouring boy. On the next day while out, he started feeling that two men in police uniform were observing his movements. When he reached home in the evening he was frightened. He expressed that police were after him and would arrest him. His symptoms represent:",
    answers: [
      { text: "Delusion of persecution", correct: true },
      { text: "Ideas of reference", correct: false },
      { text: "Passivity", correct: false },
      { text: "Thought insertion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old man is brought to the clinic in an agitated state. When asked how he is feeling, he replies, “I am wonderful, the most wonderful in the universe. The universal gym is my invention, but Jim is just Dandy…. Dandy was my name of my dad’s friend. A friend in need is a friend indeed. I need a beautiful girl right now to have dinner with… yesterday night I had Mexican dinner. What is this phenomenon known as?",
    answers: [
      { text: "flight of ideas", correct: true },
      { text: "tangentiality", correct: false },
      { text: "loosening of association", correct: false },
      { text: "circumstantiality", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is bipolar type II?",
    answers: [
      { text: "Hypomania+ major depression ", correct: true },
      { text: "Repeated episodes of mania ", correct: false },
      { text: "Mania + hypomania", correct: false },
      { text: "Mania + depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is recollection of repressed memories with appropriate affective response by?",
    answers: [
      { text: "Abreaction", correct: true },
      { text: "Hypnosis", correct: false },
      { text: "Dissociation of affect", correct: false },
      { text: "Free association", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  is commonly associated with agoraphobia? ",
    answers: [
      { text: "Panic disorder ", correct: true },
      { text: "Bipolar disorder ", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "OCD", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is seen in leaden paralysis?",
    answers: [
      { text: "Atypical depression", correct: true },
      { text: "lnvolutional melancholia", correct: false },
      { text: "Psychotic depression", correct: false },
      { text: "Major depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the followinf are not neuroanatomical structures concerned with amnestic disorders?",
    answers: [
      { text: "Arcuate nucleus", correct: true },
      { text: "Hippocampus", correct: false },
      { text: "Amygdala", correct: false },
      { text: "Mammillary bodies", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following disorder is associated with the learned helplessness theory?",
    answers: [
      { text: "Depression", correct: true },
      { text: "Mania", correct: false },
      { text: "Anxiety", correct: false },
      { text: "Phobia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is increased in depression?",
    answers: [
      { text: "Cortizol", correct: true },
      { text: "Dopamine", correct: false },
      { text: "Nor-epinephrin", correct: false },
      { text: "Serotonin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For which of the following disorder Esketamine, the drug that has been approved by FDA in 2019, has been approved for treatment ?",
    answers: [
      { text: "Depression", correct: true },
      { text: "Resistant schizophrenia", correct: false },
      { text: "Bipolar disorder", correct: false },
      { text: "Ketamine dependence", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Feeding and Eating disorders are characterized by a persistent disturbance of eating or eating-related behavior that results in the altered consumption or absorption of food and that significantly impairs physical health or psychosocial functioning. Which is the most common eating disorder?",
    answers: [
      { text: "Binge eating disorder", correct: true },
      { text: "Bulimia nervosa", correct: false },
      { text: "Avoidant restriction food intake disorder", correct: false },
      { text: "Anorexia nervosa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following areas is less likely to play a role in depressive disorder?",
    answers: [
      { text: "Corpus callosum", correct: true },
      { text: "Hippocampus", correct: false },
      { text: "Anterior cingulate cortex", correct: false },
      { text: "Amigdala", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following medication is least effective against depression?",
    answers: [
      { text: "Valproate", correct: true },
      { text: "Lamotrigine", correct: false },
      { text: "Lithium", correct: false },
      { text: "Aripiprazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following diagnosis the period of normalcy is seen between two psychosis?",
    answers: [
      { text: "Manic depressive psychosis", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Alcoholism", correct: false },
      { text: "Depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  are not  indications for electroconvulsive therapy?",
    answers: [
      { text: "Increased intracranial tension", correct: true },
      { text: "Catatonic schizophrenia", correct: false },
      { text: "Severe depression", correct: false },
      { text: "Neuroleptic malignant syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old male presents to the OPD with decrease sleep, elation and tal1kativeness since 5 days. He also complains of irritability and distractibility. Which of the following is the diagnosis?",
    answers: [
      { text: "Hypomania", correct: true },
      { text: "Mania", correct: false },
      { text: "Anxiety disorder", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old female presents to the psychiatric OPD with decreased sleep, elation, and talkativeness for 1 month. She also complains of irritability and distractibility. Which of the following  is the diagnosis?",
    answers: [
      { text: "Mania", correct: true },
      { text: "Delusional disorder", correct: false },
      { text: "Depression", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 29-year-old patient is brought to the OPD in a state of euphoria. He was smiling and talking softly when he came in, then he was quiet for a while, but then he seemed to be excited and he suddenly started to laugh for no reason. He was diagnosed to have mania. His mood and affect will be, respectively, recorded as:",
    answers: [
      { text: "Elevated mood and labile affect", correct: true },
      { text: "Elevated mood and energetic affect", correct: false },
      { text: "Elevated mood and restless affect", correct: false },
      { text: "Elevated mood and excited affect", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33-year-old man is speaking about his mother's death and laughing. Which of the following condition is the most likely to be?",
    answers: [
      { text: "Incongruent affect", correct: true },
      { text: "Labile affect", correct: false },
      { text: "Affective flattening", correct: false },
      { text: "Inappropriate affect", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 31-year-old woman comes to psychiatrist with history of spending a lot of time in washing her hands. She is distressed about it but says that she is not able to stop washing. This has started to affect her social life as well. Which of the following  is the best mode of treatment for her?",
    answers: [
      { text: "Exposure and response prevention", correct: true },
      { text: "Cognitive beharioval therapy", correct: false },
      { text: "Systematic desensitization", correct: false },
      { text: "Pharmacological agents", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 34-year-old housewife reports a three-month history of feeling low, lack of interest in activities, lethargy, multiple body-aches, ideas of worthlessness, decreased appetite and disturbed sleep with early morning awakening. Which of the following treatment is most likely to use?",
    answers: [
      { text: "Anti-depressants", correct: true },
      { text: "Anti-psychotic", correct: false },
      { text: "Anxiolytics", correct: false },
      { text: "Hypno-sedatives", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A middle aged man presented with pain in back, lack of interest in recreational activities, low mood, lethargy, decreased sleep and appetite for two months. There was no history suggestive of delusions or hallucinations. He did not suffer from any chronic medical illness. There was no family history of psychiatric illness. Routine investigations including hemogram, renal function tests, liver function tests electrocardiogram did not reveal any abnormality. This patient should be treated with",
    answers: [
      { text: "Sertraline", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Alprazolam", correct: false },
      { text: "Olanzapine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient presented in casualty with a history of sudden palpitation, sensation of impending doom and constriction in his chest. This lasted for about 10-15 minutes after which he became all right. Which the of following disorder is most likely to be?",
    answers: [
      { text: "Panic attack", correct: true },
      { text: "Personality disorder", correct: false },
      { text: "Generalized anxiety disorder", correct: false },
      { text: "Phobia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old female patient present with history of depressed mood, loss of appetite insomnia and no interest in surroundings for the past 1 yr. These symptoms followed soon after a business loss 1 year back. Which of the following statements is true regarding the management of this patient?",
    answers: [
      { text: "Antidepressant treatment based on the side effect profile of the drugs", correct: true },
      { text: "SSRI is the most efficacious of the available drugs", correct: false },
      { text: "No treatment is necessary as it is due to business loss", correct: false },
      { text: "Combination therapy of 2 antidepressant drugs", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "A 15-year-old boy feels that the dirt has hung onto him whenever he passes through the dirty street. This repetitive thought causes much distress and anxiety. He knows that there is actually no such thing after he has cleaned once but he is not satisfied and is compelled to think so. This has led to social withdrawal. He spends much of his time thinking about the dirt and contamination. This has affected his studies also. The most likely diagnosis is",
    answers: [
      { text: "Obsessive compulsive disorder", correct: true },
      { text: "Conduct disorder", correct: false },
      { text: "Agoraphobia", correct: false },
      { text: "Adjustment disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old man has presented with increased alcohol consumption and sexual indulgence, irritability, lack of sleep, and not feeling fatigued even on prolonged periods of activity. All these changes have been present for 3 weeks. TWhich of the following is most likely to be?",
    answers: [
      { text: "Mania", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Alcohol depense", correct: false },
      { text: "Impulsive control disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 41-year-old patient comes in stuporous condition. Patient's parents give history of patientbeing continually sad and suicidal attempts and not eating and sleeping for most of the time. Which of the following is the treatment?",
    answers: [
      { text: "ECT", correct: true },
      { text: "Antidepressant", correct: false },
      { text: "Antipsychotic", correct: false },
      { text: "Sedative", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following sexual identity does not depend on?",
    answers: [
      { text: "Upbringing", correct: true },
      { text: "Secondary sexual characters", correct: false },
      { text: "Gonads", correct: false },
      { text: "Chromosomal pattern", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a feature of male hypoactive sexual desire disorder?",
    answers: [
      { text: "Symptoms for a minimum duration of 6 months", correct: true },
      { text: "Symptoms do not cause distress to the patient", correct: false },
      { text: "Severe relationship problem exists", correct: false },
      { text: "Presence of a nonsexual mental disorder", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which among the following is not a characteristic of Post traumatic stress Disorder (PTSD)? ",
    answers: [
      { text: "Doesn't develop after 6 months of stress ", correct: true },
      { text: "Insomnia and hypervigilance ", correct: false },
      { text: "Severe traumatic injury", correct: false },
      { text: "Patient re-experience trauma in the form of flash backs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following features is not characteristic of Post-traumatic stress disorder? ",
    answers: [
      { text: "Delusion", correct: true },
      { text: "Night mares ", correct: false },
      { text: "Avoidance", correct: false },
      { text: "Flashbacks", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is considered as an anxiolytic substance?",
    answers: [
      { text: "Neuropeptide", correct: true },
      { text: "Cholecystokinin", correct: false },
      { text: "Caffeine", correct: false },
      { text: "Carbondioxide", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "To which of the following domestic squalor is related? ",
    answers: [
      { text: "Hoarding disorder ", correct: true },
      { text: "Body dysmorphic disorder", correct: false },
      { text: "Somatoform disorder", correct: false },
      { text: "Olfactory reference syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is things that a person says or does to disclose himself or herself as having the status of boy or man, girl or woman?",
    answers: [
      { text: "Gender role", correct: true },
      { text: "Sexual behavior", correct: false },
      { text: "Sexual orientation", correct: false },
      { text: "Gender identity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is called n individual's sense of maleness or femaleness?",
    answers: [
      { text: "Gender identity", correct: true },
      { text: "Sexual identity", correct: false },
      { text: "Gender role", correct: false },
      { text: "Sexual behaviour", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is FDA approved for the treatment of female hypoactive sexual desire disorder?",
    answers: [
      { text: "Flibanserin", correct: true },
      { text: "Fluoxetin", correct: false },
      { text: "Sildenafil", correct: false },
      { text: "Flun itrazepam", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are not criteria for substance use disorder?",
    answers: [
      { text: "Usage of illegal drugs", correct: true },
      { text: "Withdrawal symptoms on abstinence", correct: false },
      { text: "Persistent craving to take the drug", correct: false },
      { text: "Tolerance towards the drug", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most common cause of erectile dysfunction in middle-aged men is ",
    answers: [
      { text: "Psychogenic", correct: true },
      { text: "Vasculogenic", correct: false },
      { text: "Diabetes mellitus ", correct: false },
      { text: "Hypothyroidism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Parasomnias are disorders of partial arousal. In general, the parasomnias are a diverse collection of sleep disorders characterized by physiologic or behavioral phenomena that occur during or are potentiated by sleep. Which of the following conditions is not a parasomnia? ",
    answers: [
      { text: "Narcolepsy", correct: true },
      { text: "Nocturnal enuresis", correct: false },
      { text: "Somnambulism", correct: false },
      { text: "Somniloquy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old patient diagnosed with depression, on Phenelzine, consumed red wine and came to the emergency department with headache, nausea, vomiting and diaphoresis. On examination: BP- 1910/120.",
    answers: [
      { text: "He is suffering from Serotonin syndrome", correct: true },
      { text: "Should be treated with Phentolamine", correct: false },
      { text: "The condition is less common with Selegilline.", correct: false },
      { text: "Tyramine is involved the pathogenesis of the condition", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "After use of some drug, a person develops episodes of rage in which he runs about and indiscriminately injures a person who is encountered in way. He is probably addict of: ",
    answers: [
      { text: "Cannabis ", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Opium ", correct: false },
      { text: "Cocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Mr. Sharma, a 50 years old married male had come to OPD. He had a history of consuming alcohol for 20years and for past two years consuming alcohol in dependence pattern. He wishes to quit alcohol now in view of his daughter's marriage. The following can act as an anticraving agent for him except:",
    answers: [
      { text: "Lorazepam", correct: true },
      { text: "Naltrexone", correct: false },
      { text: "Topiramate", correct: false },
      { text: "Acamprosate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Mr. Damodhar had a history of consuming alcohol for 15 years and for past two years consuming alcohol in dependence pattern. He consumed all varieties of alcohol about 360ml/day. The last drink was a week ago with 360ml of whiskey. At the time of admission, he was not oriented to time, place, and person, very restless, agitated, talking irrelevantly, had palpitation, sweating, tremors, expressing ____ which is characteristic in this case. ",
    answers: [
      { text: "Hallucination", correct: true },
      { text: "Illusion", correct: false },
      { text: "Delusion", correct: false },
      { text: "All of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A middle-aged man complains of lack of sleep during the night time. The duration of the time he is truly asleep or awake can be ascertained by which of the following?",
    answers: [
      { text: "Actigraphy", correct: true },
      { text: "Kymograph", correct: false },
      { text: "Barograph ", correct: false },
      { text: "Plethysmography", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old female patient reports that she has lost her appetite and interest in her typical hobbies during the last three months, and that she frequently feels that life is not worth living. In this patient, the percentage of REM sleep, delta sleep, and REM latency are all more likely to be",
    answers: [
      { text: "increase,decrease,decrease ", correct: true },
      { text: "increase, decrease, increase", correct: false },
      { text: "decrease, stay the same, increase ", correct: false },
      { text: "decrease, decrease, increase", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Bedwetting >5 nights per week and episodes of daytime urgency in an 11- year-old girl.HPI: Mom has tried limiting fluid intake after 5 p.m. and placing her on the toilet at night. She's never been dry for more than six months. She is quite humiliated. FHX: My older sister was prone to bedwetting. Which of the following is the most effective treatment for nocturnal enuresis in children? ",
    answers: [
      { text: "Desmopressin", correct: true },
      { text: "lmipramine", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "Benzodiazepines", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The World Health Organization's AUDIT is the most widely tested instrument for screening in primary health care. Alongside with the companion publication on the AUDIT, WHO has also produced a manual to aid primary health care workers in administering brief interventions to persons whose consumption has become hazardous or harmful to their health. Audit test is used for which of the following? ",
    answers: [
      { text: "Alcohol use disorder", correct: true },
      { text: "Opioid use disorder", correct: false },
      { text: "Sexual abuse ", correct: false },
      { text: "Cannabis abuse", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "54-year-old lady with cirrhosis and an alcohol use disorder goes to the emergency room with a change in mental status. She moves slowly during the assessment, is disoriented to time and place, and has asterixis. The ammonia level is high. On an electroencephalogram (EEG), which of the following findings can be seen? ",
    answers: [
      { text: "Increased occipital alpha activity", correct: true },
      { text: "Periodic sharp-wave complexes ", correct: false },
      { text: "3 Hz spike-and-wave complexes", correct: false },
      { text: "Triphasic waves", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "A married  25-year-old woman was brought to opd, reporting sleepwalking events two to three times every night that had recurred since childhood. Most events were characterized by the patient running out of bed and screaming \"Help!\" or \"I am going to die!\" The patient would at times fall off the bed, hitting her head or limbs. These episodes were described by the patient's husband. Benzodiazepines are used in treatment of somnambulism. Which of the following is the most likely to be?",
    answers: [
      { text: "Decrease the duration of NREM Ill and IV", correct: true },
      { text: "Increase the duration of REM sleep ", correct: false },
      { text: "Increase the duration of NREM Ill and IV", correct: false },
      { text: "Decrease the duration of REM sleep", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "One year previously, Mrs. T's physician prescribed her methylphenidate for narcolepsy due to daily irresistible sleep attacks and episodes of a sudden loss of muscle tone when she became emotionally excited. After taking the medication, Mrs. T became asymptomatic and was able to work effectively and have an active social life with family and friends. Central deficiency of which of the following neurotransmitters is thought to underlie narcolepsy? ",
    answers: [
      { text: "Hypocretin", correct: true },
      { text: "Dopamine", correct: false },
      { text: "Norepinephrine ", correct: false },
      { text: "Acetylcholine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 50-year-old lady while driving a car meets with an accident. She was admitted in an ICU for 6 months. After being discharged she often gets up in night and feels terrified. She is afraid to sit in a car again. Which of the following is most ikely to be?T",
    answers: [
      { text: "Post traumatic stress disorder", correct: true },
      { text: "Phobia", correct: false },
      { text: "Conversion disorder", correct: false },
      { text: "Anxiety disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "After repeated exposure to a nurse in a white coat followed by an injection, a child learns to cover and cry in response to anyone approaching in a white coat. Which of the following can be explained as an example of  child’s behaviour?",
    answers: [
      { text: "Classical conditioning", correct: true },
      { text: "Negative reinforcement", correct: false },
      { text: "positive reinforcement", correct: false },
      { text: "observational learning", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are not features of personality disorders?",
    answers: [
      { text: "Starts in early childhood", correct: true },
      { text: "They are not due to disease", correct: false },
      { text: "They are ego-syntonic", correct: false },
      { text: "They are fixed and inflexible", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "What is the average number of sessions in cognitive behavioral therapy?",
    answers: [
      { text: "12 to 20", correct: true },
      { text: "20 to 30", correct: false },
      { text: "30 to 35", correct: false },
      { text: "35 to 45", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is true regarding dissociative fugue? ",
    answers: [
      { text: "The fugue could be a purposeful journey away from home.", correct: true },
      { text: "It starts in adolescence. ", correct: false },
      { text: "All affected patients develop depersonalization during fugue. ", correct: false },
      { text: "It is more common in women. ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not classified under dissociative disorders as per DSM-5?",
    answers: [
      { text: "Conversion disorder", correct: true },
      { text: "Multiple identity disorder", correct: false },
      { text: "Derealization disorder", correct: false },
      { text: "Depersonalisation disorder", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following is a negative dissociation symptom?",
    answers: [
      { text: "Amnesia", correct: true },
      { text: "Fragmentation of identity", correct: false },
      { text: "Depersonalization", correct: false },
      { text: "DereaIization", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are not true statements about dissociative disorders?",
    answers: [
      { text: "Involve a conscious defence mechanism", correct: true },
      { text: "Often preceded by psychological trauma", correct: false },
      { text: "Associated with disruption of neurocognitive functions", correct: false },
      { text: "Experienced as inability to access information that no m1ally are readily amenable to access", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following is most important to ask about during the initial interview to assess suicidal risk? ",
    answers: [
      { text: "History of prior suicide attempts ", correct: true },
      { text: "History of suicide attempts in the family ", correct: false },
      { text: "History of substance use disorder ", correct: false },
      { text: "History of having guns at home", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a neurological illness that mimics schizophrenic speech disturbance?",
    answers: [
      { text: "Wernicke’s aphasia", correct: true },
      { text: "Alexia with agraphia", correct: false },
      { text: "Broca’s aphasia", correct: false },
      { text: "Transcortical aphasia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Clinical reports suggest that subcortical syndromes involve less severe intellectual and memory dysfunction and lack the aphasia, agnosia, and apraxia typical of the cortical dementias . Which of the following are not causes of subcortical dementia?",
    answers: [
      { text: "Alzheimer's disease ", correct: true },
      { text: "Parkinson's disease", correct: false },
      { text: "Supranuclear palsy", correct: false },
      { text: "HIV associated dementia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following diagnostic technique is the most appropriate to identify anatomical changes in the brain of an 80-year-old female patient with Alzheimer disease?",
    answers: [
      { text: "CT   ", correct: true },
      { text: "PET", correct: false },
      { text: "EEG", correct: false },
      { text: "Evoked EEG", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the most appropriate technique differentiate delirium from dementia in a 75-year-old male patient?",
    answers: [
      { text: "EEG", correct: true },
      { text: "PET", correct: false },
      { text: "CT", correct: false },
      { text: "evoked EEG", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is suggestive of an organic cause of behavioral symptoms?",
    answers: [
      { text: "Prominent visual hallucinations", correct: true },
      { text: "Auditory hallucinations", correct: false },
      { text: "Delusion of guilt", correct: false },
      { text: "Formal thought disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is in Alzheimer disease patients, the major effect on neurotransmitter systems of tacrine, donepezil, rivastigmine, and galantamine to?",
    answers: [
      { text: "increase Ach availability", correct: true },
      { text: "decrease dopamine availability", correct: false },
      { text: "increase dopamine availability", correct: false },
      { text: "decrease Ach availability", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Geeta is preoccupied about her ear size and repeatedly looks into the mirror. Which of the following disorder is she possibly suffering from?",
    answers: [
      { text: "Dysmorphophobia ", correct: true },
      { text: "Obsessive compulsive disorder ", correct: false },
      { text: "Normal behaviour", correct: false },
      { text: "Hypochondriacal delusion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year man had undergone cardiac bypass surgery 2 days back. Now he stated forgetting things and was not able to recall names and phone number of his relatives. Which of the following  is the probable diagnosis?",
    answers: [
      { text: "Cognitive dysfunction", correct: true },
      { text: "Post traumatic psychosis", correct: false },
      { text: "Depression", correct: false },
      { text: "Alzheimer’s disease", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old male is described as emotionally cold, self-absorbed and pre-occupied with fantasies. He often remains alone, detached from social relationships and prefers solitary activities. This is diagnosed as which type of personality disorder?",
    answers: [
      { text: "Schizoid", correct: true },
      { text: "Obsessive compulsive", correct: false },
      { text: "Paranoid", correct: false },
      { text: "Schizotypal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old patient presented short lasting episodic behavioural change with agitation & dream like state with thrashing movement of his limbs. He does not recall these episodes & has not apparent precipitating factor. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Temporal lobe epilepsy", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Panic episodes", correct: false },
      { text: "Dissociative disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Mohan, a 7-year old boy, does not like to eat green vegetables. In order to encourage him to eat green vegetables, his mother would offer him a piece of his favourite chocolate, every time he would finish his green vegetables. Such a type of behaviour change is based on which of the following paradigms?",
    answers: [
      { text: "Operant conditioning", correct: true },
      { text: "Classical conditioning", correct: false },
      { text: "Social learning", correct: false },
      { text: "Coping strategy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old man had undergone a cardiac bypass surgery 2 days back. Now he started forgetting things and was not able to recall names and phone numbers of his relatives. Which of the following is the probable diagnosis?",
    answers: [
      { text: "Cognitive dysfunction", correct: true },
      { text: "Post-traumatic psychosis", correct: false },
      { text: "Depression", correct: false },
      { text: "Alzheimer's disease", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "70-year-old man presents with h/o prosopagnosia, loss of memory, 3rd person hallucinations since 1 month. On examination deep tendon reflexes are increased, mini-mental examination score is 20/30. What is most likely diagnosis?",
    answers: [
      { text: "Alzheimer's disease ", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Dissociative amnesia", correct: false },
      { text: "Psychotic disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Chandu, 32-year-old presents with abdominal pain and vomiting. He also complains of some psychiatric symptoms and visual hallucinations. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Intermittent porphyria", correct: true },
      { text: "Hypothyroidism", correct: false },
      { text: "Hyperthyroidism", correct: false },
      { text: "Hysteria", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old man, who had been hospitalized for an acute pneumonia 3 days previously, starts to shout in the bed, stating that, “someone has come to room to kill him.” He then gets out of bed and begins pulling out his IV line. On examination, he is not oriented to time or place. Which of the following diagnoses best fits this patient’s clinical picture?",
    answers: [
      { text: "Delirium", correct: true },
      { text: "Fugue state", correct: false },
      { text: "Dementia", correct: false },
      { text: "Agoraphobia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Two brothers have been fighting. The mother says to one of her sons, “Go to your room until you apologize to your brother for hitting him!” The mother’s words are an example of the application of",
    answers: [
      { text: "negative reinforcement", correct: true },
      { text: "punishment", correct: false },
      { text: "Positive reinforcement", correct: false },
      { text: "Classical conditioning", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 64-year-old man is brought to see his physician by his wife. She notes that over the past year he has experienced a slow, stepwise decline in his cognitive functioning. One year ago she felt he was almost normal, but now he gets lost around the house and can’t remember simple directions. The patient insists that he feels fine, though he is depressed about his loss of memory. He is eating and sleeping well. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Multi-infarct dementia", correct: true },
      { text: "Mood disorder secondary to a general medical condition", correct: false },
      { text: "Delirium", correct: false },
      { text: "Major depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old man is seeing a male psychologist for dynamic psychotherapy. He feels very angry with the male psychologist as he finds that the male psychologist is exerting his authority like his abusive father. Which of the following statement is known as the phenomenon?",
    answers: [
      { text: "Transference", correct: true },
      { text: "Boundary violation", correct: false },
      { text: "Countertransference", correct: false },
      { text: "Acting out", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  does not include healthy thinking?",
    answers: [
      { text: "Clarity", correct: true },
      { text: "Constancy", correct: false },
      { text: "Organization", correct: false },
      { text: "Continuity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is known as perception that occurs when a sensory stimulus is present but is incorrectly perceived and misinterpreted?",
    answers: [
      { text: "Illusion", correct: true },
      { text: "Hallucination", correct: false },
      { text: "Delusion", correct: false },
      { text: "Delirium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following disorder delusion of doubles is seen? ",
    answers: [
      { text: "Capgras syndrome ", correct: true },
      { text: "Schizoaffective disorder", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "Paranoid Schizophrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following dopaminergic system schizophrenia is caused by over?",
    answers: [
      { text: "Mesolimbic/Mesocortical pathway ", correct: true },
      { text: "Tuberoinfundibular pathway ", correct: false },
      { text: "Nigrostriata I pathway ", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following disorder are related expressed emotions to?",
    answers: [
      { text: "Schizophrenia ", correct: true },
      { text: "Depression", correct: false },
      { text: "Mania ", correct: false },
      { text: "Somatoform disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not included in delusional misidentification syndromes?",
    answers: [
      { text: "Syndrome of objective doubles", correct: true },
      { text: "Fregoli syndrome ", correct: false },
      { text: "Syndrome of intermetamorphosis ", correct: false },
      { text: "Capgras syndrome", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Schizophrenia affects a 20-year-old man. His monozygotic twin brother is his only sibling. What is the probability {in percent) that his brother would acquire schizophrenia based on the findings of genetic studies?",
    answers: [
      { text: "0.47", correct: true },
      { text: "0.5", correct: false },
      { text: "0.55", correct: false },
      { text: "0.6", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the least likely good prognostic factor in  a patient with schizophrenia? ",
    answers: [
      { text: "Premorbid personality issues", correct: true },
      { text: "Acute onset", correct: false },
      { text: "Female gender", correct: false },
      { text: "History of mood disorder in the family", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following is the characteristic clinical manifestation of schizophrenia? ",
    answers: [
      { text: "Auditory hallucinations ", correct: true },
      { text: "Anxiety", correct: false },
      { text: "Confusion", correct: false },
      { text: "Visual hallucination", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following must include in crime: a) An illegal act b) A guilty mind c) A motive d) A plan of action?",
    answers: [
      { text: "a,b", correct: true },
      { text: "a, b, d", correct: false },
      { text: "a, b, c, d", correct: false },
      { text: "a, c, d", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Under the Mental Health Care Act 2017, a patient has, the right to choose his caretaker and future course of action in treatment. Which of the following  is known as this provision?",
    answers: [
      { text: "Advance directive", correct: true },
      { text: "MentaI will", correct: false },
      { text: "Future directive", correct: false },
      { text: "Treatment directive", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following disorder delusions are not likely to be seen in?",
    answers: [
      { text: "Conversion disorder", correct: true },
      { text: "Depression with psychotic symptoms", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "Dementia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year male is brought by his wife. He thinks that he had committed sins all through his life. He is very much depressed and has considered committing suicide but has not through hot do go about it. He had also attached sessions with a spiritual guru. He is not convinced by his wife that he has leaded a pious life. He does not want to hear anything on the contrary. How will you treat him?",
    answers: [
      { text: "Antipsychotic + Antidepressant", correct: true },
      { text: "Antidepressant with cognitive behavioural therapy", correct: false },
      { text: "Guidance & re counselling with guru", correct: false },
      { text: "Anti-depressant alone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22-year-old man is brought to the emergency department for evaluation. He appears confused but gives his name correctly. When asked his occupation, he says, “Jesus was a carpenter. I am the right hand of God. I don’t offend anyone. Sachin tendulkar plays square cut short nicely. Have u heard of the songs of new movie, race 3,”. What is this phenomenon known as?",
    answers: [
      { text: "Loosening of association", correct: true },
      { text: "Tangentiality", correct: false },
      { text: "circumstantiality", correct: false },
      { text: "Flight of ideas", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An 18-year-old man is seen by a psychiatrist in the emergency room. During the history, the patient is asked to describe his mood. He answers the following, “My mood is felicitating, I am up and down.” The patient is exhibiting which of the following thought disorders?",
    answers: [
      { text: "Tangentiality", correct: true },
      { text: "Thought blocking", correct: false },
      { text: "Clang association", correct: false },
      { text: "Neologism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 18-year-old girl feels very depressed as her father died one month back. She feels moody and won't join with others and she thinks about joining her father. Which of the following is the most likely to be?",
    answers: [
      { text: "Grief", correct: true },
      { text: "Post traumatic stress disorder", correct: false },
      { text: "Depression", correct: false },
      { text: "Bipolar disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 41-year-old patient complains of tingling sensation when flashed with lights. Which of the following  is known as  this phenomenon?",
    answers: [
      { text: "Reflex hallucination", correct: true },
      { text: "Functional hallucination", correct: false },
      { text: "Panoramic hallucination", correct: false },
      { text: "Pseudo hallucination", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An elderly house wife lost her husband who died suddenly of Myocardial infarction couple of years ago. They had been staying alone for almost a decade with infrequent visits from her son and grandchildren. About a week after the death she heard his voice clearly talking to her as he would in a routine manner from the next room. She went to check but saw nothing. Subsequently she often heard his voice conversing with her and she would also discuss her daily matters with him. This however, provoked anxiety and sadness of mood when she was preoccupied with his thought. Which of the following drugs should  she be treated with?",
    answers: [
      { text: "Clomipramine", correct: true },
      { text: "Alprazolam", correct: false },
      { text: "Electroconvulsive therapy", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Blood sample of a 45-year-old male shown increased levels of homovanillic acid. Which of the following this patient is most likely suffering from?",
    answers: [
      { text: "Schizophrenia ", correct: true },
      { text: "Dementia", correct: false },
      { text: "Depression", correct: false },
      { text: "Parkinson's disease", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 23-year-old engineering student is brought by his family to the hospital with history of gradual onset of suspiciousness, muttering and smiling without clear reason, decreased socialization, violent outbursts, and lack of interest in studies for 8 months. Mental status examination revealed a blunt affect, thought broadcast, a relatively preserved cognition, impaired judgment and insight. Which of the following is he the most likely to be suffering from?",
    answers: [
      { text: "Schizophrenia", correct: true },
      { text: "Depression", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "Anxiety disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old patient of schizophrenia on neuroleptics, his psychotic symptoms get relieved but developed sadness, talks less to others, remain on bed. Which of the following are not causes?",
    answers: [
      { text: "He is reacting to external stimuli", correct: true },
      { text: "Major depression", correct: false },
      { text: "Negative symptoms are still persisting", correct: false },
      { text: "Parkinsonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old man since 2 months’ suspects that his wife is having an affair with his boss. He thinks his friend is also involved from abroad and is providing technological support. He thinks people talk ill about him. His friends tried to convince him but he is not convinced at all. Otherwise he is normal, he doesn’t have any thought disorder or any other inappropriate behaviour. What is the most likely diagnosis?",
    answers: [
      { text: "Persistent delusion disorder", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Acute and Transient psychosis", correct: false },
      { text: "Paranoid Personality disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old boy c/o hearing of voices, aggressive behaviour since 2 days. He has fever since 2 days. When asked, his family said he has been muttering to self and gesticulating. There is no h/o of psychiatric illness. Which og the following is the most likely diagnosis? here is:",
    answers: [
      { text: "Acute psychosis", correct: true },
      { text: "Dementia", correct: false },
      { text: "Delirium", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 28-year-old female presents with complains of reduced sleep with disorganized behaviour since 9 months. She feels there is a camera fixed behind her head which always follows her. Which of the following is likely diagnosis?",
    answers: [
      { text: "Paranoid schizophrenia", correct: true },
      { text: "Psychotic depression", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "Insomnia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 16-year-old boy does not attend school because of the fear of being harmed by school mates. He thinks that his classmates laugh at and talk about him. He is even scared of going out to the market. Which of the following is he the most likely suffering from?",
    answers: [
      { text: "Schizophrenia", correct: true },
      { text: "Manic Depressive Psychosis", correct: false },
      { text: "Adjustment reaction", correct: false },
      { text: "Anxiety neurosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a component of Beck's triad of depression?",
    answers: [
      { text: "Worthlessness", correct: true },
      { text: "Anhedonia", correct: false },
      { text: "Low  mood", correct: false },
      { text: " Fatigability", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are known as chronic and milder features of bipolar disorder that are seen for over 2-3 years of time?",
    answers: [
      { text: "Cyclothymia", correct: true },
      { text: "Bipolar II", correct: false },
      { text: "Bipolar I", correct: false },
      { text: "Dysthymia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following steep changes occur in depression?",
    answers: [
      { text: "Deficits of slow-wave sleep", correct: true },
      { text: "An increase in total sleep time", correct: false },
      { text: "Increased REM latency", correct: false },
      { text: "Decreased rapid eye movement", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is useful in graded exposure?",
    answers: [
      { text: "Phobia", correct: true },
      { text: "Schizophrenia ", correct: false },
      { text: "Suicidal patients", correct: false },
      { text: "Schizoaffective disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not side effects occur due to 02 receptor I blockade?",
    answers: [
      { text: "Hypotension", correct: true },
      { text: "Hyperprolactinemia", correct: false },
      { text: "Affective flattening", correct: false },
      { text: "Rigidity in neuroleptic malignant syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an advantage of Transcranial Magnetic Stimulation (TMS) over Electroconvulsive Therapy (ECT)?",
    answers: [
      { text: "It enables focal stimulation of cerebral cortex", correct: true },
      { text: "shorter treatment course", correct: false },
      { text: "It induces seizure", correct: false },
      { text: "It is more effective tnan ECT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following side effects of Electro convulsive I Therapy (ECT) stays even after the treatment course ends?",
    answers: [
      { text: "Decreased retrograde memory", correct: true },
      { text: "Errors in visual-spatial function", correct: false },
      { text: "Diminished processing speed", correct: false },
      { text: "Decreased anterograde memory", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which statement is true about the MRI changes seen in depression?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Reduction in volume of amygdala cortex and hippocampus", correct: false },
      { text: "Hyperactivity of amygdale during emotional tasks", correct: false },
      { text: "Reduction in volume of prefrontal ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following disorder anniversary reaction is associated with? ",
    answers: [
      { text: "Grief disorder ", correct: true },
      { text: "Acute stress reaction ", correct: false },
      { text: "Adjustment reaction", correct: false },
      { text: "Post traumatic stress disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is correct sequence of normal sexual response cycle?",
    answers: [
      { text: "Desire - Excitement - Orgasm - Resolution", correct: true },
      { text: "Desire - Excitement - Resolution - Orgasm ", correct: false },
      { text: "Excitement - Desire - Resolution - Orgasm", correct: false },
      { text: "Excitement - Desire - Orgasm -  Resolution", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "Which of the following is not characterized by binge-eating disorder?",
    answers: [
      { text: "Compensatory Behaviour", correct: true },
      { text: "Eating much more rapidly than normal", correct: false },
      { text: "Eating large amounts of food when not feeling physically hungry", correct: false },
      { text: "Eating alone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is more commonly associated with anorexia nervosa?",
    answers: [
      { text: "Depression", correct: true },
      { text: "Social phobia ", correct: false },
      { text: "Obsessive compulsive disorder", correct: false },
      { text: "Delusional disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following favours substance-induced psychotic disorder?",
    answers: [
      { text: "Symptoms do not persist long after intoxicated/withdrawal state", correct: true },
      { text: "History of recurrent primary psychotic disorder", correct: false },
      { text: "The patient recognizes that the hallucinations are the result of substance or medication use", correct: false },
      { text: "Symptoms precede substance use", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "A 67-year-old lady is brought in by her 6 children saying that she has gone senile. Six months after her husband’s death she has become more religious, spiritual and gives lot of money in donation. She is occupied in too many activities and sleeps less. She now believes that she has a goal to change the society. She does not like being brought to the hospital and is argumentative on being questioned on her doings. Which of the following is most likely to be?",
    answers: [
      { text: "Acute manic excitement", correct: true },
      { text: "Delusion", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "Depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Rani was 9 months old when his pediatrician referred him to a gastroenterologist,and by his gastroenterologist for psychiatric evaluation due repeated involuntary regurgitation of food. Rani was born full term and had developed typically until 6 weeks of age when she began to regurgitate large amounts of milk just after feedings. Which of the following disorder is it associated with?",
    answers: [
      { text: "Rumination disorder", correct: true },
      { text: "Binge eating disorder", correct: false },
      { text: "Bulimia nervosa", correct: false },
      { text: "Anorexia nervosa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 17-year-old female is suffering from insomnia from last 6 months. She also informs about her changed eating habit.She eats alot of food even after eating her evening meals and also wakes up frequently at night to eat again . Due to such behaviour she usually skips herbreakfast. She doesn't seem much concerned about her appearance and weight gain. Which of the following disorder is the most likely to be?",
    answers: [
      { text: "Night eating syndrome ", correct: true },
      { text: "Bulimia nervosa", correct: false },
      { text: "Anorexia nervosa", correct: false },
      { text: "Binge eating disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 42-year-old male with a past history of a manic episode presents with an illness of 1-month duration characterized by depressed mood, anhedonia and profound psychomotor retardation. Which of the following is the most appropriate management strategy of treatment?",
    answers: [
      { text: "Antidepressants and mood stabilizers", correct: true },
      { text: "Antipsychotics and antidepressants", correct: false },
      { text: "Antipsychotics and mood stabilizers", correct: false },
      { text: "Antidepressants and benzodiazepines", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 85-year-old man is brought to the psychiatrist by his wife. She states that for the last 4 months, since the death of his son, the patient has been unable to sleep, has lost 2.5 kgs, has crying spells, and in the last week has been starting to talk about suicide. She notes that he has numerous other medical problems, including prostatic hypertrophy, hypertension, insulin-dependent diabetes, and a history of myocardial infarction. Which of the following medications is  the most appropriate treatment for this patient?",
    answers: [
      { text: "Sertraline", correct: true },
      { text: "Clonazepam", correct: false },
      { text: "Doxepin", correct: false },
      { text: "Amitriptyline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 17-year-old girl was brought to the psychiatrist by her mother with history that she was repeatedly found vomiting in the bathroom after taking meals, and that her meal size was extremely small.On examination the BMI of patient was 15 kg/m2 and her knuckles showed callous formation. Which of the following  is the most likely to be? ",
    answers: [
      { text: "Anorexia nervosa, binge-purge pattern", correct: true },
      { text: "Anorexia nervosa, restrictive pattern", correct: false },
      { text: "Bulimia nervosa", correct: false },
      { text: "Binge eating disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old female came with complaints of gradual loss of weight,recurrent episodes of vomiting, from a period of two years, menstrual irregularities from 1 year and amenorrhea since 6 months, with a probable precipitating factor being husband's critical comment on her weight. Which of the following laboratory or clinical abnormalities can be found in patients with anorexia nervosa?",
    answers: [
      { text: "All the above", correct: true },
      { text: "High serum cholesterol", correct: false },
      { text: "Mild hypothyroidism", correct: false },
      { text: "ST segment and T-wave changes in ECG", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An elderly gentleman develops severe depression with symptoms of weight loss, early morning awakening, severe anhedonia. Which of the following condition is the most likely to be?",
    answers: [
      { text: "lnvolutional melancholia", correct: true },
      { text: "Late onset melancholia", correct: false },
      { text: "Pseudo-dementia", correct: false },
      { text: "Atypical depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old female presents with 2 year history of repetitive, irresistible thoughts of contamination with dirt associated with repetitive hand washing. She reports these thoughts to be her own and distressing; but is not able to overcome them along with medication. Which of the following therapie is she the most likely to benefit from?",
    answers: [
      { text: "Exposure and response prevention", correct: true },
      { text: "Systematic desensitization", correct: false },
      { text: "Assertiveness training", correct: false },
      { text: "Sensate focusing", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Three years back a woman suffered during an earthquake and she was successfully saved. After recovery she has nightmares about the episode and she also gets up in the night and feels terrified. Which of the following is the most probable diagnosis?",
    answers: [
      { text: "Post-traumatic stress disorder", correct: true },
      { text: "Major depression", correct: false },
      { text: "Mania", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A middle aged person reported to Psychiatric OPD with the complaints of fear of leaving home, fear of travelling alone and fear of being in a crowd. He develops marked anxiety with palpitations and sweating if he is in these situations. He often avoids public transport to go his place of work. His most likely diagnosis is",
    answers: [
      { text: "Agoraphobia", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Personality disorder", correct: false },
      { text: "Generalized anxiety disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "16-year-old senior has shouted at you for some incomplete work in ward. Later, that evening he has invited you to watch a  movie and gave you a party. This type of Ego's defense mechanism called \"Undoing\" is typically seen in: ",
    answers: [
      { text: "Obsessive compulsive neurosis ", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Depression", correct: false },
      { text: "Hyseria", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an excess desire for sexual intercourse in females?",
    answers: [
      { text: "Nymphomania", correct: true },
      { text: "Satyriasis", correct: false },
      { text: "Frotteuism", correct: false },
      { text: "Masochism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which among the following is the most common substance abused in India?",
    answers: [
      { text: "Alcohol", correct: true },
      { text: "Cannabis", correct: false },
      { text: "Heroin", correct: false },
      { text: "Cocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following disorder is erotomania seen in?",
    answers: [
      { text: "Schizophrenia", correct: true },
      { text: "Mania", correct: false },
      { text: "Neurosis", correct: false },
      { text: "Obsessive compulsive disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following antidepressant is the most likely to cause persistent erections (priapism) in a 40-year-old male patient? ",
    answers: [
      { text: "Trazodone", correct: true },
      { text: "Tranylcypromine", correct: false },
      { text: "Venlafaxine", correct: false },
      { text: "Doxepin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Somatic symptoms may or may not be associated with another medical condition. The diagnoses of somatic symptom disorder and a concurrent medical illness are not mutually exclusive, and these frequently occur together. Which of the following is NOT a somatic symptom:",
    answers: [
      { text: "Anhedonia", correct: true },
      { text: "Constipation", correct: false },
      { text: "Impotence", correct: false },
      { text: "Numbness", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is drug of choice for premenstrual Dysphoric Disorder?",
    answers: [
      { text: "SSRls", correct: true },
      { text: "TCAs", correct: false },
      { text: "Progesterone", correct: false },
      { text: "Benzodiazepines", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following medicines are associated with side effect of sexual dysfunction?",
    answers: [
      { text: "Fluoxetine", correct: true },
      { text: "Mirtazapine", correct: false },
      { text: "Bupropion", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is associated with alcoholic paranoia ?",
    answers: [
      { text: "Clozapine", correct: true },
      { text: "Olanzapine", correct: false },
      { text: "Risperidone", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Sleepwalking, sleep terrors, and nightmares are examples of parasomnias, which are aberrant episodic experi,ences that occur during sleep and are mostly related to the child's development in childhood but are predominantly psychogenic in adulthood. Parasomnias are linked to which of the following medications? ",
    answers: [
      { text: "Zolpidem", correct: true },
      { text: "Doxepin ", correct: false },
      { text: "Quetiapine", correct: false },
      { text: "Fluoxetine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Insomnia is a sleep disorder  characterised by insufficient quantity and/or quality of sleep over a long period of time. The most common complaint among insomniacs is difficulty falling asleep, followed by difficulties staying asleep and early ultimate wakening. Patients usually complain about a mixture of these issues. Which of the following is the best first-line therapy for primary insomnia?",
    answers: [
      { text: "Education on sleep hygiene", correct: true },
      { text: "Short-term zolpidem prescription ", correct: false },
      { text: "Polysomnography ", correct: false },
      { text: "Trazodone prescription", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Conditions that may predispose to, or aggravate, withdrawal symptoms include fatigue, malnutrition, physical illness, and depression. Mild symptoms usually show up as early as 6 hours after you put down your glass in Alcohol withdrawal. Which of the following is the first symptom to appear in alcohol withdrawal? ",
    answers: [
      { text: "Tremors", correct: true },
      { text: "Sleep disturbance ", correct: false },
      { text: "Visual hallucinations ", correct: false },
      { text: "Delirium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not used in delirium? ",
    answers: [
      { text: "Lithium", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Diazepam ", correct: false },
      { text: "Olanzapine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A father calls the paediatrician because his 7-year-old son began wetting the bed days after the birth of his new born sister. Which of the following best describes the reappearance of bed wetting?",
    answers: [
      { text: "Regression", correct: true },
      { text: "Repression", correct: false },
      { text: "Projection", correct: false },
      { text: "Identification", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old patient taking 120 ml alcohol everyday since last 12 years is brought to the hospital by his wife and is diagnosed to have alcohol dependence syndrome. Which of the following drug should be avoided in the management? ",
    answers: [
      { text: "Disulfiram", correct: true },
      { text: "Phenytoin", correct: false },
      { text: "Naltrexone", correct: false },
      { text: "Acamprosate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old male living in a hostel for homeless people with alcohol problems asked staff for his usual drug. He had a 10-year history of extreme alcohol related problems including withdrawal symptoms of morning tremulousness, sweating, nausea and vomiting, but not alcohol-induced seizures. What is the drug of choice for his problem? ",
    answers: [
      { text: "Chlordiazepoxide ", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Naltrexone ", correct: false },
      { text: "Disulfiram", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old  Dharu Bai was brought by his wife and seen at the outpatient addiction clinic on Jan 1,2021, during which he was observed to have tremors. His last drink was 24 hours prior to that visit. On Jan 2, the patient presented to the emergency room with coarse tremors, complaints of visual hallucinations, an unsteady gait and disorientation.Which of the following is thiamine dose in his condition about? ",
    answers: [
      { text: "250 mg per oral/Parenteral daily for first 3-5 days ", correct: true },
      { text: "100-200 mg per oral/Parenteral daily ", correct: false },
      { text: "400 mg per oral/Parenteral daily ", correct: false },
      { text: "500 mg per oral/Parenteral daily", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Erectile dysfunction is present in a 30- year-old man who comes to OPD. The standard screening assessment is unremarkable. The following should be the next step in the evaluation/management process: ",
    answers: [
      { text: "Oral sildenafil titrate trial ", correct: true },
      { text: "Cavernosometry", correct: false },
      { text: "Doppler study ", correct: false },
      { text: "Neurological testing ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "One year previously, Mrs. T's physician prescribed her methylphenidate for narcolepsy due to daily irresistible sleep attacks and episodes of a sudden loss of muscle tone when she became emotionally excited. After taking the medication, Mrs. T became asymptomatic and was able to work effectively and have an active social life with family and friends. Which of the following can not be seen in Mrs. T?",
    answers: [
      { text: "Catalepsy", correct: true },
      { text: "Disorder of REM sleep regulation ", correct: false },
      { text: "Hypnagogic hallucination ", correct: false },
      { text: "Hypnopompic hallucinations", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old patient present to the emergency department with self-harm and indicates suicidal intent. Which of the following conditions does not warrant an immediate specialist assessment?",
    answers: [
      { text: "Acute alcohol intoxication", correct: true },
      { text: "Formal thought disorder", correct: false },
      { text: "Chronic severe physical illness", correct: false },
      { text: "Social isolation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44-year-old alcoholic is brought to the emergency department by his wife. The person has not consumed alcohol for the past two days due to religious reasons. The person complained of nausea, vomiting and dizziness. On the second day, he developed seizures, that progressed to generalized tonic clonic seizures (GTCs. Which of the following would be the best medication to manage the seizures of the patient?",
    answers: [
      { text: "Diazepam", correct: true },
      { text: "Sodium valproate", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Clonidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A33-year-old patient present with being frightened by heart palpitations and dizziness. Further evaluation reveals that the patient has used a substance heavily, but stopped about 3 days prior to experiencing symptoms, which of the following is the most likely substance used?",
    answers: [
      { text: "Alprazolam", correct: true },
      { text: "Cannabis", correct: false },
      { text: "Cocaine", correct: false },
      { text: "Heroin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A chronic smoker taking 20 cigarettes per day has developed chronic cough. His family suggested quitting cigarettes. He is ready to quit but thinks that quitting will make him irritable. Which of the following option best describes the stage of behaviour change?",
    answers: [
      { text: "Contemplation and cost analysis", correct: true },
      { text: "Precontemplation and preparation", correct: false },
      { text: "Persuasion", correct: false },
      { text: "Belief", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman with a history of prolonged alcohol abuse cheerfully greets the resident doctor of her nursing home, whom she has met many times before, and calls him “my dear friend rahul.” The physician explains who he is and tells the patient his name. Two minutes later, when he asks the patient if she knows who he is, she answers with a smile: “Of course, you are my cousin Raghav from Kerala.” What vitamin deficiency can cause this particular form of alcohol induced amnestic disorder?",
    answers: [
      { text: "Thiamine", correct: true },
      { text: "Folate", correct: false },
      { text: "Panthotenic acid", correct: false },
      { text: "Riboflavin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year male with a history of alcohol dependence presents with confusion, nystagmus and ataxia. Examination reveals 6th cranial nerve weakness. He is most likely to be suffering from ",
    answers: [
      { text: "Wernicke encephalopathy", correct: true },
      { text: "Korsakoff’s psychosis", correct: false },
      { text: "DeClerambault syndrome", correct: false },
      { text: "Delirium tremens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 19-year-old man is brought to the emergency room by his distraught parents, who are worried about his vomiting and profuse diarrhea. On arrival, his pupils are dilated, his blood pressure is 175/105 mm Hg, and his muscles are twitching. His parents report that these symptoms started 2 hours earlier. For the past few days he has been homebound because of a sprained ankle, and during this time he has been increasingly anxious and restless. He has been yawning incessantly and has had a runny nose. Which of the following drugs is this man most likely to be withdrawing from?",
    answers: [
      { text: "Heroin", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Benzodiazepine", correct: false },
      { text: "Cocaine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following  are not components of sigmund freud’s dream work?",
    answers: [
      { text: "Compensation", correct: true },
      { text: "Displacement", correct: false },
      { text: "Condensation", correct: false },
      { text: "Symbolization", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is also called ambulatory schizophrenia?",
    answers: [
      { text: "Borderline personality disorder", correct: true },
      { text: "Schizotypal personality disorder", correct: false },
      { text: "Schizoid personality disorder", correct: false },
      { text: "Histrionic personality disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following formication is commonly associated with?",
    answers: [
      { text: "Alcohol-induced psychosis", correct: true },
      { text: "Amphetamine-induced psychosis", correct: false },
      { text: "Cannabis-induced psychosis", correct: false },
      { text: "Cocaine-induced psychosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following stage are seen cognitive developmental theory, concepts like “out of sight is out of mind” and “here and now”?",
    answers: [
      { text: "sensorimotor stage", correct: true },
      { text: "preoperational stage", correct: false },
      { text: "concrete operational", correct: false },
      { text: "Stage of formal operations", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a symptom of neuroleptic malignant syndrome? ",
    answers: [
      { text: "Hypothermia ", correct: true },
      { text: "Autonomic dysregulation ", correct: false },
      { text: "Muscle rigidity ", correct: false },
      { text: "Catatonia and stupor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Psychoanalysis uses techniques such as free association, analysis of dreams, and transference to uncover \"unconscious\" urges, and thereby to reduce the need forneurotic defenses. Which of the following is not neurotic defense mechanism?",
    answers: [
      { text: "Regression", correct: true },
      { text: "Isolarion", correct: false },
      { text: "Reacting formation", correct: false },
      { text: "Undoing", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "According to Freud: Neurotic reactions in  the adult are associated frequently with  neurotic reactions in childhood. The  connection is sometimes continuous but  more often is separated by a latent period of non neurosis.Which of the following is the most important cause of neurotic reaction?",
    answers: [
      { text: "Regression", correct: true },
      { text: "Projection", correct: false },
      { text: "Sublimation", correct: false },
      { text: "Suppression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Rivastigmine and donepezil are drugs used predominantly in the management of: ",
    answers: [
      { text: "Dementia", correct: true },
      { text: "Dissoiciation", correct: false },
      { text: "Delusion", correct: false },
      { text: "Depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following causes predominant retrograde amnesia and minimal anterograde amnesia?",
    answers: [
      { text: "Dissociative amnesia", correct: true },
      { text: "Alzheimer's disease", correct: false },
      { text: "Head injury", correct: false },
      { text: "Korsakoff syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a cluster A personality disorder?",
    answers: [
      { text: "Narcissistic", correct: true },
      { text: "Schizoid", correct: false },
      { text: "Paranoid", correct: false },
      { text: "Schizotypal", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the earliest presenting symptom of the AIDS Dementia Complex?",
    answers: [
      { text: "Losing track of conversations mid sentence", correct: true },
      { text: "Hyper reflexia", correct: false },
      { text: "Walking slowly", correct: false },
      { text: "Positive babinski sign ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following syndrome cortical blindness with confabulation is seen in?",
    answers: [
      { text: "Anton syndrome", correct: true },
      { text: "Wemicke's Encephalopathy", correct: false },
      { text: "Korsakoff syndrome", correct: false },
      { text: "Psychogenic amnesia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following disorder automatic movements of mouth and tongue are seen in?",
    answers: [
      { text: "Tardive dyskinesia", correct: true },
      { text: "Tardive dystonia", correct: false },
      { text: "Perioral rabbit tremors", correct: false },
      { text: "Pseudo parkinsonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65-year-old male is brought to the outpatient clinic with one-year illness characterized by marked forgetfulness, visual hallucinations, suspiciousness, personality decline, poor self-care and progressive deterioration in his condition. His Mini Mental Status Examination (MMSE. Score is 10. Which of the following  is the most likely diagnosis?",
    answers: [
      { text: "Dementia", correct: true },
      { text: "Schizophrenia", correct: false },
      { text: "Mania", correct: false },
      { text: "Depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient with pneumonia for 5 days admitted to hospital. He suddenly ceases to recognize doctor and staff and think that he is in jail. He complains of scorpions attacking him, is in altered sensorium. Which of the following condition is this?",
    answers: [
      { text: "Acute delirium", correct: true },
      { text: "Dementia", correct: false },
      { text: "Schizophrenia", correct: false },
      { text: "Acute paranoid state", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old  young lady was admitted with h/o taking over dose of diazepam after broken affair. She has history of slitting her wrist previously. Which of the following is the most  likely diagnosis?",
    answers: [
      { text: "Borderline PD", correct: true },
      { text: "Dependent PD", correct: false },
      { text: "Narcissistic PD", correct: false },
      { text: "Histrionic PD", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 27-year-old female, who works in an office refuses to socialize with her colleagues. She doesn't have any friends and when a male colleague asked her out, she refused, though she really liked him. On asking the reason, she says, no body would like me and I don't want to hurt myself. Which of the following is the likely diagnosis?",
    answers: [
      { text: "Avoidant personality disorder", correct: true },
      { text: "Schizoid personality disorder", correct: false },
      { text: "Histrionic personality disorder", correct: false },
      { text: "Anankastic personality disorder", correct: false },
      { text: " ", correct: false },
    ],
  },
  {
    question: "A reluctant 10-year-old child is compelled to bring sugar from the store, half of it spills in the process. Which of the following is this an illustration of?",
    answers: [
      { text: "Passive aggression", correct: true },
      { text: "Hysteria", correct: false },
      { text: "Disobidience", correct: false },
      { text: "Active aggression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient screams “No, I don’t remember, and I don’t want to remember;’ as  asked to recall a painful episode from his childhood. Which of the following  defense mechanism is the most closely suggested by this man’s words and behaviour?",
    answers: [
      { text: "Denial", correct: true },
      { text: "Projection", correct: false },
      { text: "Distortion", correct: false },
      { text: "Repression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A-14 year-old boy starts cleaning his room regularly because he wants to avoid the scolding of mother. Which of the following is this called as?",
    answers: [
      { text: "Negative reinforcement ", correct: true },
      { text: "Positive reinforcement ", correct: false },
      { text: "Punishment", correct: false },
      { text: "Exctinction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33-year-old man who, as a child, was beaten by his parents for every small infraction nonetheless idealizes them and describes them as “good parents who did not spoil their children.” He is baffled and angry when he is ordered to start parenting classes after the school nurse reports that his children consistently come to school with bruises. Which defense mechanism?",
    answers: [
      { text: "Identification with aggressor", correct: true },
      { text: "Acting out", correct: false },
      { text: "Denial", correct: false },
      { text: "Rationalization", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 56-year-old alcoholic patient comes to your office, he can not tell his name. There is gross in coordination in walking, and his eyes are deviated to one side. Which of the following is the probable diagnosis? ",
    answers: [
      { text: "Wernicke's encephalopathy", correct: true },
      { text: "Korsakoff's psychosis ", correct: false },
      { text: "Alcoholic hallucinosis ", correct: false },
      { text: "Delirium tremens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Kabir has anger management issues. Preethi's (Kabir's girlfriend) father opposes her and Kabir relationship due to his brash behaviour. Kabir demands Preethi decide within six hours otherwise he will end their relationship. Following this incident, Preethi's parents seize her phone, preventing her from contacting Kabir. By the time she manages to visit Kabir's house, he injects morphine into himself, and becomes unconscious for two days. Apart from bladder incontinence, we could have notice the following except: ",
    answers: [
      { text: "Hypertension", correct: true },
      { text: "Pinpoint pupil", correct: false },
      { text: "Cyanosis", correct: false },
      { text: "Respiratory depression", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Some substances show variety of psychological phenomena, including a variety of perceptual disturbances which would manifest among some users long after the drug had left the system. These phenomena were commonly referred to as \"flashbacks\" . Which of the following substances is associated with flashback phenomenon? ",
    answers: [
      { text: "All of the above", correct: true },
      { text: "LSD", correct: false },
      { text: "Psilocybin", correct: false },
      { text: "Cannabis ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old male with history of alcohol abuse for 15 years is brought to the hospital emergency with 'complaints of fearfulness, misrecognition, talking of self, aggressive behavior, tremulousness and seeing snakes and reptiles that are not visible to others around him. There is history of last drinking alcohol 2 days prior to the onset of the present complains. Which of the following is he the most likely suffering from?",
    answers: [
      { text: "Delirium tremens ", correct: true },
      { text: "Alcoholic hallucinosis", correct: false },
      { text: "Schizophrenia ", correct: false },
      { text: "Seizure disorder", correct: false },
      { text: "nan", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
