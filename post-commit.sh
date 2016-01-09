#!/bin/sh

tagIsUpToDate() {

  TAG_VERSION=$(git tag | awk '{match($0, "[0-9\\.]+", a)} END{print a[0]}')
  COUNT=$(git diff $TAG_VERSION | wc -l)

  if [ $COUNT ] && [ $COUNT -gt 0 ]; then

    echo "Tag $TAG_VERSION is out of date with the current branch!"
    echo "Updating tag for you."
    git tag $TAG_VERSION -f

  fi

}

tagIsUpToDate
echo
