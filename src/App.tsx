import MoreVerticalOutline from '@/assets/icons/more-vertical-outline.tsx'
import { AvatarIcon } from '@/components'
import { DropDownMenuForAvatar } from '@/components/ui/drop-down-menu/drop-down-menu-for-avatar.tsx'
import { DropDownMenuForPacks } from '@/components/ui/drop-down-menu/drop-down-menu-for-packs.tsx'
import { CustomDropDownMenu } from '@/components/ui/drop-down-menu/drop-down-menu.tsx'

//надо сделать: Modal/DropDown/Slider/TabSwitcher/Header

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <div style={{ margin: '200px' }}>
        <CustomDropDownMenu
          trigger={
            // <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
            <MoreVerticalOutline />
          }
          content={<DropDownMenuForPacks />}
        />

        <CustomDropDownMenu
          trigger={
            <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
          }
          content={
            <DropDownMenuForAvatar
              imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'}
              email={'j&johnson@gmail.com'}
              name={'Ivan'}
            />
          }
        />
      </div>
    </div>
  )
}
