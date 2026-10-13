# Sources

Primary sources for every entry in `app/landmarks/data.ts`, plus notes on
claims that were corrected or deliberately qualified during the content audit
(October 2026).

## Per-entry primary sources

| Entry | Primary source |
|---|---|
| The Perceptron (1958) | Rosenblatt, *Psychological Review* 65(6) — [doi:10.1037/h0042519](https://doi.org/10.1037/h0042519); NYT, July 8 1958, "New Navy Device Learns by Doing" |
| Backpropagation (1986) | Rumelhart, Hinton & Williams, *Nature* 323 — [doi:10.1038/323533a0](https://doi.org/10.1038/323533a0) |
| LSTM (1997) | Hochreiter & Schmidhuber, *Neural Computation* 9(8) — [doi:10.1162/neco.1997.9.8.1735](https://doi.org/10.1162/neco.1997.9.8.1735) |
| Deep Blue (1997) | Campbell, Hoane & Hsu, *Artificial Intelligence* 134 (2002) — [doi:10.1016/S0004-3702(01)00129-1](https://doi.org/10.1016/S0004-3702(01)00129-1) |
| ImageNet (2009) | Deng et al., CVPR 2009 — [doi:10.1109/CVPR.2009.5206848](https://doi.org/10.1109/CVPR.2009.5206848); [image-net.org/about](https://www.image-net.org/about.php) |
| AlexNet (2012) | Krizhevsky, Sutskever & Hinton, NeurIPS 2012 — [papers.nips.cc](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html) |
| Word2Vec (2013) | Mikolov et al. — [arXiv:1301.3781](https://arxiv.org/abs/1301.3781) |
| GANs (2014) | Goodfellow et al., NeurIPS 2014 — [arXiv:1406.2661](https://arxiv.org/abs/1406.2661) |
| AlphaGo (2016) | Silver et al., *Nature* 529 — [doi:10.1038/nature16961](https://doi.org/10.1038/nature16961) |
| The Transformer (2017) | Vaswani et al., NeurIPS 2017 — [arXiv:1706.03762](https://arxiv.org/abs/1706.03762) |
| BERT (2018) | Devlin et al. — [arXiv:1810.04805](https://arxiv.org/abs/1810.04805); Google Search blog, Oct 2019 |
| GPT-3 (2020) | Brown et al. — [arXiv:2005.14165](https://arxiv.org/abs/2005.14165) |
| AlphaFold 2 (2020) | Jumper et al., *Nature* 596 (2021) — [doi:10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2); [Nobel Prize 2024](https://www.nobelprize.org/prizes/chemistry/2024/summary/) |
| Stable Diffusion (2022) | Rombach et al., CVPR 2022 — [arXiv:2112.10752](https://arxiv.org/abs/2112.10752); Stability AI public-release post |
| ChatGPT (2022) | [OpenAI announcement](https://openai.com/blog/chatgpt); The Guardian, Feb 2 2023 (reporting the UBS estimate) |
| GPT-4 & Claude (2023) | [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774); [Constitutional AI](https://arxiv.org/abs/2212.08073) |
| Reasoning Models (2024–25) | [OpenAI o1](https://openai.com/index/learning-to-reason-with-llms/); [DeepSeek-R1](https://arxiv.org/abs/2501.12948); [Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet) |

## Corrections and qualifications made in the audit

- **ImageNet:** earlier copy attributed "fourteen million images" to the 2009
  release. The 2009 CVPR paper describes ~3.2M images / 5,247 synsets; the
  dataset grew past 14M later. Copy now distinguishes launch from growth.
- **AlexNet:** "halved the error rate" (used in design-system type specimens)
  replaced with the exact figures: 15.3% vs 26.2% top-5 error at ILSVRC-2012 —
  an eleven-point drop, not a halving.
- **AlphaGo:** "no human has beaten a top engine since" removed (adversarial
  exploits against superhuman Go programs were demonstrated in 2023). Replaced
  with Lee Sedol's documented 2019 retirement statement.
- **ChatGPT:** "fastest-adopted product in history" qualified to the actual
  claim: a UBS analyst *estimate* of 100M monthly users in two months,
  reported as the fastest-growing consumer application *to that point*.
- **GPT-4 & Claude:** capabilities now attributed per product (image input and
  the simulated bar exam are GPT-4 claims, reported by OpenAI; constitutional
  AI is Claude's). Bar-exam result attributed as OpenAI's report.
- **Reasoning Models:** entry now spans 2024–25; Anthropic's hybrid-reasoning
  release (Claude 3.7 Sonnet) is dated February 2025 rather than folded into
  2024. Added the labs' own caution that visible chains of thought are model
  output and may not reflect the underlying computation.
- **AlphaFold 2:** "closed" a grand challenge softened to the CASP14
  organizers' actual framing (competitive with experiment; the single-chain
  problem "essentially solved").
- **Transformer:** "nearly everything called AI is this architecture" narrowed
  to named systems that verifiably build on it.
- **Deep Blue:** match score (3½–2½) and the 480 chess-chip figure are from
  Campbell et al. (2002); "no rematch" is documented IBM history.

## Illustration sources

- **AlexNet figure** (`/landmarks` detail panel): top-5 error rates 15.3%
  (SuperVision/AlexNet) vs 26.2% (runner-up, ISI), ILSVRC-2012 results, as
  reported in Krizhevsky et al. and the ILSVRC-2012 results release.
- **Perceptron diagram:** conceptual illustration after the organization
  described in Rosenblatt (1958): sensory units → association units →
  response unit. Labeled as conceptual, not a reproduction.
- **Transformer diagram:** conceptual illustration of scaled dot-product
  attention weights, after Vaswani et al. (2017), Figure 2. Labeled as
  conceptual and simplified.

All imagery in the project is original CSS/SVG work; there are no photographs
or AI-generated raster images.
