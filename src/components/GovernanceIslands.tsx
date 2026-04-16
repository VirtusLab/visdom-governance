"use client";

import {
  HeroSection,
  FaqAccordion,
  FeatureCard,
  VisdomStrip,
} from "@virtuslab/visdom-ui";

// ---- Hero ----

interface GovernanceHeroProps {
  base: string;
}

export function GovernanceHero({ base }: GovernanceHeroProps) {
  return (
    <HeroSection
      title={<>Visdom<br /><span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Governance</span></>}
      subtitle="Visibility into AI-assisted work. Cost tracking attributed to the PR that caused it. Compliance evidence signed into one ledger — three pillars, one source of truth."
      actions={[
        { label: "Open TraceVault", href: "#tracevault", variant: "primary" },
        { label: "What You Get", href: "#capabilities", variant: "outline" },
      ]}
      tagline={
        <>
          Part of{" "}
          <a
            href="https://virtuslab.com/services/visdom"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Visdom
          </a>{" "}
          · VirtusLab&apos;s AI-Native SDLC
        </>
      }
    />
  );
}

// ---- Three Pillars ----

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ width: 24, height: 24 }}
  >
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ width: 24, height: 24 }}
  >
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 6-7" />
    <path d="M14 7h6v6" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ width: 24, height: 24 }}
  >
    <path d="M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export function PillarCards() {
  return (
    <>
      <FeatureCard
        icon={<EyeIcon />}
        label="Visibility"
        title="See every AI-assisted change"
        description={`Full session traces, tool calls and line-level AI attribution, overlaid on the git history. You can answer "which model wrote this line, under which prompt?" without opening a ticket with the vendor.`}
        meta="Session traces · tool calls · git-level attribution"
      />
      <FeatureCard
        icon={<ChartIcon />}
        label="Cost Tracking"
        title="FinOps for AI-assisted code"
        description="Token trends, model distribution, cache hit-rate and spend attributed to session, author, team and PR. Hard per-session and per-team budgets stop runaway sessions before they land on the invoice."
        meta="Per-PR spend · cache savings · hard budgets"
      />
      <FeatureCard
        icon={<ShieldIcon />}
        label="Compliance"
        title="Signed evidence, enforced policy"
        description="Every entry is hash-chained and Ed25519-signed. Policy — allowlists, forbidden paths, required tools, AI-share caps — is enforced in the dev loop and logged on the same chain. Mapped to EU AI Act, SR 11-7, SOX §404, PCI-DSS, DORA."
        meta="Ed25519 · append-only · framework-mapped"
      />
    </>
  );
}

// ---- Visdom Strip ----

interface GovernanceVisdomStripProps {
  base: string;
}

export function GovernanceVisdomStrip({ base }: GovernanceVisdomStripProps) {
  return (
    <VisdomStrip
      subtitle={
        <>
          Visdom Governance is one of four components in{" "}
          <a href="https://virtuslab.com/services/visdom">Visdom</a>,
          VirtusLab&apos;s AI-Native SDLC.
        </>
      }
      products={[
        {
          role: "Context Fabric",
          name: "ViDIA",
          description: "Pre-indexed code expertise, dependency graphs, PR history",
          href: "https://github.com/virtuslab/vidia",
          active: false,
        },
        {
          role: "Code Review",
          name: "VCR",
          description: "Multi-layered AI code review with risk assessment",
          href: "https://virtuslab.github.io/visdom-code-review/",
          active: false,
        },
        {
          role: "Sandbox & AppSec",
          name: "Security",
          description: "Runtime containment and continuous application security scanning",
          href: "https://virtuslab.github.io/visdom-security/",
          active: false,
        },
        {
          role: "Visibility, Cost & Compliance",
          name: "Governance",
          description: "Signed audit trail, cost attribution, policy enforcement",
          href: base,
          active: true,
        },
      ]}
      footer={
        <>
          Read the thinking behind it:{" "}
          <a href="https://virtuslab.com/services/visdom">The AI-Native SDLC series</a>
        </>
      }
    />
  );
}

// ---- FAQ ----

export function GovernanceFaq() {
  return (
    <FaqAccordion
      items={[
        {
          question: "We already log Copilot usage. Isn't that enough?",
          answer: (
            <p>
              Vendor dashboards answer &quot;how many sessions per seat this
              quarter?&quot;. They don&apos;t answer &quot;which prompt, model
              and tool call wrote <code>src/billing/tax.ts:42</code>&quot;, they
              don&apos;t enforce your allowlist before a prompt leaves the
              machine, and they don&apos;t attribute token spend to the PR that
              caused it. You need all three to run an AI-assisted SDLC honestly.
            </p>
          ),
        },
        {
          question: "We're not in a regulated industry. Do we still care?",
          answer: (
            <p>
              Compliance is one driver, not the only one. The same ledger is
              what stops a well-meaning engineer from pasting your private repo
              into an unapproved model, and it&apos;s what lets finance see that
              one team&apos;s cache hit-rate collapsed and doubled the bill last
              month. Regulation accelerates the decision; cost and risk hygiene
              make the business case either way.
            </p>
          ),
        },
        {
          question: "Does my team have to change how they work?",
          answer: (
            <p>
              No. TraceVault wraps the developer&apos;s existing AI CLI / IDE
              and writes to a local signed log. Policy is a YAML file in the
              repo — the same place other quality rules already live. The only
              observable change is that out-of-policy actions (model not
              allowed, forbidden path, over budget) are blocked before they
              ship, with a clear reason.
            </p>
          ),
        },
        {
          question: "How does this map to the EU AI Act specifically?",
          answer: (
            <p>
              The Act obliges providers and deployers to demonstrate traceability
              and human oversight of AI systems, and to produce technical
              documentation on request. For AI-assisted coding that translates
              into: which model, which prompt, which files, by whom, under which
              policy — all items TraceVault captures by default. Penalties under
              Article 99 reach €35M or 7% of global turnover, so &quot;we&apos;ll
              sort it out later&quot; is an expensive posture.
            </p>
          ),
        },
        {
          question: "Is TraceVault proprietary? Where does my data live?",
          answer: (
            <p>
              TraceVault is open source and self-hosted by default; the signed
              ledger never leaves your infrastructure unless you route it there.
              The enterprise edition adds SSO, analytics, auditor RBAC and
              compliance report templates — same storage model, same open-source
              core.
            </p>
          ),
        },
      ]}
    />
  );
}
