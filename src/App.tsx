import { useState } from 'react'

import { SliderDemo } from '@/components/ui/slider'
import { AddNewPack } from '@/pages/pack/add pack/add-new-pack.tsx'
import { DeletePack } from '@/pages/pack/delete pack/delete-pack.tsx'
import { EditPack } from '@/pages/pack/edit pack/edit-pack.tsx'

//надо сделать: Modal/TabSwitcher/Header

export function App() {
  const [values, setValues] = useState([10, 20])

  return (
    <div style={{ margin: '10px' }}>
      {/*<AddNewPack*/}
      {/*  addCardCallback={data => {*/}
      {/*    console.log(data)*/}
      {/*    console.log('card added')*/}
      {/*  }}*/}
      {/*  cancelCallback={() => {*/}
      {/*    console.log('cancel')*/}
      {/*  }}*/}
      {/*  closeCallback={() => {*/}
      {/*    console.log('closed')*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<EditPack*/}
      {/*  editCardCallback={data => {*/}
      {/*    console.log(data)*/}
      {/*    console.log('card changed')*/}
      {/*  }}*/}
      {/*  cancelCallback={() => {*/}
      {/*    console.log('cancel')*/}
      {/*  }}*/}
      {/*  closeCallback={() => {*/}
      {/*    console.log('closed')*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<DeletePack*/}
      {/*  deleteCardCallback={data => {*/}
      {/*    console.log(data)*/}
      {/*    console.log('card deleted')*/}
      {/*  }}*/}
      {/*  cancelCallback={() => {*/}
      {/*    console.log('cancel')*/}
      {/*  }}*/}
      {/*  closeCallback={() => {*/}
      {/*    console.log('closed')*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<SliderDemo values={values} onValueCommit={v => setValues(v)} onValueChange={v => {}} />*/}
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
