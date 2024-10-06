#!/bin/bash

components_dir="./src/components"

create_dummy_components() {
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
      sub_dir="$components_dir/$name/"
      component_name="${name}Component"
      file="$sub_dir/$component_name.jsx"

      mkdir -p "$sub_dir"

      main_content=$(
        cat <<EOF
// eslint-disable-next-line no-unused-vars
import GameBoard from './GameBoard';

function Game() {
  return <GameBoard />;
}
EOF
      )
      kebab_name=$(echo "$name" | sed -r 's/([a-z])([A-Z])/\1-\L\2/g; s/([A-Z])([A-Z][a-z])/\1-\2/g; s/ //g' | tr '[:upper:]' '[:lower:]' | sed 's/-l/-/g')
      content=$(
        cat <<EOF
// eslint-disable-next-line no-unused-vars
export default function $name() {
  return (
    <div className="$kebab_name">
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
    npx prettier --write "$components_dir/**/*.jsx"

    echo "Components created and formatted."
  else
    echo "Components directory already exists."
  fi
}

# Call the function to create components
# create_dummy_components

# Start game
npm install
npm run dev
