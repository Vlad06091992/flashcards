import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): any => {
  const [debouncedValue, setDebouncedValue] = useState<T>()

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timerId)
    }
  }, [value])

  return debouncedValue
}
