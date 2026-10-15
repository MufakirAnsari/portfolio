// Research Portfolio Data - All 10 Peer-Reviewed & Submitted Papers
// Extracted and verified from "Research Portfolio Key Highlights.txt"

const researchPapers = [
  {
    id: "ddff-genomics",
    number: 1,
    title: "Distributional Discriminative Feature Filtering: A Scalable Framework for High-Dimensional Low-Sample-Size Biomedical Data",
    shortTitle: "Distributional Discriminative Feature Filtering (DDFF)",
    authors: "Mufakir Ansari, Lauren Popp, Tomojit Ghosh",
    focusArea: "Bioinformatics, Feature Selection, HDLSS Data, Biomarker Discovery",
    category: "biomedical",
    venue: "2026 25th IEEE International Conference on Machine Learning and Applications (ICMLA)",
    doi: "10.1109/ICMLA69890.2026.00030",
    status: "Accepted & Published",
    statusBadge: "IEEE ICMLA 2026",
    statusColor: "status-active",
    summary: "A novel filter-based feature selection algorithm operating in strictly linear time O(pn) that scores biomarkers by evaluating discrepancies between class-conditional empirical PMFs, capturing higher-order variance invisible to classical filters.",
    stats: [
      { label: "Complexity", value: "O(pn) Linear" },
      { label: "Peak Accuracy", value: "85.3% Madelon" },
      { label: "Prostate GE", value: "94.3% Acc" },
      { label: "TV Equivalence", value: "S_j = 2·TV(P,Q)" }
    ],
    tags: ["Genomics", "Feature Selection", "Information Theory", "HDLSS", "O(pn) Scaling"],
    highlights: [
      "Distribution-Aware Feature Selection Framework: Developed DDFF, a novel filter-based feature selection algorithm specifically designed for High-Dimensional Low-Sample-Size (HDLSS) biological datasets ($p \\gg n$), which scores and ranks candidate biomarkers by evaluating discrepancies between class-conditional empirical Probability Mass Functions (PMFs).",
      "Optimal Linear Time Complexity $O(pn)$: Proved that DDFF operates in strictly linear time $O(pn)$ with zero pairwise feature interaction overhead, matching the scalability of simple univariate statistical filters while enabling seamless parallelization across tens of thousands of genomic variables.",
      "Information-Theoretic Total Variation Distance Equivalence: Derived a direct mathematical proof establishing that the proposed $DDFF_{\\ell_1}$ discrepancy measure is exactly equivalent to twice the discrete Total Variation (TV) distance between class distributions ($S_j^{(\\ell_1)} = 2 \\cdot TV(P_j, Q_j)$), providing rigorous probabilistic foundations for feature discriminability.",
      "Detecting Higher-Order Variance and Multimodal Structure: Demonstrated through synthetic experiments that DDFF captures discriminative signals completely invisible to classical filters: when class distributions shared identical means ($\\mu_1 = \\mu_2 = 0$) but differing variances ($\\sigma_1^2 = 1, \\sigma_2^2 = 5$) or bimodal structures, Fisher Score collapsed to near-zero (0.0006 and 0.0011), whereas $DDFF_{\\ell_1}$ robustly identified separation with scores of **0.696** and **1.464** ($>3\\times$ higher than Mutual Information’s 0.4507).",
      "Cross-Modality Biomedical Benchmark Validation: Evaluated DDFF across six diverse benchmarks spanning synthetic challenges (Madelon), cancer microarrays (Prostate GE, ALL/AML leukemia, Colon adenocarcinoma), mass spectrometry (Arcene with 10,000 features), and clinical RNA-seq (Crohn's disease with 23,813 genes post-imputation).",
      "Superior Classification Accuracy with Compact Feature Subsets: Across 25 stratified random trials, $DDFF_{\\ell_1}$ achieved **85.3% peak 5-NN accuracy on Madelon** (outperforming Mutual Information’s 61.4% by +23.9%) and **94.3% accuracy on Prostate GE**. On non-linear shallow Artificial Neural Networks (ANN), DDFF maintained top performance (86.0% on Madelon and 93.7% on Prostate GE), verifying that selected feature subsets preserve non-linear discriminative structure across classifier families.",
      "Empirical Invariance to Histogram Resolution: Conducted a comprehensive bin-size ablation study across $B \\in \\{5, 10, 15, 20, 25\\}$, showing that classification accuracy varied by less than 3 percentage points across all datasets (Colon cancer maintained an exact 83.7% accuracy across all bin counts), establishing $B = 10$ as a universally robust default."
    ],
    codeUrl: "https://github.com/MufakirAnsari/DDFF-Framework",
    paperUrl: "https://doi.org/10.1109/ICMLA69890.2026.00030"
  },
  {
    id: "llm-portfolio",
    number: 2,
    title: "From Text to Returns: Using Large Language Models for Mutual Fund Portfolio Optimization and Risk-Adjusted Allocation",
    shortTitle: "LLMs for Mutual Fund Portfolio Optimization & RAG Allocation",
    authors: "Mufakir Qamar Ansari*, Abrar Hossain*, Haziq Jeelani, Monia Digra, Fayeq Jeelani Syed (*equal contribution)",
    focusArea: "Generative AI in Finance, Large Language Models (LLMs), RAG, Blended Portfolio Optimization",
    category: "finance-applied",
    venue: "arXiv:2512.05907v1 [cs.CE], December 2025",
    doi: "arXiv:2512.05907",
    status: "Preprint",
    statusBadge: "arXiv Preprint",
    statusColor: "primary",
    summary: "End-to-end financial decision pipeline combining open-source LLMs (Zephyr 7B, Mistral 7B, Phi-2) with RAG and ChromaDB vector retrieval to optimize mutual fund sector allocations, achieving a peak Sharpe ratio of 1.5751.",
    stats: [
      { label: "Peak Sharpe", value: "1.5751" },
      { label: "Annual Return", value: "23.14%" },
      { label: "Risk Reduction", value: "Up to 2.41%" },
      { label: "Edge Hardware", value: "CPU Feasible" }
    ],
    tags: ["Generative AI", "Finance", "LLMs", "RAG", "ChromaDB", "Portfolio Theory"],
    highlights: [
      "Generative AI Financial Framework with RAG: Designed and implemented an end-to-end financial decision-support pipeline combining open-source Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) to dynamically optimize sector-level mutual fund asset allocations based on multimodal structured financial data and macroeconomic indicators (interest rates, inflation).",
      "Vector Database Retrieval Architecture: Embedded structured mutual fund metrics (NAV, historical percentage returns, volatility, and sector exposures across Tech, Healthcare, Finance, and Energy) using the `all-MiniLM-L6-v2` embedding model stored in a Chroma vector database, retrieving top-$k$ relevant contextual documents to ground LLM reasoning.",
      "Comparative Evaluation of Open-Source LLMs: Conducted a systematic benchmark comparing Microsoft Phi-2 (2.7B), Mistral 7B, and Zephyr 7B Beta on sectoral portfolio rebalancing across three distinct mutual funds (Fund A, Fund B, Fund C).",
      "Superiority of Financial Fine-Tuning (Zephyr 7B): Demonstrated that domain-fine-tuned Zephyr 7B consistently outperformed base Mistral 7B and lightweight Phi-2 across all evaluated metrics, achieving the highest absolute returns and risk-adjusted returns (RAR), demonstrating superior capability to synthesize non-linear macroeconomic dependencies.",
      "Continuous Blended Optimization Strategy: Developed a novel blended optimization technique that incrementally adjusts portfolio exposure ratios ($\\lambda \\in [0.0, 1.0]$) between aggressive LLM recommendations and classical risk-minimizing allocations, successfully balancing the trade-off between return maximization and downside volatility.",
      "Peak Risk-Adjusted Returns (Sharpe Ratio 1.5751): Across all allocation strategies, Zephyr 7B achieved a peak Sharpe ratio of **1.5751** (at exposure ratio 0.0) with an annualized return of 0.2314 and volatility of 0.1328, maintaining favorable Sharpe ratios ($>1.37$) and achieving up to **2.41% risk reduction** across conservative blended portfolios.",
      "Resource-Constrained CPU Deployment Feasibility: Engineered a CPU-compatible pipeline for Microsoft Phi-2 using `low_cpu_mem_usage=True` within the HuggingFace Transformers pipeline, proving the feasibility of deploying generative financial reasoning on edge workstations without dedicated GPU infrastructure."
    ],
    codeUrl: "https://github.com/MufakirAnsari",
    paperUrl: "https://arxiv.org/abs/2512.05907"
  },
  {
    id: "iiot-ids",
    number: 3,
    title: "Enhanced Intrusion Detection in IIoT Networks: A Lightweight Approach with Autoencoder-Based Feature Learning",
    shortTitle: "Lightweight Autoencoder IDS for Industrial IoT Edge Networks",
    authors: "Tasnimul Hasan, Abrar Hossain, Mufakir Qamar Ansari, Talha Hussain Syed",
    focusArea: "Industrial IoT Cybersecurity, Intrusion Detection Systems (IDS), Cost-Sensitive Deep Learning, Edge Computing Deployment",
    category: "finance-applied",
    venue: "10th International Conference on Internet of Things, Big Data and Security (IoTBDS 2025), pages 207-214",
    doi: "ISBN: 978-989-758-750-4",
    status: "Published",
    statusBadge: "IoTBDS 2025",
    statusColor: "status-active",
    summary: "A deterministic cost-sensitive autoencoder (24→6→24) deployed physically to an NVIDIA Jetson Nano edge device, clocking 0.185 ms inference with 99.94% Macro F1 on the 1.93M-record Edge-IIoTset benchmark.",
    stats: [
      { label: "Accuracy", value: "99.94%" },
      { label: "Binary AUC", value: "1.0000" },
      { label: "Edge Latency", value: "0.185 ms" },
      { label: "Deployment", value: "Jetson Nano" }
    ],
    tags: ["Cybersecurity", "Industrial IoT", "Autoencoder", "Edge AI", "Jetson Nano", "LightGBM"],
    highlights: [
      "Lightweight Edge IDS for Industrial IoT: Designed, evaluated, and edge-deployed a machine learning Intrusion Detection System (IDS) engineered for resource-constrained IIoT devices, effectively resolving severe class imbalance across 14 malicious attack categories and normal traffic.",
      "Deterministic Cost-Sensitive Autoencoder Architecture: Developed a deterministic bottleneck autoencoder ($24 \\to 6 \\to 24$ dimensions) utilizing an inverse-frequency class-weighted MSE loss ($L = \\frac{1}{N}\\sum w_{y_i}(x_i - \\hat{x}_i)^2$). Eliminated the training instability and compute overhead of VAEs and SMOTE, amplifying detection sensitivity for critical underrepresented attacks (MITM 0.02%, Fingerprinting 0.04%).",
      "99.94% SOTA Accuracy and Macro F1 on Edge-IIoTset: Evaluated on the massive 1.93-million-record Edge-IIoTset benchmark. A lightweight Decision Tree trained on autoencoder latent features achieved 99.94% Accuracy and 99.94% Macro/Weighted F1 Score, outperforming complex deep learning baselines including SA-DCNN (99.53% F1) and MAGRU (99.64% F1).",
      "Flawless Zero-False-Alarm Binary Detection: In binary normal vs. attack classification, LightGBM achieved a perfect 1.0000 Accuracy, 1.0000 Precision, 1.0000 Recall, and 1.0000 AUC across 30,440 test samples (4,820 True Positives, 25,620 True Negatives, 0 False Positives, 0 False Negatives).",
      "First-Ever Physical Deployment on NVIDIA Jetson Nano: Formatted and deployed the full production pipeline onto an NVIDIA Jetson Nano embedded edge computer (128-core Maxwell GPU, 1.43 GHz Quad-core ARM A57 CPU, 4GB RAM), establishing the first documented deployment of the model on edge hardware.",
      "Sub-0.19 Millisecond Real-Time Edge Inference: Clocked real-world edge execution latency at 0.185 ms per sample for binary classification and 0.187 ms per sample for multiclass classification (total test batch evaluated in 5.62 s and 5.70 s), proving real-time line-rate suitability for mission-critical Industrial IoT edge networks.",
      "Extreme Training and Computational Efficiency: The Decision Tree classifier trained in just 3.74 seconds with a test execution time of 0.0124 seconds, bypassing the multi-hour training bottlenecks of deep tabular architectures like TabNet (4,436 s) and BiLSTM (982 s) while delivering superior multiclass accuracy."
    ],
    codeUrl: "https://github.com/MufakirAnsari",
    paperUrl: "https://www.scitepress.org/Papers/2025/132037/132037.pdf"
  },
  {
    id: "epf-electricity",
    number: 4,
    title: "Disentangling Architecture, Strategy, and Adaptation in Day-Ahead Electricity Price Forecasting: A Multi-Model Benchmark on Volatile US Markets",
    shortTitle: "Day-Ahead Electricity Price Forecasting on Volatile US Markets",
    authors: "Mufakir Qamar Ansari, Mudabir Qamar Ansari",
    focusArea: "Energy Economics, Time Series Deep Learning, Conformal Prediction, Wholesale Electricity Markets",
    category: "finance-applied",
    venue: "Submitted to Computational Economics (Springer Nature)",
    doi: "In Review (Springer Nature)",
    status: "Under Review",
    statusBadge: "Springer Nature",
    statusColor: "status-warning",
    summary: "21 forecasting configurations across 17 model families on PJM & ERCOT (~61,000 hours per market) over 2019-2025. Proved deep multi-output BiLSTM SOTA accuracy ($3.64/MWh MAE) and uncovered conformal prediction failure under regime shift.",
    stats: [
      { label: "ERCOT MAE", value: "$3.64/MWh" },
      { label: "PJM MAE", value: "$4.57/MWh" },
      { label: "Trading Sharpe", value: "22.69" },
      { label: "Data Scope", value: "61,000 Hours" }
    ],
    tags: ["Energy Economics", "Time Series", "BiLSTM", "Conformal Prediction", "PJM & ERCOT", "Virtual Bidding"],
    highlights: [
      "Unprecedented Multi-Model Post-2020 US Market Benchmark: Conducted the most comprehensive empirical benchmark to date on post-2020 US wholesale power markets, analyzing 21 forecasting configurations across 17 model families on PJM (capacity market) and ERCOT (energy-only market) over 2019–2025 (~61,000 hours per market) across 4 extreme volatility regimes including Winter Storm Uri (>\\$9,000/MWh spikes) and the European gas crisis spillover.",
      "SOTA Deep Learning Outperformance Over Gradient Boosting: Established that direct multi-output Bidirectional LSTM (BiLSTM) achieves new state-of-the-art accuracy, delivering test-set MAE of **\\$4.57/MWh on PJM** and **\\$3.64/MWh on ERCOT**, decisively outperforming static tree models (LightGBM MAE \\$7.71 and \\$8.55) and rolling tree models (LightGBM MAE \\$6.69 and \\$7.59), statistically validated via Diebold-Mariano tests with Benjamini-Hochberg FDR control at $p < 0.01$.",
      "Disproving Tree Dominance via Leak-Free Operational Protocols: Proved that traditional tree superiority in EPF is an artifact of short-term autoregressive causal leakage ($<24$h lags). By strictly enforcing a 24-hour minimum lag to emulate true noon day-ahead clearing, recursive 1-step tree models suffered compounding errors, whereas deep direct multi-output architectures predicted all 24 hours simultaneously in a single forward pass. A controlled lag ablation showed adding 1–12h lags artificially dropped tree MAE by **47% on PJM and 62% on ERCOT** ($p < 10^{-100}$).",
      "Empirical Diagnosis of Conformal Prediction Failure under Regime Shift: Discovered and proved that Conformalized Quantile Regression (CQR) fails to maintain its 90% finite-sample coverage guarantee under market regime shift, diverging wildly to 95.4% over-coverage on PJM and 80.1% under-coverage on ERCOT. Formal two-sample Kolmogorov-Smirnov ($p < 10^{-100}$) and Anderson-Darling tests proved severe violation of the exchangeability assumption between 2022 calibration and 2024–2025 test periods. In contrast, non-parametric Quantile Regression Forests (QRF) hit target coverage robustly (87.0% on PJM, 90.2% on ERCOT).",
      "Decisive Compute-Accuracy Pareto Dominance: Demonstrated that a single 20-minute static training run of BiLSTM achieved **32% lower error** than the best rolling LightGBM model requiring 24 monthly retraining cycles. While rolling BiLSTM improved further to \\$3.66/MWh (PJM), its 192 GPU-hour computational cost establishes that static BiLSTM provides the optimal accuracy-per-compute-hour trade-off for industrial deployment.",
      "Counter-Intuitive Cross-Market Zero-Shot Generalization: Discovered that zero-shot transfer of tree models trained exclusively on a stable capacity market (PJM) to an energy-only market (ERCOT) actually yielded lower error than training directly on ERCOT data (LightGBM MAE improved from \\$8.55 to \\$8.14/MWh; XGBoost improved from \\$8.42 to \\$7.77/MWh; QRF achieved \\$7.51/MWh). Stable training forces trees to learn fundamental load and weather drivers rather than greedily overfitting to erratic, non-repeating spike magnitudes.",
      "Revealing the Economic-Statistical Disconnect: Simulated day-ahead virtual bidding with ISO clearing fees (\\$0.50/MWh) and $0.3\\sigma$ trailing slippage. Revealed that superior point accuracy (MAE) does not guarantee highest financial profit: rolling LightGBM captured the highest total PnL (\\$19,758 on PJM, Sharpe 14.67) by capturing large directional swings, while BiLSTM achieved a higher win rate (95.2% vs 93.7%) on low-margin days. Applying risk-aware CQR and Bayesian MC Dropout filters scaled position sizes dynamically, boosting the Sharpe ratio up to **22.69**.",
      "Evaluation of Time-Series Foundation Models (TSFMs): Conducted the first evaluation of Amazon's Chronos-Bolt v1 and v2 on US electricity prices; showed that zero-shot foundation models trail domain-trained deep learning (MAE 6.85–7.02 on PJM) and that post-hoc linear residual injection (Ridge-residuals) severely degraded accuracy on volatile grids (ERCOT MAE exploded to \\$11.84/MWh), exposing the danger of two-stage linear covariate adaptation under regime shift."
    ],
    codeUrl: "https://github.com/MufakirAnsari/Energy-Cost-Prediction",
    paperUrl: "https://github.com/MufakirAnsari/Energy-Cost-Prediction"
  },
  {
    id: "dynacut-quantum",
    number: 5,
    title: "DynaCut: Bounding Classical Memory in Quantum Circuit Knitting via Resource-Aware Tensor Network Reconstruction",
    shortTitle: "DynaCut: Resource-Aware Tensor Network Quantum Circuit Knitting",
    authors: "Mufakir Qamar Ansari, Mudabir Qamar Ansari",
    focusArea: "Quantum Circuit Knitting, Quasiprobability Decomposition (QPD), Tensor Networks, Hybrid Quantum-HPC Compilation, Heavy-Hex Topology",
    category: "quantum-hpc",
    venue: "Submitted to Quantum Machine Intelligence (Springer Nature)",
    doi: "In Review (Springer Nature)",
    status: "Under Review",
    statusBadge: "Springer Nature",
    statusColor: "secondary",
    summary: "Closed-loop compiler-scheduler that bounds host RAM during quantum circuit cutting. Caps 26-qubit simulation to ≤1.74 MB where classical statevector simulators crash with OOM (>1024 MB), validated on 156-qubit IBM Marrakesh.",
    stats: [
      { label: "Memory Footprint", value: "≤ 1.74 MB / 26Q" },
      { label: "RAM Reduction", value: "> 99.8%" },
      { label: "Gate Depth Cut", value: "71% – 75%" },
      { label: "QPU Tested", value: "156-Qubit Marrakesh" }
    ],
    tags: ["Quantum Computing", "Tensor Networks", "Circuit Knitting", "Qiskit", "IBM Marrakesh", "SVD Truncation"],
    highlights: [
      "Resource-Aware Quantum Circuit Knitting: Developed DynaCut, a closed-loop compiler-scheduler that resolves the classical compilation memory wall in Quasiprobability Decomposition (QPD) by treating host RAM ($V_{max}$) as a hard constraint during quantum circuit partitioning and tensor network reconstruction.",
      "Kernighan-Lin (KL) Hypergraph Bisection with Imbalance Tolerance: Modeled parameterized quantum circuits as weighted hypergraphs and engineered an $O(|V|^2 \\log |V|)$ KL bisection engine. By introducing an imbalance tolerance parameter $\\epsilon$, the partitioner discovered sparser cut boundaries, reducing cuts from $K \\approx 14$ (random) to $K = 8$ on 14-qubit graphs, yielding an astronomical **$5 \\times 10^5 \\times$ reduction in QPD sampling overhead** ($\\Gamma^2 = 9^K$).",
      "Adaptive Tensor Network Knitter with Bounded-Error SVD Truncation: Replaced naive sum-over-paths accumulation with an adaptive tensor network contraction engine that dynamically toggles between exact dense contraction and Singular Value Decomposition (SVD) truncation when intermediate tensor tree-width threatens classical memory, mathematically proving an amplified truncation error bound $|\\Delta \\langle H \\rangle| \\le \\Gamma \\cdot \\epsilon_{SVD}$ via the Schatten 2-norm.",
      "Overcoming the Classical Memory Wall (>99.8% RAM Reduction): In 26-qubit IBM Heavy-Hex noisy simulations, exact monolithic statevector simulation crashed with Out-Of-Memory (OOM) at $N=26$ (exceeding 1024 MB at $N=24$), whereas DynaCut strictly capped peak classical memory to **$\\le 1.74$ MB at $N=26$** under an enforced 256 MB constraint.",
      "Bypassing Noise-Induced Barren Plateaus via Depth Reduction: In 26-qubit simulations under IBM Heron thermal relaxation ($T_1, T_2$) and depolarizing noise, monolithic circuits mapped to heavy-hex lattices required extensive SWAP routing ($D > 100$), decaying into a noise-induced barren plateau where Zero-Noise Extrapolation (ZNE) failed. DynaCut’s spatial sub-clustering ($N_p \\le 7$) eliminated global SWAP cascades, collapsing gate depth to **$D \\approx 40$ (71%–75% depth reduction)**, preserving the SNR required for viable ZNE and stable SPSA optimization from cold-start random initialization.",
      "Physical Hardware Validation on 156-Qubit IBM Marrakesh: Deployed and benchmarked DynaCut on the physical 156-qubit superconducting `ibm_marrakesh` processor from $N=8$ to 50 qubits. Empirically demonstrated that for $K=1$ partitions, physical hardware runtime remained completely flat between **103.7 and 197.4 seconds** (mean 136.5 s) regardless of total qubit count, proving that $O(1)$ cross-boundary entanglement successfully neutralizes the $O(2^N)$ compilation explosion on physical silicon.",
      "Empirical Delineation of the Physical Transposition Frontier: Validated that while DynaCut successfully transposes the $O(2^N)$ classical memory barrier into an $O(9^K)$ quantum shot-budget constraint, physical execution on `ibm_marrakesh` with $K \\ge 2$ triggered QPU execution timeout quotas (Error code 1305; Ran too long). This established a definitive physical boundary: circuit knitting is viable on current NISQ devices strictly for $K \\le 2$ or sparse topologies (e.g., $H_2$ molecular potential energy curves with UCCSD ansatz).",
      "Scalable Hamiltonian-Agnostic Physics Benchmarking: Successfully applied DynaCut to calculate the complete potential energy surface of molecular Hydrogen ($H_2$) across bond lengths 0.5 Å to 2.5 Å using the hardware-mapped UCCSD ansatz, achieving near-exact parity with full configuration interaction eigensolvers."
    ],
    codeUrl: "https://github.com/MufakirAnsari/DynaCut",
    paperUrl: "https://github.com/MufakirAnsari/DynaCut"
  },
  {
    id: "dypart-scheduler",
    number: 6,
    title: "Dy-Part: A Dynamic, Noise-Aware Scheduler for Optimizing Hybrid Quantum-Classical Algorithms",
    shortTitle: "Dy-Part: Dynamic Noise-Aware Hybrid Quantum-Classical Scheduler",
    authors: "Mufakir Qamar Ansari, Mudabir Qamar Ansari",
    focusArea: "Quantum Computing, Hybrid NISQ Algorithms, Noise-Aware Scheduling, Variational Quantum Eigensolver (VQE), Combinatorial Optimization",
    category: "quantum-hpc",
    venue: "Submitted to Quantum Machine Intelligence (Springer Nature)",
    doi: "Preprint DOI: 10.21203/rs.3.rs-8041248/v1",
    status: "Under Review",
    statusBadge: "Springer Nature",
    statusColor: "secondary",
    summary: "Dynamic scheduling framework adapting workload sizes to real-time QPU noise calibration. 4,160-run benchmark campaign on OSC Ascend supercomputer showed sub-4.2ms ternary search and +4.90% higher approximation ratio under severe noise.",
    stats: [
      { label: "Cost Model R²", value: "0.8227" },
      { label: "Search Latency", value: "< 4.16 ms" },
      { label: "HPC Benchmark", value: "4,160 Runs" },
      { label: "Supercomputer", value: "OSC Ascend" }
    ],
    tags: ["Quantum Algorithms", "VQE", "Noise-Aware", "Ternary Search", "OSC Supercomputer", "Max-Cut"],
    highlights: [
      "Dynamic Noise-Aware Quantum Scheduling: Created Dy-Part, an adaptive scheduling framework that resolves the critical bottleneck of static, noise-blind graph partitioning in hybrid quantum algorithms by dynamically determining workload subproblem sizes based on real-time QPU noise calibration ($\\epsilon_{gate}$ and $\\epsilon_{readout}$).",
      "First-Principles Theoretical Cost Formulation: Formulated a heuristic cost model balancing two competing physical phenomena: exponential quantum circuit infidelity decay under two-qubit depolarizing gate noise ($C_{quantum} = 1 - (1 - \\epsilon_{gate})^{reps \\cdot (n_{sub} - 1)}$) against superlinear classical recombination penalties ($C_{classical} = \\gamma (N_{cuts} / |E|)^\\beta$) arising from product-state boundary approximation errors ($\\langle Z_u Z_v \\rangle \\approx \\langle Z_u \\rangle \\langle Z_v \\rangle$).",
      "Rigorous Empirical Cost Model Validation ($R^2 = 0.8227$): Validated the cost model across 1,040 benchmark runs and 2,000 hyperparameter grid searches on noisy simulators, achieving an exceptional determination coefficient of **$R^2 = 0.8227$** with empirical Max-Cut Approximation Ratio (Pearson $r = -0.9071$, Spearman $\\rho = -0.8150$, $p < 10^{-12}$), confirming that lower predicted cost directly forecasts superior empirical solution quality.",
      "Sub-4.2 Millisecond Logarithmic Ternary Search: Exploited the unimodal structure of the composite cost landscape to implement an $O(\\log |V| \\cdot (|V| + |E|))$ ternary search scheduler with partition caching. In head-to-head empirical ablations across graphs from 6 to 30 nodes, ternary search reduced graph partition evaluations by up to **65.52%** (mean 45.90%) with a $1.77\\times$ speedup, executing in strictly under **4.16 ms** (mean 1.74 ms, representing $<0.05\%$ of total execution time).",
      "Architectural Justification of VQE over QAOA: Formally justified adopting VQE with a hardware-efficient TwoLocal nearest-neighbor ansatz instead of QAOA, which eliminates the exponential $O(4^K)$ classical sampling overhead of circuit-knitted QAOA entangling gates, enabling independent sub-circuits with product-state boundary stitching across decoupled QPUs.",
      "Massive 4,160-Run Supercomputing Benchmark Campaign: Executed a comprehensive 4,160-run benchmark campaign on the Ohio Supercomputer Center (OSC) Ascend cluster (dual AMD EPYC 7763 64-core processors) evaluating 3-regular graphs ($N=8$ to 20 nodes) across 8 noise levels ($\\epsilon_{gate} \\in [3.16 \\times 10^{-4}, 3.16 \\times 10^{-2}]$) and 4 partitioning baselines (Dy-Part, Static $n_{sub}=4$, METIS multilevel, and Random).",
      "Statistically Significant High-Noise Advantages: Dy-Part achieved the highest overall mean approximation ratio across all 4,160 runs (0.8489 vs METIS 0.8448, Static 0.8434, Random 0.8398; ANOVA $F=12.37, p < 10^{-7}$). Paired Wilcoxon signed-rank tests confirmed statistically significant gains in 15 of 40 configurations against Static, 15 of 40 against METIS, and 19 of 40 against Random ($p < 0.05$).",
      "Large Effect Sizes Under Severe Noise Regimes: Demonstrated that as hardware noise escalates, Dy-Part's dynamic downscaling preserves quantum state fidelity, yielding up to **+4.90% higher approximation ratio on 20-node graphs** ($p = 6.10 \\times 10^{-5}$, Cohen’s $d = 1.30$, and up to $d = 1.75$ in extreme noise), confirming dynamic partitioning as an essential software shield against NISQ decoherence."
    ],
    codeUrl: "https://github.com/MufakirAnsari/Dy-Part",
    paperUrl: "https://doi.org/10.21203/rs.3.rs-8041248/v1"
  },
  {
    id: "odot-safety",
    number: 7,
    title: "From Data to Action: Leveraging AI/ML to Guide Proactive Pedestrian and Bicyclist Safety Initiatives",
    shortTitle: "AI/ML for Proactive Pedestrian & Bicyclist Safety (ODOT & FHWA)",
    authors: "Eddie Chou, Rabinson Rai, Mufakir Ansari, Sanjaya Khanal, Austin Davenport",
    focusArea: "Transportation Safety Analytics, Machine Learning, GIS Spatial Modeling, Vision Zero Policy Support",
    category: "finance-applied",
    venue: "Ohio Department of Transportation (ODOT) & FHWA (Report FHWA/OH-2025/19, Project 120637, August 2025)",
    doi: "FHWA/OH-2025/19",
    status: "Published Final Report",
    statusBadge: "ODOT / FHWA 2025",
    statusColor: "status-active",
    summary: "10-year statewide safety analytics on 37,700+ pedestrian and bicyclist crashes with Bayesian-tuned ML models, Youden's J decision thresholding, and an interactive production ArcGIS Web App for ODOT Vision Zero.",
    stats: [
      { label: "Study Scope", value: "10-Yr Crash Data" },
      { label: "Crash Records", value: "37,700+ Incidents" },
      { label: "Tool Deployed", value: "ArcGIS Web App" },
      { label: "Policy Impact", value: "ODOT Vision Zero" }
    ],
    tags: ["Transportation AI", "GIS Analytics", "Vision Zero", "XGBoost", "LightGBM", "ArcGIS Pro"],
    highlights: [
      "Statewide 10-Year Big Data Safety Analytics: Led a comprehensive machine learning safety study for ODOT and FHWA analyzing 10 years (2014–2023) of Ohio crash records (24,578 pedestrian and 13,131 bicyclist crashes) to model the determinants of Fatal and Serious Injury (FSI) crashes under ODOT's Vision Zero initiative.",
      "Multi-Source Geospatial Big Data Integration: Spatially joined ODOT TIMS crash records with statewide roadway inventory data (AADT traffic volume, speed limits, lane counts, lane widths) and OpenStreetMap geospatial layers (generating 50-ft buffer spatial joins for sidewalks, bus stops, and traffic signals) using ArcGIS Pro and GeoPandas.",
      "Cohort-Specific Statistical Problem Formulation: Partitioned crashes into three distinct behavioral cohorts with markedly different baseline risk profiles: Non-intersection pedestrian crashes (30.1% FSI rate, $n=11,554$), Intersection pedestrian crashes (19.0% FSI rate, $n=13,024$), and Bicyclist crashes (13.3% FSI rate, $n=13,131$).",
      "Bayesian-Tuned Multi-Model ML Architecture: Implemented and benchmarked four ML architectures (Random Forest, XGBoost, LightGBM, and Deep Neural Networks with Batch Normalization and Dropout) using Optuna Bayesian hyperparameter optimization across 67 encoded binary variables, achieving consistent out-of-sample AUCs of 0.68–0.69 and accuracies of 66%–68%.",
      "Youden's J Optimal Decision Thresholding: Addressed class imbalance without synthetic data distortion by deriving optimal operating cutoffs via Youden’s J statistic (shortest distance to $(0,1)$ on ROC curves), establishing calibrated operational thresholds (0.30 for non-intersection pedestrian, 0.19 for intersection pedestrian, and 0.133 for bicyclist crashes).",
      "Explainable AI (XAI) Discovery of Leading Fatality Drivers: Synthesized Gini Impurity, Gain Importance, and SHAP (SHapley Additive exPlanations) values to isolate key crash determinants: Substance impairment was the single largest risk multiplier: drug involvement produced a **74% FSI rate** and alcohol a **48% FSI rate** (crashes involving drugs/alcohol accounted for only 1.09% of crashes but **$>12.8\\%$ of all fatalities**); High speed ($\\ge 50$ mph) ranked as the #1 predictor of bicyclist FSI crashes (10%–12% relative importance); Darkness on unlighted roadways and the absence of sidewalks significantly elevated FSI probabilities.",
      "Production ArcGIS Web Application for Targeted Interventions: Developed and deployed an interactive ArcGIS Online Web App Builder dashboard featuring dynamic multi-layer GIS mapping and interactive infographics. The tool empowers ODOT traffic safety engineers to query high-risk locations, visualize critical variables, and export prioritized georeferenced CSV lists (e.g., dark unlighted corridors on N Main St, Montgomery County and Harrisburg Pike, Franklin County) for targeted infrastructure investments."
    ],
    codeUrl: "https://github.com/MufakirAnsari",
    paperUrl: "https://www.dot.state.oh.us/Divisions/Planning/SPR/Research/reportsandplans/Reports/2025%20Final%20Reports/Final%20Report%20SJN%20136837.pdf"
  },
  {
    id: "idc-pathology",
    number: 8,
    title: "High-Sensitivity Detection of Invasive Ductal Carcinoma via Domain-Specific SimCLR Pre-Training",
    shortTitle: "High-Sensitivity Breast Cancer Detection via SimCLR SSL Pre-Training",
    authors: "Mufakir Qamar Ansari",
    focusArea: "Medical Computer Vision, Self-Supervised Learning (SSL), Computational Pathology, Digital Oncology, ResNet50",
    category: "biomedical",
    venue: "Under Review, Signal, Image and Video Processing · Preprint DOI: 10.21203/rs.3.rs-8031909/v1",
    doi: "10.21203/rs.3.rs-8031909/v1",
    status: "Under Review / SIVP",
    statusBadge: "Under Review (SIVP)",
    statusColor: "status-active",
    summary: "Two-stage self-supervised SimCLR pre-training of ResNet50 on 277,524 unlabeled H&E histopathology patches from 162 patients with leak-free patient-stratified validation, achieving AUC-ROC 0.950 and ultra-low 0.34% miss rate.",
    stats: [
      { label: "Patches Trained", value: "277,524 Tiles" },
      { label: "AUC-ROC", value: "0.950" },
      { label: "Sensitivity", value: "93.2% (Recall)" },
      { label: "Miss Rate", value: "0.34% Ultra-Low" }
    ],
    tags: ["Medical AI", "SimCLR", "Digital Pathology", "Computer Vision", "ResNet50", "Grad-CAM"],
    highlights: [
      "Domain-Specific Self-Supervised Learning (SSL) for Digital Pathology: Implemented a two-stage computer vision pipeline leveraging the SimCLR contrastive learning framework to pre-train a ResNet50 encoder on 277,524 unlabeled $50 \\times 50$ H&E histopathology patches from 162 breast cancer patients, successfully bridging the severe domain gap between natural ImageNet images and microscopic tissue architectures.",
      "Leak-Free Patient-Stratified Validation Protocol: Enforced a strict patient-stratified split (90% train / 146 patients, 5% validation / 8 patients, 5% test / 8 patients / 13,876 patches), ensuring that patches from the same patient never crossed split boundaries, eliminating clinical data leakage common in patch-level pathology literature.",
      "Statistically Significant SOTA Performance Gains: On the held-out test set of 13,876 patches, the SimCLR-pretrained ResNet50 achieved an **AUC-ROC of 0.950** and **AUC-PR of 0.886**, demonstrating statistically significant improvements of **+0.032 AUC-ROC and +0.044 AUC-PR** over standard ImageNet transfer learning ($p < 0.01$ via 1,000 bootstrap resamples).",
      "Clinical-Grade High Sensitivity & Ultra-Low Miss Rate: Fine-tuned with weighted Binary Cross-Entropy ($w_{pos} = 2.52$) to address the 71.6%/28.4% class imbalance. At Youden's optimal operating threshold, the model achieved **93.2% sensitivity (Recall 0.932)** and an ultra-low false-negative rate of just **0.34%** (missing only 47 out of 13,876 test patches), minimizing the clinical risk of overlooked carcinomas in automated triage workflows.",
      "Quantitative Representation Clustering Superiority: Evaluated learned feature representations using t-SNE and UMAP, demonstrating that SimCLR features formed tight, distinctly separated clusters of IDC-positive versus IDC-negative tissue, achieving an average silhouette score of **0.45 versus 0.12 for ImageNet transfer learning** (a **$3.75\\times$ increase in cluster cohesion**).",
      "Pathologically Grounded Grad-CAM Interpretability: Validated model decision boundaries using Gradient-weighted Class Activation Mapping (Grad-CAM), confirming that the network's high-activation regions attend directly to histopathological hallmarks of breast cancer—specifically nuclear pleomorphism, disrupted ductal basement membranes, and tumor-stroma interfaces.",
      "Inherent Robustness to Inter-Laboratory Staining Variability: Deliberately omitted stain normalization algorithms (Macenko/Vahadane) during pre-training, proving that SimCLR's composition of stochastic color jitter, rotation, and Gaussian blur augmentations intrinsically learns stain-invariant representations across diverse laboratory scanning environments."
    ],
    codeUrl: "https://github.com/MufakirAnsari/breast_cancer_classification",
    paperUrl: "https://doi.org/10.21203/rs.3.rs-8031909/v1"
  },
  {
    id: "race-to-idle",
    number: 9,
    title: "Racing to Idle: Energy Efficiency of Matrix Multiplication on Heterogeneous CPU and GPU Architectures",
    shortTitle: "Racing to Idle: Energy Efficiency & Power Profiling in HPC",
    authors: "Mufakir Qamar Ansari, Mudabir Qamar Ansari",
    focusArea: "Green Computing, Energy-Efficient HPC, Heterogeneous Architecture Benchmarking, Performance-per-Watt",
    category: "quantum-hpc",
    venue: "American Journal of Computer Science and Technology (AJCST), ISSN Online: 2640-012X, 2025 · Preprint DOI: 10.21203/rs.3.rs-7890483/v1",
    doi: "10.21203/rs.3.rs-7890483/v1",
    status: "Published Journal Article",
    statusBadge: "AJCST (Published)",
    statusColor: "status-active",
    summary: "Empirical validation of the 'Race-to-Idle' principle on single-precision GEMM across CPU, integrated GPU, and discrete GPU. The dGPU achieved a 93.5x speedup and 131x higher performance-per-watt consuming just 1% to 2% of the CPU's total electrical energy.",
    stats: [
      { label: "Energy Cut", value: "98% – 99%" },
      { label: "Speedup", value: "93.5x over CPU" },
      { label: "GFLOPS/Watt", value: "131x Higher" },
      { label: "Profiling", value: "Linux RAPL + NVML" }
    ],
    tags: ["Green Computing", "Energy Efficiency", "HPC", "Performance-per-Watt", "RAPL", "Roofline"],
    highlights: [
      "Heterogeneous High-Performance Energy Profiling: Executed a comprehensive empirical benchmark comparing execution time, energy-to-solution, and power efficiency for single-precision matrix multiplication ($4096 \\times 4096$ to $8192 \\times 8192$) across three compute architectures within a single heterogeneous platform: multi-core CPU (AMD Ryzen 7 5800H), integrated GPU (AMD Radeon Vega iGPU), and discrete GPU (NVIDIA GeForce GTX 1650 Mobile).",
      "Empirical Validation of the 'Race-to-Idle' Principle: Provided direct quantitative evidence that minimizing total energy consumption depends on rapid workload execution and swift return to idle states rather than low instantaneous power draw. While the discrete GPU drew higher peak power (~46–60 W), it finished the $4096 \\times 4096$ workload in **0.35 seconds** and consumed only **11.7 Joules**, compared to the CPU which drew 53.5 W over 29.2 seconds and consumed **1,562.5 Joules**.",
      "93.5x Speedup and >50x Greater Energy Efficiency: The discrete GPU demonstrated a massive **$93.5\\times$ speedup** over the multi-core CPU for large matrices, while consuming **just ~1% to 2% of the CPU's total electrical energy** (reducing energy per GFLOP from 332.0 J/GFLOP down to **0.03 J/GFLOP**).",
      "131x Boost in Performance-per-Watt: The dGPU attained a peak throughput of **391.8 GFLOPS** at **11.8 GFLOPS/Watt**, compared to the CPU's 4.7 GFLOPS at 0.09 GFLOPS/Watt, demonstrating an astounding **$131\\times$ improvement in computational efficiency per watt**.",
      "Orders-of-Magnitude Energy-Delay Product (EDP) Superiority: Evaluated composite performance-energy trade-offs via Energy Delay Product (EDP), showing that the discrete GPU consistently maintained an EDP below **1,000 J·s**, outperforming the integrated GPU by **$10\\times$** and vastly outstripping the CPU (which reached into the millions of J·s).",
      "Characterizing the Integrated GPU (iGPU) Efficiency Envelope: Benchmarked the AMD Radeon Vega iGPU via OpenCL, showing it delivered **47.0 GFLOPS at 16.8 W average power (2.8 GFLOPS/Watt)** and consumed 49.0 Joules. Identified the iGPU as an optimal, highly energy-efficient architecture for power-capped, battery-dependent mobile or edge systems where thermal envelopes forbid high-power discrete bursts.",
      "Hardware-Counter Power Measurement Methodology: Developed a non-intrusive, production-grade profiling methodology using Linux `perf` to access Intel/AMD RAPL hardware counters (`power/energy-pkg/`) for the CPU/iGPU shared silicon package, synchronized with 10 Hz NVML polling via `nvidia-smi` for the discrete GPU.",
      "Roofline Modeling and Memory Subsystem Bottlenecks: Analyzed sustained memory bandwidth and operational intensity across devices, revealing that dGPU achieved $>2.5$ GB/s bandwidth and operated close to theoretical compute rooflines, whereas CPU performance was severely throttled by memory bus latency ($<0.05$ GB/s) and serial architectural constraints."
    ],
    codeUrl: "https://github.com/MufakirAnsari",
    paperUrl: "https://doi.org/10.21203/rs.3.rs-7890483/v1"
  },
  {
    id: "cuda-gemm",
    number: 10,
    title: "Accelerating Matrix Multiplication: A Performance Comparison Between Multi-Core CPU and GPU",
    shortTitle: "Accelerating Matrix Multiplication: Multi-Core CPU (OpenMP) vs GPU (CUDA)",
    authors: "Mufakir Qamar Ansari, Mudabir Qamar Ansari",
    focusArea: "High-Performance Computing (HPC), GPU Kernel Optimization, OpenMP & CUDA C++ Parallelization",
    category: "quantum-hpc",
    venue: "arXiv:2507.19723v1 [cs.DC], July 2025",
    doi: "arXiv:2507.19723",
    status: "Preprint",
    statusBadge: "arXiv:2507.19723",
    statusColor: "primary",
    summary: "Engineered sequential C++, 16-thread OpenMP parallel CPU, and CUDA shared-memory tiled GPU kernels. Demonstrated 593x speedup over sequential and 45.7x acceleration over optimized parallel CPU for 4096×4096 matrices.",
    stats: [
      { label: "Sequential Speedup", value: "593x Faster" },
      { label: "Parallel CPU Gain", value: "45.7x Faster" },
      { label: "Execution Time", value: "663 ms / 4096²" },
      { label: "Optimization", value: "Shared-Mem Tiling" }
    ],
    tags: ["HPC", "CUDA C++", "OpenMP", "Shared Memory", "Matrix Multiplication", "Benchmarking"],
    highlights: [
      "Heterogeneous HPC Benchmark Architecture: Engineered and benchmarked three distinct, highly optimized implementations of dense single-precision matrix-matrix multiplication ($C = A \\times B$) in C++: a naive sequential baseline, a multi-threaded CPU kernel using OpenMP with `#pragma omp parallel for collapse(2)`, and a massively parallel discrete GPU kernel written in CUDA C++ utilizing shared-memory tiling.",
      "593x Empirical Speedup over Sequential Baseline: Evaluated scaling across square matrices from $128 \\times 128$ to $4096 \\times 4096$ on a consumer heterogeneous platform (AMD Ryzen 7 5800H 8-core/16-thread CPU and NVIDIA GeForce GTX 1650 Mobile GPU). For a $4096 \\times 4096$ matrix, the CUDA kernel completed execution in **663.24 ms** versus **393,280.52 ms (~393.3 s)** for sequential execution, achieving an empirical speedup of **$592.97\\times$**.",
      "45.7x Speedup over Optimized Parallel CPU: Against the 16-thread OpenMP parallel CPU implementation (which achieved 30,332.07 ms, a $12.97\\times$ speedup over sequential), the CUDA GPU kernel delivered a direct **$45.73\\times$ acceleration**, proving that many-core GPU architectures achieve order-of-magnitude computational throughput gains over fully saturated modern multi-core CPUs for dense linear algebra.",
      "End-to-End Latency & Transfer Accounting: Implemented comprehensive wall-clock timing using `std::chrono::high_resolution_clock`, strictly capturing host-to-device memory allocation, PCIe input data transfer (`cudaMemcpyHostToDevice`), kernel execution, and device-to-host result transfer (`cudaMemcpyDeviceToHost`), ensuring production-realistic performance accounting.",
      "Characterization of Three Architectural Scaling Regimes: Discovered and mathematically characterized three distinct operational regimes: (i) *Parallel Overhead Dominance* at small problem sizes ($128 \\times 128$, where OpenMP thread creation/synchronization overhead caused a 7.10 ms vs. 2.18 ms slowdown), (ii) *Predictable CPU Scaling* plateauing at $12\\text{--}14\\times$ speedup from $256 \\times 256$ upwards across 16 threads, and (iii) *Superlinear GPU Scaling* accelerating from $8.29\\times$ at $128 \\times 128$ to $593\\times$ at $4096 \\times 4096$.",
      "Empirical Validation of the Classic '100x GPU vs. CPU' Myth: Provided contemporary empirical validation of Lee et al.'s seminal ISCA study on realistic speedup bounds, demonstrating that when comparing against an optimized, vector-parallel multi-core CPU baseline, the GPU advantage on modern commodity hardware is a realistic, non-mythological **~45x advantage**."
    ],
    codeUrl: "https://github.com/MufakirAnsari",
    paperUrl: "https://arxiv.org/abs/2507.19723"
  }
];

