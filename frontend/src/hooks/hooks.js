import { useState, useEffect } from "react";

// Finds the first element in viewport
export const useFirstElement = (
  observedElementsProvider,
  visibleElementCallback
) => {
  const [firstVisibleElement, setFirstVisibleElement] = useState(null);

  useEffect(() => {
    // Send first element to hook caller's callback
    visibleElementCallback(firstVisibleElement);
  }, [visibleElementCallback, firstVisibleElement]);

  useEffect(() => {
    const observedElements = observedElementsProvider();
    const visibilityByElement = new Map();

    // Find the first element
    const manageFirstVisibleElement = () => {
      const visibleElements = Array.from(visibilityByElement.entries())
        .filter(([, value]) => value)
        .map(([key]) => key);
      setFirstVisibleElement(visibleElements[0] ?? null);
    };

    // Refresh list of elements visibility state
    const manageVisibility = (entries) => {
      for (let i = 0; i < entries.length; i += 1) {
        const entry = entries[i];
        visibilityByElement.set(entry.target, entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        manageVisibility(entries);
        manageFirstVisibleElement();
      },
      {
        rootMargin: "0px",
        threshold: [0.0, 1.0],
      }
    );

    // Initial state - all elements not in viewport
    observedElements.forEach((element) => {
      visibilityByElement.set(element, false);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [observedElementsProvider]);
};
