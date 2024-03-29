import { useEffect } from "react";

export function useInitialEffect(cb: () => void) {
  useEffect(() => {
    if (__PROJECT__ === "storybook") return;
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
