export type Category =
  | "Foundations"
  | "Vision"
  | "Language"
  | "Games"
  | "Generative"
  | "Science";

export type Landmark = {
  id: string;
  name: string;
  year: number;
  org: string;
  category: Category;
  era: string;
  oneliner: string;
  story: string[];
  why: string;
  citation: string;
  badge?: string;
};

export const CATEGORIES: Category[] = [
  "Foundations",
  "Vision",
  "Language",
  "Games",
  "Generative",
  "Science",
];

export const ERAS = [
  "The Pioneers · 1958–1996",
  "Proofs of Concept · 1997–2011",
  "The Deep Learning Spring · 2012–2016",
  "The Transformer Era · 2017–2021",
  "Everyone’s Machine · 2022–",
];

export const LANDMARKS: Landmark[] = [
  {
    id: "perceptron",
    name: "The Perceptron",
    year: 1958,
    org: "Cornell Aeronautical Laboratory",
    category: "Foundations",
    era: ERAS[0],
    oneliner:
      "A machine that learned from examples — and a press conference that promised it would one day be conscious.",
    story: [
      "Frank Rosenblatt's Mark I Perceptron was a cabinet of wires and motorized potentiometers that learned to tell shapes apart by adjusting its own weights. The New York Times reported the Navy expected it to walk, talk, see, and reproduce itself.",
      "It could, in fact, distinguish simple patterns. Minsky and Papert's 1969 book proved the single-layer version couldn't even learn XOR, and the first AI winter settled in. But the core idea — learn weights from data, don't hand-write rules — is the one everything since has kept.",
    ],
    why: "Every neural network trained today is this machine's descendant: weights, updates, examples.",
    citation: "Rosenblatt, “The Perceptron,” Psychological Review, 1958.",
  },
  {
    id: "backprop",
    name: "Backpropagation",
    year: 1986,
    org: "Rumelhart, Hinton & Williams",
    category: "Foundations",
    era: ERAS[0],
    oneliner: "The chain rule, aimed at every weight at once — deep networks became trainable.",
    story: [
      "The idea had surfaced before, but the 1986 Nature paper made it impossible to ignore: propagate the error backward through the layers and every weight learns its share of the blame.",
      "It turned multi-layer networks from a theoretical object into something you could actually fit. It also ran into the limits of 1980s compute, and spent two decades waiting for hardware to catch up.",
    ],
    why: "Still the training algorithm. GPT and AlphaFold learned by exactly this rule.",
    citation: "Rumelhart, Hinton & Williams, Nature 323, 1986.",
  },
  {
    id: "lstm",
    name: "LSTM",
    year: 1997,
    org: "Hochreiter & Schmidhuber",
    category: "Language",
    era: ERAS[1],
    oneliner: "A memory cell with gates — sequences stopped forgetting their own beginnings.",
    story: [
      "Vanilla recurrent networks forgot what they'd read a few steps earlier; gradients vanished as they flowed back through time. The Long Short-Term Memory cell added gates that decide what to keep, what to write, and what to forget.",
      "For twenty years it was the workhorse of speech recognition, translation, and text — until attention made recurrence itself optional.",
    ],
    why: "Proved machines could hold context across time — the problem language models still exist to solve.",
    citation: "Hochreiter & Schmidhuber, Neural Computation 9(8), 1997.",
  },
  {
    id: "deep-blue",
    name: "Deep Blue",
    year: 1997,
    org: "IBM",
    category: "Games",
    era: ERAS[1],
    oneliner: "Kasparov resigns, game six. A machine takes the one game that meant genius.",
    story: [
      "Deep Blue evaluated two hundred million positions a second, with hand-tuned heuristics and opening books built by grandmasters. It wasn't learning — it was search at industrial scale.",
      "Kasparov accused the machine of having human help; what it had was 480 custom chess chips. The symbol mattered more than the method: the best human at the most intellectual of games had lost to a computer, on television.",
    ],
    why: "Set the template: pick a human pinnacle, beat it, and the definition of intelligence moves.",
    citation: "Campbell, Hoane & Hsu, “Deep Blue,” Artificial Intelligence 134, 2002.",
    badge: "Beat a world champion",
  },
  {
    id: "imagenet",
    name: "ImageNet",
    year: 2009,
    org: "Fei-Fei Li · Stanford",
    category: "Vision",
    era: ERAS[1],
    oneliner: "Fourteen million labeled images — the bet that data, not cleverness, was the bottleneck.",
    story: [
      "While the field competed on algorithms over small datasets, Fei-Fei Li's lab spent years paying Mechanical Turk workers to label fourteen million photographs into twenty-two thousand categories.",
      "The annual ImageNet challenge gave the field a single shared scoreboard — and in 2012 that scoreboard is where the deep learning era became undeniable.",
    ],
    why: "The quiet thesis of the modern era — scale the data and the models will come — was proved here first.",
    citation: "Deng et al., CVPR 2009.",
  },
  {
    id: "alexnet",
    name: "AlexNet",
    year: 2012,
    org: "University of Toronto",
    category: "Vision",
    era: ERAS[2],
    oneliner: "Two gaming GPUs, eight layers, and the error rate falls off a cliff.",
    story: [
      "Krizhevsky, Sutskever, and Hinton entered ImageNet 2012 with a convolutional network trained on two consumer GPUs in Alex's bedroom. It scored 15.3% top-5 error; second place scored 26.2%.",
      "A field that had spent decades arguing about hand-crafted features stopped arguing. Within three years every ImageNet entry was a deep network, and every tech company had a deep learning team.",
    ],
    why: "The big bang of the deep learning era — depth plus GPUs plus data, the recipe ever since.",
    citation: "Krizhevsky, Sutskever & Hinton, NeurIPS 2012.",
    badge: "Paradigm shift",
  },
  {
    id: "word2vec",
    name: "Word2Vec",
    year: 2013,
    org: "Google",
    category: "Language",
    era: ERAS[2],
    oneliner: "king − man + woman ≈ queen. Meaning, it turned out, had a geometry.",
    story: [
      "Mikolov's team trained shallow networks to predict words from their neighbors, and the learned vectors arranged themselves into something uncanny: arithmetic on meanings worked.",
      "Countries minus capitals, verbs minus tenses — the structure of language was lying there in the embedding space, learned from nothing but co-occurrence.",
    ],
    why: "The first mass demonstration that representations learned from raw text encode real semantics.",
    citation: "Mikolov et al., “Efficient Estimation of Word Representations,” 2013.",
  },
  {
    id: "gan",
    name: "GANs",
    year: 2014,
    org: "Goodfellow et al. · Montréal",
    category: "Generative",
    era: ERAS[2],
    oneliner: "Two networks in an arms race: one forges, one detects, both get frighteningly good.",
    story: [
      "The idea arrived, by legend, over an argument in a Montréal bar: train a generator to fool a discriminator, and train the discriminator to catch it. Each makes the other better.",
      "Generative adversarial networks gave machines their first convincing imagination — faces that never existed, styles transferred between paintings — and gave the world the word “deepfake.”",
    ],
    why: "Opened the generative era: machines that don't just classify the world but add to it.",
    citation: "Goodfellow et al., NeurIPS 2014.",
  },
  {
    id: "alphago",
    name: "AlphaGo",
    year: 2016,
    org: "DeepMind",
    category: "Games",
    era: ERAS[2],
    oneliner: "Move 37 looked like a mistake for three minutes. Then it looked like the future.",
    story: [
      "Go has more board states than atoms in the observable universe; brute-force search was never going to work. AlphaGo paired deep networks with tree search and learned from both human games and self-play.",
      "In game two against Lee Sedol, its 37th move was so alien the commentators assumed an error — a one-in-ten-thousand human move, by the machine's own estimate. Lee left the room. He won a single game in the match; no human has beaten a top engine since.",
    ],
    why: "Machines stopped imitating human play and started exceeding it — creativity included.",
    citation: "Silver et al., Nature 529, 2016.",
    badge: "Beat a world champion",
  },
  {
    id: "transformer",
    name: "The Transformer",
    year: 2017,
    org: "Google Brain",
    category: "Language",
    era: ERAS[3],
    oneliner: "“Attention Is All You Need” — recurrence deleted, and the substrate of modern AI laid down.",
    story: [
      "Eight authors proposed replacing recurrence entirely with attention: every token looks at every other token, in parallel. Training stopped being sequential, which meant it could finally scale with the hardware.",
      "GPT, BERT, Claude, AlphaFold's Evoformer, image and audio models — nearly everything called “AI” in the 2020s is this architecture, scaled.",
    ],
    why: "The single most consequential architecture choice in the field's history.",
    citation: "Vaswani et al., NeurIPS 2017.",
    badge: "Paradigm shift",
  },
  {
    id: "bert",
    name: "BERT",
    year: 2018,
    org: "Google",
    category: "Language",
    era: ERAS[3],
    oneliner: "Pretrain on everything, fine-tune on anything — the recipe becomes standard.",
    story: [
      "BERT read text in both directions and learned by filling in masked words — then a small fine-tune beat the state of the art on eleven benchmarks at once.",
      "It made “pretrained language model” the default starting point for every NLP task, and quietly went into Google Search, touching billions of queries.",
    ],
    why: "Normalized the pretrain-then-adapt economy that every modern model lives in.",
    citation: "Devlin et al., NAACL 2019.",
  },
  {
    id: "gpt3",
    name: "GPT-3",
    year: 2020,
    org: "OpenAI",
    category: "Language",
    era: ERAS[3],
    oneliner: "175 billion parameters, and abilities nobody programmed began to show up.",
    story: [
      "GPT-3 was the scaling-laws bet made flesh: same architecture, vastly more of everything. What emerged wasn't just better autocomplete — it could follow instructions, translate, write code, from a few examples in the prompt.",
      "“Few-shot learning” meant the model was doing something at inference time that looked uncomfortably like learning. The paper's real message: keep scaling, stranger things will emerge.",
    ],
    why: "Established that scale alone produces qualitatively new behavior — the field's current operating thesis.",
    citation: "Brown et al., “Language Models are Few-Shot Learners,” 2020.",
  },
  {
    id: "alphafold",
    name: "AlphaFold 2",
    year: 2020,
    org: "DeepMind",
    category: "Science",
    era: ERAS[3],
    oneliner: "A fifty-year grand challenge in biology, closed by a model.",
    story: [
      "Predicting a protein's 3-D shape from its amino-acid sequence had been biology's grand challenge since the 1970s. At CASP14, AlphaFold 2 predicted structures to near-experimental accuracy.",
      "DeepMind released predicted structures for essentially every known protein — two hundred million of them — and the 2024 Nobel Prize in Chemistry followed.",
    ],
    why: "The clearest case yet of AI producing new scientific knowledge rather than reproducing human output.",
    citation: "Jumper et al., Nature 596, 2021.",
    badge: "Nobel-cited",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    year: 2022,
    org: "CompVis · Stability AI",
    category: "Generative",
    era: ERAS[4],
    oneliner: "Text-to-image for anyone with a gaming PC — the weights were simply handed out.",
    story: [
      "Diffusion models learned to sculpt images out of noise, and latent diffusion made it cheap enough to run at home. Unlike its closed rivals, Stable Diffusion's weights were released outright.",
      "Within weeks there were fine-tunes, plugins, and an open ecosystem — along with the fights over artists' data that generative AI has been in ever since.",
    ],
    why: "Put generative imagery in everyone's hands and made open weights a force the field must reckon with.",
    citation: "Rombach et al., CVPR 2022.",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    year: 2022,
    org: "OpenAI",
    category: "Language",
    era: ERAS[4],
    oneliner: "A research demo becomes the fastest-adopted product in history.",
    story: [
      "The underlying model wasn't new — GPT-3.5 with instruction tuning and RLHF. The interface was: a text box that talked back, free, to anyone.",
      "A hundred million users arrived within two months. AI stopped being a research field the public read about and became a tool the public argued with. Every lab's roadmap, every company's strategy, and a few governments' agendas reorganized around it.",
    ],
    why: "The moment AI became an everyday object — and the demand signal that funds everything since.",
    citation: "OpenAI, November 30, 2022.",
    badge: "100M users in 2 months",
  },
  {
    id: "frontier",
    name: "GPT-4 & Claude",
    year: 2023,
    org: "OpenAI · Anthropic",
    category: "Language",
    era: ERAS[4],
    oneliner: "Frontier assistants pass the bar exam and read images; alignment becomes a product feature.",
    story: [
      "GPT-4 passed professional exams and accepted images as input. Claude arrived trained on constitutional AI — explicit written principles instead of only human preference labels.",
      "The frontier stopped being about whether models could do knowledge work and became about which ones you could trust to. Model cards, red-teaming, and safety evals went from appendix to headline.",
    ],
    why: "General-purpose assistants became real, and safety moved from research topic to selling point.",
    citation: "OpenAI (March 2023); Anthropic (March 2023).",
  },
  {
    id: "reasoning",
    name: "Reasoning Models",
    year: 2024,
    org: "OpenAI · DeepSeek · Anthropic",
    category: "Language",
    era: ERAS[4],
    oneliner: "Models that spend compute thinking before they answer — and show their work.",
    story: [
      "Instead of answering immediately, o1-class models generate long private chains of thought, trained with reinforcement learning on problems with checkable answers. Math olympiad and competitive programming scores jumped.",
      "A new scaling axis opened: not just bigger models, but more thinking per question. DeepSeek's open R1 showed the recipe wasn't a secret, and agentic coding tools made the thinking actually do things.",
    ],
    why: "Test-time compute became the new frontier — intelligence you can dial up per problem.",
    citation: "OpenAI o1 (2024); DeepSeek-R1 (2025).",
  },
];
