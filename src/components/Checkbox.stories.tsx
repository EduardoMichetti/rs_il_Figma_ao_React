import { Meta, StoryObj } from '@storybook/react'
//import { Component } from 'react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: { //mesma coisa que props do react
    
    },
    argTypes:{
        
    },
    //forma de adicionar elementos a mais além do principal em tela
    decorators: [
        //função que recebe Story como primeiro parametro e devolve um jsx
        (Story) => {
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        } 
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
    //no decorrer do curso criamos outros então acho que poderíamos ter apagado este, pois o default é o que ta.
} //se tratando de storie book é necessário exportar alguma coisa além do default, memso que não tenha nada


