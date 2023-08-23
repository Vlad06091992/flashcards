import { forwardRef } from 'react'

export const InputRef = forwardRef((props: any, ref: any) => {
  return <input {...props} ref={ref} type="text" />
})
