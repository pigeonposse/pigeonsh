#!/bin/bash

###############################################################################
# ALIAS RC FILE                                 
###############################################################################
# By Angelo <angelo@pigeonposse.com>              
# For PigeonPosse                                 
###############################################################################

# variables
USER_DIR=~
SCRIPT_DIR=${USER_DIR}/.scriptsrc/defaults/aliasrc
BASHRC=${USER_DIR}/.bashrc
ZSHRC=${USER_DIR}/.zshrc
ALIASFILE=${USER_DIR}/.aliasrc
ALIASDEFAULTS=${SCRIPT_DIR}/aliasrc.sh
SETALIAS=${SCRIPT_DIR}/setAlias.sh

# create file .ALIASRC if is necessary
if [ ! -f "$ALIASFILE" ]; then
    echo "Creating file: [$ALIASFILE]"
    cat $ALIASDEFAULTS >> $ALIASFILE
    echo "Created file: [$ALIASFILE]"
fi

# Exist alias function in file
existAlias() {

    TEST_FILE=$1
    CHECK_FILE=$2

    ## for each line in TEST_FILE
    while read line ; do

        if ! grep -qp "$line" $CHECK_FILE; then
            return 1
        fi

    done < ${TEST_FILE}

    return 0

}

execFile() {
    echo "Executing: $1"
    . $1
    echo "Successful execution: $1"
}

execFileZsh() {
    echo "Executing: $1"
    zsh $1
    echo "Successful execution: $1"
}

addAliasCall() {

    FILE=$1

    if ! existAlias "$SETALIAS" "$FILE"; then
        echo "Calling $ALIASFILE in $FILE"
        cat $SETALIAS >> $FILE
        echo "$ALIASFILE is called in $FILE"
    fi

}

# run aliasrc
runAliasrc () {

    FILE=$1
    
    if [ -f "$FILE" ]; then

        addAliasCall "$FILE"

        execFile "$1"

    fi  
    
}
runAliasrcZSH () {

    FILE=$1
    
    if [ -f "$FILE" ]; then

        addAliasCall "$FILE"

        execFileZsh "$1"

    fi  
    
}

runAliasrcZSH "$ZSHRC"
runAliasrc "$BASHRC"  

execFile "$ALIASFILE"
