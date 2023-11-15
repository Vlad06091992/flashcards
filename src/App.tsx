import { useState } from 'react'

import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher.tsx'

//надо сделать: TabSwitcher/Header
const tabs = [
  {
    value: 'myCards',
    title: 'My Cards',
  },
  {
    value: 'allCards',
    title: 'All Cards',
  },
]

export function App() {
  const [value, setValue] = useState(tabs[0].value)

  return (
    <div style={{ margin: '10px' }}>
      <TabSwitcher
        value={value}
        onValueChange={data => {
          console.log(data)
          setValue(data)
        }}
        label={'Show packs cards'}
        tabs={tabs}
      />
    </div>
  )
}
