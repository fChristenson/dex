#!/bin/sh

checkVersion() {

  TAG_VERSION=$(git tag | awk '{match($0, "[0-9\\.]+", a)} END{print a[0]}')
  echo "git tag version" $TAG_VERSION

  PACKAGE_VERSION=$(awk '/version/ {match($0, "[0-9\\.]+", a)} END{print a[0]}' package.json)
  echo "package.json version" $PACKAGE_VERSION

  CHANGELOG_VERSION=$(awk '/[0-9]+/ && NR==1 {match($0, "[0-9\\.]+", a)} END{print a[0]}' CHANGELOG.md)
  echo "CHANGELOG.md version" $CHANGELOG_VERSION

  if [ $CHANGELOG_VERSION = $PACKAGE_VERSION ] && [ $TAG_VERSION = $PACKAGE_VERSION ]; then

    echo "Versions match"

  else

    echo "Versions do not match!"
    echo "Please make sure any changes have a git tag and are documented in CHANGELOG.md"
    exit 1

  fi

}

findConsoleLogs() {

  for file in $(find app -name "*.js" -type f)

  do

    COUNT=$(awk '/console.log/ {count++} END{if(count > 0) {print count}}' $file)

    if [ $COUNT ] && [ $COUNT -gt 0 ]; then

      echo "Found console.log in $file, use a proper logging tool!"
      exit 1

    fi

  done

}

echo
echo ---------- Running pre-commit hook ----------
echo
checkVersion
echo
findConsoleLogs
echo
npm test
