## Versioning

This document outlines the process needed to be taken to create a new version through local development. It is primarily intended to be consumed by Claude for understanding the expected process when creating a new version locally. It is not intended for versioning through Github actions.

### Process

The process of creating a new version consists of a handful of basic steps that covers committing, building, updating version in package.json, committing again, pushing, tagging, pushing the tag.

In all cases where a commit message is needed, use best judgement to briefly describe what was changed.

#### Step 1

Commit code/model changes.

This refers to all changes in src/ directory.

#### Step 2

Build the dist files with `npm run build`.

#### Step 3

Bump version in package.json using semver pattern. If you are provided a version, use that version, otherwise use your judgement by following commonly accepted semantic versioning practices.

#### Step 4

Run `npm install` again in order to sync the package-lock.json.

#### Step 5

Commit again; this time package.json and package-lock.json, as well as all files in dist/. In this commit step, use the -f flag with git add command for dist/ files to ensure untracked files will be added.

#### Step 6

Run `git push`.

#### Step 7

Now tag the latest commit with the new version.

#### Step 8

Finally, push the tag to origin.
