#!/bin/bash

components_dir="./src/components"

create_components() {
  # Check if the directory does not exist
  if [ ! -d "$components_dir" ]; then
    mkdir -p "$components_dir"
    components_array=(
      "GameBoard"
      "TopicCard"
      "CodeCard"
      "ChameleonCard"
      "Dice"
      "PlayerList"
      "GameStatus"
    )

    for name in "${components_array[@]}"; do
      file="$components_dir/$name.jsx"
      main_content=$(
        cat <<EOF
import GameBoard from './GameBoard';

function Game() {
  return <GameBoard />;
}
EOF
      )
      content=$(
        cat <<EOF
export default function $name() {
  return (
    <div className="$name">
      <h1>${name} Component</h1>
    </div>
  );
}
EOF
      )
      touch "$file"
      if [ "$name" == "Game" ]; then
        echo "$main_content" >"$file"
      else
        echo "$content" >"$file"
      fi
    done

    # Format the created files with Prettier
    npx prettier --write "$components_dir/*.jsx"

    echo "Components created and formatted."
  else
    echo "Components directory already exists."
  fi
}

# Call the function to create components
create_components

# Start game
npm install
npm run dev
