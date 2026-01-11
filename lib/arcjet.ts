import arcjet, {
  detectBot,
  fixedWindow,
  shield,
  tokenBucket,
} from "@arcjet/next";

export { detectBot, fixedWindow, shield, tokenBucket };

// Only initialize arcjet if key is provided
export default process.env.ARCJET_KEY
  ? arcjet({
      key: process.env.ARCJET_KEY,
      rules: [],
    })
  : null;
