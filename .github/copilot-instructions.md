# DataDash Copilot Instructions

## Project Overview
DataDash is an [Observable Framework](https://observablehq.com/framework/) application for building reactive blockchain data dashboards. It integrates with Alchemy's APIs to fetch and visualize crypto, NFT, and token data across multiple chains.

## Architecture
- **Framework**: ObservableHQ Framework for reactive notebooks
- **Data Flow**: API calls → Data loaders (src/data/) → Reactive notebooks (src/*.md)
- **Components**: Reusable JS modules in src/components/
- **External APIs**: Alchemy (NFTs, tokens, balances, prices) via API keys in .env

## Key Patterns
- **Data Loaders**: Export async functions from .js files in src/data/ (e.g., [get-token-prices-by-symbol.json.js](src/data/get-token-prices-by-symbol.json.js))
- **Reactive Updates**: Use `Generators.observe()` for WebSockets (e.g., [btc-ws.md](src/btc-ws.md))
- **API Integration**: Load env vars with `import 'dotenv/config'`; use supported chains from [supported-chains.js](src/data/supported-chains.js)
- **Notebook Structure**: Markdown with embedded JS code blocks; frontmatter for metadata

## Workflows
- **Development**: `yarn dev` starts preview server at localhost:3000
- **Build**: `yarn build` generates static site in ./dist
- **Deploy**: `yarn deploy` publishes to Observable
- **Data Cache**: `yarn clean` clears local data loader cache
- **Environment**: Copy .env.sample to .env; set ALCHEMY_API_KEY and other keys

## Conventions
- Store API responses as .json files in src/data/ for static samples
- Use bash scripts (.sh) in src/data/ for API curl commands (e.g., [nfts-by-address.json.sh](src/data/nfts-by-address.json.sh))
- Reference data in notebooks via frontmatter `data:` property
- Chain short names from [supported-chains.js](src/data/supported-chains.js) for API calls

## Dependencies
- Alchemy APIs: Use v3 endpoints for NFTs, Prices API for tokens
- WebSockets: For real-time data (e.g., crypto prices)
- No tests currently; focus on visual validation in notebooks</content>
<parameter name="filePath">c:\Users\Barb\framework\.github\copilot-instructions.md