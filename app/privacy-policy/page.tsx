const PoliticaPrivacidade = () => {
    return (
        <div className="pl-2">
            <h1 className="pt-4 text-3xl font-bold">POLÍTICA DE PRIVACIDADE</h1>
            <div className="pt-4"/>
            <h2 className="text-xl font-bold">Data de Vigência: 04 de setembro de 2024</h2>
            <div className="pt-2"/>
            {/*ITEM 1*/}
            <h3 className="text-xl font-bold">1. Introdução</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Bem-vindo à Organizei! A presente Política de Privacidade tem como objetivo esclarecer como coletamos, utilizamos, armazenamos e protegemos os dados pessoais dos nossos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
            </p>
            <div className="pt-2"/>
            {/*ITEM 2*/}
            <h3 className="text-xl font-bold">2. Nome da Empresa</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Nome da Empresa: Organizei<br />
                Endereço: No momento, estamos em processo de aceleração pela Universidade PUC-Campinas e não possuímos um endereço físico fixo.
            </p>
            <div className="pt-2"/>
            {/*ITEM 3*/}
            <h3 className="text-xl font-bold">3. Propósito da Política</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Esta Política de Privacidade visa informar nossos usuários sobre a coleta, uso e proteção dos seus dados pessoais, bem como garantir a transparência e conformidade com a LGPD.
            </p>
            <div className="pt-2"/>
            {/*ITEM 4*/}
            <h3 className="text-xl font-bold">4. Dados Pessoais Coletados</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Coletamos os seguintes dados pessoais:
                <ul className="list-disc pl-6">
                    <li>Nome: Nome completo do usuário.</li>
                    <li>E-mail: Endereço de e-mail do usuário.</li>
                    <li>Dados de Conta do Google:
                        <ul className="list-disc pl-6">
                            <li>Identificador Único do Usuário: Identificador único atribuído pelo Google.</li>
                            <li>Nome: Nome completo conforme registrado na conta do Google.</li>
                            <li>Endereço de E-mail: Endereço de e-mail associado à conta do Google.</li>
                            <li>Imagem do Perfil: URL da imagem do perfil, se disponível.</li>
                        </ul>
                    </li>
                    <li>Dados do Google Calendar:
                        <ul className="list-disc pl-6">
                            <li>Eventos: Informações sobre os eventos no calendário do usuário, incluindo título, data, hora e descrição dos eventos.</li>
                            <li>Participantes: Informações sobre as pessoas convidadas para eventos, se aplicável.</li>
                        </ul>
                    </li>
                    <li>Dados de Uso: Informações sobre como você interage com nosso aplicativo ou site.</li>
                </ul>
            </p>
            <div className="pt-2"/>
            {/*ITEM 5*/}
            <h3 className="text-xl font-bold">5. Propósitos de Uso</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Utilizamos seus dados pessoais para os seguintes propósitos:
                <ul className="list-disc pl-6">
                    <li>Melhorar o Serviço: Para aprimorar a funcionalidade e a experiência do usuário.</li>
                    <li>Marketing: Para enviar informações sobre novos produtos, serviços e promoções, com seu consentimento.</li>
                    <li>Análise: Para analisar o uso do nosso site e aplicativo, identificar tendências e melhorar nosso desempenho.</li>
                </ul>
            </p>
            <div className="pt-2"/>
            {/*ITEM 6*/}
            <h3 className="text-xl font-bold">6. Compartilhamento de Dados</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Não compartilhamos seus dados pessoais com terceiros. Todos os dados são mantidos dentro da nossa empresa e utilizados exclusivamente para os fins descritos nesta política.
            </p>
            <div className="pt-2"/>
            {/*ITEM 7*/}
            <h3 className="text-xl font-bold">7. Exigências Legais</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Podemos divulgar seus dados pessoais se necessário para cumprir com obrigações legais, responder a processos judiciais, proteger os direitos e segurança de nossos usuários e cumprir com outros requisitos legais aplicáveis.
            </p>
            <div className="pt-2"/>
            {/*ITEM 8*/}
            <h3 className="text-xl font-bold">8. Medidas de Segurança</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Implementamos medidas de segurança para proteger seus dados pessoais, incluindo criptografia e controles de acesso restrito a funcionários autorizados.
            </p>
            <div className="pt-2"/>
            {/*ITEM 9*/}
            <h3 className="text-xl font-bold">9. Opção de Exclusão</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Você pode solicitar a exclusão dos seus dados pessoais a qualquer momento através do e-mail: neurobuddy.organizei@gmail.com.
            </p>
            <div className="pt-2"/>
            {/*ITEM 10*/}
            <h3 className="text-xl font-bold">10. Atualizações da Política</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Quaisquer alterações a esta Política de Privacidade serão publicadas em nosso landing page e na tela de login/cadastro do nosso aplicativo.
            </p>
            <div className="pt-2"/>
            {/*ITEM 11*/}
            <h3 className="text-xl font-bold">11. Contato</h3>
            <div className="pt-2"/>
            <p className="text-xl">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco pelo e-mail: neurobuddy.organizei@gmail.com.
            </p>
            <div className="pt-2"/>
        </div>
    );
}

export default PoliticaPrivacidade;
