export function cuminDetector() {
  return {
    startState: function () {
      return {
        inString: false,
        inComment: false,
        accumulator: "",
        operators: ["+", "-", "/", "*"],
      };
    },
    token: function (stream, state) {
      // If a string starts here
      if(!state.inComment && stream.peek() == "["){
        state.inComment = true;
        if (stream.skipTo(']')) {
          // Quote found on this line
          stream.next(); // Skip quote
          state.inComment = false; // Clear flag
        } else {
          stream.skipToEnd(); // Rest of line is string
        }
        return "comment"; // Token style
      }
      if (!state.inString && stream.peek() == '"') {
        state.inString = true;
        stream.next();
        if (state.inString) {
          if (stream.skipTo('"')) {
            // Quote found on this line
            stream.next(); // Skip quote
            state.inString = false; // Clear flag
          } else {
            stream.skipToEnd(); // Rest of line is string
          }
          return "string"; // Token style
        } 
      }
      if (
        stream.match(/\s*num/) ||
        stream.match(/\s*str/) ||
        stream.match(/\s*flo/)
      ) {
        return "variable";
      }
      if (stream.match(/\s*start/) || stream.match(/\s*end/)) {
        return "qualifier";
      }
      if (stream.match(/function/)) {
        return "keyword";
      }
      if(state.operators.includes(stream.peek())){
          stream.next();
          return "operator";
      }
      stream.next();
    },
  };
}
