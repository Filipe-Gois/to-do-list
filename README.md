<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>FitTrack</h1>

<p>Projeto em grupo desenvolvido ao final do terceiro termo do curso técnico de Desenvolvimento de Sistemas na escola SENAI de Informática.</p>

<h2>Problemática</h2>

<p>A população mundial está cada vez mais consciente sobre a importância da saúde e do bem-estar. No entanto, a maioria dos aplicativos disponíveis no mercado enfrenta obstáculos significativos, como a falta de estrutura para reunir, de forma integrada, as funcionalidades de registro de treinos e controle de alimentação. Esta fragmentação dificulta para os usuários a adoção e manutenção de um estilo de vida saudável, uma vez que precisam utilizar múltiplos aplicativos para acompanhar sua rotina de exercícios físicos e dieta balanceada.</p>

<h2>Solução: FitTrack</h2>

<p>A FitTrack surge como uma solução integral para esses desafios, oferecendo uma plataforma móvel que auxilia os usuários a:</p>
<ul>
    <li>Definir metas de saúde e bem-estar.</li>
    <li>Acompanhar o progresso dos seus treinos e alimentação.</li>
</ul>

<h3>✨ Diferencial do Projeto</h3>

<p>O grande diferencial da FitTrack é a junção das funcionalidades de treino e alimentação em um único aplicativo, na qual é extremamente difícil encontrar um aplicativo gratuito que reúna essas duas funcionalidades, proporcionando uma solução completa e acessível para os usuários.</p>

<h2>📋 Funcionalidades do Aplicativo</h2>
<ol>
    <li><strong>Registro de Treinos e Alimentação:</strong>
        <ul>
            <li>Permite registrar os treinos realizados e a alimentação diária.</li>
            <li>Analisa todas as calorias e macronutrientes consumidos.</li>
        </ul>
    </li>
    <br/>
    <li><strong>Análise de Treinos Semanais:</strong>
        <ul>
            <li>Oferece uma visão detalhada dos treinos da semana na academia.</li>
        </ul>
    </li>
    <br/>
    <li><strong>API Externa para Macronutrientes:</strong>
        <ul>
            <li>Utiliza uma API externa para retornar informações sobre macronutrientes.</li>
            <li>Integra o serviço de tradução de texto da Azure para lidar com parâmetros em inglês.</li>
        </ul>
    </li>
    <br/>
    <li><strong>Perfil Personalizado:</strong>
        <ul>
            <li>Permite a alteração da imagem de perfil do usuário.</li>
            <li>Armazena a imagem de perfil no Azure Blob Storage.</li>
        </ul>
    </li>
</ol>
<br/>

<p>A FitTrack é projetada para ser uma ferramenta completa e acessível, ajudando os usuários a alcançar suas metas de saúde e bem-estar de forma eficiente e motivadora.</p>

<h2>🔧 Ferramentas Utilizadas</h2>

<h3>Back-end:</h3>
<ul>
    <li><strong>Linguagem:</strong> C# 8.0</li>
    <li><strong>ORM:</strong> Entity Framework</li>
</ul>

<h3>Serviços Externos:</h3>
<ul>
    <li><strong>Tradução:</strong> Azure Translate AI</li>
    <li><strong>Armazenamento de Imagens:</strong> Azure Blob Storage</li>
</ul>

<h3>Banco de Dados:</h3>
<ul>
    <li><strong>SGBD:</strong> SQL Server</li>
</ul>

<h3>Front-end:</h3>
<ul>
    <li><strong>Framework:</strong> Expo, React Native</li>
</ul>

<h3>Bibliotecas de Estilização:</h3>
<ul>
    <li><strong>Componentes de UI:</strong> React Native Paper</li>
    <li><strong>Estilização:</strong> Styled-components</li>
</ul>

<h2>👥 Integrantes do Projeto</h2>
<ul>
    <li><a href="https://www.linkedin.com/in/filipe-góis-841b58206/" target="_blank"><strong>Filipe Góis</strong></a> - Desenvolvedor Full Stack</li>
    
</ul>

<h2>📸 Exemplos Visuais do Aplicativo</h2>
<div>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de Login</figcaption> -->
        <img src="./Assets Readme/loginscreen.jpeg" alt="Tela de Login" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de Perfil</figcaption> -->
        <img src="./Assets Readme/perfilscreen.jpeg" alt="Tela de Perfil" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Diálogo de Notificação</figcaption> -->
        <img src="./Assets Readme/dialogcomponent.jpeg" alt="Diálogo de Notificação" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de Treinos</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/treinosscreen.jpeg" alt="Tela de Treinos" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Visualizar treino</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/vertreinoscreen.jpeg" alt="Visualizar treino" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de Selecionar Grupos Musculares</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/slecionargruposmuscularesscreen.jpeg" alt="Tela de Selecionar Grupos Musculares" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de Selecionar os Exercícios</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/selecionarexerciciosscreen.jpeg" alt="Tela de Selecionar os Exercícios" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Modal com as suas informações do exercício</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/verdetalhesexerciciomodal.jpeg" alt="Modal com as suas informações do exercício" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Modal para ver a execução do exercício</figcaption> -->
        <img src="./Assets Readme/fluxo de treino/verexecucaodoexerciciomodal.jpeg" alt="Modal para ver a execução do exercício" style="width: 300px; height: 600px; object-fit: cover;">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela de alimentação</figcaption> -->
        <img src="./Assets Readme/fluxo de alimentação/alimentacaoscreen.jpeg" style="width: 300px; height: 600px; object-fit: cover;" alt="Tela de alimentação">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Tela para cadastrar/atualizar/excluir refeição</figcaption> -->
        <img src="./Assets Readme/fluxo de alimentação/montesuarefeicaoscreen.jpeg" style="width: 300px; height: 600px; object-fit: cover;" alt="Tela para cadastrar/atualizar/excluir refeição">
    </figure>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <!-- <figcaption style="font-size: 30px;">Modal para alterar o peso do alimento</figcaption> -->
        <img src="./Assets Readme/fluxo de alimentação/alterarpesoalimento.jpeg" style="width: 300px; height: 600px; object-fit: cover;" alt="Modal para alterar o peso do alimento">
    </figure>
</div>



</body>
</html>



</body>
</html>
