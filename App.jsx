
  function Cabecalho() {
  return <h1>Meu Site React</h1>;
}

function ConteudoPrincipal() {
  return (
    <main>
      <p>Hello Word!.</p>
      <p>Estamos aprendendo React com componentes funcionais.</p>
    </main>
  );
}

function Rodape() {
  return <footer>© 2025 Meu Site React.</footer>;
}

function App(){
  return (
    <>
      <Cabecalho />
      <ConteudoPrincipal />
      <Rodape />
    </>
  )
}


