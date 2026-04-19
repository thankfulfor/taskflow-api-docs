#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="docs/diagrams"
OUT_DIR="docs/diagrams-rendered"

mkdir -p "$OUT_DIR"
find "$SRC_DIR" -name "*.puml" -print0 | while IFS= read -r -d '' file; do
  plantuml -tsvg -o "../diagrams-rendered" "$file"
done
