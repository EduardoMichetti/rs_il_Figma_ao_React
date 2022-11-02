import { Slot } from '@radix-ui/react-slot'; //para mudar componentes de span para outra coisa eu acho
import { clsx } from 'clsx'; //NECESSÁRIO INSTALAR (npm install --save clsx)
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg' //aqui não representa os tamanhos de fontes globais do sistema, 
                            //o sm aqui é o xs global e assim por diante
    children: ReactNode; //string; //desta forma ele pode receber qualquer tipo, string, componente...
    asChild?: boolean; 
    className?: string;
}

export function Text({ size = 'md', children, asChild, className }: TextProps){ //quando não informar nada vai usar o md como padrão
    const Comp = asChild ? Slot : 'span'; //caso esteja recebendo asChild vou usar slot, se não usa o span
    return (
        <Comp 
            className={clsx(
                'text-cinza-100 font-sans',
                {
                    //buscando do arquivo de configuração do tailwind
                    'text-xs': size == 'sm', //14
                    'text-sm': size == 'md', //16
                    'text-md': size == 'lg', //18
                },
                className,
            )}
            >
                {children}
            </Comp> 
    )
}