import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  values: number[]
  onValueCommit: (values: number[]) => void
  onValueChange: (values: number[]) => void
}

export const SliderDemo = ({ onValueChange, values, onValueCommit }: Props) => (
  <form className={s.Ranger}>
    <span className={s.number}>{values[0]}</span>
    <Slider.Root
      onValueCommit={onValueCommit}
      className={s.SliderRoot}
      defaultValue={values}
      max={100}
      step={1}
      onValueChange={onValueChange}
    >
      <Slider.Track className={s.SliderTrack}>
        <Slider.Range className={s.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={s.SliderThumb} />
      <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
    </Slider.Root>
    <span className={s.number}>{values[1]}</span>
  </form>
)

export default SliderDemo