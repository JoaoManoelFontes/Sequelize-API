<h1>Study-Sequelize</h1>
<h2>projetos de estudo sobre o ORM Sequelize</h2>
<br/>
<h2>Linha do tempo...</h2>
<p>Use  <code> npm init -y </code>  no seu terminal e depois adcione as dependencias para o projeto:<br/>
<code> npm install express mysql2 sequelize sequelize-cli </code> <br/>
<i>Obs: O mysql2 precisa ser instalado somente para quem vai utilizar o banco mysql. Se você estiver com o postgresql, outra dependencia tem que ser instalada</i></p>
<hr/>
<p>Crie o seu arquivo <i>server.js</i> dentro da pasta src e faça seu server express nele, junto com as rotas dentro de <i>src/routes/router.js</i></p>
<hr/>
<p>Dentro de src, crie uma pasta database, e em seguida os arquivos <i>config.js</i> para adicionar suas configurações do banco de dados ao projeto, e <i>connection.js</i> para iniciar a conexão com o banco de dados</p>
<hr/>
<p>Para usar o sequelize-cli no terminal, precisamos passar as configurações do mysql que  estão na pasta <i>src/database/config.js</i>. Então no diretório raiz do projeto crie um arquivo <i>.sequelizerc</i> e mude ele para JavaScript em seguida, assim conseguimos mandar, com o module path, os diretórios das configurações, e o caminho que queremos que ele armazene nossas migrations</p>
<hr/>
<p>Rode no seu terminal, se ainda não estiver criado o banco de dados no mysql, somente no arquivo de configurações da database: <code>npx sequelize db:create</code>. Assim o próprio sequelize vai criar a database de acordo com as configuraçoes do <i>config.js</i> </p>
<hr/>
<p>Digite o comando <code>npx sequelize migration:create --name nome_da_sua_migration</code> no terminal para o sequelize criar a migration no diretório que você definiu no <i>.sequelizerc</i>. O arquivo que ele criou é usado para criar e fazer alterações no seu banco de dados (como criar uma table, adicionar uma coluna nova em uma table já existente, etc).</p>
<p>Após criar e customizar sua migration, use o comando <code>npx sequelize db:migrate</code> para o Sequelize fazer a tarefa que está no arquivo. Se quiser voltar atrás após ter realizado o comando no terminal, use  <code>npx sequelize db:migrate:undo</code> para desfazer as alterações.</p>