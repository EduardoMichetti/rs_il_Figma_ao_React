import { Slot } from '@radix-ui/react-slot'; //para mudar componentes de span para outra coisa eu acho
import { clsx } from 'clsx'; //NECESSÁRIO INSTALAR (npm install --save clsx)
import { ReactNode } from 'react';

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg' //aqui não representa os tamanhos de fontes globais do sistema, 
                            //o sm aqui é o xs global e assim por diante
    children: ReactNode; //string; //desta forma ele pode receber qualquer tipo, string, componente...
    asChild?: boolean; 
    className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps){ //quando não informar nada vai usar o md como padrão
    const Comp = asChild ? Slot : 'h2'; //caso esteja recebendo asChild vou usar slot, se não usa o span
    return (
        <Comp 
            className={clsx(
                'text-cinza-100 font-bold font-sans',
                {
                    //buscando do arquivo de configuração do tailwind
                    'text-lg': size == 'sm', //20
                    'text-xl': size == 'md', //24
                    'text-2xl': size == 'lg', //32
                },
                className,
            )}
            >
                {children}
            </Comp> 
    )
}