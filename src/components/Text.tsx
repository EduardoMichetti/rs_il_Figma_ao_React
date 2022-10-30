import { Slot } from '@radix-ui/react-slot'; //para mudar componentes de span para outra coisa eu acho
import { clsx } from 'clsx'; //NECESSÁRIO INSTALAR (npm install --save clsx)
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg' //aqui não representa os tamanhos de fontes globais do sistema, 
                            //o sm aqui é o xs global e assim por diante
    children: ReactNode; //string; //desta forma ele pode receber qualquer tipo, string, componente...
    asChild?: boolean; 
}

export function Text({ size = 'md', children, asChild }: TextProps){ //quando não informar nada vai usar o md como padrão
    const Comp = asChild ? Slot : 'span'; //caso esteja recebendo asChild vou usar slot, se não usa o span
    return (
        <Comp 
            className={clsx(
                'text-cinza-100 font-sans',
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                }
            )}
            >
                {children}
            </Comp> 
    )
}