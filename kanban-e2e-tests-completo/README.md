# Kanban E2E Tests

Testes automatizados com Cypress para o site [Kanban App](https://kanban-dusky-five.vercel.app/)

## 🚀 Como rodar os testes

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/kanban-e2e-tests.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute os testes:
```bash
npx cypress open
```

## 🧪 Testes implementados

- Acesso à página inicial
- Criação de tarefas
- Movimentação entre colunas

## 📁 Estrutura de pastas

Organização de arquivos de testes e comandos personalizados para facilitar a manutenção.

---

## ☁️ Subir no GitHub

### 1. Extraia o arquivo ZIP em alguma pasta (por exemplo em `Downloads`)

### 2. Abra o terminal na pasta do projeto

Se estiver no Windows:

- Vá até a pasta extraída: `C:\Users\seu-usuario\Downloads\kanban-e2e-tests`
- Clique com o botão direito em um espaço vazio dentro da pasta
- Selecione **"Git Bash Here"** ou **"Abrir no Terminal"**

Ou, abra o terminal manualmente e digite:

```bash
cd "C:\Users\seu-usuario\Downloads\kanban-e2e-tests"
```

### 3. Rode os comandos no terminal

```bash
git init
git add .
git commit -m "Initial commit with Cypress tests"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/kanban-e2e-tests.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### 4. Se o terminal pedir usuário e senha:

- Informe seu **nome de usuário**
- Em vez da senha, use um **Token de Acesso Pessoal (PAT)** do GitHub

Você pode gerar um token aqui: https://github.com/settings/tokens
