<h1>Study-Sequelize</h1>
<h2>projetos de estudo sobre o ORM Sequelize</h2>
<br/>
<h2>Começando...</h2>
<p>Use <code> npm init -y </code> no seu terminal e depois adcione as dependencias para o projeto: <code> npm install express mysql2 sequelize sequelize-cli </code>  </p>
<hr/>
<p>Crie o seu arquivo <i>server.js</i> dentro da pasta src e faça seu server express nele, junto com as rotas dentro de <i>src/routes/router.js</i></p>
<hr/>
<p>Dentro de src, crie uma pasta database, e em seguida os arquivos <i>config.js</i> para adicionar suas configurações do banco de dados ao projeto, e <i>connection.js</i> para iniciar a conexão com o banco de dados</p>
<hr/>
<p>Para usar o sequelize-cli no terminal, precisamos passar as configurações do mysql que  estão na pasta <i>src/database/config.js</i>. Então no diretório raiz do projeto crie um arquivo <i>.sequelizerc<i> e mude ele para JavaScript em seguida, assim conseguimos mandar, com o module path, os diretórios das configurações, e o caminho que queremos que ele armazene nossas migrations</p>
<hr/>