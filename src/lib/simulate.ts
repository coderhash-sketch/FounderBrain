// Simulated AI analysis — replace with local LLM inference in Electron build

export interface StressTestInput {
  problem: string;
  audience: string;
  revenueModel: string;
  marketSize?: string;
}

export interface StressTestResult {
  innovation_score: number;
  monetization_viability: "Low" | "Medium" | "High";
  risk_level: "Low" | "Medium" | "High";
  competitive_pressure: "Low" | "Medium" | "High";
  scalability_insight: string;
  top_3_weaknesses: string[];
  strategic_improvements: string[];
}

export interface FailureResult {
  failure_year: number;
  why_it_failed: string[];
  prevent_this_by: string[];
}

export interface BiasResult {
  bias_detected: string;
  risk_impact: "Low" | "Medium" | "High";
  evidence: string;
  correction: string;
}

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const pickLevel = (): "Low" | "Medium" | "High" => pick(["Low", "Medium", "High"]);

export function simulateStressTest(input: StressTestInput): Promise<StressTestResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        innovation_score: Math.floor(Math.random() * 5) + 4,
        monetization_viability: pickLevel(),
        risk_level: pickLevel(),
        competitive_pressure: pickLevel(),
        scalability_insight: `The ${input.revenueModel} model for ${input.audience} has moderate scaling potential. Key constraint: customer acquisition cost relative to LTV in the first 18 months. Consider focusing on organic distribution channels before paid growth.`,
        top_3_weaknesses: [
          `Unclear differentiation in a crowded ${input.audience} space — competitors can replicate core value proposition within 6 months`,
          `Revenue model dependency on ${input.revenueModel} creates single point of failure — diversification needed before Series A`,
          `Target audience "${input.audience}" may be too broad — segment into high-intent sub-cohorts for faster product-market fit`,
        ],
        strategic_improvements: [
          "Build defensible moat through proprietary data or network effects within first 12 months",
          "Establish clear unit economics benchmark: CAC < 1/3 LTV before scaling spend",
          "Create switching costs through deep workflow integration rather than feature parity",
        ],
      });
    }, 2000);
  });
}

export function simulateFailure(idea: string): Promise<FailureResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const year = 2026 + Math.floor(Math.random() * 5);
      resolve({
        failure_year: year,
        why_it_failed: [
          `Customer acquisition costs exceeded projections by 3.2x — the go-to-market strategy assumed organic growth that never materialized at scale`,
          `Unit economics inverted at ${Math.floor(Math.random() * 5000 + 2000)} monthly active users — infrastructure costs grew faster than revenue per user`,
          `A well-funded competitor (raised $${Math.floor(Math.random() * 40 + 10)}M Series B) launched a free tier that commoditized the core feature set`,
        ],
        prevent_this_by: [
          "Validate paid acquisition channels with $5K test budget before committing to growth model — require CAC payback within 6 months",
          "Implement usage-based pricing from day one to align infrastructure costs with revenue scaling",
          "Build proprietary moat (data network effect, integrations, community) that cannot be replicated by capital alone",
        ],
      });
    }, 2500);
  });
}

export function simulateBiasScan(inputs: string[]): Promise<BiasResult[]> {
  const biases: BiasResult[] = [
    {
      bias_detected: "Overconfidence Bias",
      risk_impact: "High",
      evidence: "Language patterns suggest certainty about market outcomes without data validation. Phrases like 'will definitely' and 'guaranteed growth' indicate emotional conviction over evidence-based projections.",
      correction: "Replace conviction-based projections with hypothesis-driven experiments. Define clear falsification criteria for each major assumption.",
    },
    {
      bias_detected: "TAM Exaggeration",
      risk_impact: "Medium",
      evidence: "Total addressable market claims appear to reference the broadest possible category rather than the realistic serviceable obtainable market. SAM is likely 5-8% of stated TAM.",
      correction: "Calculate bottom-up TAM using actual customer segments × realistic pricing × conversion rates. Focus on SAM/SOM for the next 24 months.",
    },
    {
      bias_detected: "Competitor Blindness",
      risk_impact: "Medium",
      evidence: "Analysis across inputs shows minimal acknowledgment of existing solutions. The market is rarely 'empty' — overlooking indirect competitors is a common founder error.",
      correction: "Map the competitive landscape including indirect substitutes, DIY solutions, and 'do nothing' scenarios. Interview 10 potential customers about current workarounds.",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(biases.slice(0, Math.max(1, inputs.length))), 1800);
  });
}
