import { Pagination } from '@/components/'

const items = [
  { value: 'Banana', label: 'Select-box' },
  { value: 'Apple', label: 'Select-box' },
  { value: 'Orange', label: 'Select-box' },
]

const paginationTtems = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
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
        onChange={(page: number) => {
          console.log(page)
        }}
        page={5}
        count={55}
      />
      {/*<Selected items={paginationTtems} variant={'pagination'} />*/}
      {/*<Selected items={items} variant={'standart'} />*/}
    </div>

    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
