import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps{
    children: ReactNode; //qualquer elemento do react
}                                
function TextInputRoot(props: TextInputRootProps){
    return(
         //necessário criar uma div para colocar as propriedades por causa do icone
            //py-16px e px-12px
            //w-full tamanho dele vai ser o tamanho da tela            
            //focus-within ele vai verificar se tem algum elemento com foco dentro da div,  é um seletor do css
            //borda e cor da borda respectivamente: focus:ring-2 ring-azul-300
            //gap é o distanciamento do ícone para o texto input 12px 3 rem aqui
            //H 48 fixo, então colocamos h-12 48:4=12
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-cinza-800 w-full focus-within:ring-2 ring-azul-300'>
            {props.children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return(
        //tamanho do icone 6rem x 4 = 24px
        <Slot className='w-6 h-6 text-cinza-400'>
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
    //faço com que ele possa receber todas propriedades que um html normal receberia
    //passando o props logo abaixo
}

function TextInputInput(props: TextInputInputProps){
    return(
        <input 
            //flex-1 para ocupar o máximo de espaço dentro do container
            //text xs vem o tamanho 14 direto do tailwind.config
             //outline-none para deixar apenas a borda do focus informada no focus
            className='bg-transparente flex-1 text-cinza-100 text-xs placeholder:text-cinza-400 outline-none'
            {...props}   
        />
    )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}

