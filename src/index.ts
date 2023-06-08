/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const readline = require("readline")
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	type alunosT = {
		nome: string,
		nota: number
	}

	let alunos:alunosT[] = []
	let quantidade = 0

	rl.question("quantidade de alunos?\n", (qnt: number)=>{
		quantidade = qnt
		
		rl.setPrompt("insira o 'nome' espaço 'nota' ex: Ana 10\n")
		rl.prompt()
		rl.on("line", (nome: string)=>{
			let arr = nome.split(" ")
			alunos.push({nome: arr[0], nota: Number(arr[1])})
			if(alunos.length == quantidade){
				rl.close()
			}
		})
	})
	rl.on("close",()=>{
		const maxNota = alunos.reduce((prev, current)=>{
			return prev.nota > current.nota ? prev : current
		})
		console.log(`Maior nota foi de ${maxNota.nome} e a nota foi ${maxNota.nota}`);
		
	})
});
