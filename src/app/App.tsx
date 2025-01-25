function App() {
  const perem = import.meta.env.VITE_THIS_IS_PEREM;
  console.log(perem);

  return (
    <>
      <p>APP</p>
      <p>{perem}</p>
    </>
  );
}
export default App;
