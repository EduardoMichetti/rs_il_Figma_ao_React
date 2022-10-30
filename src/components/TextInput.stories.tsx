import { Meta, StoryObj } from '@storybook/react'
//import { Component } from 'react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: { //mesma coisa que props do react   
        children:[
            //quando não tem nada é pq é o fragma. Usado para encapsular elementos, tipo uma div mas não aparece
            //e como não podemos ter 2 elementos sem algo por volta deles, utilizamnos o fragma
            //<> 
            //Códigos, porém vamos usar o fragma como vetor para não listar no código do navegador
            //</>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>,
                <TextInput.Input placeholder="Coloque o email" />
        ],     
    },
    argTypes:{    
        children:{
            table: { //desabilita o control ui e tira da tabela para mostrar o children no storiebook
                disable: true,
            }
        },   
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  //Aqui é o método padrão do input, icone mais texto input  
} 

export const SemIcone: StoryObj<TextInputRootProps> = {
    //Aqui é uma forma de ter outra opção, neste exemplo sem o ícone no input
    args:{
        children: <TextInput.Input placeholder= "Escreva seu email" />

    }
}


