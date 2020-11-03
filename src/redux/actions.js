const CHANGE_QUOTE = 'CHANGE_QUOTE',
      changeQuote = (newQuote, newColor) => {
        return {
          type: CHANGE_QUOTE,
          payload: {
            quote: newQuote,
            mainColor: newColor
          }
        };
      };

export { CHANGE_QUOTE, changeQuote };