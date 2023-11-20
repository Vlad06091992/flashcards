import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components'

export type TabType = {
  /** A unique value that associates the trigger with a content. */
  value: string
  title: string
  disabled?: boolean
}

type Props = {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  tabs: TabType[]
  label?: string
}

export const TabSwitcher = ({ tabs, label, value, onValueChange, defaultValue }: Props) => {
  const mappedTabs = tabs.map(el => {
    return (
      <Tabs.Trigger key={el.value} className={`${s.tab} ${s.first}`} value={el.value}>
        <Typography className={s.typography} as={'div'} variant={'body1'}>
          {el.title}
        </Typography>
      </Tabs.Trigger>
    )
  })

  return (
    <div>
      <Typography variant="body2" as="h3" className={s.label}>
        {label}
      </Typography>
      <Tabs.Root defaultValue={defaultValue} value={value} onValueChange={onValueChange}>
        <Tabs.List>{mappedTabs}</Tabs.List>
      </Tabs.Root>
    </div>
  )
}
