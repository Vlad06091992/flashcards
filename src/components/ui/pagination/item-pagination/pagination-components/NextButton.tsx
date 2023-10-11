import s from '../../pagination.module.scss'

import { RightChevron } from '@/assets'

type Props = {
  onclickCallback: () => void
  disabled: boolean
}

export const NextButton = ({ onclickCallback, disabled }: Props) => {
  return (
    <div>
      <button className={disabled ? `${s.button} ${s.disabled}` : s.button} disabled={disabled}>
        <RightChevron
          onClick={() => {
            onclickCallback()
          }}
        />
      </button>
    </div>
  )
}
