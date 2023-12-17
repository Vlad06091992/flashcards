import { ChangeEvent, useState } from 'react'

import { Button, Card, Typography } from '../../ui'

import s from './personal-information.module.scss'

import { Camera, Edit } from '@/assets'
import { Textfield } from '@/components'

type Props = {
  email: string
  avatar: string
  name: string
  onLogout: () => void
  onAvatarChange: (arg: any) => void
  onNameChange: (arg: { name: string }) => void
}
export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
}: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [nameInState, setNameInState] = useState(name)
  // const [name, setName] = useState('')

  const handleAvatarChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()

    if (e.target.files) formData.append('avatar', e.target.files[0])

    onAvatarChange(formData)
  }
  const handleNameChanged = () => {
    setEditMode(true)
  }
  const handleLogout = () => {
    onLogout()
  }

  const handleSaveName = () => {
    onNameChange({ name: nameInState })
    setEditMode(false)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInState(e.currentTarget.value)
  }

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.container}>
        <div className={s.photoContainer}>
          <div className={s.editAvatarButton}>
            <label htmlFor={'ava'}>
              <Camera />
            </label>
          </div>
          <img src={avatar} alt={'avatar'}></img>
          <input
            accept="image/png, image/jpeg"
            style={{ display: 'none' }}
            type={'file'}
            className={s.editAvatarButton}
            id={'ava'}
            name={'ava'}
            onChange={handleAvatarChanged}
          >
            {/*<Camera />*/}
          </input>
        </div>
        {!editMode && (
          <>
            <div className={s.nameWithEditButton}>
              <Typography variant="h1" className={s.name}>
                {name}
              </Typography>
              <button onClick={handleNameChanged}>
                <Edit />
              </button>
            </div>
            <Typography variant="body2" className={s.email}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              {email}
            </Typography>
            <div className={s.buttonContainer}>
              <Button variant={'secondary'} onClick={handleLogout}>
                <span style={{ fontFamily: 'Material Icons' }} className="material-icons">
                  logout
                </span>
                Logout
              </Button>
            </div>

            <div className={s.editModeOn}></div>
          </>
        )}
      </div>
      {editMode && (
        <>
          <Textfield
            placeholder={name}
            onChange={onChange}
            className={s.changeNameTextField}
            label={'Nickname'}
          />
          <Button
            as={'button'}
            className={s.saveNameButton}
            onClick={handleSaveName}
            fullWidth={true}
          >
            Save changes
          </Button>
        </>
      )}
    </Card>
  )
}
