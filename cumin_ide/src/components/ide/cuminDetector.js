export function cuminDetector() {
    return {
        startState: function() {return {inString: false, accumulator: ""};},
        token: function(stream, state) {
          // If a string starts here
          console.log(state.accumulator)
          if (!state.inString && stream.peek() == '"') {
            stream.next();            // Skip quote
            state.inString = true;    // Update state
          } else{
            state.accumulator += stream.peek();
          }
          if(stream.match("TEST")){
              console.log("TEST")
              state.accumulator = "";
              return "variable";
          }
          if (state.inString) {
            if (stream.skipTo('"')) { // Quote found on this line
              stream.next();          // Skip quote
              state.inString = false; // Clear flag
            } else {
               stream.skipToEnd();    // Rest of line is string
            }
            return "string";          // Token style
          } else {
            stream.skipTo('"') || stream.skipToEnd();
            return null;              // Unstyled token
          }
        }
      };
    
}
