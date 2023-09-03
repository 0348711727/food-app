import { useState } from "react";

export const useLoading = (status = false) => {
  const [isLoading, setIsLoading] = useState(status);
  return { isLoading, setIsLoading };
} 