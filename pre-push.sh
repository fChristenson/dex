#!/bin/sh

tagReminder() {

  ON_MASTER=$(git branch | grep -c "* master")

  if  [ $ON_MASTER = 1 ]; then

    echo
    echo "I see your pushing to master, did you remember to push a new version tag?"
    echo
  fi

}

tagReminder
