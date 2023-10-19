import { AvatarIcon, Pagination } from '@/components/'

//надо сделать: Modal/DropDown/Slider/TabSwitcher/Header

const items = [
  { value: 'Banana', label: 'Select-box' },
  { value: 'Apple', label: 'Select-box' },
  { value: 'Orange', label: 'Select-box' },
]

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
      {/*<Selected items={paginationTtems} variant={'pagination'} />*/}
      {/*<Selected items={items} variant={'standart'} />*/}
      <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
    </div>

    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
