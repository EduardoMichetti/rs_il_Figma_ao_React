import * as CheckboxPrimitivo from '@radix-ui/react-checkbox'; //necessário instalar (npm install @radix-ui/react-checkbox)
import { Check } from 'phosphor-react' //improtar ícone usado para mostrar que o checkbox esta selecionado

export interface CheckboxProps{
   
}

export function Checkbox({}: CheckboxProps){ //quando não informar nada vai usar o md como padrão    
    return (
        //INDICATOR é para mostrar que esta selecionado.
        //Não tem como infomar 2pixel com rem, então colocamos entre colchete para poder utilizar
            //p-[2px] -- Exemplo do padding 
        <CheckboxPrimitivo.Root className='w-6 h-6 p-[2px] bg-cinza-800 rounded'>            
            <CheckboxPrimitivo.CheckboxIndicator asChild> 
                <Check weight='bold' className='h-5 w-5 text-azul-500' />
            </CheckboxPrimitivo.CheckboxIndicator>
        </CheckboxPrimitivo.Root>
    )
}