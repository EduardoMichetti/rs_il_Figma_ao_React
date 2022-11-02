import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: { //mesma coisa que props do react
        
    },
    argTypes:{  
    },
    parameters: {
        msw: {
            handlers: [ //handlers = vetor
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login feito!'
                    }))
                })
            ]
        },
    }
} as Meta

export const Default: StoryObj = {
    // Dentro da play vamos executar os testes automatizados
    // Canvas é o iframe que mostra todo o componente. Aba CANVA do storiebook
    play: async ( {canvasElement} ) => {
        const canvas = within(canvasElement)
        //esta função digita algum texto em algum campo do meu formulario
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'login@teste.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '123456')
        
        userEvent.click(canvas.getByRole('button'))
        await waitFor(() => {
            //expect é o que esperamos que aconteça após o login
            //para usar o tobeinthe o meu não funcionou sem instalar 
            //.. npm i @testing-library/jest-dom --save-dev
            //.. npm i -D @testing-library/jest-dom@^4.2.4
            //.. npm i @testing-library/jest-dom --save-dev --legacy-peer-deps
            //não sei qual deu certo mas acho que foi este último 
            //(--legacy-peer-deps) este comando parece que força a instalação
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
            }
        )
        
    }
} 


