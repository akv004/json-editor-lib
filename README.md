// json-editor-lib/README.md

# JSON Editor Lib 🧠🧰

A zero-dependency, framework-agnostic, high-performance JSON editor with a Canvas-based UI. Built with React + TypeScript (Angular-ready).

## 📦 Packages

- `json-core/`: Pure logic (tree traversal, parsing, diffing, serialization)
- `json-editor-react/`: React component built on HTML Canvas
- `examples/react-app/`: Example React project to test the editor

## 🚀 Features (MVP)

- View JSON in expandable/collapsible tree view
- Edit JSON values directly on canvas
- Add / delete keys and objects
- Live sync between UI and JSON object

## 🗂️ Project Structure

```bash
json-editor-lib/
├── packages/
│   ├── json-editor-react/
│   │   ├── src/
│   │   │   ├── canvas/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   │   ├── types/
│   │   │   └── index.tsx
│   │   └── package.json
│   └── json-core/
│       ├── src/
│       │   ├── parser.ts
│       │   ├── serializer.ts
│       │   └── types.ts
│       └── package.json
├── examples/
│   └── react-app/
├── docs/
├── .github/
│   └── workflows/
├── README.md
└── package.json
```

## 📥 Getting Started

```bash
git clone https://github.com/your-org/json-editor-lib.git
cd json-editor-lib
pnpm install
pnpm dev --filter examples/react-app
```

## 🧪 CI via GitHub Actions

```yaml
# .github/workflows/ci.yml
name: Build and Test
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm build
```

## 📚 License

MIT © 2025 Amit Verma
