# Visdom Governance

**Signed audit trail + policy enforcement for AI-assisted development.**

Sibling of [Visdom Code Review](https://github.com/VirtusLab/visdom-code-review),
[Visdom Testing](https://github.com/VirtusLab/visdom-testing) and
[Visdom Security](https://github.com/VirtusLab/visdom-security). Focused on the
developer-facing building block that makes AI-assisted SDLC auditable:

1. **TraceVault** &mdash; open-source flight recorder for AI-assisted development.
   Captures every session, prompt, model, tool call and edited file; hash-chains
   and Ed25519-signs the record; enforces model allowlists, sensitive paths,
   token budgets and AI-share thresholds at the developer's terminal.
   <https://tracevault.dev/>

2. **Compliance coverage** &mdash; maps the evidence TraceVault produces onto EU AI Act,
   SR 11-7, SOX §404, PCI-DSS, ISO 42001 and DORA obligations.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is published under the base path `/visdom-governance/`.
