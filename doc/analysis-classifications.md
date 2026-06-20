## Analysis Classifications

This document outlines the process for adding a new analysis classification type. It is primarily intended to be consumed by Claude for understanding the expected process when extending analysis classifications locally.

### Process

Adding a new analysis classification type consists of two changes that must stay in sync: the enum that identifies the type, and the prompt configuration that describes it to the classifier.

#### Step 1

Add the new type to the `AnalysisClassificationType` enum in `src/models/Fact.ts`. The string value is the key used to look up its configuration.

#### Step 2

Add a corresponding entry to `src/models/data/analysisConfig.json`, keyed by that same string value. Each entry has a `promptConfig` object with:

- `description` — a short description of what is being classified.
- `scale` — describes the range and meaning of the value returned by the classifier (e.g. a `0.0`–`1.0` scale, or an integer count).
- `notes` — an array of any additional instructions or edge cases the classifier should consider. Use `[]` if there are none.

#### Step 3

Run `npm run build` to verify the change compiles cleanly.

#### Step 4

Follow the [versioning process](versioning.md) to publish the change. `analysisConfig.json` is uploaded to Azure Blob Storage by the `Publish Analysis Config` GitHub workflow whenever a new tag is pushed.
