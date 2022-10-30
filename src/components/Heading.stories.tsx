import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: { //mesma coisa que props do react
        children: 'Cabeçalho Heading.',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    //no decorrer do curso criamos outros então acho que poderíamos ter apagado este, pois o default é o que ta.
} //se tratando de storie book é necessário exportar alguma coisa além do default, memso que não tenha nada

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testando o h1</h1> //o padrao vai ser h1 pq ele é a exceção e os demais vamos usar h2
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
    },

}

