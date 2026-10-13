export type Category =
  | "Foundations"
  | "Vision"
  | "Language"
  | "Games"
  | "Generative"
  | "Science";

export type Source = { label: string; url: string };

export type Landmark = {
  id: string;
  name: string;
  year: number;
  /** Last year the entry covers, when it spans more than one (drives the range). */
  endYear?: number;
  /** Display override for multi-year entries, e.g. "2024–25". */
  yearLabel?: string;
  org: string;
  /** What kind of thing this landmark is — the collection mixes them deliberately. */
  kind: "Machine" | "Method" | "Architecture" | "System" | "Dataset" | "Model" | "Product" | "Model class";
  category: Category;
  era: string;
  oneliner: string;
  story: string[];
  why: string;
  citation: string;
  sources: Source[];
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
    kind: "Machine",
    category: "Foundations",
    era: ERAS[0],
    oneliner:
      "A machine that learned from examples — and a press conference that promised it would one day be conscious.",
    story: [
      "Frank Rosenblatt's Mark I Perceptron was a cabinet of wires and motorized potentiometers that learned to tell shapes apart by adjusting its own weights. After the Navy demonstration, The New York Times reported expectations that it would one day walk, talk, see, and reproduce itself.",
      "It could, in fact, distinguish simple patterns. Minsky and Papert's 1969 book proved the single-layer version couldn't learn even a simple either/or rule (the famous XOR problem), and the first AI winter settled in. But the core idea — learn weights from data, don't hand-write rules — is the one everything since has kept.",
    ],
    why: "Every neural network trained today is this machine's descendant: weights, updates, examples.",
    citation: "Rosenblatt, “The Perceptron,” Psychological Review 65(6), 1958.",
    sources: [
      { label: "Rosenblatt (1958), Psychological Review", url: "https://doi.org/10.1037/h0042519" },
      {
        label: "“New Navy Device Learns by Doing,” The New York Times, July 8, 1958",
        url: "https://www.nytimes.com/1958/07/08/archives/new-navy-device-learns-by-doing-psychologist-shows-embryo-of.html",
      },
    ],
  },
  {
    id: "backprop",
    name: "Backpropagation",
    year: 1986,
    org: "Rumelhart, Hinton & Williams",
    kind: "Method",
    category: "Foundations",
    era: ERAS[0],
    oneliner: "Networks learn by tracing their mistakes backward — the training rule everything still uses.",
    story: [
      "The idea had surfaced before, but the 1986 Nature paper made it impossible to ignore: when the network answers wrong, trace the error backward through its layers, and every connection learns its own share of the blame. Mathematically it is calculus's chain rule, aimed at every weight at once.",
      "It turned multi-layer networks from a theoretical object into something you could actually fit. It also ran into the limits of 1980s compute, and spent two decades waiting for hardware to catch up.",
    ],
    why: "Still the training algorithm. GPT and AlphaFold learned by exactly this rule.",
    citation: "Rumelhart, Hinton & Williams, Nature 323, 1986.",
    sources: [
      {
        label: "Rumelhart, Hinton & Williams (1986), Nature",
        url: "https://doi.org/10.1038/323533a0",
      },
    ],
  },
  {
    id: "lstm",
    name: "LSTM",
    year: 1997,
    org: "Hochreiter & Schmidhuber",
    kind: "Architecture",
    category: "Language",
    era: ERAS[1],
    oneliner: "A memory cell with gates — sequences stopped forgetting their own beginnings.",
    story: [
      "Networks that read one word at a time forgot what they'd seen a few steps earlier — the learning signal faded to nothing on its way back to the start. The Long Short-Term Memory cell added gates that decide what to keep, what to write, and what to forget.",
      "For twenty years it was the workhorse of speech recognition, translation, and text — until attention made recurrence itself optional.",
    ],
    why: "Proved machines could hold context across time — the problem language models still exist to solve.",
    citation: "Hochreiter & Schmidhuber, Neural Computation 9(8), 1997.",
    sources: [
      {
        label: "Hochreiter & Schmidhuber (1997), Neural Computation",
        url: "https://doi.org/10.1162/neco.1997.9.8.1735",
      },
    ],
  },
  {
    id: "deep-blue",
    name: "Deep Blue",
    year: 1997,
    org: "IBM",
    kind: "System",
    category: "Games",
    era: ERAS[1],
    oneliner: "Kasparov resigns, game six. A machine takes the one game that meant genius.",
    story: [
      "Deep Blue evaluated some two hundred million positions a second, with hand-tuned heuristics and opening books built with grandmasters. It wasn't learning — it was search at industrial scale, on 480 custom chess chips.",
      "Kasparov suspected human intervention; IBM declined a rematch and retired the machine. The symbol mattered more than the method: the world champion at the most intellectual of games had lost a match to a computer, in public, 3½–2½.",
    ],
    why: "Set the template: pick a human pinnacle, beat it, and the definition of intelligence moves.",
    citation: "Campbell, Hoane & Hsu, “Deep Blue,” Artificial Intelligence 134, 2002.",
    sources: [
      {
        label: "Campbell, Hoane & Hsu (2002), Artificial Intelligence",
        url: "https://doi.org/10.1016/S0004-3702(01)00129-1",
      },
    ],
    badge: "Beat a world champion",
  },
  {
    id: "imagenet",
    name: "ImageNet",
    year: 2009,
    org: "Fei-Fei Li · Stanford",
    kind: "Dataset",
    category: "Vision",
    era: ERAS[1],
    oneliner:
      "3.2 million labeled images at launch — the bet that data, not cleverness, was the bottleneck.",
    story: [
      "While the field competed on algorithms over small datasets, Fei-Fei Li's lab paid Mechanical Turk workers to label photographs at a scale nobody thought worthwhile: 3.2 million images across 5,247 categories at its 2009 debut, with a stated plan to reach tens of millions. The full dataset later grew past fourteen million.",
      "The annual ImageNet challenge, launched in 2010, gave the field a single shared scoreboard — and in 2012 that scoreboard is where the deep learning era became undeniable.",
    ],
    why: "The quiet thesis of the modern era — scale the data and the models will come — was proved here first.",
    citation: "Deng et al., CVPR 2009.",
    sources: [
      { label: "Deng et al. (2009), CVPR", url: "https://doi.org/10.1109/CVPR.2009.5206848" },
      { label: "image-net.org", url: "https://www.image-net.org/about.php" },
    ],
  },
  {
    id: "alexnet",
    name: "AlexNet",
    year: 2012,
    org: "University of Toronto",
    kind: "Model",
    category: "Vision",
    era: ERAS[2],
    oneliner: "Two gaming GPUs, eight layers, and the error rate falls off a cliff.",
    story: [
      "Krizhevsky, Sutskever, and Hinton entered the 2012 ImageNet challenge with an eight-layer neural network of the kind built for images (a convolutional network), trained on two consumer graphics cards — famously, in Krizhevsky's bedroom. It scored 15.3% top-5 error; the runner-up scored 26.2%.",
      "An eleven-point drop, in a contest where fractions of a point had counted as progress. A field that had spent decades arguing about hand-crafted features stopped arguing. Within three years every serious ImageNet entry was a deep network, and every large tech company had a deep learning team.",
    ],
    why: "The big bang of the deep learning era — depth plus GPUs plus data, the recipe ever since.",
    citation: "Krizhevsky, Sutskever & Hinton, NeurIPS 2012.",
    sources: [
      {
        label: "Krizhevsky, Sutskever & Hinton (2012), NeurIPS",
        url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
      },
    ],
    badge: "Paradigm shift",
  },
  {
    id: "word2vec",
    name: "Word2Vec",
    year: 2013,
    org: "Google",
    kind: "Method",
    category: "Language",
    era: ERAS[2],
    oneliner: "king − man + woman ≈ queen. Meaning, it turned out, had a geometry.",
    story: [
      "Mikolov's team turned every word into a short list of numbers (a vector), learned by predicting words from their neighbors — and those numbers arranged themselves into something uncanny: arithmetic on meanings worked.",
      "Countries minus capitals, verbs minus tenses — the structure of language was lying there in the embedding space, learned from nothing but co-occurrence.",
    ],
    why: "The first mass demonstration that representations learned from raw text encode real semantics.",
    citation: "Mikolov et al., arXiv:1301.3781, 2013.",
    sources: [
      { label: "Mikolov et al. (2013), arXiv", url: "https://arxiv.org/abs/1301.3781" },
    ],
  },
  {
    id: "gan",
    name: "GANs",
    year: 2014,
    org: "Goodfellow et al. · Montréal",
    kind: "Architecture",
    category: "Generative",
    era: ERAS[2],
    oneliner: "Two networks in an arms race: one forges, one detects, both get frighteningly good.",
    story: [
      "The idea arrived, by Goodfellow's own telling, over an argument in a Montréal bar: train a generator to fool a discriminator, and train the discriminator to catch it. Each makes the other better.",
      "Generative adversarial networks gave machines their first convincing imagination — faces that never existed, styles transferred between paintings — and the family of techniques behind the word “deepfake.”",
    ],
    why: "Opened the generative era: machines that don't just classify the world but add to it.",
    citation: "Goodfellow et al., NeurIPS 2014.",
    sources: [
      { label: "Goodfellow et al. (2014), arXiv", url: "https://arxiv.org/abs/1406.2661" },
    ],
  },
  {
    id: "alphago",
    name: "AlphaGo",
    year: 2016,
    org: "DeepMind",
    kind: "System",
    category: "Games",
    era: ERAS[2],
    oneliner: "Move 37 looked like a mistake for three minutes. Then it looked like the future.",
    story: [
      "Go has more board states than atoms in the observable universe; brute-force search was never going to work. AlphaGo paired deep networks with tree search and learned from both human games and self-play.",
      "In game two against Lee Sedol, its 37th move was so alien the commentators assumed an error — a move it estimated a human would play one time in ten thousand. Lee left the room, then lost the game. He won game four brilliantly, lost the match 4–1, and retired from professional play three years later, calling AI “an entity that cannot be defeated.”",
    ],
    why: "Machines stopped imitating expert play and started exceeding it — creativity included.",
    citation: "Silver et al., Nature 529, 2016.",
    sources: [
      { label: "Silver et al. (2016), Nature", url: "https://doi.org/10.1038/nature16961" },
    ],
    badge: "Beat a world champion",
  },
  {
    id: "transformer",
    name: "The Transformer",
    year: 2017,
    org: "Google Brain",
    kind: "Architecture",
    category: "Language",
    era: ERAS[3],
    oneliner: "A design that reads everything at once, learning what to pay attention to — the foundation under modern AI.",
    story: [
      "Instead of reading a sentence one word at a time, the paper “Attention Is All You Need” proposed attention: every word looks at every other word at once and learns what to weigh. Dropping the word-by-word loop meant training could finally scale with the hardware.",
      "GPT and Claude, BERT, AlphaFold's Evoformer, and most frontier image and audio systems of the 2020s build on this architecture. Few single design choices in the field's history have carried more of what followed.",
    ],
    why: "The architecture most of modern AI is built on.",
    citation: "Vaswani et al., NeurIPS 2017.",
    sources: [
      { label: "Vaswani et al. (2017), arXiv", url: "https://arxiv.org/abs/1706.03762" },
    ],
    badge: "Paradigm shift",
  },
  {
    id: "bert",
    name: "BERT",
    year: 2018,
    org: "Google",
    kind: "Model",
    category: "Language",
    era: ERAS[3],
    oneliner: "Learn the language once from everything, then specialize cheaply for any task.",
    story: [
      "BERT read text in both directions and taught itself language by filling in blanked-out words. After that general pretraining, a brief extra round of training for a specific job — a fine-tune — set new state-of-the-art results on eleven language benchmarks at once.",
      "It made “pretrained language model” the default starting point for every language task, and in 2019 Google put it into Search, where the company said it would affect about one in ten English queries.",
    ],
    why: "Normalized the pretrain-then-adapt economy that every modern model lives in.",
    citation: "Devlin et al., NAACL 2019.",
    sources: [
      { label: "Devlin et al. (2018), arXiv", url: "https://arxiv.org/abs/1810.04805" },
      {
        label: "Google: “Understanding searches better than ever before” (2019)",
        url: "https://blog.google/products/search/search-language-understanding-bert/",
      },
    ],
  },
  {
    id: "gpt3",
    name: "GPT-3",
    year: 2020,
    org: "OpenAI",
    kind: "Model",
    category: "Language",
    era: ERAS[3],
    oneliner: "Make the model vastly bigger, and abilities nobody programmed start to show up.",
    story: [
      "GPT-3 was the scaling bet made flesh: the same design, grown to 175 billion parameters — the adjustable numbers a network tunes as it learns. What emerged wasn't just better autocomplete: it could follow instructions, translate, and write passable code from a few examples placed in the prompt.",
      "“Few-shot learning” meant the model was doing something at inference time that looked uncomfortably like learning. The paper's real message: keep scaling, stranger things will emerge.",
    ],
    why: "Established that scale alone produces qualitatively new behavior — the field's current operating thesis.",
    citation: "Brown et al., “Language Models are Few-Shot Learners,” 2020.",
    sources: [
      { label: "Brown et al. (2020), arXiv", url: "https://arxiv.org/abs/2005.14165" },
    ],
  },
  {
    id: "alphafold",
    name: "AlphaFold 2",
    year: 2020,
    org: "DeepMind",
    kind: "System",
    category: "Science",
    era: ERAS[3],
    oneliner: "A fifty-year grand challenge in biology, met by a model.",
    story: [
      "Predicting a protein's 3-D shape from its amino-acid sequence had been biology's grand challenge since the 1970s. At the CASP14 assessment in 2020, AlphaFold 2 predicted structures with accuracy the organizers described as competitive with experiment — for single protein chains, essentially solving the problem the contest was built around.",
      "DeepMind went on to release predicted structures for essentially every catalogued protein — about two hundred million — and the 2024 Nobel Prize in Chemistry followed for Hassabis and Jumper.",
    ],
    why: "The clearest case yet of AI producing usable scientific knowledge rather than reproducing human output.",
    citation: "Jumper et al., Nature 596, 2021.",
    sources: [
      { label: "Jumper et al. (2021), Nature", url: "https://doi.org/10.1038/s41586-021-03819-2" },
      {
        label: "Nobel Prize in Chemistry 2024",
        url: "https://www.nobelprize.org/prizes/chemistry/2024/summary/",
      },
    ],
    badge: "Nobel-cited",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    year: 2022,
    org: "CompVis · Runway · Stability AI",
    kind: "Model",
    category: "Generative",
    era: ERAS[4],
    oneliner: "Text-to-image for anyone with a gaming PC — the weights were simply handed out.",
    story: [
      "Diffusion models learned to sculpt images out of noise, and the latent-diffusion work from CompVis made it cheap enough to run at home. Unlike its closed rivals, Stable Diffusion's weights were released outright in August 2022.",
      "Within weeks there were fine-tunes, plugins, and an open ecosystem — along with the fights over artists' data that generative AI has been in ever since.",
    ],
    why: "Put generative imagery in everyone's hands and made open weights a force the field must reckon with.",
    citation: "Rombach et al., CVPR 2022.",
    sources: [
      { label: "Rombach et al. (2022), arXiv", url: "https://arxiv.org/abs/2112.10752" },
      {
        label: "Stability AI release announcement (2022)",
        url: "https://stability.ai/news/stable-diffusion-public-release",
      },
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    year: 2022,
    org: "OpenAI",
    kind: "Product",
    category: "Language",
    era: ERAS[4],
    oneliner: "A research demo becomes, by analysts' estimates, the fastest-growing consumer app on record.",
    story: [
      "The underlying model wasn't new — GPT-3.5, further trained with human feedback to follow instructions. The interface was: a text box that talked back, free, to anyone.",
      "Within two months, UBS analysts estimated a hundred million monthly users — reported at the time as the fastest a consumer application had ever grown. AI stopped being a research field the public read about and became a tool the public argued with. Every lab's roadmap, every company's strategy, and a few governments' agendas reorganized around it.",
    ],
    why: "The moment AI became an everyday object — and the demand signal that funds everything since.",
    citation: "OpenAI, November 30, 2022.",
    sources: [
      { label: "OpenAI: Introducing ChatGPT", url: "https://openai.com/blog/chatgpt" },
      {
        label: "The Guardian on the UBS estimate (Feb 2023)",
        url: "https://www.theguardian.com/technology/2023/feb/02/chatgpt-100-million-users-open-ai-fastest-growing-app",
      },
    ],
    badge: "Est. 100M users in 2 months",
  },
  {
    id: "frontier",
    name: "GPT-4 & Claude",
    year: 2023,
    org: "OpenAI · Anthropic",
    kind: "Product",
    category: "Language",
    era: ERAS[4],
    oneliner:
      "GPT-4 reads images and passes professional exams; Claude ships with a written constitution.",
    story: [
      "GPT-4, released in March 2023, accepted images as input, and OpenAI reported it passing a simulated bar exam at a level matching strong human test-takers. Claude arrived the same month, trained with constitutional AI — explicit written principles instead of only human preference labels.",
      "The frontier stopped being about whether models could do knowledge work and became about which ones you could trust to. Model cards, red-teaming, and safety evaluations went from appendix to headline.",
    ],
    why: "General-purpose assistants became real, and safety moved from research topic to selling point.",
    citation: "OpenAI (March 2023); Anthropic (March 2023).",
    sources: [
      { label: "GPT-4 Technical Report (2023), arXiv", url: "https://arxiv.org/abs/2303.08774" },
      {
        label: "Bai et al., “Constitutional AI” (2022), arXiv",
        url: "https://arxiv.org/abs/2212.08073",
      },
    ],
  },
  {
    id: "reasoning",
    name: "Reasoning Models",
    year: 2024,
    endYear: 2025,
    yearLabel: "2024–25",
    org: "OpenAI · DeepSeek · Anthropic",
    kind: "Model class",
    category: "Language",
    era: ERAS[4],
    oneliner: "Models that spend compute thinking before they answer.",
    story: [
      "Instead of answering immediately, OpenAI's o1 models (September 2024) generate long private chains of thought, trained with reinforcement learning on problems with checkable answers. Scores on olympiad mathematics and competitive programming jumped.",
      "A new scaling axis opened: not just bigger models, but more thinking per question. DeepSeek's open-weights R1 (January 2025) showed the recipe wasn't a secret, and Anthropic's Claude 3.7 Sonnet (February 2025) folded visible extended thinking into an ordinary assistant. One caution the labs themselves raise: the visible reasoning is itself model output, and how faithfully it reflects the computation underneath remains an open research question.",
    ],
    why: "Test-time compute became the new frontier — intelligence you can dial up per problem.",
    citation: "OpenAI o1 (Sept 2024); DeepSeek-R1 (Jan 2025); Claude 3.7 Sonnet (Feb 2025).",
    sources: [
      {
        label: "OpenAI: Learning to reason with LLMs (2024)",
        url: "https://openai.com/index/learning-to-reason-with-llms/",
      },
      { label: "DeepSeek-R1 (2025), arXiv", url: "https://arxiv.org/abs/2501.12948" },
      {
        label: "Anthropic: Claude 3.7 Sonnet (2025)",
        url: "https://www.anthropic.com/news/claude-3-7-sonnet",
      },
    ],
  },
];
