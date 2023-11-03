import { useState } from 'react'

import { SliderDemo } from '@/components/ui/slider'

//надо сделать: Modal/Slider/TabSwitcher/Header

export function App() {
  const [values, setValues] = useState([10, 20])

  return (
    <div style={{ margin: '10px' }}>
      <SliderDemo values={values} onValueCommit={v => setValues(v)} onValueChange={v => {}} />
      {/*<div style={{ margin: '200px' }}>*/}
      {/*  <CustomDropDownMenu*/}
      {/*    trigger={*/}
      {/*      // <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />*/}
      {/*      <MoreVerticalOutline />*/}
      {/*    }*/}
      {/*    content={<DropDownMenuForPacks />}*/}
      {/*  />*/}

      {/*  <CustomDropDownMenu*/}
      {/*    trigger={*/}
      {/*      <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />*/}
      {/*    }*/}
      {/*    content={*/}
      {/*      <DropDownMenuForAvatar*/}
      {/*        imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'}*/}
      {/*        email={'j&johnson@gmail.com'}*/}
      {/*        name={'Ivan'}*/}
      {/*      />*/}
      {/*    }*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
}
