# Visdom Governance

**Audit trail + policy enforcement + FinOps for AI-assisted development.**

Sibling of [Visdom Code Review](https://github.com/VirtusLab/visdom-code-review),
[Visdom Testing](https://github.com/VirtusLab/visdom-testing) and
[Visdom Security](https://github.com/VirtusLab/visdom-security). Three jobs off
one signed ledger:

1. **Evidence** &mdash; Ed25519-signed, hash-chained capture of every AI session,
   prompt, model, tool call and edited file, with automatic secret redaction.

2. **Enforcement** &mdash; model allowlists, sensitive-path guards, required tools,
   token budgets and AI-share thresholds, applied at the developer's terminal.

3. **Economics** &mdash; token trends, model distribution, cache hit-rate and
   per-team / per-PR spend attribution.

Powered by [TraceVault](https://tracevault.dev/), the open-source building block
underneath Visdom Governance.

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
