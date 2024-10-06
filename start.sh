#!/bin/bash

create_components() {
  components_array=(
    "GameBoard"
    "TopicCard"
    "CodeCard"
    "ChameleonCard"
    "Dice"
    "PlayerList"
    "GameStatus"
  )

  components_dir="./src/components"

  mkdir -p $components_dir

  for name in ${components_array[@]}; do
    file=$components_dir/$name.jsx
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
    touch $file
    echo "$content" >$file
  done

  # Format the created files with Prettier
  npx prettier --write "$components_dir/*.jsx"

  echo "Components created and formatted."
}

create_components

# Start game
# npm install
# npm run dev
