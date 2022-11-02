import { Checkbox } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";


export function SignIn(){

/*Inicio simular processo de login*/
    //dica para declarar variáveis boleanas, sempre com nome parecendo uma pergunta
    //Exemplo: isUserSignedIn
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    //criando um evento para simular a ação da tela de login que é o redirecionamento da página
    async function handleSignIn(event: FormEvent){
        event.preventDefault();

        //simulando um post, para usar o await temos que lembrar de deixar a função assincrona
        await axios.post('/sessions', {
          email: 'login@teste.com',
          password: '123456',
        })

        setIsUserSignedIn(true)
    }
/*Fim simular processo de login*/

    return(
        //w e h screen para esta div sempre preencher a tela toda
      // flex e o justify sempre vai centralizar o conteúdo da tela
      
      <div className="w-screen h-screen bg-cinza-900 flex flex-col items-center justify-center text-cinza-100">
      {/* Header para encapsular os outros elementos
      Flex-col para colocar um elemento abaixo do outro
      items-center para centralizar
      mt significa margin top*/}

      <header className='flex flex-col items-center'>
        <Logo />
       
        <Heading size="lg" className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size="lg" className='text-cinza-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

       {/* w-full para ocupar a tela todo com um tamanho máximo de max... 
          ...poderia ser max-w-sm que seria 384px
          mt-10 distancia de 40px do form para o cabeçalho*/}
      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
       { isUserSignedIn && <Text>Login realizado!</Text>}
       
        <label htmlFor='email' className='flex flex-col gap-3'>
            <text className='font-semibold'>Endereço de e-mail</text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />                  
              </TextInput.Icon>

              <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
            </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
            <text className='font-semibold'>Sua Senha</text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />                  
              </TextInput.Icon>

              <TextInput.Input type='password' id='password' placeholder='******' />
            </TextInput.Root>
        </label>

        {/* no label nao coloco o flex-col então o gap dele vai ser a distancia entre o check e o label*/}
        <label htmlFor="lembrar" className='flex items-center gap-2'>
          <Checkbox id='lembrar'/>
          {/* Texto sm é o tamanho 14 do Text.tsx */}
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        {/* além da distância padrão de 16px (gap-4 do form) estou distanciando mais 16 com o mt-4 */}
        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

      </form>

          {/* gap distancia de 16px entre os textos
          mt distancia de 32 de margim entre o form e o rodapé 
          a href (ancora)*/}
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-cinza-400 underline hover:text-cinza-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-cinza-400 underline hover:text-cinza-200'>Não possui conta? Crie uma agora!</a>
        </Text>                        
      </footer>
    </div>
    )
}