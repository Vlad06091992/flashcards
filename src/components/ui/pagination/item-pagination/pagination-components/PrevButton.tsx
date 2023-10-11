import s from '../../pagination.module.scss'

import { LeftChevron } from '@/assets'
type Props = {
  onclickCallback: () => void
  disabled: boolean
}

export const PrevButton = ({ onclickCallback, disabled }: Props) => {
  return (
    <div>
      <button className={disabled ? `${s.button} ${s.disabled}` : s.button} disabled={disabled}>
        <LeftChevron
          onClick={() => {
            onclickCallback()
          }}
        />
      </button>
    </div>
  )
}
