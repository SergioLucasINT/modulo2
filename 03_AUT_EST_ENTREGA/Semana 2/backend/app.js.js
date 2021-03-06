const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> \
  <html lang="pt_br"> \
  <head> \
      <meta charset="UTF-8"> \
      <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
      <link rel="stylesheet" href="style.css"> \
      <title>Currículo Sergio</title> \
  </head> \
  <body> \
      <div id = "Titulo"> \
          <h1>Curriculum</h1> \
      </div> \
      <div id = "Info"> \
          <img \
              src="https://avatars.githubusercontent.com/u/89105536?v=4" \
              alt="Foto do Sergio" \
          > \
          <p>Sergio Brito Amorim Lucas</p> \
          <p>Rua MMDC, nº 80, Apto 1014A</p> \
          <p>(11) 9 5279 - 8273</p> \
      </div> \
      <div class = "Subtitulo"> \
          <h2>Qualificações Pessoais</h2> \
      </div> \
      <div class = "Conteudo"> \
          <p>Sou alguém bem fácil de conversar, gosto de ouvir e discutir sobre diversos assuntos.</p> \
          <p>Sou bem criativo, e isso pode ser algo ruim as vezes.</p> \
      </div> \
      <div class = "Subtitulo"> \
          <h2>Histórico Acadêmico</h2> \
      </div> \
      <div class = "Conteudo"> \
          <ol> \
              <li>Fundamental = E.M.E.F.M Darcy Ribeiro</li> \
              <li>Médio integrado ao Técnico = I.F.S.P Câmpus São Paulo, Técnico em Mecânica.</li> \
              <li>Superior (Cursando) = Inteli - Instituto de Tecnologia e Liderança, Ciência da Computação</li> \
              <li>Aprendizagem Industrial = SENAI "Roberto Simonsen", Eletricista de Manutenção Eletroeletrônica</li> \
              <li>Profissionalizante = SENAC Lapa Tito, Desenvolvedor Web Java</li> \
          </ol> \
      </div> \
      <div class="Subtitulo"> \
          <h2>Soft Skills</h2> \
      </div> \
      <div class="Conteudo"> \
          <ul> \
              <li>Comunicação</li> \
              <li>Trabalho em Equipe</li> \
              <li>Comprometimento</li> \
              <li>Curiosidade</li> \
          </ul> \
      </div> \
      <div class = "Subtitulo"> \
          <h2>Hard Skills</h2> \
      </div> \
      <div class = "Conteudo"> \
          <ul> \
              <li>HTML, CSS, Javascript e SQL</li> \
              <li>React e Node</li> \
              <li>Python, GDScript, Lua, e C#</li> \
              <li>C++, Linguagem em Ladder, FANUC (Máquinas CNC)</li> \
          </ul> \
      </div> \
      <div class="Subtitulo"> \
          <h2>Experiência Profissional</h2> \
      </div> \
      <div class="Conteudo"> \
          <div id="detalhes"> \
              <h1>Companhia do Metropolitano de São Paulo - Metrô </h1> \
              <p>Agosto 2018 até Agosto 2020</p> \
          </div> \
          <div id="relato"> \
              <p>Jovem Aprendiz que foi atrelado ao curso de aprendizagem industrial (CAI) no SENAI "Roberto Simonsen".</p> \
          </div> \
      </div> \
  </body> \
  </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});