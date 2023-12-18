import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components'

type Props = {
  label?: string
  values: number[]
  onValueCommit: (values: number[]) => void
  onValueChange: (values: number[]) => void
}

export const CustomSlider = ({ onValueChange, values, onValueCommit, label }: Props) => (
  <div>
    <Typography variant="body2" as="h3" className={s.label}>
      {label}
    </Typography>
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
  </div>
)
