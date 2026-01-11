import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export const sanitizeInput = (value: string) => {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],  
    ALLOWED_ATTR: [],
  });
};