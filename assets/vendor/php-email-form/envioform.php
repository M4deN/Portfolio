<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Receber os dados do formulário
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['subject'];

  // Configurar o destinatário do email
  $destinatario = 'alexdesaran@outlook.com';

  // Configurar o assunto do email
  $assunto = 'Mensagem do formulário de contato';

  // Montar o corpo do email
  $corpo = "Nome: $nome\n";
  $corpo .= "Email: $email\n";
  $corpo .= "Mensagem: $subject\n";

  // Enviar o email
  $resultado = mail($destinatario, $assunto, $corpo);

  // Verificar se o email foi enviado com sucesso
  if ($resultado) {
    echo 'OK'; // Enviar resposta de sucesso para o JavaScript
  } else {
    echo 'Erro no envio do email'; // Enviar resposta de erro para o JavaScript
  }
} else {
  echo 'Acesso inválido'; // Responder a requisições não-POST com erro
}
?>