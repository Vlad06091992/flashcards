import { Pagination } from '@/components/'
import { DropDownMenuWithAvatar } from '@/components/ui/drop-down-menu/drop-down-menu.tsx'

//надо сделать: Modal/DropDown/Slider/TabSwitcher/Header

export function App() {
  return (
    // <div style={{ margin: '10px' }}>
    //   <Selected label={'Select-box'} items={items} />
    // </div>

    <div style={{ margin: '10px' }}>
      {/*<Pagination*/}
      {/*  onChange={(page: number) => {*/}
      {/*    console.log(page)*/}
      {/*  }}*/}
      {/*  page={1}*/}
      {/*  count={4}*/}
      {/*/>*/}

      <div style={{ margin: '200px' }}>
        <DropDownMenuWithAvatar />
      </div>
      <Pagination
        perPageOptions={[
          { value: '10', label: '10' },
          { value: '20', label: '20' },
          { value: '30', label: '30' },
          { value: '50', label: '50' },
          { value: '100', label: '100' },
        ]}
        perPage={10}
        onChange={(page: number) => {
          console.log(page)
        }}
        page={5}
        count={55}
        onPerPageChange={(page: number) => {
          console.log(page)
        }}
      />
    </div>

    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
