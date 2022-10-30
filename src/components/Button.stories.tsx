import { Meta, StoryObj } from '@storybook/react'
//import { Component } from 'react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: { //mesma coisa que props do react
        children: 'Clique aqui.',
    },
    argTypes:{
        
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    //no decorrer do curso criamos outros então acho que poderíamos ter apagado este, pois o default é o que ta.
} //se tratando de storie book é necessário exportar alguma coisa além do default, memso que não tenha nada


