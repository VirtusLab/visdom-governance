# Visdom Governance

**Visibility + cost tracking + compliance for AI-assisted development.**

Sibling of [Visdom Code Review](https://github.com/VirtusLab/visdom-code-review),
[Visdom Testing](https://github.com/VirtusLab/visdom-testing) and
[Visdom Security](https://github.com/VirtusLab/visdom-security). Three pillars
off one signed ledger:

1. **Visibility** &mdash; full session traces, tool calls and line-level AI
   attribution overlaid on git history.

2. **Cost tracking** &mdash; token trends, model distribution, cache hit-rate,
   per-team / per-PR spend attribution, hard budgets.

3. **Compliance** &mdash; Ed25519-signed, hash-chained records and dev-loop
   policy enforcement (allowlists, forbidden paths, required tools, AI-share
   caps), mapped to EU AI Act, SR 11-7, SOX &sect;404, PCI-DSS, DORA.

Powered by [TraceVault](https://tracevault.dev/), the open-source building
block underneath Visdom Governance.

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
