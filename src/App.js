import React from 'react';
import './App.css';
import fbi  from './assets/fbi.png';

function App() {
  return (
    <div className="App">
      <img src={fbi} alt=""/>
      <p>Precisamos de sua ajuda</p>

      <p>O número de contatos imediatos de primeiro, segundo e terceiro grau aumentam exponencialmente. Relatos de avistamento de OVNIs em janeiro e fevereiro de 2020 foram superiores a todo o ano de 2019.</p>

      <p>Zelamos pela segurança da raça humana.</p>

      <p>A seguinte mensagem em ASCII foi interceptada pelo rádio telescópio de Arecibo em 15/03/2020 via ondas de rádio:</p>

      <p><i>"POR MUITO TEMPO T¼EMOS LHES OBSERVADO DAS ES¢TRELAS. MUITOS ERROS FORAM COMETIDæOS COM SUA MORADA. MESMO AP¤S VARIOS ALERTAS, COðNTINUAM A DESTRUIR E EXPLORAR DE FORMA AGREßSSIVA E INSUSTENT╠AVEL. DEVEMOS INTERV▓IR DE FORMA ABRUPTA. SUA EXISTENCIA COLOCA O EQUILIBRI▓O EM RISCO. FALTAM-NOS 42 P╝ARSECS, CHEGAREMOS EM ██/0▓/2▒20"</i></p>

      <p>Tememos que essa mensagem tenha um carater de ameaça à vida humana de visitantes extraterrestres.</p>

      <p>Devemos recrutar todos aqueles dispostos a responder às possíveis ameaças.</p>

      <p>Precisamos de sua ajuda, desenvolvedor.</p>

      <p>Crie um formulário utilizando todas as ferramentas que aprendeu para nos ajudar com o recrutamento.</p>  

      <p>Seu formulário deverá fazer um post em nosso servidor, que responderá se o candidado está apto ao combate.</p>

      <p>Deverão ser informados: <strong>Nome, Idade, Endereço, CPF, Habilidade com armas ou não, Habilidades com veículos ou não, Contato anterior com alienígenas ou não e tipo sanguíneo</strong>.</p>

      <p>Confira abaixo como uma requisição post pode ser feita utilizando Ajax via jQuery</p>

      <div className="code">
        <p>{"      $('#button').click(function(){"}</p>
        <p>{"      $.post('https://bilu-back.herokuapp.com/cadastros',"}</p>
        <p>{"      {"}</p>
        <p>{"        nome: 'Felipe', //string"}</p>
        <p>{"        idade: 23, //int"}</p>
        <p>{"        endereco: 'Elizabeth Ap Danza', //string"}</p>
        <p>{"        cpf: '127.679.286-70', //string"}</p>
        <p>{"        armas: true ou false, //bool"}</p>
        <p>{"        dirige: true ou false, //bool"}</p>
        <p>{"        contato_com_ets: true ou false, //bool"}</p>
        <p>{"        tipo_sanguineo: 'A+', //string"}</p>
        <p>{"      },"}</p>
        <p>{"      function(data, status){"}</p>
        <p>{"        alert('Data: ' + data + '\nStatus: ' + status);"}</p>
        <p>{"      });"}</p>
        <p>{"    });"}</p>
      </div>

      <br/>
      <p>Uma vez feita a requisiçao para o servidor, você deverá informar ao usuário se ele foi aceito como recruta ou não.</p>

      <div className="code">
        <p>APROVADO:</p>
        <p>{"{'mensagem': 'Aprovado: Felipe, obrigado por contribuir pela sobrevivência da humanidade. Em até 10 dias úteis você receberá em seu endereço o seu kit de combate a seres extraterrestres.'}"}</p>
        <br/>
        <p>REPROVADO:</p>
        <p>{"{'mensagem': 'Reprovado: Felipe, desculpe, você não possui o perfil necessário para o combate com os seres extraterrestres'}"}</p>
      </div>

    </div>
  );
}

export default App;
