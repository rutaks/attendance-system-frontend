import * as quotes from "../assets/json/quotes.json";

class TextGeneratorHelper {
  static generatorRandomQuote() {
    const index = Math.floor(Math.random() * quotes.data.length);
    return quotes.data[index];
  }
}

export default TextGeneratorHelper;
