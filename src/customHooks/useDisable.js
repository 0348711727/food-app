import { useState } from "react"

export const useDisable = (status = false) => {
  const [isDisabled, setIsDisabled] = useState(status);
  return { isDisabled, setIsDisabled };
}