import React, {useState} from 'react'
import type {Meta} from '@storybook/react'
import ButtonGroup from './ButtonGroup'
import {IconButton, Button} from '../Button'
import {PlusIcon, DashIcon, TriangleDownIcon} from '@primer/octicons-react'
import {ActionMenu} from '../ActionMenu'
import {ActionList} from '../ActionList'

export default {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const IconButtons = () => (
  <ButtonGroup>
    {/* We can remove these unsafe props after we resolve https://github.com/primer/react/issues/4129 */}
    {/* eslint-disable-next-line primer-react/a11y-remove-disable-tooltip */}
    <IconButton unsafeDisableTooltip={true} icon={PlusIcon} aria-label="Add" />
    {/* eslint-disable-next-line primer-react/a11y-remove-disable-tooltip */}
    <IconButton unsafeDisableTooltip={true} icon={DashIcon} aria-label="Subtract" />
  </ButtonGroup>
)

export const LoadingButtons = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
  }
  return (
    <ButtonGroup>
      <Button loading={isLoading} onClick={handleClick}>
        Button 1
      </Button>
      <Button onClick={handleClick}>Button 2</Button>
      <Button onClick={handleClick}>Button 3</Button>
    </ButtonGroup>
  )
}

export const DropdownSplit = () => {
  const actions = ['Action one', 'Action two', 'Action three']
  const [selectedActionIndex, setSelectedActionIndex] = React.useState<number>(0)
  const selectedAction = actions[selectedActionIndex]
  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          alert(`Activated ${selectedAction}`)
        }}
      >
        {selectedAction}
      </Button>
      <ActionMenu>
        <ActionMenu.Button icon={TriangleDownIcon}>More options</ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList>
            {actions.map((action, index) => {
              return (
                <ActionList.Item
                  key={action}
                  onSelect={() => {
                    setSelectedActionIndex(index)
                  }}
                >
                  {action}
                </ActionList.Item>
              )
            })}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </ButtonGroup>
  )
}

export const AsToolbar = () => (
  <ButtonGroup role="toolbar">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
)
