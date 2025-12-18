#!/usr/bin/env sh
set -e

echo "📦 Installing dependencies (if needed)..."
npm install

echo ""
echo "What do you want to do?"
echo "--------------------------------"
echo "1) Show console output (Tasks 1–3)"
echo "2) Start Vue app (Dev Mode)"
echo "--------------------------------"
printf "Select [1/2]: "
read choice

case "$choice" in
  1)
    echo "▶ Running console output for tasks 1–3..."
    npm run cli
    ;;
  2)
    echo "▶ Starting Vue dev server..."
    npm run dev
    ;;
  *)
    echo "❌ Invalid selection"
    exit 1
    ;;
esac
