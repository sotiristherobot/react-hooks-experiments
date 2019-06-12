import React from "react";

/**
 * Custom reusable hook that if value is empty or undefined returns the Loading heading.
 * @param {Any} value
 * @returns {String} If value is undefined or null return "Loading" else nothing
 */
export function useNoValue(value) {
  return !value && <h1>Loading...</h1>;
}