const conferencePresentations = [
  {
    id: "pres-otec-2024",
    title: "From Data to Action: Leveraging Machine Learning/Artificial Intelligence to Guide Proactive Pedestrian and Cyclist Safety Initiatives",
    event: "Ohio Transportation Engineering Conference (OTEC 2024)",
    year: "2024",
    month: "October",
    authors: "Rabinson Rai, Mufakir Qamar Ansari, Abiskar Nepal, Eddie Chou",
    location: "Greater Columbus Convention Center · Columbus, Ohio, USA",
    badge: "OTEC 2024 Oral Presentation",
    category: "Applied AI & Transportation Safety",
    summary: "Presented machine learning frameworks and predictive spatial safety models developed for the Ohio Department of Transportation (ODOT) to evaluate high-risk road corridors, vulnerable road user crash severities, and countermeasure allocations."
  },
  {
    id: "pres-resilience-2023",
    title: "Installation, Testing and Data Analysis for a Weather Station",
    event: "2023 Resilience and Recovery Summit: Resilience and Recovery: Uniting the Community",
    year: "2023",
    authors: "Dr. Stefan Andrei, Harini Doppalapudi, Ramanpreet Singh, Venkata Raghu Vishnumolakala, Mufakir Qamar Ansari",
    location: "Lamar University · Beaumont, Texas, USA",
    badge: "2023 Resilience Summit Presentation",
    category: "IoT Systems & Environmental Data Analysis",
    summary: "Presented hardware sensor integration, meteorological telemetry data collection, and statistical analysis for resilient weather station infrastructure supporting regional emergency response and community recovery."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { researchPapers, conferencePresentations };
}

