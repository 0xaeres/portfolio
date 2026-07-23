export const LINKS = {
  email: 'sudhanshuvshekhar@gmail.com',
  emailHref: 'mailto:sudhanshuvshekhar@gmail.com?subject=Portfolio%20enquiry',
  github: 'https://github.com/0xaeres',
  linkedin: 'https://www.linkedin.com/in/sudhanshu-shekhar-770678198/',
  location: 'Bengaluru, India',
}

export const SUMMARY =
  'Building production systems across LLM workflows, blockchain protocols, and distributed infrastructure — 2+ years shipping applied AI and backend systems.'

export const MARQUEE_ITEMS = [
  'APPLIED AI',
  'RAG & CONTEXT ENGINES',
  'ZK PROOFS',
  'LLM SYSTEMS',
  'SOLANA',
  'ETHEREUM',
  'AGENT WORKFLOWS',
  'PROTOCOL ENGINEERING',
]

export const SKILL_GROUPS = [
  {
    num: '01',
    label: 'APPLIED AI',
    title: 'Context engines & agent workflows',
    items: [
      'RAG',
      'Context Engineering',
      'Hybrid Search',
      'Embeddings',
      'Reranking',
      'GraphRAG',
      'LangGraph',
      'LlamaIndex',
      'MCP Tools',
      'Eval Harnesses',
      'LoRA / QLoRA',
    ],
  },
  {
    num: '02',
    label: 'WEB3 / BLOCKCHAIN',
    title: 'Protocols, proofs & staking infra',
    items: [
      'Solidity · Foundry',
      'Solana · Anchor',
      'Hardhat',
      'Noir / Circom',
      'zk-SNARKs',
      'Smart Contracts',
      'Protocol Engineering',
      'Staking Infra',
    ],
  },
  {
    num: '03',
    label: 'FULL-STACK & SYSTEMS',
    title: 'Production backends & interfaces',
    items: [
      'Python · FastAPI',
      'TypeScript',
      'React / Next.js',
      'Node · NestJS',
      'Java · Spring Boot',
      'Rust',
      'Docker · Kafka',
      'SQL',
      'CI/CD',
    ],
  },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  meta: string
  bullets: { text: string; badge?: string }[]
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Fidelity Investments',
    role: 'SOFTWARE ENGINEER · BLOCKCHAIN',
    period: 'JAN 2024 — PRESENT',
    meta: 'BENGALURU, INDIA',
    bullets: [
      {
        text: 'Building and optimising core multi-chain crypto staking infrastructure for an institutional DeFi platform — end-to-end ledger integration and cross-chain transaction flows.',
      },
      {
        text: 'Leading development of an enterprise-level product Knowledge Base powered by Hybrid RAG.',
        badge: 'OWN INITIATIVE',
      },
    ],
  },
  {
    company: 'Lucid Dream Software',
    role: 'BLOCKCHAIN ENGINEER · PART-TIME',
    period: 'SEP 2023 — MAY 2026',
    meta: 'REMOTE',
    bullets: [
      {
        text: 'Developed a web3 platform on Solana to tokenize consumables and IP with on-chain traceability — cut transaction costs by 99.89% using zk-compression and Address Lookup Tables.',
      },
    ],
  },
  {
    company: 'Fidelity Investments',
    role: 'FULL STACK DEVELOPER INTERN',
    period: 'MAY 2023 — JUL 2023',
    meta: 'BENGALURU, INDIA',
    bullets: [
      {
        text: 'Built a Corda reconciliation platform — reduced exceptions by 80% and settlement time by 50%.',
      },
    ],
  },
]

export type Project = {
  num: string
  name: string
  kind: string
  tag: string
  period: string
  desc: string
  stack: string[]
  href: string
  flip: boolean
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'Anvay',
    kind: 'OPEN SOURCE',
    tag: 'CONTEXT ENGINE',
    period: 'FEB 2026 — PRESENT',
    desc: 'An open-source MCP-native context engine that indexes repositories, docs, and product artifacts to feed AI agents source-grounded context. AST-aware parsing, hybrid vector/graph retrieval, cross-encoder reranking, human-in-the-loop review, and retrieval eval gates.',
    stack: ['MCP', 'FASTAPI', 'QDRANT', 'LANGGRAPH', 'GRAPHRAG'],
    href: 'https://github.com/0xaeres/anvay-core',
    flip: false,
  },
  {
    num: '02',
    name: 'ZK-RFQ',
    kind: 'PRIVACY PROTOCOL',
    tag: 'ZERO KNOWLEDGE',
    period: 'JAN 2026 — MAR 2026',
    desc: 'A privacy-preserving RFQ gateway for block trades. Noir zk-SNARK proofs verify price and limit conditions without revealing private routing data or counterparty intent.',
    stack: ['NOIR', 'ZK-SNARKS', 'RUST', 'NESTJS', 'SOLIDITY'],
    href: 'https://github.com/0xaeres/zk-rfq',
    flip: true,
  },
  {
    num: '03',
    name: 'Drift Protocol',
    kind: 'DEFI AUTOMATION',
    tag: 'PORTFOLIO ENGINE',
    period: 'DEC 2024 — APR 2025',
    desc: 'An Ethereum protocol for automated portfolio rebalancing, yield harvesting, and risk-controlled drift management — non-custodial and fully on-chain.',
    stack: ['SOLIDITY', 'HARDHAT', 'ETHERS.JS', 'OPENZEPPELIN'],
    href: 'https://github.com/0xaeres/sma',
    flip: false,
  },
  {
    num: '04',
    name: 'Masked-Melon',
    kind: 'CONFIDENTIAL PAYMENTS',
    tag: 'CIRCOM CIRCUITS',
    period: 'STEALTH ADDRESSES',
    desc: 'A confidential payment protocol enabling users to receive funds without disclosing their wallet address — powered by Circom circuits and stealth addresses.',
    stack: ['CIRCOM', 'STEALTH ADDRESSES', 'PAYMENTS'],
    href: 'https://github.com/0xaeres/Masked-Melon',
    flip: true,
  },
]

export const EDUCATION = {
  degree: 'B.E. in Information Science & Engineering',
  school: 'Bangalore Institute of Technology',
  period: '2020 — 2024',
  meta: 'GPA 8.5 · BENGALURU, INDIA',
}

export const AWARDS = [
  {
    title: 'Bounty Winner — ETHIndia',
    org: 'SCROLL & POLYGON',
    year: '2023',
  },
  {
    title: 'Winner — Smart India Hackathon',
    org: 'MINISTRY OF EDUCATION INNOVATION CELL',
    year: '2022',
  },
]
