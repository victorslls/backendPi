

class tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criartabelaAtendimentos();
    }


    criartabelaAtendimentos() {
        const sql = `CREATE TABLE if NOT exists atendimentos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	DATA DATE,
	servico VARCHAR(100),
	cliente VARCHAR(100),
	STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
);`;
    this.conexao.query(sql, (error)=> {
        if (error) {
            console.log("Eita, erro na criação da tabela atendimentos");
            console.log(error.message);
            return;

        }
        console.log("graças a Deus criou a tabela com sucesso....");
        
    })


    }
        
}

module.exports = new tabelas();