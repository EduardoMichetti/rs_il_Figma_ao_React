import { Slot } from '@radix-ui/react-slot'; //para mudar componentes de span para outra coisa eu acho
import { clsx } from 'clsx'; //NECESSÁRIO INSTALAR (npm install --save clsx)
import { ButtonHTMLAttributes, ReactNode } from 'react';

//ButtonHTMLAttributes para poder passar qualquer atributo html além do children informado
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode; //string; //desta forma ele pode receber qualquer tipo, string, componente...
    asChild?: boolean; 
}

export function Button({ children, asChild, className, ...props }: ButtonProps){ //quando não informar nada vai usar o md como padrão
    const Comp = asChild ? Slot : 'button'; //caso esteja recebendo asChild vou usar slot, se não usa o span
    return (
        <Comp 
            className={clsx(
                //por causa do tailwind utilizamos REM ao invés de PIXEL, então aqui a cada 1 rem temos 4 pixel
                'py-3 px-4 bg-azul-500 rounded font-semibold text-preto text-sm w-full transition-colors hover:bg-azul-300 focus:ring-2 ring-white',
                className,
                //w-full é para o botão ocupar a tela toda
               //transition é para alterar a cor de forma degrade 
               //focus para ter um efeito quando o foco esta no botao
            )}
            {...props}
            >
                {children}
            </Comp> 
    )
}