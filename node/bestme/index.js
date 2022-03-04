const questions = [
	'O que aprendi hoje?',
	'O que me deixou aborrecido ?',
	'E o que posso fazer pra corrigir isso?',
	'O que me deixou feliz hoje?',
	'Quantas pessoas ajudei hoje?',
];

const ask = (index = 0) => {
	process.stdout.write('\n' + questions[index] + ' > ');
};

ask();

const answers = [];

process.stdin.on('data', (data) => {
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on('exit', () => {
	console.log(`
		Legal, Victor
		
		Hoje você aprendeu ${answers[0]}
		
		${answers[1]} te deixou aborrecido e por isso você precisa ${answers[2]} para melhorar isso.
		
		${answers[3]} te fez feliz hoje, por isso pratique mais! Seja mais feliz
		
		Você ajudou ${answers[4]} pessoas hoje.
		
		Não se esqueça de voltar amanha.
	`);
});
