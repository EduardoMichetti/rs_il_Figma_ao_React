import { Slot } from '@radix-ui/react-slot'; //para mudar componentes de span para outra coisa eu acho
import { clsx } from 'clsx'; //NECESSÁRIO INSTALAR (npm install --save clsx)
import { ReactNode } from 'react';

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg' //aqui não representa os tamanhos de fontes globais do sistema, 
                            //o sm aqui é o xs global e assim por diante
    children: ReactNode; //string; //desta forma ele pode receber qualquer tipo, string, componente...
    asChild?: boolean; 
}

export function Heading({ size = 'md', children, asChild }: HeadingProps){ //quando não informar nada vai usar o md como padrão
    const Comp = asChild ? Slot : 'h2'; //caso esteja recebendo asChild vou usar slot, se não usa o span
    return (
        <Comp 
            className={clsx(
                'text-cinza-100 font-bold font-sans',
                {
                    'text-lg': size == 'sm',
                    'text-xl': size == 'md',
                    'text-2xl': size == 'lg',
                }
            )}
            >
                {children}
            </Comp> 
    )
}