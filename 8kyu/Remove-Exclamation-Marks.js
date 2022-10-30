// PROMPT:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// MY SOLUTION:
function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
  }

// OR
const removeExclamationMarks = s => s.replace(/!/g,"") ;