import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropDownMenuWithAvatar = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}

// export const DropDownMenu = () => {
//   return <div>drop down</div>
// }
