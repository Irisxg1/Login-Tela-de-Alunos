
// Função para mostrar a seção do pacote Office
function mostrarPacoteOffice() {
    document.getElementById('office-apps').style.display = 'block';
}
// Credenciais de exemplo para alunos (essas podem ser substituídas por credenciais reais no banco de dados)
const studentsCredentials = [
    { studentName: 'aluno1', studentPassword: 'senha123' },
    { studentName: 'aluno2', studentPassword: 'senha456' }
];

function loginAluno() {
    // Captura os valores dos inputs
    const studentName = document.getElementById('studentName').value;
    const studentPassword = document.getElementById('studentPassword').value;

    // Verifica se há uma combinação válida de credenciais
    const validStudent = studentsCredentials.find(student =>
        student.studentName === studentName && 
        student.studentPassword === studentPassword
    );

    if (validStudent) {
        // Se as credenciais forem corretas, redireciona para a página de alunos
        window.location.href = 'TelaAlunos.html'; // Substitua com a URL real da página de alunos
    } else {
        // Mostra uma mensagem de erro se as credenciais estiverem incorretas
        document.getElementById('errorMessage').style.display = 'block';
    }
}
