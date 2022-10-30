import { Meta, StoryObj } from '@storybook/react'
//import { Component } from 'react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: { //mesma coisa que props do react
        children: 'E ae Joe.',
        size: 'md', 
    },
    argTypes:{
        size: {
            options: ['sm','md','lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    //no decorrer do curso criamos outros então acho que poderíamos ter apagado este, pois o default é o que ta.
} //se tratando de storie book é necessário exportar alguma coisa além do default, memso que não tenha nada

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando tag paragrafo</p>
        )
    },
    argTypes: {
        children:{
            table: { //desabilita o control ui e tira da tabela para mostrar o children no storiebook
                disable: true,
            }
        },
        asChild: {//não permitir que o usuario de design tenha acesso a esta funcao no storiebook
            table: { //desabilita o control ui e tira da tabela para mostrar o children no storiebook
                disable: true,
            }
        }
        
    }
}

