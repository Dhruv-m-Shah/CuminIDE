export function cuminDetector() {
  return {
    startState: function () {
      return {
        inString: false,
        accumulator: "",
        operators: ["+", "-", "/", "*"],
      };
    },
    token: function (stream, state) {
      // If a string starts here
      console.log(state.accumulator);
      if (!state.inString && stream.peek() == '"') {
        stream.next(); // Skip quote
        state.inString = true; // Update state
      } else {
        state.accumulator += stream.peek();
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
      console.log(stream.peek());
      if(state.operators.includes(stream.peek())){
          stream.next();
          return "operator";
      }


    //   if (state.inString) {
    //     if (stream.skipTo('"')) {
    //       // Quote found on this line
    //       stream.next(); // Skip quote
    //       state.inString = false; // Clear flag
    //     } else {
    //       stream.skipToEnd(); // Rest of line is string
    //     }
    //     return "string"; // Token style
    //   } else {
    //     stream.skipTo('"') || stream.skipToEnd();
    //     return null; // Unstyled token
    //   }
      stream.next();
    },
  };
}
